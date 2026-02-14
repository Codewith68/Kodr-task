import React, { useState, useEffect } from 'react';

const GlobalTimer = ({ todos }) => {
  const [displayTime, setDisplayTime] = useState("00:00");

  useEffect(() => {
    // Check if any task is running
    const runningTasks = todos.filter(t => t.isRunning);
    const hasRunning = runningTasks.length > 0;

    const calculateTotal = () => {
        const totalDuration = todos.reduce((acc, t) => {
            // For running tasks, add elapsed time since start
            const added = t.isRunning ? (Date.now() - t.startTime) : 0;
            return acc + (t.duration || 0) + added;
        }, 0);

        const seconds = Math.floor(totalDuration / 1000);
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        const hours = Math.floor(mins / 60);
        const displayMins = mins % 60;
        
        let timeStr;
        if (hours > 0) {
            timeStr = `${hours}h ${displayMins}m ${secs}s`; // Optional: show seconds even with hours for liveness
        } else {
            timeStr = `${displayMins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        
        setDisplayTime(timeStr);
    };

    // Initial calculation
    calculateTotal();

    let interval;
    if (hasRunning) {
        interval = setInterval(calculateTotal, 1000);
    }

    return () => clearInterval(interval);
  }, [todos]); // Re-create interval only when todos change (e.g. pause/start/add/delete)

  return (
    <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
        {displayTime}
    </div>
  );
};

export default React.memo(GlobalTimer);
