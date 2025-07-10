import React, { useState } from 'react';
import './App.css';
import { services, serviceCategories, translations } from './data/mockData';
import CategoryGrid from './components/CategoryGrid';
import ServiceList from './components/ServiceList';
import LanguageToggle from './components/LanguageToggle';
import { MapPin, Wifi, Phone } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [language, setLanguage] = useState('en');

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <LanguageToggle 
        currentLanguage={language} 
        onLanguageChange={handleLanguageChange} 
      />
      
      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              {currentTranslations.appTitle}
            </h1>
          </div>
          <p className="text-gray-600 text-sm font-medium">
            {currentTranslations.appSubtitle}
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>Made for tourists visiting beautiful Corfu 🏝️</p>
        </div>
      </div>
    </div>
  );
}

export default App;