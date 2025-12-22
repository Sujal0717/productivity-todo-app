import { useTheme } from '../../context/ThemeContext';
import { Palette } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();
  
  const themes = [
    { id: 'light', name: 'Light' },
    { id: 'dark', name: 'Dark' },
    { id: 'solarized', name: 'Solarized' },
    { id: 'pastel', name: 'Pastel' },
    { id: 'cyberpunk', name: 'Cyberpunk' },
    { id: 'mono', name: 'Monochrome' },
  ];

  return (
    <div className="relative group">
      <button className="p-2 hover:bg-[var(--bg-glass)] rounded-lg transition-colors">
        <Palette size={20} className="text-[var(--fg-muted)]" />
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="p-2">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => changeTheme(t.id)}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                theme === t.id
                  ? 'bg-[var(--accent)] text-white'
                  : 'hover:bg-[var(--bg-glass)] text-[var(--fg)]'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
