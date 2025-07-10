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
    const googleMapsUrl = `https://www.google.com/maps/dir/?destination=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Category-specific color schemes
  const getCategoryColors = (category) => {
    switch (category) {
      case 'pharmacy':
        return {
          border: 'border-l-green-500',
          background: 'from-white to-green-50/30 hover:from-green-50/50 hover:to-green-100/50',
          badge: 'bg-green-100 text-green-800 border-green-300',
          callButton: 'bg-green-600 hover:bg-green-700',
          directionButton: 'border-green-300 text-green-700 hover:bg-green-50'
        };
      case 'doctor':
      case 'pediatrician':
        return {
          border: 'border-l-blue-500',
          background: 'from-white to-blue-50/30 hover:from-blue-50/50 hover:to-blue-100/50',
          badge: 'bg-blue-100 text-blue-800 border-blue-300',
          callButton: 'bg-blue-600 hover:bg-blue-700',
          directionButton: 'border-blue-300 text-blue-700 hover:bg-blue-50'
        };
      case 'roadside':
      case 'fire':
      case 'police':
        return {
          border: 'border-l-red-500',
          background: 'from-white to-red-50/30 hover:from-red-50/50 hover:to-red-100/50',
          badge: 'bg-red-100 text-red-800 border-red-300',
          callButton: 'bg-red-600 hover:bg-red-700',
          directionButton: 'border-red-300 text-red-700 hover:bg-red-50'
        };
      case 'atm':
        return {
          border: 'border-l-gray-500',
          background: 'from-white to-gray-50/30 hover:from-gray-50/50 hover:to-gray-100/50',
          badge: 'bg-gray-100 text-gray-800 border-gray-300',
          callButton: 'bg-gray-600 hover:bg-gray-700',
          directionButton: 'border-gray-300 text-gray-700 hover:bg-gray-50'
        };
      case 'veterinary':
        return {
          border: 'border-l-teal-500',
          background: 'from-white to-teal-50/30 hover:from-teal-50/50 hover:to-teal-100/50',
          badge: 'bg-teal-100 text-teal-800 border-teal-300',
          callButton: 'bg-teal-600 hover:bg-teal-700',
          directionButton: 'border-teal-300 text-teal-700 hover:bg-teal-50'
        };
      case 'embassy':
        return {
          border: 'border-l-navy-500',
          background: 'from-white to-blue-900/10 hover:from-blue-900/20 hover:to-blue-900/30',
          badge: 'bg-blue-900/10 text-blue-900 border-blue-900/20',
          callButton: 'bg-blue-900 hover:bg-blue-800',
          directionButton: 'border-blue-900/30 text-blue-900 hover:bg-blue-900/10'
        };
      case 'dentist':
        return {
          border: 'border-l-blue-500',
          background: 'from-white to-blue-50/30 hover:from-blue-50/50 hover:to-blue-100/50',
          badge: 'bg-blue-100 text-blue-800 border-blue-300',
          callButton: 'bg-blue-600 hover:bg-blue-700',
          directionButton: 'border-blue-300 text-blue-700 hover:bg-blue-50'
        };
      case 'boat':
        return {
          border: 'border-l-red-500',
          background: 'from-white to-red-50/30 hover:from-red-50/50 hover:to-red-100/50',
          badge: 'bg-red-100 text-red-800 border-red-300',
          callButton: 'bg-red-600 hover:bg-red-700',
          directionButton: 'border-red-300 text-red-700 hover:bg-red-50'
        };
      case 'hospital':
        return {
          border: 'border-l-blue-500',
          background: 'from-white to-blue-50/30 hover:from-blue-50/50 hover:to-blue-100/50',
          badge: 'bg-blue-100 text-blue-800 border-blue-300',
          callButton: 'bg-blue-600 hover:bg-blue-700',
          directionButton: 'border-blue-300 text-blue-700 hover:bg-blue-50'
        };
      default:
        return {
          border: 'border-l-blue-500',
          background: 'from-white to-blue-50/30 hover:from-blue-50/50 hover:to-blue-100/50',
          badge: 'bg-blue-100 text-blue-800 border-blue-300',
          callButton: 'bg-blue-600 hover:bg-blue-700',
          directionButton: 'border-blue-300 text-blue-700 hover:bg-blue-50'
        };
    }
  };

  const colors = getCategoryColors(category);

  return (
    <Card className={`mb-4 hover:shadow-lg transition-all duration-300 ${colors.border} bg-gradient-to-r ${colors.background}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center justify-between">
          {service.name[language]}
          <Badge variant="outline" className={`${colors.badge} font-medium`}>
            {service.hours[language]}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-2">
          <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
          <p className="text-gray-600 text-sm">{service.address[language]}</p>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg">
          {service.description[language]}
        </p>
        
        <div className="flex items-center space-x-2 text-sm">
          <Phone className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{service.phone}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{service.hours[language]}</span>
        </div>
        
        <div className="flex space-x-2 pt-2">
          <Button
            onClick={() => handleCall(service.phone)}
            className={`flex-1 ${colors.callButton} text-white font-medium transition-colors duration-200 shadow-md hover:shadow-lg`}
            size="sm"
          >
            <Phone className="h-4 w-4 mr-2" />
            {translations.callNow}
          </Button>
          <Button
            onClick={() => handleDirections(service.address[language])}
            variant="outline"
            className={`flex-1 ${colors.directionButton} font-medium transition-colors duration-200 shadow-sm hover:shadow-md`}
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