import React from 'react';
import { Card, CardContent } from './ui/card';
import { Clock, CheckCircle, UserCheck } from 'lucide-react';

const WhyHelpHereSection = ({ language }) => {
  const features = [
    {
      icon: Clock,
      title: {
        en: 'Open 24/7',
        gr: 'Ανοιχτά 24/7'
      },
      description: {
        en: 'Access emergency contacts and services anytime, day or night',
        gr: 'Πρόσβαση σε επαφές και υπηρεσίες έκτακτης ανάγκης οποιαδήποτε ώρα'
      }
    },
    {
      icon: CheckCircle,
      title: {
        en: 'Verified Local Listings',
        gr: 'Επαληθευμένες Τοπικές Καταχωρήσεις'
      },
      description: {
        en: 'All services are verified and regularly updated for accuracy',
        gr: 'Όλες οι υπηρεσίες είναι επαληθευμένες και ενημερώνονται τακτικά'
      }
    },
    {
      icon: UserCheck,
      title: {
        en: 'No Login Required',
        gr: 'Δεν Απαιτείται Σύνδεση'
      },
      description: {
        en: 'Instant access to help without registration or personal data',
        gr: 'Άμεση πρόσβαση σε βοήθεια χωρίς εγγραφή ή προσωπικά δεδομένα'
      }
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Why HelpHere?' : 'Γιατί HelpHere;'}
          </h2>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Reliable emergency assistance when you need it most'
              : 'Αξιόπιστη βοήθεια έκτακτης ανάγκης όταν τη χρειάζεστε περισσότερο'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title[language]}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description[language]}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHelpHereSection;