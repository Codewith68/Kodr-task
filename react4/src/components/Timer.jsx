import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <span className="text-2xl font-bold font-mono text-gray-800 dark:text-gray-100">
        {formatTime(time)}
      </span>
      <button 
        onClick={() => setIsRunning(!isRunning)}
        className={`mt-2 text-xs px-3 py-1 rounded-full font-medium transition-colors ${
            isRunning 
            ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400' 
            : 'bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400'
        }`}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <span className="text-[10px] text-gray-400 mt-1">Total Time</span>
    </div>
  );
};

export default React.memo(Timer);
