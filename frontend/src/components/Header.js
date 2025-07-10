import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = ({ language }) => {
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
              className="h-8 w-auto"
            />
            <div>
              <span className="text-xl font-bold text-gray-900">HelpHere</span>
              <p className="text-sm text-gray-600 hidden lg:block">
                {language === 'en' 
                  ? 'Emergency Help for Tourists in Corfu'
                  : 'Βοήθεια Έκτακτης Ανάγκης για Τουρίστες στην Κέρκυρα'
                }
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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