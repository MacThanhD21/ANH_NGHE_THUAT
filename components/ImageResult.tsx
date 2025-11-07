

import React from 'react';
import { DownloadIcon } from './IconComponents';

interface ImageResultProps {
  images: string[];
}

const ImageResult: React.FC<ImageResultProps> = ({ images }) => {
  if (images.length === 0) {
    return null;
  }

  const handleDownload = (imageSrc: string, index: number) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `NGUYEN-QUOC-THIEN-AI-${new Date().getTime()}-${index}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-8">
        <h2 className="text-2xl font-bold text-red-600 my-4 text-center">Kết Quả</h2>
        <div className="grid grid-cols-1 gap-4">
            {images.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img src={img} alt={`Generated image ${index + 1}`} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <button
                    onClick={() => handleDownload(img, index)}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-red-700 font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-300"
                >
                    <DownloadIcon className="w-5 h-5" />
                    Tải xuống
                </button>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default ImageResult;
