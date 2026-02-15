import { useMemo } from "react";

function StatsPanel({ tasks }) {
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const active = total - completed;
    const totalTime = tasks.reduce((a, t) => a + t.timeSpent, 0);
    const avg = total ? Math.floor(totalTime / total) : 0;

    return { total, active, completed, totalTime, avg };
  }, [tasks]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <StatCard label="Total Tasks" value={stats.total} color="bg-blue-500/10 text-blue-600 dark:text-blue-400" />
      <StatCard label="Active" value={stats.active} color="bg-orange-500/10 text-orange-600 dark:text-orange-400" />
      <StatCard label="Completed" value={stats.completed} color="bg-green-500/10 text-green-600 dark:text-green-400" />
      <StatCard label="Total Time" value={`${stats.totalTime}s`} color="bg-purple-500/10 text-purple-600 dark:text-purple-400" />
      <StatCard label="Avg Time" value={`${stats.avg}s`} color="bg-teal-500/10 text-teal-600 dark:text-teal-400" />
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className={`p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm ${color} backdrop-blur-sm`}>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs font-medium uppercase tracking-wider opacity-80">{label}</p>
    </div>
  );
}

export default StatsPanel;
