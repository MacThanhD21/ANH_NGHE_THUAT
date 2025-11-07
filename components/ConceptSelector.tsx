
import React from 'react';
import { CONCEPTS } from '../constants';
import { Concept } from '../types';
import { CheckCircleIcon } from './IconComponents';

interface ConceptSelectorProps {
  selectedConcept: Concept;
  onSelectConcept: (concept: Concept) => void;
}

const ConceptSelector: React.FC<ConceptSelectorProps> = ({ selectedConcept, onSelectConcept }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-red-600 mb-3">1. Chọn Hiệu Ứng (Concept)</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {CONCEPTS.map((concept) => {
          const isSelected = selectedConcept.id === concept.id;
          return (
            <button
              key={concept.id}
              onClick={() => onSelectConcept(concept)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-lg border-2 text-center transition-all duration-200 transform hover:scale-105 ${
                isSelected ? 'border-red-500 bg-red-50 shadow-md' : 'border-gray-200 bg-white hover:border-red-400'
              }`}
              style={{ minHeight: '80px' }}
            >
              <concept.icon className="w-8 h-8 mb-1 text-red-500" />
              <span className="text-xs font-medium text-red-600">{concept.name}</span>
              {isSelected && (
                <CheckCircleIcon className="absolute -top-2 -right-2 w-6 h-6 text-red-500 bg-white rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ConceptSelector;
