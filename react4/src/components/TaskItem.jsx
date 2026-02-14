import React from 'react';
import TaskTimer from './TaskTimer';

const TaskItem = ({ task, onToggle, onDelete, onToggleTimer }) => {
  return (
    <div className={`group flex items-center justify-between p-4 mb-3 rounded-lg border transition-all ${
        task.completed 
        ? 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 opacity-75' 
        : task.isRunning
            ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800 shadow-md transform scale-[1.01]'
            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md'
    }`}>
      <div className="flex items-start gap-3 flex-1">
        <button
          onClick={() => onToggle(task.id)}
          className={`mt-1 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
            task.completed
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'border-gray-400 hover:border-blue-500'
          }`}
        >
          {task.completed && (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
        
        <div className="flex-1">
          <h3 className={`font-medium text-gray-900 dark:text-gray-100 ${
            task.completed ? 'line-through text-gray-500 dark:text-gray-500' : ''
          }`}>
            {task.title}
          </h3>
          {task.description && (
            <p className={`text-sm mt-1 text-gray-600 dark:text-gray-400 ${
                task.completed ? 'line-through opacity-75' : ''
            }`}>
              {task.description}
            </p>
          )}
          <div className="flex items-center gap-3 mt-2">
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                task.priority === 'High' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
                'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
            }`}>
                {task.priority}
            </span>
            
            {/* Start/Stop Controls */}
            {!task.completed && (
                <button
                    onClick={() => onToggleTimer(task.id)}
                    className={`cursor-pointer flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded transition-colors ${
                        task.isRunning
                        ? 'bg-orange-100 text-orange-600 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-400'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                >
                    {task.isRunning ? (
                        <>
                            <span>❚❚ Pause</span> 
                        </>
                    ) : (
                        <>
                            <span>▶ Start</span>
                        </>
                    )}
                </button>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="ml-4 p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
        title="Delete Task"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

// Compare function for React.memo
const arePropsEqual = (prevProps, nextProps) => {
  return (
    prevProps.task === nextProps.task && // Strategy: relies on immutability of task object
    prevProps.onToggle === nextProps.onToggle &&
    prevProps.onDelete === nextProps.onDelete &&
    prevProps.onToggleTimer === nextProps.onToggleTimer 
  );
};

export default React.memo(TaskItem, arePropsEqual);
