

import React from 'react';
import { AspectRatio } from '../types';
import { ASPECT_RATIOS, IMAGE_COUNTS } from '../constants';
import { SparklesIcon } from './IconComponents';

interface GenerationOptionsProps {
    selectedAspectRatio: AspectRatio;
    onAspectRatioChange: (aspectRatio: AspectRatio) => void;
    selectedImageCount: number;
    onImageCountChange: (count: number) => void;
    onGenerate: () => void;
    isLoading: boolean;
    canGenerate: boolean;
    generationWarning: string | null;
}

const GenerationOptions: React.FC<GenerationOptionsProps> = ({
  selectedAspectRatio,
  onAspectRatioChange,
  selectedImageCount,
  onImageCountChange,
  onGenerate,
  isLoading,
  canGenerate,
  generationWarning,
}) => {
  return (
    <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <label className="block text-sm font-semibold text-red-600 mb-2 text-center">Tỉ lệ khung hình</label>
            <div className="flex justify-center gap-2 flex-wrap">
              {ASPECT_RATIOS.map(ratio => (
                <button
                  key={ratio.id}
                  onClick={() => onAspectRatioChange(ratio)}
                  className={`px-3 py-1.5 border rounded-lg text-sm font-semibold ${
                    selectedAspectRatio.id === ratio.id 
                      ? 'bg-red-600 text-white border-red-600' 
                      : 'bg-white text-red-600 border-red-300 hover:bg-red-50'
                  }`}
                >
                  {ratio.name}
                </button>
              ))}
            </div>
        </div>
        <div>
            <label className="block text-sm font-semibold text-red-600 mb-2 text-center">Số lượng ảnh</label>
            <div className="flex justify-center gap-2">
              {IMAGE_COUNTS.map(count => (
                <button
                  key={count}
                  onClick={() => onImageCountChange(count)}
                  className={`w-10 h-10 border rounded-lg text-sm font-semibold flex items-center justify-center ${
                    selectedImageCount === count
                      ? 'bg-red-600 text-white border-red-600' 
                      : 'bg-white text-red-600 border-red-300 hover:bg-red-50'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
        </div>
      </div>
      <button
        onClick={onGenerate}
        disabled={isLoading || !canGenerate}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-xl font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
            <span>Đang xử lý...</span>
          </>
        ) : (
          <>
            <SparklesIcon className="w-6 h-6" />
            Tạo Ảnh Ngay!
          </>
        )}
      </button>
      {generationWarning && (
         <p className="text-xs text-center text-red-500 mt-2 font-semibold">{generationWarning}</p>
      )}
    </div>
  );
};

export default GenerationOptions;
