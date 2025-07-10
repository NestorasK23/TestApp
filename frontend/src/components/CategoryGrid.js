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
          
          // Get category-specific colors for the category cards with more diversity
          const getCategoryCardColor = (categoryKey) => {
            switch (categoryKey) {
              case 'pharmacy': return 'from-green-100 to-green-200 border-green-300 hover:border-green-400';
              case 'doctor': return 'from-blue-100 to-blue-200 border-blue-300 hover:border-blue-400';
              case 'pediatrician': return 'from-cyan-100 to-cyan-200 border-cyan-300 hover:border-cyan-400';
              case 'hospital': return 'from-indigo-100 to-indigo-200 border-indigo-300 hover:border-indigo-400';
              case 'dentist': return 'from-amber-100 to-amber-200 border-amber-300 hover:border-amber-400';
              case 'roadside': return 'from-yellow-100 to-yellow-200 border-yellow-300 hover:border-yellow-400';
              case 'police': return 'from-rose-100 to-rose-200 border-rose-300 hover:border-rose-400';
              case 'fire': return 'from-red-100 to-red-200 border-red-300 hover:border-red-400';
              case 'boat': return 'from-pink-100 to-pink-200 border-pink-300 hover:border-pink-400';
              case 'atm': return 'from-slate-100 to-slate-200 border-slate-300 hover:border-slate-400';
              case 'veterinary': return 'from-emerald-100 to-emerald-200 border-emerald-300 hover:border-emerald-400';
              case 'embassy': return 'from-purple-100 to-purple-200 border-purple-300 hover:border-purple-400';
              default: return 'from-blue-100 to-blue-200 border-blue-300 hover:border-blue-400';
            }
          };

          const getCategoryIconColor = (categoryKey) => {
            switch (categoryKey) {
              case 'pharmacy': return 'text-green-700';
              case 'doctor': return 'text-blue-700';
              case 'pediatrician': return 'text-cyan-700';
              case 'hospital': return 'text-indigo-700';
              case 'dentist': return 'text-amber-700';
              case 'roadside': return 'text-yellow-700';
              case 'police': return 'text-rose-700';
              case 'fire': return 'text-red-700';
              case 'boat': return 'text-pink-700';
              case 'atm': return 'text-slate-700';
              case 'veterinary': return 'text-emerald-700';
              case 'embassy': return 'text-purple-700';
              default: return 'text-blue-700';
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