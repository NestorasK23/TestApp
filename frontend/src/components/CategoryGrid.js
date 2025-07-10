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
          return (
            <Card
              key={key}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group bg-gradient-to-br from-white to-blue-50/50 hover:from-blue-100/50 hover:to-blue-200/50 border-2 border-blue-100 hover:border-blue-300"
              onClick={() => onCategorySelect(key)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200 flex justify-center">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm leading-tight group-hover:text-blue-800 transition-colors duration-200">
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