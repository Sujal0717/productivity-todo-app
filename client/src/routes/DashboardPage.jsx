import { Plus, CheckCircle2, Circle } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[var(--fg)]">Dashboard</h1>
          <p className="text-[var(--fg-muted)] mt-1">Manage your tasks efficiently</p>
        </div>
        <button className="flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          <Plus size={20} />
          <span>Add Task</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
          <h3 className="text-[var(--fg-muted)] text-sm font-medium">Total Tasks</h3>
          <p className="text-3xl font-bold text-[var(--fg)] mt-2">0</p>
        </div>
        <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
          <h3 className="text-[var(--fg-muted)] text-sm font-medium">Completed</h3>
          <p className="text-3xl font-bold text-[var(--success)] mt-2">0</p>
        </div>
        <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
          <h3 className="text-[var(--fg-muted)] text-sm font-medium">Pending</h3>
          <p className="text-3xl font-bold text-[var(--warning)] mt-2">0</p>
        </div>
      </div>

      <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-4">Your Tasks</h2>
        <div className="text-center py-12">
          <Circle size={48} className="text-[var(--fg-muted)] mx-auto mb-4" />
          <p className="text-[var(--fg-muted)]">No tasks yet. Click "Add Task" to get started!</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
