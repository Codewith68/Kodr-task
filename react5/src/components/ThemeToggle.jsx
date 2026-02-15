import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {dark ? "☀" : "🌙"}
    </button>
  );
}

export default React.memo(ThemeToggle);
