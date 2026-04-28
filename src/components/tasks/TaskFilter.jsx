// src/components/tasks/TaskFilter.jsx
import React from 'react';
import Button from '../ui/Button';

const TaskFilter = ({ currentFilter, onFilterChange, currentSort, onSortChange }) => {
  const filters = [
    { value: 'all', label: 'All', icon: 'M4 6h16M4 12h16M4 18h16' },
    { value: 'active', label: 'Active', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: 'completed', label: 'Completed', icon: 'M5 13l4 4L19 7' }
  ];
  
  const sorts = [
    { value: 'createdAt', label: 'Date Created' },
    { value: 'dueDate', label: 'Due Date' },
    { value: 'priority', label: 'Priority' },
    { value: 'title', label: 'Title' }
  ];
  
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex gap-2">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
              transition-all duration-200
              ${currentFilter === filter.value
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
              }
            `}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={filter.icon} />
            </svg>
            {filter.label}
          </button>
        ))}
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
        <select
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {sorts.map(sort => (
            <option key={sort.value} value={sort.value}>{sort.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;