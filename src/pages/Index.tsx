
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Locations from '@/components/Locations';
import AboutUs from '@/components/AboutUs';
import Menu from '@/components/Menu';
import OrderOnline from '@/components/OrderOnline';

const Index = () => {
  const [activePage, setActivePage] = useState('home');

  // Render the appropriate content based on active page
  const renderContent = () => {
    switch(activePage) {
      case 'about-us':
        return <AboutUs />;
      case 'menu':
        return <Menu setActivePage={setActivePage} />;
      case 'order-online':
        return <OrderOnline />;
      case 'home':
      default:
        return (
          <>
            <Hero setActivePage={setActivePage} />
            <Locations />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      {/* Main content area with padding for fixed navbar */}
      <main className="flex-1 mt-16 md:mt-20">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-pizza-brown text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AAKHRI PIZZA</h3>
              <p className="text-gray-300">
                Handcrafted pizzas made with love and the finest ingredients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActivePage('home')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActivePage('about-us')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActivePage('menu')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Menu
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActivePage('order-online')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Order Online
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-300 space-y-2">
                <p>Email: info@aakhripizza.com</p>
                <p>Phone: +91 1234567890</p>
                <p>Head Office: Mumbai, India</p>
              </address>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-6 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} AAKHRI PIZZA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
