
import React, { useState, useCallback, useRef } from 'react';
import { UploadIcon } from './IconComponents';

interface ImageUploaderProps {
  onImageUpload: (file: { base64: string; mimeType: string; preview: string }) => void;
  sourceImagePreview: string | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, sourceImagePreview }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        const base64 = result.split(',')[1];
        if (sourceImagePreview) {
          URL.revokeObjectURL(sourceImagePreview);
        }
        const preview = URL.createObjectURL(file);
        onImageUpload({ base64, mimeType: file.type, preview });
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload, sourceImagePreview]);

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, [handleFile]);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleAreaClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-6">
      {sourceImagePreview ? (
        <div className="text-center">
          <img src={sourceImagePreview} alt="Source preview" className="max-w-full max-h-80 mx-auto rounded-lg shadow-md" />
          <button
            onClick={handleAreaClick}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Chọn ảnh khác
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      ) : (
        <div
          onClick={handleAreaClick}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
            isDragging ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-red-400'
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            accept="image/*"
            className="hidden"
          />
          <div className="flex flex-col items-center justify-center text-red-500">
            <UploadIcon className="w-12 h-12 mb-2" />
            <p className="font-semibold">Bấm để tải ảnh lên</p>
            <p className="text-sm">hoặc kéo và thả vào đây</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
