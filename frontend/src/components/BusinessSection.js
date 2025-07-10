import React from 'react';
import { Card, CardContent } from './ui/card';
import { Building2 } from 'lucide-react';

const BusinessSection = ({ language }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-green-200">
          <CardContent className="p-12 text-center">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Building2 className="h-10 w-10 text-green-600" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Own a Pharmacy or Clinic?' : 'Έχετε Φαρμακείο ή Κλινική;'}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              {language === 'en'
                ? 'We help tourists find trusted healthcare providers across Corfu. All listings are manually verified to ensure quality and accuracy.'
                : 'Βοηθάμε τους τουρίστες να βρουν αξιόπιστους παρόχους υγειονομικής περίθαλψης σε όλη την Κέρκυρα. Όλες οι καταχωρήσεις επαληθεύονται χειροκίνητα για ποιότητα και ακρίβεια.'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌟</div>
                <h4 className="font-semibold text-gray-800">
                  {language === 'en' ? 'Verified Listings' : 'Επαληθευμένες Καταχωρήσεις'}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  {language === 'en' ? 'Quality controlled' : 'Ελεγχόμενη ποιότητα'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-semibold text-gray-800">
                  {language === 'en' ? 'Tourist Focused' : 'Εστίαση στους Τουρίστες'}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  {language === 'en' ? 'Emergency ready' : 'Έτοιμοι για έκτακτες ανάγκες'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold text-gray-800">
                  {language === 'en' ? 'Easy Access' : 'Εύκολη Πρόσβαση'}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  {language === 'en' ? 'One-tap contact' : 'Επικοινωνία με ένα άγγιγμα'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BusinessSection;