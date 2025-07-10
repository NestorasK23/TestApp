import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { serviceCategories } from '../data/mockData';

const CategoryGrid = ({ language, onCategorySelect, translations }) => {
  const categories = Object.entries(serviceCategories);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">
          {translations.selectCategory}
        </h2>
        <div className="bg-red-100 border border-red-300 rounded-lg p-3">
          <p className="text-red-800 font-semibold text-lg">
            {translations.emergencyNumber}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {categories.map(([key, category]) => (
          <Card
            key={key}
            className="hover:shadow-xl transition-all duration-300 cursor-pointer group bg-gradient-to-br from-white to-blue-50/50 hover:from-blue-100/50 hover:to-blue-200/50 border-2 border-blue-100 hover:border-blue-300"
            onClick={() => onCategorySelect(key)}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {category.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-base group-hover:text-blue-800 transition-colors duration-200">
                {category[language].name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <p className="text-blue-800 text-sm font-medium">
          💡 Tap any category to find nearby services
        </p>
      </div>
    </div>
  );
};

export default CategoryGrid;