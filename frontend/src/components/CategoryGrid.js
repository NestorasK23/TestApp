import React from 'react';
import { Card, CardContent } from './ui/card';
import { serviceCategories } from '../data/mockData';
import {
  MedicalServices,
  LocalHospital,
  DirectionsCar,
  CreditCard,
  Gavel,
  FireExtinguisher,
  Pets,
  Public,
  Mood,
  Sailing,
  MedicalInformation,
  ChildCare,
  Psychology,
  Flag,
  SentimentVerySatisfied,
  Security
} from '@mui/icons-material';

const CategoryGrid = ({ language, onCategorySelect, translations }) => {
  const categories = Object.entries(serviceCategories);

  // Icon mapping with correct Material Icons
  const getIconComponent = (iconName) => {
    const iconMap = {
      medical_services: MedicalServices,
      local_hospital: LocalHospital,
      medical_information: MedicalInformation,
      child_care: ChildCare,
      psychology: Psychology,
      directions_car: DirectionsCar,
      credit_card: CreditCard,
      gavel: Gavel,
      fire_extinguisher: FireExtinguisher,
      pets: Pets,
      public: Public,
      flag: Flag,
      mood: Mood,
      sailing: Sailing
    };
    return iconMap[iconName] || LocalHospital; // Default fallback
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">
          {translations.selectCategory}
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map(([key, category]) => {
          const iconName = category.en.icon; // Get icon from the language object
          console.log('Category:', key, 'Icon:', iconName); // Debug log
          const IconComponent = getIconComponent(iconName);
          
          const getCategoryCardColor = (categoryKey) => {
            switch (categoryKey) {
              case 'pharmacy': return 'from-green-200 to-green-300 border-green-400 hover:border-green-500';
              case 'doctor': return 'from-blue-200 to-blue-300 border-blue-400 hover:border-blue-500';
              case 'pediatrician': return 'from-sky-200 to-sky-300 border-sky-400 hover:border-sky-500';
              case 'hospital': return 'from-indigo-200 to-indigo-300 border-indigo-400 hover:border-indigo-500';
              case 'dentist': return 'from-amber-200 to-amber-300 border-amber-400 hover:border-amber-500';
              case 'roadside': return 'from-yellow-200 to-yellow-300 border-yellow-400 hover:border-yellow-500';
              case 'police': return 'from-red-200 to-red-300 border-red-400 hover:border-red-500';
              case 'fire': return 'from-orange-200 to-orange-300 border-orange-400 hover:border-orange-500';
              case 'boat': return 'from-pink-200 to-pink-300 border-pink-400 hover:border-pink-500';
              case 'atm': return 'from-gray-200 to-gray-300 border-gray-400 hover:border-gray-500';
              case 'veterinary': return 'from-emerald-200 to-emerald-300 border-emerald-400 hover:border-emerald-500';
              case 'embassy': return 'from-purple-200 to-purple-300 border-purple-400 hover:border-purple-500';
              default: return 'from-blue-200 to-blue-300 border-blue-400 hover:border-blue-500';
            }
          };

          const getCategoryIconColor = (categoryKey) => {
            switch (categoryKey) {
              case 'pharmacy': return 'text-green-800';
              case 'doctor': return 'text-blue-800';
              case 'pediatrician': return 'text-sky-800';
              case 'hospital': return 'text-indigo-800';
              case 'dentist': return 'text-amber-800';
              case 'roadside': return 'text-yellow-800';
              case 'police': return 'text-red-800';
              case 'fire': return 'text-orange-800';
              case 'boat': return 'text-pink-800';
              case 'atm': return 'text-gray-800';
              case 'veterinary': return 'text-emerald-800';
              case 'embassy': return 'text-purple-800';
              default: return 'text-blue-800';
            }
          };

          return (
            <Card
              key={key}
              className={`hover:shadow-xl transition-all duration-300 cursor-pointer group bg-gradient-to-br ${getCategoryCardColor(key)} border-2 rounded-lg`}
              onClick={() => onCategorySelect(key)}
            >
              <CardContent className="p-4 text-center">
                <div className={`${getCategoryIconColor(key)} mb-2 group-hover:scale-110 transition-transform duration-200 flex justify-center`}>
                  <IconComponent sx={{ fontSize: 28 }} />
                </div>
                <h3 className="font-bold text-gray-800 text-sm leading-tight group-hover:text-gray-900 transition-colors duration-200">
                  {category[language].name}
                </h3>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-blue-800 text-sm font-medium">
          💡 {language === 'en' ? 'Tap any category to find nearby services' : 'Πατήστε οποιαδήποτε κατηγορία για να βρείτε κοντινές υπηρεσίες'}
        </p>
      </div>
    </div>
  );
};

export default CategoryGrid;