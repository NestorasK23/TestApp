import React from 'react';
import { Button } from './ui/button';

const LanguageToggle = ({ currentLanguage, onLanguageChange }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === 'en' ? 'gr' : 'en')}
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm shadow-md hover:bg-white/100 transition-all duration-200 border-2 border-blue-100 hover:border-blue-200 font-medium"
    >
      {currentLanguage === 'en' ? '🇬🇷 ΕΛ' : '🇬🇧 EN'}
    </Button>
  );
};

export default LanguageToggle;