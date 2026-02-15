
import { useState, useMemo, useCallback, useEffect } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import SearchFilter from "./components/SearchFilter";
import { useTheme } from "./context/ThemeContext";

function App() {
  /* Load tasks from localStorage on mount */
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [filter, setFilter] = useState("all");
  const { dark } = useTheme();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((task) => {
    setTasks((prev) => [task, ...prev]);
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toggleComplete = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed, isRunning: false } : t
      )
    );
  }, []);

  const updateTime = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, timeSpent: t.timeSpent + 1 } : t
      )
    );
  }, []);

  const toggleRunning = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isRunning: !t.isRunning } : { ...t, isRunning: false } // Only one runs at a time? Optional, but good for focus.
      )
    );
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((t) => !t.completed));
  }, []);

  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-slate-900 text-slate-100' : 'bg-slate-100 text-slate-900'} font-sans`}>
      <div className="max-w-3xl mx-auto p-4 sm:p-6 space-y-6">
        <Header tasks={tasks} />
        
        <main className="space-y-6">
          <AddTaskForm addTask={addTask} />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <SearchFilter setFilter={setFilter} currentFilter={filter} />
            
            {tasks.some(t => t.completed) && (
              <button 
                onClick={clearCompleted}
                className="text-sm text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 font-medium transition-colors"
              >
                Clear Completed
              </button>
            )}
          </div>

          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            toggleRunning={toggleRunning}
            updateTime={updateTime}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
