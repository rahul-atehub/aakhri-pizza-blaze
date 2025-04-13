
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Here you would implement actual search functionality
  };
  
  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-[250px]">
      <input
        type="text"
        placeholder="Search our menu..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-1.5 pl-3 pr-10 rounded-full bg-white/80 border border-pizza-orange-dark focus:outline-none focus:ring-2 focus:ring-pizza-orange-dark text-sm placeholder:text-gray-400"
      />
      <button 
        type="submit" 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pizza-brown"
      >
        <Search size={18} />
      </button>
    </form>
  );
};

export default SearchBar;
