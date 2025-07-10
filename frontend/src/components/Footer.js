import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.svg" 
                alt="HelpHere Logo" 
                className="h-8 w-auto mr-3 filter brightness-0 invert"
              />
              <span className="text-xl font-bold">HelpHere</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {language === 'en'
                ? 'Emergency local help for tourists in Corfu. Fast access to pharmacies, doctors, police, and more – anywhere on the island.'
                : 'Τοπική βοήθεια έκτακτης ανάγκης για τουρίστες στην Κέρκυρα. Γρήγορη πρόσβαση σε φαρμακεία, γιατρούς, αστυνομία και άλλα – οπουδήποτε στο νησί.'
              }
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <MapPin className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Serving all of Corfu Island' : 'Εξυπηρετούμε όλο το νησί της Κέρκυρας'}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {language === 'en' ? 'Quick Links' : 'Γρήγοροι Σύνδεσμοι'}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#emergency" className="hover:text-white transition-colors">{language === 'en' ? 'Emergency Services' : 'Υπηρεσίες Έκτακτης Ανάγκης'}</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">{language === 'en' ? 'How It Works' : 'Πώς Λειτουργεί'}</a></li>
              <li><a href="#business" className="hover:text-white transition-colors">{language === 'en' ? 'For Businesses' : 'Για Επιχειρήσεις'}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{language === 'en' ? 'Contact' : 'Επικοινωνία'}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {language === 'en' ? 'Support' : 'Υποστήριξη'}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#privacy" className="hover:text-white transition-colors">{language === 'en' ? 'Privacy Policy' : 'Πολιτική Απορρήτου'}</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">{language === 'en' ? 'Terms of Service' : 'Όροι Χρήσης'}</a></li>
              <li><a href="#help" className="hover:text-white transition-colors">{language === 'en' ? 'Help Center' : 'Κέντρο Βοήθειας'}</a></li>
              <li><a href="#report" className="hover:text-white transition-colors">{language === 'en' ? 'Report Issue' : 'Αναφορά Προβλήματος'}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} HelpHere. {language === 'en' ? 'All rights reserved.' : 'Όλα τα δικαιώματα διατηρούνται.'}
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>{language === 'en' ? 'Emergency: 112' : 'Έκτακτη Ανάγκη: 112'}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@helphere.gr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;