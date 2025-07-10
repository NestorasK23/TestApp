import React from 'react';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = ({ currentLanguage, onLanguageChange }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === 'en' ? 'gr' : 'en')}
      className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white/100 transition-all duration-200 border-2 border-blue-200 hover:border-blue-300 font-medium text-sm px-3 py-2"
    >
      <Globe className="h-4 w-4 mr-2" />
      {currentLanguage === 'en' ? '🇬🇷 ΕΛ' : '🇬🇧 EN'}
    </Button>
  );
};

export default LanguageToggle;