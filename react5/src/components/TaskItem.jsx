import { useEffect } from "react";
import React from "react";

function TaskItem({ task, deleteTask, toggleComplete, toggleRunning, updateTime }) {
  useEffect(() => {
    if (!task.isRunning) return;

    const interval = setInterval(() => {
      updateTime(task.id);
    }, 1000);

    return () => clearInterval(interval);
  }, [task.isRunning, task.id, updateTime]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const priorityColors = {
    Low: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
    Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    High: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className={`group p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${
      task.completed 
        ? "bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50 opacity-75" 
        : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700"
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColors[task.priority] || priorityColors.Low}`}>
              {task.priority}
            </span>
            {task.isRunning && (
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            )}
          </div>
          
          <h3 className={`font-semibold text-lg truncate ${task.completed ? "line-through text-slate-400 dark:text-slate-500" : "text-slate-800 dark:text-slate-100"}`}>
            {task.title}
          </h3>
          
          {task.description && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {task.description}
            </p>
          )}
          
          <div className="mt-3 flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded">
              ⏱ {formatTime(task.timeSpent)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <button
            onClick={() => toggleRunning(task.id)}
            disabled={task.completed}
            className={`p-2 rounded-lg transition-colors ${
              task.isRunning 
                ? "bg-amber-100 text-amber-600 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400" 
                : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            title={task.isRunning ? "Pause Timer" : "Start Timer"}
          >
            {task.isRunning ? "⏸" : "▶"}
          </button>

          <button
            onClick={() => toggleComplete(task.id)}
            className={`p-2 rounded-lg transition-colors ${
              task.completed
                ? "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300"
                : "bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
            }`}
             title={task.completed ? "Mark Incomplete" : "Mark Complete"}
          >
            {task.completed ? "↩" : "✓"}
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
            title="Delete Task"
          >
            🗑
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TaskItem);
