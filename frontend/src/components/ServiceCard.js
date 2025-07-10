import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';

const ServiceCard = ({ service, language, translations, category }) => {
  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleDirections = (address) => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Category-specific color schemes with exact hex colors
  const getCategoryColors = (category) => {
    switch (category) {
      case 'pharmacy':
        return {
          backgroundColor: '#DFF0D8',
          callButtonColor: 'bg-green-600 hover:bg-green-700 text-white',
          directionButtonColor: 'bg-white border-2 border-green-500 text-green-700 hover:bg-green-50'
        };
      case 'doctor':
      case 'pediatrician':
      case 'hospital':
        return {
          backgroundColor: '#D9EDF7',
          callButtonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
          directionButtonColor: 'bg-white border-2 border-blue-500 text-blue-700 hover:bg-blue-50'
        };
      case 'dentist':
        return {
          backgroundColor: '#FDEBD0',
          callButtonColor: 'bg-orange-600 hover:bg-orange-700 text-white',
          directionButtonColor: 'bg-white border-2 border-orange-500 text-orange-700 hover:bg-orange-50'
        };
      case 'roadside':
        return {
          backgroundColor: '#FCF3CF',
          callButtonColor: 'bg-yellow-600 hover:bg-yellow-700 text-white',
          directionButtonColor: 'bg-white border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50'
        };
      case 'police':
        return {
          backgroundColor: '#FADBD8',
          callButtonColor: 'bg-red-600 hover:bg-red-700 text-white',
          directionButtonColor: 'bg-white border-2 border-red-500 text-red-700 hover:bg-red-50'
        };
      case 'fire':
      case 'boat':
        return {
          backgroundColor: '#F5B7B1',
          callButtonColor: 'bg-red-600 hover:bg-red-700 text-white',
          directionButtonColor: 'bg-white border-2 border-red-500 text-red-700 hover:bg-red-50'
        };
      case 'atm':
        return {
          backgroundColor: '#F5F5F5',
          callButtonColor: 'bg-gray-600 hover:bg-gray-700 text-white',
          directionButtonColor: 'bg-white border-2 border-gray-500 text-gray-700 hover:bg-gray-50'
        };
      case 'veterinary':
        return {
          backgroundColor: '#D0ECE7',
          callButtonColor: 'bg-teal-600 hover:bg-teal-700 text-white',
          directionButtonColor: 'bg-white border-2 border-teal-500 text-teal-700 hover:bg-teal-50'
        };
      case 'embassy':
        return {
          backgroundColor: '#D6EAF8',
          callButtonColor: 'bg-blue-800 hover:bg-blue-900 text-white',
          directionButtonColor: 'bg-white border-2 border-blue-800 text-blue-800 hover:bg-blue-50'
        };
      default:
        return {
          backgroundColor: '#D9EDF7',
          callButtonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
          directionButtonColor: 'bg-white border-2 border-blue-500 text-blue-700 hover:bg-blue-50'
        };
    }
  };

  const colors = getCategoryColors(category);
  const IconComponent = service.categoryIcon || (() => null);

  return (
    <Card 
      className="mb-4 hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden border-2"
      style={{ backgroundColor: colors.backgroundColor }}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {IconComponent && <IconComponent className="h-5 w-5 text-gray-700" />}
            <span>{service.name[language]}</span>
          </div>
          <Badge variant="outline" className="bg-white/90 text-gray-800 border-gray-400 font-medium text-xs">
            {service.hours[language]}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-2">
          <MapPin className="h-4 w-4 text-gray-600 mt-1 flex-shrink-0" />
          <p className="text-gray-700 text-sm font-medium">{service.address[language]}</p>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed bg-white/70 p-3 rounded-lg border">
          {service.description[language]}
        </p>
        
        <div className="flex items-center space-x-2 text-sm">
          <Phone className="h-4 w-4 text-gray-600" />
          <span className="text-gray-700 font-medium">{service.phone}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4 text-gray-600" />
          <span className="text-gray-700 font-medium">{service.hours[language]}</span>
        </div>
        
        {/* Improved Button Layout with responsive stacking */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            onClick={() => handleCall(service.phone)}
            className={`flex-1 ${colors.callButtonColor} font-semibold transition-all duration-200 shadow-md hover:shadow-lg rounded-lg px-6 py-3 min-h-[48px] text-sm`}
          >
            <Phone className="h-4 w-4 mr-2" />
            {translations.callNow}
          </Button>
          <Button
            onClick={() => handleDirections(service.address[language])}
            className={`flex-1 ${colors.directionButtonColor} font-semibold transition-all duration-200 shadow-sm hover:shadow-md rounded-lg px-6 py-3 min-h-[48px] text-sm`}
          >
            <Navigation className="h-4 w-4 mr-2" />
            {translations.directions}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;