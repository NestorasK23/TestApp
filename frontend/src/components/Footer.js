import React from 'react';
import { MapPin, Mail, Phone, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.svg" 
                alt="HelpHere Logo" 
                className="h-8 w-auto mr-3 filter brightness-0 invert"
              />
              <span className="text-2xl font-bold">HelpHere</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              {language === 'en'
                ? 'Emergency help for tourists in Corfu. Fast access to pharmacies, doctors, police, and essential services anywhere on the island.'
                : 'Βοήθεια έκτακτης ανάγκης για τουρίστες στην Κέρκυρα. Γρήγορη πρόσβαση σε φαρμακεία, γιατρούς, αστυνομία και βασικές υπηρεσίες οπουδήποτε στο νησί.'
              }
            </p>
            <div className="flex items-center text-gray-400 mb-4">
              <MapPin className="h-5 w-5 mr-3" />
              <span>{language === 'en' ? 'Serving all of Corfu Island, Greece' : 'Εξυπηρετούμε όλο το νησί της Κέρκυρας, Ελλάδα'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">
              {language === 'en' ? 'Quick Access' : 'Γρήγορη Πρόσβαση'}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#emergency" className="hover:text-white transition-colors flex items-center"><span className="mr-2">🚨</span>{language === 'en' ? 'Emergency Services' : 'Υπηρεσίες Έκτακτης Ανάγκης'}</a></li>
              <li><a href="#how" className="hover:text-white transition-colors flex items-center"><span className="mr-2">❓</span>{language === 'en' ? 'How It Works' : 'Πώς Λειτουργεί'}</a></li>
              <li><a href="#why" className="hover:text-white transition-colors flex items-center"><span className="mr-2">⭐</span>{language === 'en' ? 'Why Choose Us' : 'Γιατί Εμάς'}</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors flex items-center"><span className="mr-2">💬</span>{language === 'en' ? 'Tourist Reviews' : 'Κριτικές Τουριστών'}</a></li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">
              {language === 'en' ? 'Emergency Contact' : 'Επικοινωνία Έκτακτης Ανάγκης'}
            </h3>
            <div className="space-y-4">
              <div className="bg-red-600 rounded-lg p-4 text-center">
                <Phone className="h-6 w-6 mx-auto mb-2" />
                <div className="font-bold text-xl">112</div>
                <div className="text-sm">{language === 'en' ? 'Emergency Services' : 'Υπηρεσίες Έκτακτης Ανάγκης'}</div>
              </div>
              <div className="text-gray-300 text-sm">
                <div className="flex items-center mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@helphere.gr</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+30 2661 000000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories Quick Access */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="font-semibold text-lg mb-4 text-center text-white">
            {language === 'en' ? 'Quick Service Access' : 'Γρήγορη Πρόσβαση σε Υπηρεσίες'}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center text-sm">
            <div className="text-gray-300">💊 {language === 'en' ? 'Pharmacies' : 'Φαρμακεία'}</div>
            <div className="text-gray-300">🏥 {language === 'en' ? 'Hospitals' : 'Νοσοκομεία'}</div>
            <div className="text-gray-300">👮 {language === 'en' ? 'Police' : 'Αστυνομία'}</div>
            <div className="text-gray-300">🚒 {language === 'en' ? 'Fire Dept' : 'Πυροσβεστική'}</div>
            <div className="text-gray-300">🐾 {language === 'en' ? 'Vets' : 'Κτηνίατροι'}</div>
            <div className="text-gray-300">🏧 {language === 'en' ? 'ATMs' : 'ΑΤΜ'}</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} HelpHere. {language === 'en' ? 'All rights reserved. Made for tourists visiting Corfu.' : 'Όλα τα δικαιώματα διατηρούνται. Φτιαγμένο για τουρίστες που επισκέπτονται την Κέρκυρα.'}
            </div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Back to Top' : 'Πίσω στην Κορυφή'}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;