
import React from 'react';

export interface ImageData {
  src: string;
  alt: string;
}

export interface Concept {
  id: string;
  name: string;
  promptFragment: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Style {
  id: string;
  name: string;
  promptFragment: string;
}

export interface LayoutOption {
  id: string;
  name: string;
  promptFragment: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface LayoutGroup {
    title: string;
    layouts: LayoutOption[];
}

export interface AspectRatio {
    id: string;
    name: string;
    value: '1:1' | '3:4' | '4:3' | '9:16' | '16:9';
}

export interface HistoryItem {
  id: string;
  prompt: string;
  images: string[];
  timestamp: Date;
}

export interface PromptParams {
  concept: Concept;
  style: Style;
  layout: LayoutOption;
  customPrompt: string;
  outfits: string[];
  items: string[];
  backgrounds: string[];
  locations: string[];
}
