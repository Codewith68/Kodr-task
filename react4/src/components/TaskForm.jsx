import React, { useRef, useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const priorityRef = useRef('Medium');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value.trim();
    const description = descRef.current.value.trim();
    const priority = priorityRef.current.value;

    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!description) newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if valid
    setErrors({});

    onAdd({
      title,
      description,
      priority,
      createdAt: Date.now(),
      status: 'active'
    });

    // Clear inputs directly using refs to avoid re-render
    titleRef.current.value = '';
    descRef.current.value = '';
    titleRef.current.focus();
  };

  const handleFocus = (field) => {
    if (errors[field]) {
         setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Add New Task</h2>
      
      <div className="space-y-4">
        <div>
            <input
            ref={titleRef}
            type="text"
            placeholder="Task Title"
            onFocus={() => handleFocus('title')}
            className={`w-full px-4 py-2 rounded-md border bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>
        
        <div>
            <textarea
            ref={descRef}
            placeholder="Task Description"
            rows="3"
            onFocus={() => handleFocus('description')}
            className={`w-full px-4 py-2 rounded-md border bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                errors.description ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            ></textarea>
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
        </div>

        <select
            ref={priorityRef}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
        </select>

        <button
          type="submit"
          className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-md transition-colors w-full sm:w-auto cursor-pointer"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

// Memoize to prevent re-render when list updates, only if onAdd changes (which should be stable)
export default React.memo(TaskForm);
