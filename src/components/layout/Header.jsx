import React, { useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`py-4 px-6 flex justify-between items-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow`}>
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold">
          <span className="text-blue-600 dark:text-blue-400">Elettro</span>
          <span className="text-gray-700 dark:text-gray-300">-Planner</span>
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;