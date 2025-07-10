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
          callButton: 'bg-green-600 hover:bg-green-700',
          directionButton: 'border-green-400 text-green-700 hover:bg-green-50'
        };
      case 'doctor':
      case 'pediatrician':
      case 'hospital':
        return {
          backgroundColor: '#D9EDF7',
          callButton: 'bg-blue-600 hover:bg-blue-700',
          directionButton: 'border-blue-400 text-blue-700 hover:bg-blue-50'
        };
      case 'dentist':
        return {
          backgroundColor: '#FDEBD0',
          callButton: 'bg-orange-600 hover:bg-orange-700',
          directionButton: 'border-orange-400 text-orange-700 hover:bg-orange-50'
        };
      case 'roadside':
        return {
          backgroundColor: '#FCF3CF',
          callButton: 'bg-yellow-600 hover:bg-yellow-700',
          directionButton: 'border-yellow-400 text-yellow-700 hover:bg-yellow-50'
        };
      case 'police':
        return {
          backgroundColor: '#FADBD8',
          callButton: 'bg-red-600 hover:bg-red-700',
          directionButton: 'border-red-400 text-red-700 hover:bg-red-50'
        };
      case 'fire':
      case 'boat':
        return {
          backgroundColor: '#F5B7B1',
          callButton: 'bg-red-600 hover:bg-red-700',
          directionButton: 'border-red-400 text-red-700 hover:bg-red-50'
        };
      case 'atm':
        return {
          backgroundColor: '#F5F5F5',
          callButton: 'bg-gray-600 hover:bg-gray-700',
          directionButton: 'border-gray-400 text-gray-700 hover:bg-gray-50'
        };
      case 'veterinary':
        return {
          backgroundColor: '#D0ECE7',
          callButton: 'bg-teal-600 hover:bg-teal-700',
          directionButton: 'border-teal-400 text-teal-700 hover:bg-teal-50'
        };
      case 'embassy':
        return {
          backgroundColor: '#D6EAF8',
          callButton: 'bg-blue-800 hover:bg-blue-900',
          directionButton: 'border-blue-400 text-blue-800 hover:bg-blue-50'
        };
      default:
        return {
          backgroundColor: '#D9EDF7',
          callButton: 'bg-blue-600 hover:bg-blue-700',
          directionButton: 'border-blue-400 text-blue-700 hover:bg-blue-50'
        };
    }
  };

  const colors = getCategoryColors(category);
  const IconComponent = service.categoryIcon || (() => null);

  return (
    <Card 
      className="mb-4 hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden"
      style={{ backgroundColor: colors.backgroundColor }}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IconComponent className="h-5 w-5 text-gray-600" />
            <span>{service.name[language]}</span>
          </div>
          <Badge variant="outline" className="bg-white/80 text-gray-800 border-gray-300 font-medium">
            {service.hours[language]}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-2">
          <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
          <p className="text-gray-700 text-sm font-medium">{service.address[language]}</p>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed bg-white/50 p-3 rounded-lg">
          {service.description[language]}
        </p>
        
        <div className="flex items-center space-x-2 text-sm">
          <Phone className="h-4 w-4 text-gray-500" />
          <span className="text-gray-700 font-medium">{service.phone}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-gray-700 font-medium">{service.hours[language]}</span>
        </div>
        
        <div className="flex space-x-3 pt-2">
          <Button
            onClick={() => handleCall(service.phone)}
            className={`flex-1 ${colors.callButton} text-white font-medium transition-colors duration-200 shadow-md hover:shadow-lg rounded-lg px-4 py-3`}
            size="sm"
          >
            <Phone className="h-4 w-4 mr-2" />
            {translations.callNow}
          </Button>
          <Button
            onClick={() => handleDirections(service.address[language])}
            variant="outline"
            className={`flex-1 ${colors.directionButton} font-medium transition-colors duration-200 shadow-sm hover:shadow-md rounded-lg px-4 py-3 bg-white/80`}
            size="sm"
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