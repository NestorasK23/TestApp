import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ language }) => {
  const testimonials = [
    {
      name: {
        en: 'Sarah Johnson',
        gr: 'Sarah Johnson'
      },
      country: {
        en: 'UK Tourist',
        gr: 'Τουρίστρια από UK'
      },
      text: {
        en: 'Found a pharmacy at 2 AM when my daughter had a fever. The directions were perfect and the pharmacist spoke English. Lifesaver!',
        gr: 'Βρήκα φαρμακείο στις 2 το πρωί όταν η κόρη μου είχε πυρετό. Οι οδηγίες ήταν τέλειες και ο φαρμακοποιός μιλούσε αγγλικά. Σωτήρας!'
      },
      rating: 5
    },
    {
      name: {
        en: 'Marco Rossi',
        gr: 'Marco Rossi'
      },
      country: {
        en: 'Italian Tourist',
        gr: 'Τουρίστας από Ιταλία'
      },
      text: {
        en: 'Had a minor accident near Paleokastritsa. HelpHere helped me find the nearest clinic instantly. Great service!',
        gr: 'Είχα ένα μικρό ατύχημα κοντά στην Παλαιοκαστρίτσα. Το HelpHere με βοήθησε να βρω την πλησιέστερη κλινική αμέσως. Εξαιρετική υπηρεσία!'
      },
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'What Tourists Say' : 'Τι Λένε οι Τουρίστες'}
          </h2>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Real experiences from travelers in Corfu'
              : 'Πραγματικές εμπειρίες από ταξιδιώτες στην Κέρκυρα'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                  "{testimonial.text[language]}"
                </blockquote>
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">
                      {testimonial.name.en.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name[language]}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.country[language]}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;