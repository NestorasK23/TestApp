import React from 'react';
import { Button } from './ui/button';
import { Shield, MapPin, Clock } from 'lucide-react';

const HeroSection = ({ language, translations, onGetStarted }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {language === 'en' 
                ? 'Find Emergency Help Fast in Corfu'
                : 'Βρείτε Γρήγορα Βοήθεια Έκτακτης Ανάγκης στην Κέρκυρα'
              }
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === 'en'
                ? 'Instant access to pharmacies, doctors, police, and essential services anywhere on the island.'
                : 'Άμεση πρόσβαση σε φαρμακεία, γιατρούς, αστυνομία και βασικές υπηρεσίες οπουδήποτε στο νησί.'
              }
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center space-x-2 text-gray-700">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">
                  {language === 'en' ? '24/7 Available' : '24/7 Διαθέσιμο'}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">
                  {language === 'en' ? 'Island-Wide' : 'Σε Όλο το Νησί'}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Clock className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium">
                  {language === 'en' ? 'Instant Contact' : 'Άμεση Επικοινωνία'}
                </span>
              </div>
            </div>
            
            <Button 
              onClick={onGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'en' ? 'Find Help Now' : 'Βρείτε Βοήθεια Τώρα'}
            </Button>
          </div>
          
          <div className="text-center">
            <div className="relative">
              {/* Corfu Island Illustration */}
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl p-8 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏝️</div>
                  <h3 className="text-2xl font-bold mb-2">Corfu Island</h3>
                  <p className="text-blue-100 mb-4">
                    {language === 'en' ? 'Complete Coverage' : 'Πλήρης Κάλυψη'}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-2xl mb-1">🏥</div>
                      <span>{language === 'en' ? 'Medical' : 'Ιατρική'}</span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-2xl mb-1">🚨</div>
                      <span>{language === 'en' ? 'Emergency' : 'Έκτακτη Ανάγκη'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 shadow-lg animate-bounce">
                <Shield className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-red-500 text-white rounded-full p-3 shadow-lg animate-pulse">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;