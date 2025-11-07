
import React from 'react';
import { STYLES } from '../constants';
import { Style } from '../types';

interface StyleSelectorProps {
  selectedStyle: Style;
  onSelectStyle: (style: Style) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onSelectStyle }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-red-600 mb-3">2. Chọn Phong Cách (Style)</h2>
      <div className="flex flex-wrap gap-2">
        {STYLES.map((style) => {
          const isSelected = selectedStyle.id === style.id;
          return (
            <button
              key={style.id}
              onClick={() => onSelectStyle(style)}
              className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-colors ${
                isSelected ? 'bg-red-600 border-red-600 text-white' : 'bg-white border-red-300 text-red-600 hover:bg-red-50'
              }`}
            >
              {style.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
