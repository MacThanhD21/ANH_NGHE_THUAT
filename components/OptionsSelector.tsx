
import React, { useState, useMemo } from 'react';
import { ChevronUpIcon } from './IconComponents';

interface OptionsSelectorProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onSelectionChange: (selected: string[]) => void;
  placeholder?: string;
}

const OptionsSelector: React.FC<OptionsSelectorProps> = ({ title, options, selectedOptions, onSelectionChange, placeholder = "Thêm chi tiết..." }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = useMemo(() =>
    options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    ), [options, searchTerm]);

  const handleToggle = (option: string) => {
    const newSelection = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];
    onSelectionChange(newSelection);
  };

  const handleRemove = (option: string) => {
    onSelectionChange(selectedOptions.filter(item => item !== option));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-red-600 mb-1">{title}</label>
      <div className="relative">
        <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-lg bg-white min-h-[42px]">
          {selectedOptions.map(option => (
            <div key={option} className="flex items-center bg-red-100 text-red-700 text-sm font-medium px-2.5 py-1 rounded-full">
              {option}
              <button onClick={() => handleRemove(option)} className="ml-2 text-red-500 hover:text-red-700">
                &times;
              </button>
            </div>
          ))}
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder={selectedOptions.length === 0 ? placeholder : ''}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setTimeout(() => setIsOpen(false), 200)}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none border-none p-1"
            />
             <button onClick={() => setIsOpen(!isOpen)} className="absolute right-1 top-1/2 -translate-y-1/2 text-red-400">
                <ChevronUpIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {filteredOptions.map(option => (
              <div
                key={option}
                onClick={() => handleToggle(option)}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  readOnly
                  className="mr-3 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <span className="text-red-700">{option}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionsSelector;
