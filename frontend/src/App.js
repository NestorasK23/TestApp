import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { services, serviceCategories, translations } from './data/mockData';
import CategoryGrid from './components/CategoryGrid';
import ServiceList from './components/ServiceList';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyHelpHereSection from './components/WhyHelpHereSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import { Button } from './components/ui/button';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [language, setLanguage] = useState(() => {
    // Get browser language preference
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('el') ? 'gr' : 'en';
  });

  const categoryGridRef = useRef(null);
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

  const handleGetStarted = () => {
    if (categoryGridRef.current) {
      categoryGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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

  console.log("force deploy");


  return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
      {/* Main Header */}
      <Header 
        language={language} 
        onLanguageChange={handleLanguageChange}
      />
      
      {/* Category Bar */}
      <div className="bg-white shadow-md border-b-2 border-blue-100" ref={categoryGridRef}>
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          {!selectedCategory && (
            <div className="text-center mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                {currentTranslations.selectCategory}
              </h2>
            </div>
          )}
          
          {!selectedCategory && (
            <CategoryGrid
              language={language}
              onCategorySelect={handleCategorySelect}
              translations={currentTranslations}
            />
          )}
        </div>
      </div>

      {/* Service List Section - Shows when category is selected */}
      {selectedCategory && (
        <div className="bg-gray-50 min-h-screen">
          <div className="container mx-auto px-4 py-8 max-w-5xl">
            <ServiceList
              category={selectedCategory}
              services={services[selectedCategory] || []}
              language={language}
              translations={currentTranslations}
              onBack={handleBackToCategories}
              categoryName={serviceCategories[selectedCategory]}
            />
          </div>
        </div>
      )}

      {/* Homepage Content - Shows when no category is selected */}
      {!selectedCategory && (
        <>
          {/* Hero Section */}
          <HeroSection 
            language={language} 
            translations={currentTranslations}
            onGetStarted={handleGetStarted}
          />

          {/* How It Works Section */}
          <HowItWorksSection language={language} />

          {/* Why HelpHere Section */}
          <WhyHelpHereSection language={language} />

          {/* Testimonials Section */}
          <TestimonialsSection language={language} />

          {/* Footer */}
          <Footer language={language} />
        </>
      )}
    </div>
  );
}

export default App;