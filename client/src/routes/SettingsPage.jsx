import { useTheme } from '../context/ThemeContext';
import { Palette, Moon, Sun } from 'lucide-react';

const SettingsPage = () => {
  const { theme, changeTheme, accentColor, changeAccent } = useTheme();

  const themes = [
    { id: 'light', name: 'Light', icon: Sun },
    { id: 'dark', name: 'Dark', icon: Moon },
    { id: 'solarized', name: 'Solarized', icon: Palette },
    { id: 'pastel', name: 'Pastel', icon: Palette },
    { id: 'cyberpunk', name: 'Cyberpunk', icon: Palette },
    { id: 'mono', name: 'Monochrome', icon: Palette },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[var(--fg)]">Settings</h1>
        <p className="text-[var(--fg-muted)] mt-1">Customize your app experience</p>
      </div>

      <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-4">Appearance</h2>
        
        <div className="mb-6">
          <h3 className="text-sm font-medium text-[var(--fg)] mb-3">Theme</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {themes.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => changeTheme(t.id)}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                    theme === t.id
                      ? 'border-[var(--accent)] bg-[var(--accent-soft)]'
                      : 'border-[var(--border)] hover:border-[var(--accent)]'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{t.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-[var(--fg)] mb-3">Accent Color</h3>
          <input
            type="color"
            value={accentColor}
            onChange={(e) => changeAccent(e.target.value)}
            className="h-12 w-24 rounded-lg cursor-pointer border-2 border-[var(--border)]"
          />
        </div>
      </div>

      <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-2">About</h2>
        <p className="text-[var(--fg-muted)]">Productivity Todo App v1.0.0</p>
        <p className="text-[var(--fg-muted)] text-sm mt-1">Built with React, Tailwind CSS, and ❤️</p>
      </div>
    </div>
  );
};

export default SettingsPage;
