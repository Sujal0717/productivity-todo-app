import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, BarChart3, Settings } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/calendar', icon: Calendar, label: 'Calendar' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-[var(--bg-elevated)] border-r border-[var(--border)] flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[var(--accent)]">📝 TodoApp</h1>
      </div>
      <nav className="flex-1 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? 'bg-[var(--accent)] text-white'
                  : 'text-[var(--fg-muted)] hover:bg-[var(--bg-glass)]'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
