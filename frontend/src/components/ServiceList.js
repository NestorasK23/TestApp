import React from 'react';
import { Button } from './ui/button';
import ServiceCard from './ServiceCard';
import { ArrowLeft } from 'lucide-react';

const ServiceList = ({ 
  category, 
  services, 
  language, 
  translations, 
  onBack,
  categoryName 
}) => {
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
          <span className="text-3xl">{categoryName.icon}</span>
          <span>{categoryName[language].name}</span>
        </h2>
        <p className="text-gray-600 text-sm">
          {services.length} {services.length === 1 ? 'service' : 'services'} available
        </p>
      </div>
      
      {services.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">{translations.noServices}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
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