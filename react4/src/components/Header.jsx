import React from 'react';
import GlobalTimer from './GlobalTimer';

const Header = ({ darkMode, setDarkMode, stats, todos }) => {
  return (
    <header className="mb-8">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight">
          Task Manager
        </h1>
        
        <div className="flex items-center gap-4">
            <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Toggle Theme"
            >
            {darkMode ? '🌙' : '☀️'}
            </button>
            <div className="text-xs text-gray-400 font-mono">
                Renders: {stats.renderCount}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* Stats Cards */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{stats.total}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Total Tasks</span>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{stats.active}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Active</span>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">{stats.completed}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Completed</span>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <GlobalTimer todos={todos} />
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Total Time</span>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center">
             <span className="text-2xl font-bold text-gray-800 dark:text-white">
                {stats.total > 0 ? Math.round(stats.completed / stats.total * 100) : 0}%
             </span>
             <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Completion</span>
        </div>
      </div>
       <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center w-fit">
             <span className="text-xl font-bold text-gray-800 dark:text-white">
                {stats.avgTime}
             </span>
             <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Avg/Task</span>
        </div>
    </header>
  );
};

export default React.memo(Header);
