
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
  return (
    <div className="relative min-h-screen flex items-center bg-pizza-off-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pizza-pattern opacity-5"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-pizza-brown leading-tight">
              The <span className="text-pizza-orange-dark">Ultimate</span> Pizza Experience
            </h1>
            <p className="text-lg text-gray-700">
              Handcrafted with love and the finest ingredients. Each slice tells our story of passion and tradition.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => setActivePage('order-online')}
                className="bg-pizza-orange-dark hover:bg-pizza-brown text-white px-8 py-6 text-lg rounded-full"
              >
                Order Now
              </Button>
              <Button 
                onClick={() => setActivePage('menu')}
                variant="outline"
                className="border-pizza-orange-dark text-pizza-brown hover:bg-pizza-orange/30 px-8 py-6 text-lg rounded-full"
              >
                View Menu
              </Button>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[500px] flex justify-center">
            {/* Pizza images with animation */}
            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-pizza-orange/30 rounded-full blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Delicious Pizza" 
              className="absolute w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-xl animate-float z-20"
            />
            <img 
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Pizza Slice" 
              className="absolute bottom-10 -left-4 w-36 h-36 md:w-48 md:h-48 object-cover rounded-full shadow-lg animate-float z-10"
              style={{ animationDelay: '1s' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Pizza Toppings" 
              className="absolute top-20 -right-4 w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg animate-float z-10"
              style={{ animationDelay: '2s' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
