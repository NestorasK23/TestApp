import React, { useState, useEffect } from 'react';
import './App.css';
import { services, serviceCategories, translations } from './data/mockData';
import CategoryGrid from './components/CategoryGrid';
import ServiceList from './components/ServiceList';
import LanguageToggle from './components/LanguageToggle';
import { MapPin } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [language, setLanguage] = useState(() => {
    // Get browser language preference
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('el') ? 'gr' : 'en';
  });

  const currentTranslations = translations[language];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Auto-detect browser language on component mount
  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('el')) {
      setLanguage('gr');
    } else {
      setLanguage('en');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <LanguageToggle 
        currentLanguage={language} 
        onLanguageChange={handleLanguageChange} 
      />
      
      <div className="container mx-auto px-4 py-4 max-w-md">
        {/* Compact Header with Logo */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-2">
            <img 
              src="/logo.svg" 
              alt="HelpHere Logo" 
              className="h-8 w-auto max-w-full object-contain"
            />
          </div>
          <p className="text-gray-600 text-sm">
            {currentTranslations.appSubtitle}
          </p>
          <div className="flex items-center justify-center space-x-4 mt-2 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>Corfu, Greece</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          {selectedCategory ? (
            <ServiceList
              category={selectedCategory}
              services={services[selectedCategory] || []}
              language={language}
              translations={currentTranslations}
              onBack={handleBackToCategories}
              categoryName={serviceCategories[selectedCategory]}
            />
          ) : (
            <CategoryGrid
              language={language}
              onCategorySelect={handleCategorySelect}
              translations={currentTranslations}
            />
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-4 text-xs text-gray-500">
          <p>
            {language === 'en' 
              ? 'Made for tourists visiting beautiful Corfu 🏝️' 
              : 'Φτιαγμένο για τουρίστες που επισκέπτονται την όμορφη Κέρκυρα 🏝️'
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;