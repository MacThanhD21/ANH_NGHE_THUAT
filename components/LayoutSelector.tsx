
import React from 'react';
import { LAYOUT_OPTIONS } from '../constants';
import { LayoutOption } from '../types';
import { CheckCircleIcon } from './IconComponents';

interface LayoutSelectorProps {
  selectedLayout: LayoutOption;
  onSelectLayout: (layout: LayoutOption) => void;
}

const LayoutSelector: React.FC<LayoutSelectorProps> = ({ selectedLayout, onSelectLayout }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-red-600 mb-3">3. Chọn Bố Cục (Layout)</h2>
      {LAYOUT_OPTIONS.map((group) => (
        <div key={group.title} className="mb-4 p-4 border rounded-lg bg-gray-50">
          <h3 className="font-bold text-red-600 mb-3 text-center uppercase tracking-wider">{group.title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {group.layouts.map((layout) => {
              const isSelected = selectedLayout.id === layout.id;
              return (
                <button
                  key={layout.id}
                  onClick={() => onSelectLayout(layout)}
                  className={`relative flex flex-col items-center justify-start p-2 rounded-lg border-2 text-center transition-all duration-200 transform hover:scale-105 ${
                    isSelected ? 'border-red-500 bg-red-50 shadow-md' : 'border-gray-200 bg-white hover:border-red-400'
                  }`}
                  title={layout.name}
                >
                  <layout.icon className="w-10 h-10 mb-2 text-red-500" />
                  <span className="text-xs font-medium text-red-600 leading-tight">{layout.name}</span>
                  {isSelected && (
                    <CheckCircleIcon className="absolute -top-2 -right-2 w-6 h-6 text-red-500 bg-white rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LayoutSelector;
