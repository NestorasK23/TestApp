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
      sentiment_very_satisfied: SentimentVerySatisfied,
      directions_car: DirectionsCar,
      credit_card: CreditCard,
      gavel: Gavel,
      security: Security,
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
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {categories.map(([key, category]) => {
          const iconName = category.en.icon; // Get icon from the language object
          const IconComponent = getIconComponent(iconName);
          
          const getCategoryCardColor = (categoryKey) => {
            switch (categoryKey) {
              case 'pharmacy': return 'border-green-400 hover:border-green-500';
              case 'doctor': return 'border-blue-400 hover:border-blue-500';
              case 'pediatrician': return 'border-cyan-400 hover:border-cyan-500';
              case 'hospital': return 'border-indigo-400 hover:border-indigo-500';
              case 'dentist': return 'border-orange-400 hover:border-orange-500';
              case 'roadside': return 'border-yellow-400 hover:border-yellow-500';
              case 'police': return 'border-blue-300 hover:border-blue-400';
              case 'fire': return 'border-pink-400 hover:border-pink-500';
              case 'boat': return 'border-blue-200 hover:border-blue-300';
              case 'atm': return 'border-gray-400 hover:border-gray-500';
              case 'veterinary': return 'border-green-300 hover:border-green-400';
              case 'embassy': return 'border-purple-400 hover:border-purple-500';
              default: return 'border-blue-400 hover:border-blue-500';
            }
          };

          const getCategoryBackgroundColor = (categoryKey) => {
            switch (categoryKey) {
              case 'pharmacy': return '#D0F0C0';
              case 'doctor': return '#D6EAF8';
              case 'pediatrician': return '#B2EBF2';
              case 'hospital': return '#C5CAE9';
              case 'dentist': return '#FFE0B2';
              case 'roadside': return '#FFF9C4';
              case 'police': return '#BBDEFB';
              case 'fire': return '#F8BBD0';
              case 'boat': return '#E3F2FD';
              case 'atm': return '#ECEFF1';
              case 'veterinary': return '#A5D6A7';
              case 'embassy': return '#E1BEE7';
              default: return '#D6EAF8';
            }
          };

          const getCategoryIconColor = (categoryKey) => {
            switch (categoryKey) {
              case 'pharmacy': return 'text-green-800';
              case 'doctor': return 'text-blue-800';
              case 'pediatrician': return 'text-cyan-800';
              case 'hospital': return 'text-indigo-800';
              case 'dentist': return 'text-amber-800';
              case 'roadside': return 'text-yellow-800';
              case 'police': return 'text-blue-800';
              case 'fire': return 'text-pink-800';
              case 'boat': return 'text-blue-800';
              case 'atm': return 'text-gray-800';
              case 'veterinary': return 'text-emerald-800';
              case 'embassy': return 'text-purple-800';
              default: return 'text-blue-800';
            }
          };

          return (
            <Card
              key={key}
              className={`hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 ${getCategoryCardColor(key)} rounded-lg`}
              style={{ backgroundColor: getCategoryBackgroundColor(key) }}
              onClick={() => onCategorySelect(key)}
            >
              <CardContent className="p-3 lg:p-4 text-center">
                <div className={`${getCategoryIconColor(key)} mb-2 group-hover:scale-110 transition-transform duration-200 flex justify-center`}>
                  <IconComponent sx={{ fontSize: { xs: 20, sm: 24, lg: 28 } }} />
                </div>
                <h3 className="font-bold text-gray-800 text-xs lg:text-sm leading-tight group-hover:text-gray-900 transition-colors duration-200">
                  {category[language].name}
                </h3>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center mt-4">
        <p className="text-blue-800 text-sm font-medium">
          💡 {language === 'en' ? 'Tap any category to find nearby services' : 'Πατήστε οποιαδήποτε κατηγορία για να βρείτε κοντινές υπηρεσίες'}
        </p>
      </div>
    </div>
  );
};

export default CategoryGrid;