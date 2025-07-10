import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';

const ServiceCard = ({ service, language, translations }) => {
  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleDirections = (coordinates) => {
    const [lat, lng] = coordinates.split(',');
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <Card className="mb-4 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 bg-gradient-to-r from-white to-blue-50/30 hover:from-blue-50/50 hover:to-blue-100/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center justify-between">
          {service.name[language]}
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
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
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium transition-colors duration-200"
            size="sm"
          >
            <Phone className="h-4 w-4 mr-2" />
            {translations.callNow}
          </Button>
          <Button
            onClick={() => handleDirections(service.coordinates)}
            variant="outline"
            className="flex-1 border-blue-300 text-blue-700 hover:bg-blue-50 font-medium transition-colors duration-200"
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