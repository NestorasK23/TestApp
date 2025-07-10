import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const Header = ({ language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { 
      id: 'how', 
      label: language === 'en' ? 'How It Works' : 'Πώς Λειτουργεί' 
    },
    { 
      id: 'why', 
      label: language === 'en' ? 'Why HelpHere' : 'Γιατί HelpHere' 
    },
    { 
      id: 'reviews', 
      label: language === 'en' ? 'Reviews' : 'Κριτικές' 
    },
    { 
      id: 'contact', 
      label: language === 'en' ? 'Contact' : 'Επικοινωνία' 
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="HelpHere Logo" 
              className="h-12 lg:h-14 w-auto"
            />
            <div>
              <span className="text-xl font-bold text-gray-900">HelpHere</span>
            </div>
          </div>

          {/* Desktop Navigation and Language Switcher */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onLanguageChange(language === 'en' ? 'gr' : 'en')}
              className="bg-white border-2 border-blue-200 hover:border-blue-300 font-medium text-sm px-3 py-2"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === 'en' ? '🇬🇷 ΕΛ' : '🇬🇧 EN'}
            </Button>
          </div>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onLanguageChange(language === 'en' ? 'gr' : 'en')}
              className="bg-white border-2 border-blue-200 hover:border-blue-300 font-medium text-sm px-2 py-1"
            >
              {language === 'en' ? '🇬🇷' : '🇬🇧'}
            </Button>
            
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              {/* Mobile Tagline */}
              <p className="text-sm text-gray-600 mb-2">
                {language === 'en' 
                  ? 'Emergency Help for Tourists in Corfu'
                  : 'Βοήθεια Έκτακτης Ανάγκης για Τουρίστες στην Κέρκυρα'
                }
              </p>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;