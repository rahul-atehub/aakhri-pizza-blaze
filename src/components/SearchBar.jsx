
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

// Mock data for search results
const searchData = [
  { id: 1, type: 'menu', title: 'Margherita Pizza', description: 'Classic Italian pizza with tomato sauce, mozzarella, and basil', path: 'menu' },
  { id: 2, type: 'menu', title: 'Pepperoni Feast', description: 'Pizza topped with pepperoni, cheese, and tomato sauce', path: 'menu' },
  { id: 3, type: 'menu', title: 'BBQ Chicken Pizza', description: 'Grilled chicken with BBQ sauce and onions', path: 'menu' },
  { id: 4, type: 'location', title: 'Jaipur Store', description: 'Our flagship store in Jaipur', path: 'home' },
  { id: 5, type: 'about', title: 'Our Story', description: 'Learn about how AAKHRI PIZZA was founded', path: 'about-us' },
  { id: 6, type: 'menu', title: 'Vegetarian Supreme', description: 'Loaded with fresh vegetables and cheese', path: 'menu' },
  { id: 7, type: 'menu', title: 'Paneer Tikka Pizza', description: 'Tandoori paneer with Indian spices', path: 'menu' },
];

const SearchBar = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setIsOpen(false);
      return;
    }
    
    // Filter results based on search term
    const results = searchData.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(results);
    setIsOpen(results.length > 0);
  };
  
  const handleResultClick = (path) => {
    setSearchTerm('');
    setSearchResults([]);
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(path);
    }
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsOpen(false);
  };
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim().length >= 2) {
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
      setIsOpen(results.length > 0);
    } else {
      setSearchResults([]);
      setIsOpen(false);
    }
  };
  
  return (
    <div className="relative w-full max-w-[250px]">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="relative">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              placeholder="Search our menu..."
              value={searchTerm}
              onChange={handleInputChange}
              className="w-full py-1.5 pl-3 pr-10 rounded-full bg-white/80 border border-pizza-orange-dark focus:outline-none focus:ring-2 focus:ring-pizza-orange-dark text-sm placeholder:text-gray-400"
            />
            {searchTerm ? (
              <button 
                type="button" 
                onClick={clearSearch}
                className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pizza-brown"
              >
                <X size={16} />
              </button>
            ) : null}
            <CollapsibleTrigger asChild>
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pizza-brown"
              >
                <Search size={18} />
              </button>
            </CollapsibleTrigger>
          </form>
        </div>
        
        <CollapsibleContent>
          {searchResults.length > 0 && (
            <Card className="absolute z-50 w-full mt-1 shadow-lg max-h-[300px] overflow-y-auto">
              <CardContent className="p-2">
                <ul className="divide-y divide-gray-100">
                  {searchResults.map((result) => (
                    <li key={result.id} className="py-2">
                      <button
                        className="w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                        onClick={() => handleResultClick(result.path)}
                      >
                        <p className="font-medium text-pizza-brown">{result.title}</p>
                        <p className="text-xs text-gray-500 truncate">{result.description}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default SearchBar;
