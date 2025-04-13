
import React from 'react';
import { MapPin } from 'lucide-react';

const Locations: React.FC = () => {
  // List of cities where the franchise operates
  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", 
    "Chennai", "Kolkata", "Pune", "Ahmedabad", 
    "Jaipur", "Chandigarh", "Lucknow", "Kochi"
  ];

  return (
    <div className="py-16 bg-pizza-orange/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pizza-brown mb-4">Our Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find AAKHRI PIZZA in your city. We're expanding rapidly to bring the ultimate pizza experience closer to you.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-pizza-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-pizza-brown" size={24} />
              </div>
              <h3 className="font-semibold text-xl text-pizza-brown">{city}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {Math.floor(Math.random() * 10) + 1} Locations
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
