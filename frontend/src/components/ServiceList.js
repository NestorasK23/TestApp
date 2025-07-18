import React from 'react';
import { Button } from './ui/button';
import ServiceCard from './ServiceCard';
import { ArrowLeft } from 'lucide-react';
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

const ServiceList = ({ 
  category, 
  services, 
  language, 
  translations, 
  onBack,
  categoryName 
}) => {
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

  const IconComponent = getIconComponent(categoryName.icon);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{translations.backToCategories}</span>
        </Button>
      </div>
      
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center space-x-2">
          <IconComponent className="h-8 w-8 text-blue-600" />
          <span>{categoryName[language].name}</span>
        </h2>
        <p className="text-gray-600 text-sm">
          {services.length} {services.length === 1 ? (language === 'en' ? 'service' : 'υπηρεσία') : (language === 'en' ? 'services' : 'υπηρεσίες')} {language === 'en' ? 'available' : 'διαθέσιμες'}
        </p>
      </div>
      
      {services.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">{translations.noServices}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={{ ...service, categoryIcon: IconComponent }}
              language={language}
              translations={translations}
              category={category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceList;