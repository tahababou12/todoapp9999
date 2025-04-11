import React from 'react';
import { Filter } from 'lucide-react';

type FilterType = 'all' | 'active' | 'completed';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  todoCount: {
    total: number;
    active: number;
    completed: number;
  };
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, onFilterChange, todoCount }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-3 sm:mb-0">
        <Filter size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
        <span className="text-gray-700 dark:text-gray-300 font-medium">Filter:</span>
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'all'
              ? 'bg-blue-500 dark:bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          All ({todoCount.total})
        </button>
        <button
          onClick={() => onFilterChange('active')}
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'active'
              ? 'bg-blue-500 dark:bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Active ({todoCount.active})
        </button>
        <button
          onClick={() => onFilterChange('completed')}
          className={`px-3 py-1 rounded-full text-sm ${
            filter === 'completed'
              ? 'bg-blue-500 dark:bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Completed ({todoCount.completed})
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
