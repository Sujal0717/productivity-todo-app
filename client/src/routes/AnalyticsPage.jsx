import { BarChart3, TrendingUp, Award } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[var(--fg)]">Analytics</h1>
        <p className="text-[var(--fg-muted)] mt-1">Track your productivity insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 size={24} className="text-[var(--accent)]" />
            <h3 className="text-lg font-semibold text-[var(--fg)]">Completion Rate</h3>
          </div>
          <p className="text-3xl font-bold text-[var(--accent)] mt-2">0%</p>
        </div>
        <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp size={24} className="text-[var(--success)]" />
            <h3 className="text-lg font-semibold text-[var(--fg)]">Streak</h3>
          </div>
          <p className="text-3xl font-bold text-[var(--success)] mt-2">0 days</p>
        </div>
        <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <Award size={24} className="text-[var(--warning)]" />
            <h3 className="text-lg font-semibold text-[var(--fg)]">Total Completed</h3>
          </div>
          <p className="text-3xl font-bold text-[var(--warning)] mt-2">0</p>
        </div>
      </div>

      <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-12">
        <div className="text-center">
          <BarChart3 size={64} className="text-[var(--fg-muted)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[var(--fg)] mb-2">Start Completing Tasks</h3>
          <p className="text-[var(--fg-muted)]">Analytics will appear here once you start completing tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
