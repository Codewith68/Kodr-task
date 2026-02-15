import StatsPanel from "./StatsPanel";
import ThemeToggle from "./ThemeToggle";
import React, { useRef } from "react";

function Header({ tasks }) {
  const renderCount = useRef(0);
  
  // Use effect to count commits (safe)
  React.useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <header className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
            Task Flow
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="flex items-center gap-4 self-start md:self-center">
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
              Render: <span className="text-indigo-500 font-bold">{renderCount.current}</span>
            </span>
            <ThemeToggle />
        </div>
      </div>

      <StatsPanel tasks={tasks} />
    </header>
  );
}

export default React.memo(Header);
