import React from "react";

function SearchFilter({ setFilter, currentFilter }) {
  const filters = [
    { id: "all", label: "All Tasks" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="flex gap-2 bg-slate-100 dark:bg-slate-700/50 p-1 rounded-lg">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => setFilter(f.id)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
            currentFilter === f.id
              ? "bg-white dark:bg-slate-600 text-indigo-600 dark:text-indigo-400 shadow-sm"
              : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default React.memo(SearchFilter);
