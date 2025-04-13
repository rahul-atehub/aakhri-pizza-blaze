
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ProfileSection from './ProfileSection';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT US', id: 'about-us' },
    { name: 'MENU', id: 'menu' },
    { name: 'ORDER ONLINE', id: 'order-online' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-medium text-sm transition-colors ${
                  activePage === item.id 
                    ? 'text-pizza-brown border-b-2 border-pizza-orange-dark' 
                    : 'text-gray-600 hover:text-pizza-brown'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          
          {/* Search and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <ProfileSection />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ProfileSection />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pizza-brown"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="py-3">
              <SearchBar />
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-3 font-medium ${
                  activePage === item.id 
                    ? 'text-pizza-brown' 
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
