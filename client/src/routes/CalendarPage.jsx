import { Calendar as CalendarIcon } from 'lucide-react';

const CalendarPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[var(--fg)]">Calendar</h1>
        <p className="text-[var(--fg-muted)] mt-1">View your tasks by date</p>
      </div>

      <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-12">
        <div className="text-center">
          <CalendarIcon size={64} className="text-[var(--fg-muted)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[var(--fg)] mb-2">Calendar View Coming Soon</h3>
          <p className="text-[var(--fg-muted)]">Full calendar integration will be available in the next update.</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
