import React from 'react';
import { Card, CardContent } from './ui/card';
import { Search, Eye, Phone } from 'lucide-react';

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
      icon: Search,
      color: 'bg-blue-500'
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
      icon: Eye,
      color: 'bg-green-500'
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
      icon: Phone,
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="how" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'How It Works' : 'Πώς Λειτουργεί'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Get emergency help in 3 simple steps'
              : 'Λάβετε βοήθεια έκτακτης ανάγκης σε 3 απλά βήματα'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 relative overflow-hidden group">
                <CardContent className="p-8 relative z-10">
                  {/* Step number badge */}
                  <div className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:bg-gray-200 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-gray-700" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {step.title[language]}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description[language]}
                  </p>
                </CardContent>
                
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
              </Card>
            );
          })}
        </div>
        
        {/* Connection lines for desktop */}
        <div className="hidden md:flex justify-center items-center mt-8">
          <div className="flex items-center space-x-8">
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="text-gray-400">→</div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="text-gray-400">→</div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;