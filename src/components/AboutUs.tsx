
import React from 'react';
import { Utensils, Clock, Award, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="py-16 bg-pizza-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pizza-brown mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-pizza-orange-dark mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-8">
              <h3 className="text-2xl font-bold text-pizza-brown mb-4">How AAKHRI PIZZA Was Born</h3>
              <p className="text-gray-700 mb-4">
                AAKHRI PIZZA was founded by Reaper in Jaipur in 2025, with a vision that every pizza should be crafted as if it were the last pizza you'll ever taste. Our journey began in a small kitchen in Jaipur with a single wood-fired oven and an unwavering commitment to quality.
              </p>
              <p className="text-gray-700 mb-4">
                The name "AAKHRI" meaning "final" or "ultimate" in Hindi, represents our philosophy—each pizza is prepared with the dedication as if it's the last one we'll ever make. This passion for perfection quickly gained a following, and what started as a small operation expanded to multiple cities across India.
              </p>
              <p className="text-gray-700">
                Today, we continue to honor our founding principles: using only the freshest ingredients, following traditional techniques, and treating each customer like family. Every AAKHRI PIZZA location maintains the same standards of excellence that made our first location successful.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pizza-orange rounded-full flex items-center justify-center">
                    <Utensils className="text-pizza-brown" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-pizza-brown">Master Chefs</h3>
                </div>
                <p className="text-gray-700">
                  Our pizzaiolos train for months to perfect the art of dough-making and topping combinations that bring out the best flavors.
                </p>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pizza-orange rounded-full flex items-center justify-center">
                    <Clock className="text-pizza-brown" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-pizza-brown">Fresh Daily</h3>
                </div>
                <p className="text-gray-700">
                  We source ingredients daily from local markets to ensure that every pizza is made with the freshest produce available.
                </p>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pizza-orange rounded-full flex items-center justify-center">
                    <Award className="text-pizza-brown" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-pizza-brown">Award-Winning</h3>
                </div>
                <p className="text-gray-700">
                  Our unique recipes have won multiple culinary awards and recognitions across the country for their authentic taste.
                </p>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pizza-orange rounded-full flex items-center justify-center">
                    <Users className="text-pizza-brown" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-pizza-brown">Community First</h3>
                </div>
                <p className="text-gray-700">
                  We believe in giving back to the communities we serve, with regular charity events and support for local causes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
