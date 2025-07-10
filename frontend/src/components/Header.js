import React from 'react';

const Header = ({ language }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 py-3 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="HelpHere Logo" 
              className="h-8 w-auto"
            />
            <div>
              <span className="text-xl font-bold text-gray-900">HelpHere</span>
              <p className="text-sm text-gray-600 hidden sm:block">
                {language === 'en' 
                  ? 'Fast help for tourists in Corfu'
                  : 'Γρήγορη βοήθεια για τουρίστες στην Κέρκυρα'
                }
              </p>
            </div>
          </div>
          
          {/* Mobile tagline */}
          <div className="sm:hidden">
            <p className="text-xs text-gray-600 text-right">
              {language === 'en' 
                ? 'Fast help for tourists in Corfu'
                : 'Γρήγορη βοήθεια για τουρίστες στην Κέρκυρα'
              }
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;