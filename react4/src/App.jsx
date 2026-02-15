import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';


function App() {
  // --- Render Counter (For Debugging/Verification) ---
  const renderCountRef = React.useRef(0);
  
  React.useEffect(() => {
    renderCountRef.current++;
  });
  // Initial state from localStorage directly initialized (lazy init)
  const [todos, setTodos] = useState(() => {
    try {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
  });

  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  
  // --- Handlers (Memoized) ---
  const addTodo = useCallback((taskData) => {
    const newTodo = { ...taskData, id: crypto.randomUUID() };
    setTodos(prev => {
        const updated = [newTodo, ...prev];
        localStorage.setItem('todos', JSON.stringify(updated));
        return updated;
    });
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(prev => {
        const updated = prev.map(t => 
            t.id === id ? { ...t, completed: !t.completed } : t
        );
        localStorage.setItem('todos', JSON.stringify(updated));
        return updated;
    });
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => {
        const updated = prev.filter(t => t.id !== id);
        localStorage.setItem('todos', JSON.stringify(updated));
        return updated;
    });
  }, []);

  const toggleTaskTimer = useCallback((id) => {
    setTodos(prev => {
        const updated = prev.map(t => {
            if (t.id === id) {
                if (t.isRunning) {
                    // Stopping: Calculate elapsed and add to duration
                    const elapsed = Date.now() - (t.startTime || Date.now());
                    return {
                        ...t,
                        isRunning: false,
                        startTime: null,
                        duration: (t.duration || 0) + elapsed
                    };
                } else {
                    // Starting
                    return {
                        ...t,
                        isRunning: true,
                        startTime: Date.now()
                    };
                }
            }
            return t; 
        });
        localStorage.setItem('todos', JSON.stringify(updated));
        return updated;
    });
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  // --- Derived State (Memoized) ---
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      const matchesFilter = 
        filter === 'all' ? true :
        filter === 'active' ? !todo.completed :
        todo.completed;
      
      const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesFilter && matchesSearch;
    });
  }, [todos, filter, searchQuery]);

  // --- Stats Calculation ---
  const stats = useMemo(() => {
    const completedTasks = todos.filter(t => t.completed);
    const completedCount = completedTasks.length;
    const totalCount = todos.length;
    
    // Average Time specific to Completed Tasks
    let avgTimeStr = "0s";
    if (completedCount > 0) {
        // Sum durations of completed tasks
        const totalCompletedDuration = completedTasks.reduce((acc, t) => acc + (t.duration || 0), 0);
        const avgMs = totalCompletedDuration / completedCount;
        avgTimeStr = `${Math.floor(avgMs / 1000)}s`;
    }

    // Total Time (Sum of all tasks)
    const allTasksDuration = todos.reduce((acc, t) => {
        return acc + (t.duration || 0);
    }, 0);

    const formatTotal = (ms) => {
        const seconds = Math.floor(ms / 1000);
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        const hours = Math.floor(mins / 60);
        const displayMins = mins % 60;
        
        if (hours > 0) return `${hours}h ${displayMins}m`;
        return `${displayMins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return {
      total: totalCount,
      active: totalCount - completedCount,
      completed: completedCount,
      avgTime: avgTimeStr,
      totalTime: formatTotal(allTasksDuration),
      renderCount: renderCountRef.current
    };
  }, [todos]);

  // --- Theme Effect ---
  // Manual class toggle for Tailwind
  const toggleTheme = useCallback(() => {
    setDarkMode(prev => {
        const next = !prev;
        if (next) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        return next;
    });
  }, []);


  return (
    <div className={`min-h-screen py-8 px-4 transition-colors duration-200 bg-gray-100 dark:bg-gray-900`}>
      <div className="max-w-4xl mx-auto">
        <Header 
            darkMode={darkMode} 
            setDarkMode={toggleTheme} 
            stats={stats}
            todos={todos}
        />
        
        <TaskForm onAdd={addTodo} />
        
        <TaskFilters 
            filter={filter} 
            setFilter={setFilter} 
            onSearch={handleSearch} 
        />
        
        <TaskList 
            tasks={filteredTodos} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
            onToggleTimer={toggleTaskTimer}
        />
      </div>
    </div>
  );
}

export default App;
