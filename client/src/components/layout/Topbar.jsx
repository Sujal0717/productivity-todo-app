import ThemeSwitcher from './ThemeSwitcher';
import { Search, Bell } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="h-16 bg-[var(--bg-elevated)] border-b border-[var(--border)] flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <Search size={20} className="text-[var(--fg-muted)]" />
        <input
          type="text"
          placeholder="Search tasks..."
          className="flex-1 bg-transparent border-none outline-none text-[var(--fg)] placeholder:text-[var(--fg-muted)]"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-[var(--bg-glass)] rounded-lg transition-colors">
          <Bell size={20} className="text-[var(--fg-muted)]" />
        </button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Topbar;
