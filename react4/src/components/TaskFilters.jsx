import React, { useState, useEffect } from 'react';

const TaskFilters = ({ filter, setFilter, onSearch }) => {
  const [localSearch, setLocalSearch] = useState('');

  // Debounce search to parent
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(localSearch);
    }, 300); // 300ms debounce

    return () => clearTimeout(handler);
  }, [localSearch, onSearch]);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
      <div className="w-full sm:w-1/2">
        <input
          type="text"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder="Search tasks..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
        {['All', 'Active', 'Completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f.toLowerCase())}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              filter === f.toLowerCase()
                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(TaskFilters);
