import React from 'react';
import { Card, CardContent } from './ui/card';

const HowItWorksSection = ({ language }) => {
  const steps = [
    {
      number: '1',
      title: {
        en: 'Choose a Category',
        gr: 'Επιλέξτε Κατηγορία'
      },
      description: {
        en: 'Select from pharmacies, doctors, police, or other emergency services',
        gr: 'Επιλέξτε από φαρμακεία, γιατρούς, αστυνομία ή άλλες υπηρεσίες έκτακτης ανάγκης'
      },
      icon: '🎯'
    },
    {
      number: '2',
      title: {
        en: 'View Nearest Service',
        gr: 'Δείτε την Πλησιέστερη Υπηρεσία'
      },
      description: {
        en: 'See contact details, hours, and location information instantly',
        gr: 'Δείτε στοιχεία επικοινωνίας, ώρες και πληροφορίες τοποθεσίας αμέσως'
      },
      icon: '📍'
    },
    {
      number: '3',
      title: {
        en: 'Call or Navigate',
        gr: 'Καλέστε ή Πηγαίνετε'
      },
      description: {
        en: 'One-tap calling or get directions through Google Maps',
        gr: 'Κλήση με ένα άγγιγμα ή λάβετε οδηγίες μέσω Google Maps'
      },
      icon: '📞'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'How It Works' : 'Πώς Λειτουργεί'}
          </h2>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Get help in 3 simple steps'
              : 'Λάβετε βοήθεια σε 3 απλά βήματα'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-2 border-blue-100">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title[language]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;