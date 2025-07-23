import React from 'react';
import { Card, CardContent } from './ui/card';
import { Clock, CheckCircle, UserCheck, Shield, Zap, Globe } from 'lucide-react';

const WhyHelpHereSection = ({ language }) => {
  const features = [
    {
      icon: Clock,
      title: {
        en: '24/7 Available',
        gr: '24/7 Διαθέσιμο'
      },
      description: {
        en: 'Access emergency contacts and services anytime, day or night',
        gr: 'Πρόσβαση σε επαφές και υπηρεσίες έκτακτης ανάγκης οποιαδήποτε ώρα'
      },
      color: 'bg-blue-100 text-blue-600',
      badge: '24/7'
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
      },
      color: 'bg-green-100 text-green-600',
      badge: '✓'
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
      },
      color: 'bg-purple-100 text-purple-600',
      badge: '→'
    }
  ];

  const stats = [
    {
      icon: Shield,
      number: '25+',
      label: language === 'en' ? 'Verified Services' : 'Επαληθευμένες Υπηρεσίες'
    },
    {
      icon: Zap,
      number: '<30s',
      label: language === 'en' ? 'Average Response' : 'Μέσος Χρόνος Απόκρισης'
    },
    {
      icon: Globe,
      number: '12',
      label: language === 'en' ? 'Service Categories' : 'Κατηγορίες Υπηρεσιών'
    }
  ];

  return (
    <section id="why" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Why Choose Corfu Line?' : 'Γιατί να Επιλέξετε το Corfu Line;'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Reliable emergency assistance designed specifically for tourists visiting Corfu'
              : 'Αξιόπιστη βοήθεια έκτακτης ανάγκης σχεδιασμένη ειδικά για τουρίστες που επισκέπτονται την Κέρκυρα'
            }
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
                <CardContent className="p-8 relative">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-sm font-bold">
                    {feature.badge}
                  </div>
                  
                  <div className={`${feature.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
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