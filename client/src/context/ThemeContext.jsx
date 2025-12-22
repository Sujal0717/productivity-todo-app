import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [accentColor, setAccentColor] = useState('#3b82f6');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedAccent = localStorage.getItem('accentColor') || '#3b82f6';
    setTheme(savedTheme);
    setAccentColor(savedAccent);
    applyTheme(savedTheme, savedAccent);
  }, []);

  const applyTheme = (themeName, accent) => {
    document.documentElement.className = `theme-${themeName}`;
    document.documentElement.style.setProperty('--accent', accent);
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme, accentColor);
  };

  const changeAccent = (color) => {
    setAccentColor(color);
    localStorage.setItem('accentColor', color);
    document.documentElement.style.setProperty('--accent', color);
  };

  return (
    <ThemeContext.Provider value={{ theme, accentColor, changeTheme, changeAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
