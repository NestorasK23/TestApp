import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ language, translations, onGetStarted }) => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img 
                src="/logo.svg" 
                alt="HelpHere Logo" 
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {language === 'en' 
                ? 'Emergency Local Help for Tourists in Corfu'
                : 'Τοπική Βοήθεια Έκτακτης Ανάγκης για Τουρίστες στην Κέρκυρα'
              }
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === 'en'
                ? 'Fast access to pharmacies, doctors, police, and more – anywhere on the island.'
                : 'Γρήγορη πρόσβαση σε φαρμακεία, γιατρούς, αστυνομία και άλλα – οπουδήποτε στο νησί.'
              }
            </p>
            <Button 
              onClick={onGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {language === 'en' ? 'Find Help Near You' : 'Βρείτε Βοήθεια Κοντά Σας'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">🏝️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {language === 'en' ? 'Available Island-Wide' : 'Διαθέσιμο σε Όλο το Νησί'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'From Corfu Town to Paleokastritsa'
                  : 'Από την Πόλη της Κέρκυρας μέχρι την Παλαιοκαστρίτσα'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;