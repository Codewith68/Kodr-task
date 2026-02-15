import React, { useState, useEffect } from 'react';

const TaskTimer = ({ isRunning, startTime, duration }) => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning && startTime) {
      // Update local elapsed time every second for display
      interval = setInterval(() => {
        setElapsed(Date.now() - startTime);
      }, 1000);
    } else {
      // Stopped
    }
    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  // If running, show saved duration + current elapsed. If not running, just saved duration.
  const totalSeconds = Math.floor((duration + (isRunning ? elapsed : 0)) / 1000);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <span className={`font-mono text-xs font-bold ${
        isRunning ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
    }`}>
      {formatTime(totalSeconds)}
    </span>
  );
};

export default React.memo(TaskTimer);
