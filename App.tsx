
import React, { useState, useCallback, useMemo } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";

import { Concept, Style, LayoutOption, AspectRatio, HistoryItem, PromptParams } from './types';
import { CONCEPTS, STYLES, LAYOUT_OPTIONS, ASPECT_RATIOS, HANDHELD_ITEMS, BACKGROUNDS, LOCATIONS, PROMPT_SUGGESTIONS, IMAGE_COUNTS, OUTFITS } from './constants';
import { generateDetailedPrompt } from './services/promptService';

import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import ConceptSelector from './components/ConceptSelector';
import StyleSelector from './components/StyleSelector';
import LayoutSelector from './components/LayoutSelector';
import OptionsSelector from './components/OptionsSelector';
import GenerationOptions from './components/GenerationOptions';
import ImageResult from './components/ImageResult';
import { Loader } from './components/Loader';
import HistoryViewer from './components/HistoryViewer';
import PersonalInfo from './components/PersonalInfo';
import CongratulationsBanner from './components/CongratulationsBanner';

// Helper to get all layouts in a flat array
const allLayouts = LAYOUT_OPTIONS.flatMap(group => group.layouts);

function App() {
  // --- STATE MANAGEMENT ---
  const [sourceImage, setSourceImage] = useState<{ base64: string; mimeType: string; preview: string } | null>(null);
  const [customPrompt, setCustomPrompt] = useState<string>('');
  
  const [selectedConcept, setSelectedConcept] = useState<Concept>(CONCEPTS[0]);
  const [selectedStyle, setSelectedStyle] = useState<Style>(STYLES[0]);
  const [selectedLayout, setSelectedLayout] = useState<LayoutOption>(allLayouts[0]);
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<AspectRatio>(ASPECT_RATIOS[0]);
  const [selectedImageCount, setSelectedImageCount] = useState<number>(IMAGE_COUNTS[0]);
  
  const [selectedOutfits, setSelectedOutfits] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedBackgrounds, setSelectedBackgrounds] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] =useState<HistoryItem[]>([]);
  const [showCongrats, setShowCongrats] = useState(false);

  // --- DERIVED STATE & MEMOS ---
  const promptParams: PromptParams = useMemo(() => ({
    concept: selectedConcept,
    style: selectedStyle,
    layout: selectedLayout,
    customPrompt: customPrompt || PROMPT_SUGGESTIONS[selectedConcept.id as keyof typeof PROMPT_SUGGESTIONS]?.[0] || 'một cô gái xinh đẹp',
    outfits: selectedOutfits,
    items: selectedItems,
    backgrounds: selectedBackgrounds,
    locations: selectedLocations,
  }), [selectedConcept, selectedStyle, selectedLayout, customPrompt, selectedOutfits, selectedItems, selectedBackgrounds, selectedLocations]);

  const detailedPrompt = useMemo(() => {
      let finalPrompt = generateDetailedPrompt(promptParams);
      // Append aspect ratio to prompt as a hint for the model
      finalPrompt += ` **Tỉ lệ khung hình (Aspect Ratio):** ${selectedAspectRatio.value}.`;
      return finalPrompt;
  }, [promptParams, selectedAspectRatio]);

  const isSpecialComboActive = selectedConcept.id === 'tuyet' && selectedStyle.id === 'nghethuat';
  const isOutfitRequiredAndMissing = isSpecialComboActive && selectedOutfits.length === 0;

  const canGenerate = !!sourceImage && !isOutfitRequiredAndMissing;
  
  const generationWarning = useMemo(() => {
    if (!sourceImage) {
        return "Vui lòng tải ảnh gốc lên để bắt đầu.";
    }
    if (isOutfitRequiredAndMissing) {
        return "Với concept 'Tuyết Rơi' & style 'Nghệ thuật', bạn phải chọn một trang phục.";
    }
    return null;
  }, [sourceImage, isOutfitRequiredAndMissing]);


  // --- HANDLERS ---
  const handleImageUpload = useCallback((file: { base64: string; mimeType: string; preview: string }) => {
    setSourceImage(file);
    setGeneratedImages([]);
    setShowCongrats(false);
  }, []);

  const handleGenerateClick = async () => {
    if (!canGenerate) {
      setError('Vui lòng đáp ứng các yêu cầu để tạo ảnh.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setGeneratedImages([]);
    setShowCongrats(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const imagePart = {
        inlineData: {
          data: sourceImage.base64,
          mimeType: sourceImage.mimeType,
        },
      };

      // Create an array of generation promises
      const generationPromises = Array.from({ length: selectedImageCount }, (_, i) => {
        const variedPrompt = detailedPrompt + ` **Biến thể duy nhất #${i + 1}**.`;
        const textPart = { text: variedPrompt };
        
        return ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [imagePart, textPart] },
          config: {
              responseModalities: [Modality.IMAGE],
          },
        });
      });

      // Execute all promises in parallel
      const responses = await Promise.all(generationPromises);

      // Process results
      const allImages: string[] = [];
      responses.forEach(response => {
        for (const part of response.candidates?.[0]?.content?.parts ?? []) {
          if (part.inlineData) {
            allImages.push(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          }
        }
      });


      if (allImages.length > 0) {
        setGeneratedImages(allImages);
        setShowCongrats(true);
        const newHistoryItem: HistoryItem = {
          id: `hist-${Date.now()}-${Math.random()}`,
          prompt: detailedPrompt, // Store the base prompt
          images: allImages,
          timestamp: new Date(),
        };
        setHistory(prevHistory => [newHistoryItem, ...prevHistory]);
      } else {
        // This condition might be triggered if all parallel requests fail or are blocked.
        setError('Không nhận được hình ảnh từ AI. Phản hồi có thể đã bị chặn hoặc có lỗi xảy ra. Vui lòng thử một ảnh hoặc một mô tả khác.');
      }

    } catch (e: any) {
      console.error(e);
      // Check for safety-related blocking
      if (e.message?.includes('blocked') || e.message?.includes('SAFETY')) {
         setError('Yêu cầu của bạn đã bị chặn vì lý do an toàn. Vui lòng thử một ảnh hoặc một mô tả khác.');
      } else {
        setError(`Đã có lỗi xảy ra: ${e.message}. Vui lòng kiểm tra console.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto p-4 max-w-7xl">
        <Header />
        <PersonalInfo />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Controls */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <ImageUploader onImageUpload={handleImageUpload} sourceImagePreview={sourceImage?.preview ?? null} />
            <ConceptSelector selectedConcept={selectedConcept} onSelectConcept={setSelectedConcept} />
            <StyleSelector selectedStyle={selectedStyle} onSelectStyle={setSelectedStyle} />
            <LayoutSelector selectedLayout={selectedLayout} onSelectLayout={setSelectedLayout} />
            
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-red-600 mb-3">4. Chọn Trang Phục</h2>
                <OptionsSelector
                    title="Gợi ý trang phục cao cấp"
                    options={OUTFITS}
                    selectedOptions={selectedOutfits}
                    onSelectionChange={setSelectedOutfits}
                    placeholder="Tìm kiếm hoặc thêm trang phục riêng..."
                />
            </div>

            <div className="p-4 border rounded-lg bg-gray-50 my-4">
                <h3 className="text-lg font-semibold text-red-600 mb-2">5. Tùy chọn bổ sung</h3>
                <textarea
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="Mô tả chân dung của bạn (vd: cô gái tóc ngắn, mắt buồn...)"
                  className="w-full p-2 border border-gray-300 rounded-md mb-3"
                  rows={2}
                />
                <OptionsSelector title="Cầm/Đội/Đeo (Items)" options={HANDHELD_ITEMS} selectedOptions={selectedItems} onSelectionChange={setSelectedItems} />
                <OptionsSelector title="Bối cảnh (Backgrounds)" options={BACKGROUNDS} selectedOptions={selectedBackgrounds} onSelectionChange={setSelectedBackgrounds} />
                <OptionsSelector title="Địa điểm (Locations)" options={LOCATIONS} selectedOptions={selectedLocations} onSelectionChange={setSelectedLocations} />
            </div>
            
            <GenerationOptions
              selectedAspectRatio={selectedAspectRatio}
              onAspectRatioChange={setSelectedAspectRatio}
              selectedImageCount={selectedImageCount}
              onImageCountChange={setSelectedImageCount}
              onGenerate={handleGenerateClick}
              isLoading={isLoading}
              canGenerate={canGenerate}
              generationWarning={generationWarning}
            />

          </div>

          {/* Right Column: Results */}
          <div className="sticky top-8">
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">{error}</div>}
            
            {isLoading && <Loader />}
            
            {showCongrats && <CongratulationsBanner />}

            {!isLoading && generatedImages.length > 0 && (
              <ImageResult images={generatedImages} />
            )}

            {!isLoading && generatedImages.length === 0 && (
                <div className="text-center p-8 border-2 border-dashed rounded-lg text-red-400">
                    <p className="font-semibold text-lg">Kết quả sẽ hiện ở đây</p>
                    <p>Hãy chọn ảnh và các tùy chọn để bắt đầu sáng tạo!</p>
                </div>
            )}
            <HistoryViewer history={history} />
          </div>
        </div>
        <footer className="text-center py-4 mt-8">
            <p className="text-sm text-red-600">Được tạo bởi NGUYỄN QUỐC THIỆN AI</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
