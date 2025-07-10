import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

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
      location: {
        en: 'Corfu Old Town',
        gr: 'Παλιά Πόλη Κέρκυρας'
      },
      text: {
        en: 'Found a pharmacy at 2 AM when my daughter had a fever. The directions were perfect and the pharmacist spoke English. Lifesaver!',
        gr: 'Βρήκα φαρμακείο στις 2 το πρωί όταν η κόρη μου είχε πυρετό. Οι οδηγίες ήταν τέλειες και ο φαρμακοποιός μιλούσε αγγλικά. Σωτήρας!'
      },
      rating: 5,
      category: 'pharmacy'
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
      location: {
        en: 'Paleokastritsa',
        gr: 'Παλαιοκαστρίτσα'
      },
      text: {
        en: 'Had a minor accident near Paleokastritsa. HelpHere helped me find the nearest clinic instantly. Great service!',
        gr: 'Είχα ένα μικρό ατύχημα κοντά στην Παλαιοκαστρίτσα. Το HelpHere με βοήθησε να βρω την πλησιέστερη κλινική αμέσως. Εξαιρετική υπηρεσία!'
      },
      rating: 5,
      category: 'medical'
    }
  ];

  return (
    <section id="reviews" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'What Tourists Say' : 'Τι Λένε οι Τουρίστες'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Real experiences from travelers who found help when they needed it most'
              : 'Πραγματικές εμπειρίες από ταξιδιώτες που βρήκαν βοήθεια όταν τη χρειάζονταν περισσότερο'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 relative overflow-hidden">
              <CardContent className="p-8 relative">
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-blue-500" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {testimonial.category === 'pharmacy' ? '💊' : '🏥'} {' '}
                    {language === 'en' ? 'Verified Visit' : 'Επαληθευμένη Επίσκεψη'}
                  </span>
                </div>
                
                {/* Testimonial text */}
                <blockquote className="text-gray-700 italic text-lg mb-6 leading-relaxed font-medium">
                  "{testimonial.text[language]}"
                </blockquote>
                
                {/* User info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-white font-bold">
                      {testimonial.name.en.charAt(0)}
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
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="mr-1">📍</span>
                      {testimonial.location[language]}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
                <div className="text-gray-600">{language === 'en' ? 'Average Rating' : 'Μέση Αξιολόγηση'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">{language === 'en' ? 'Tourists Helped' : 'Τουρίστες που Βοηθήθηκαν'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">{language === 'en' ? 'Always Available' : 'Πάντα Διαθέσιμο'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;