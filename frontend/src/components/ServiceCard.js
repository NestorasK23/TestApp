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

  // Category-specific color schemes with diverse hex colors
  const getCategoryColors = (category) => {
    switch (category) {
      case 'pharmacy':
        return {
          backgroundColor: '#D1FAE5', // Light green
          callButtonColor: 'bg-green-600 hover:bg-green-700 text-white',
          directionButtonColor: 'bg-white border-2 border-green-500 text-green-700 hover:bg-green-50'
        };
      case 'doctor':
        return {
          backgroundColor: '#DBEAFE', // Light blue
          callButtonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
          directionButtonColor: 'bg-white border-2 border-blue-500 text-blue-700 hover:bg-blue-50'
        };
      case 'pediatrician':
        return {
          backgroundColor: '#CFFAFE', // Light cyan
          callButtonColor: 'bg-cyan-600 hover:bg-cyan-700 text-white',
          directionButtonColor: 'bg-white border-2 border-cyan-500 text-cyan-700 hover:bg-cyan-50'
        };
      case 'hospital':
        return {
          backgroundColor: '#E0E7FF', // Light indigo
          callButtonColor: 'bg-indigo-600 hover:bg-indigo-700 text-white',
          directionButtonColor: 'bg-white border-2 border-indigo-500 text-indigo-700 hover:bg-indigo-50'
        };
      case 'dentist':
        return {
          backgroundColor: '#FEF3C7', // Light amber
          callButtonColor: 'bg-amber-600 hover:bg-amber-700 text-white',
          directionButtonColor: 'bg-white border-2 border-amber-500 text-amber-700 hover:bg-amber-50'
        };
      case 'roadside':
        return {
          backgroundColor: '#FEFCE8', // Light yellow
          callButtonColor: 'bg-yellow-600 hover:bg-yellow-700 text-white',
          directionButtonColor: 'bg-white border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50'
        };
      case 'police':
        return {
          backgroundColor: '#FFE4E6', // Light rose
          callButtonColor: 'bg-rose-600 hover:bg-rose-700 text-white',
          directionButtonColor: 'bg-white border-2 border-rose-500 text-rose-700 hover:bg-rose-50'
        };
      case 'fire':
        return {
          backgroundColor: '#FEE2E2', // Light red
          callButtonColor: 'bg-red-600 hover:bg-red-700 text-white',
          directionButtonColor: 'bg-white border-2 border-red-500 text-red-700 hover:bg-red-50'
        };
      case 'boat':
        return {
          backgroundColor: '#FCE7F3', // Light pink
          callButtonColor: 'bg-pink-600 hover:bg-pink-700 text-white',
          directionButtonColor: 'bg-white border-2 border-pink-500 text-pink-700 hover:bg-pink-50'
        };
      case 'atm':
        return {
          backgroundColor: '#F1F5F9', // Light slate
          callButtonColor: 'bg-slate-600 hover:bg-slate-700 text-white',
          directionButtonColor: 'bg-white border-2 border-slate-500 text-slate-700 hover:bg-slate-50'
        };
      case 'veterinary':
        return {
          backgroundColor: '#D1FAE5', // Light emerald
          callButtonColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
          directionButtonColor: 'bg-white border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50'
        };
      case 'embassy':
        return {
          backgroundColor: '#EDE9FE', // Light purple
          callButtonColor: 'bg-purple-600 hover:bg-purple-700 text-white',
          directionButtonColor: 'bg-white border-2 border-purple-500 text-purple-700 hover:bg-purple-50'
        };
      default:
        return {
          backgroundColor: '#DBEAFE',
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
        <div className="flex flex-col md:flex-row gap-3 pt-4 items-stretch">
          <Button
            onClick={() => handleCall(service.phone)}
            className={`flex-1 ${colors.callButtonColor} font-semibold transition-all duration-200 shadow-md hover:shadow-lg rounded-lg px-6 py-3 h-12 text-sm flex items-center justify-center`}
          >
            <Phone className="h-4 w-4 mr-2" />
            {translations.callNow}
          </Button>
          <Button
            onClick={() => handleDirections(service.address[language])}
            className={`flex-1 ${colors.directionButtonColor} font-semibold transition-all duration-200 shadow-sm hover:shadow-md rounded-lg px-6 py-3 h-12 text-sm flex items-center justify-center`}
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