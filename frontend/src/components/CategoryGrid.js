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
  Sailing
} from '@mui/icons-material';

const CategoryGrid = ({ language, onCategorySelect, translations }) => {
  const categories = Object.entries(serviceCategories);

  // Icon mapping
  const getIconComponent = (iconName) => {
    const iconMap = {
      medical_services: MedicalServices,
      local_hospital: LocalHospital,
      directions_car: DirectionsCar,
      credit_card: CreditCard,
      gavel: Gavel,
      fire_extinguisher: FireExtinguisher,
      pets: Pets,
      public: Public,
      mood: Mood,
      sailing: Sailing
    };
    return iconMap[iconName] || MedicalServices;
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
          const IconComponent = getIconComponent(category.icon);
          
          // Get category-specific colors for the category cards
          const getCategoryCardColor = (categoryKey) => {
            switch (categoryKey) {
              case 'pharmacy': return 'from-green-50 to-green-100 border-green-200 hover:border-green-300';
              case 'doctor':
              case 'pediatrician':
              case 'hospital': return 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300';
              case 'dentist': return 'from-orange-50 to-orange-100 border-orange-200 hover:border-orange-300';
              case 'roadside': return 'from-yellow-50 to-yellow-100 border-yellow-200 hover:border-yellow-300';
              case 'police': return 'from-red-50 to-red-100 border-red-200 hover:border-red-300';
              case 'fire':
              case 'boat': return 'from-red-50 to-red-100 border-red-200 hover:border-red-300';
              case 'atm': return 'from-gray-50 to-gray-100 border-gray-200 hover:border-gray-300';
              case 'veterinary': return 'from-teal-50 to-teal-100 border-teal-200 hover:border-teal-300';
              case 'embassy': return 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300';
              default: return 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300';
            }
          };

          const getCategoryIconColor = (categoryKey) => {
            switch (categoryKey) {
              case 'pharmacy': return 'text-green-600';
              case 'doctor':
              case 'pediatrician':
              case 'hospital': return 'text-blue-600';
              case 'dentist': return 'text-orange-600';
              case 'roadside': return 'text-yellow-600';
              case 'police': return 'text-red-600';
              case 'fire':
              case 'boat': return 'text-red-600';
              case 'atm': return 'text-gray-600';
              case 'veterinary': return 'text-teal-600';
              case 'embassy': return 'text-blue-800';
              default: return 'text-blue-600';
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
                  <IconComponent className="h-7 w-7" />
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