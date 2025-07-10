import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Building2, Plus } from 'lucide-react';

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
                ? 'Join our network of trusted healthcare providers and help tourists find your services when they need them most.'
                : 'Ενταχθείτε στο δίκτυό μας αξιόπιστων παρόχων υγειονομικής περίθαλψης και βοηθήστε τους τουρίστες να βρουν τις υπηρεσίες σας όταν τις χρειάζονται περισσότερο.'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🌟</div>
                <h4 className="font-semibold text-gray-800">
                  {language === 'en' ? 'Free Listing' : 'Δωρεάν Καταχώρηση'}
                </h4>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-semibold text-gray-800">
                  {language === 'en' ? 'More Customers' : 'Περισσότεροι Πελάτες'}
                </h4>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold text-gray-800">
                  {language === 'en' ? 'Easy Management' : 'Εύκολη Διαχείριση'}
                </h4>
              </div>
            </div>
            
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <Plus className="mr-2 h-5 w-5" />
              {language === 'en' ? 'List Your Business for Free' : 'Καταχωρήστε την Επιχείρησή σας Δωρεάν'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BusinessSection;