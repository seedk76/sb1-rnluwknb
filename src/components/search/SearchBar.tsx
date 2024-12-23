import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-full shadow-sm overflow-hidden border border-gray-100">
        <div className="flex-shrink-0 pl-4">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search services..."
          className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none"
        />
        <button className="flex items-center px-4 py-3 bg-white border-l border-gray-100">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="ml-2 text-sm text-gray-600">Location</span>
        </button>
      </div>
    </div>
  );
}