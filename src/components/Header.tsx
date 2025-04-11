import React from 'react';
import { CheckSquare } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <CheckSquare size={32} className="text-blue-500 dark:text-blue-400 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">TaskMaster</h1>
        </div>
        <ThemeToggle />
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-center">Organize your tasks efficiently</p>
    </header>
  );
};

export default Header;
