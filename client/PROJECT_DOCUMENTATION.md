# Productivity Todo App - Complete Implementation Guide

## Project Overview

This document provides complete implementation details for building the Productivity Todo App - a modern, full-stack task management application with advanced features, multiple themes, and analytics.

## Current Status ✅

### Completed
- ✅ Repository structure
- ✅ package.json with all dependencies
- ✅ Vite configuration
- ✅ Complete theme system (9 themes in index.css)
- ✅ Comprehensive README documentation

### In Progress 🚧
- Frontend UI components
- React component architecture
- State management setup

### Pending ⏳
- Backend API
- MongoDB integration
- Authentication system
- Deployment

---

## Frontend Architecture

### Tech Stack
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **React Query (TanStack)** - Server state management
- **Chart.js + react-chartjs-2** - Data visualization
- **react-beautiful-dnd** - Drag and drop
- **date-fns** - Date utilities
- **axios** - HTTP client

### Project Structure

```
client/
├── src/
│   ├── main.jsx                 # App entry point
│   ├── App.jsx                  # Root component with routing
│   ├── index.css                # Global styles & themes ✅
│   │
│   ├── routes/                  # Page components
│   │   ├── DashboardPage.jsx    # Main task list view
│   │   ├── CalendarPage.jsx     # Calendar view
│   │   ├── AnalyticsPage.jsx    # Stats & charts
│   │   ├── SettingsPage.jsx     # User preferences & themes
│   │   └── ProfilePage.jsx      # User profile
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   │   ├── Topbar.jsx       # Header with search
│   │   │   └── ThemeSwitcher.jsx # Theme selector
│   │   │
│   │   ├── tasks/
│   │   │   ├── TaskList.jsx     # Task list container
│   │   │   ├── TaskItem.jsx     # Single task card
│   │   │   ├── TaskModal.jsx    # Add/Edit task dialog
│   │   │   ├── SubtaskList.jsx  # Checklist component
│   │   │   ├── TagPill.jsx      # Tag badge
│   │   │   └── PriorityBadge.jsx # Priority indicator
│   │   │
│   │   ├── analytics/
│   │   │   ├── StatCard.jsx     # Metric display card
│   │   │   ├── CompletionChart.jsx # Line chart
│   │   │   └── StreakDisplay.jsx # Streak counter
│   │   │
│   │   └── common/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Modal.jsx
│   │       └── Loader.jsx
│   │
│   ├── context/
│   │   ├── ThemeContext.jsx     # Theme state & switcher
│   │   └── AuthContext.jsx      # Auth state
│   │
│   ├── hooks/
│   │   ├── useTasks.js          # Task CRUD operations
│   │   ├── useLocalStorage.js   # LocalStorage hook
│   │   ├── useDebouncedSearch.js # Search optimization
│   │   └── useProductivityStats.js # Analytics calculations
│   │
│   ├── services/
│   │   ├── apiClient.js         # Axios instance
│   │   ├── taskService.js       # Task API calls
│   │   ├── authService.js       # Auth API calls
│   │   └── localStorage.js      # Local storage utilities
│   │
│   └── utils/
│       ├── dateUtils.js         # Date formatting
│       ├── taskUtils.js         # Task helpers
│       └── constants.js         # App constants
│
├── public/
│   └── vite.svg
├── index.html                   # HTML entry
├── package.json                 # Dependencies ✅
├── vite.config.js              # Vite config ✅
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
└── .env.example                # Environment template
```

---

## Implementation Plan

### Phase 1: Core Setup (NEXT STEPS)

#### 1.1 Create index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Productivity Todo App</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

#### 1.2 Create tailwind.config.js
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elevated': 'var(--bg-elevated)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
}
```

#### 1.3 Create postcss.config.js
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### 1.4 Create src/main.jsx
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
```

### Phase 2: Theme System

#### 2.1 ThemeContext.jsx - CRITICAL COMPONENT
```jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const THEMES = [
  'light', 'dark', 'solarized', 'pastel', 
  'glass', 'neumorphic', 'cyberpunk', 'mono'
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  
  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem('accentColor') || null;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    THEMES.forEach(t => root.classList.remove(`theme-${t}`));
    
    // Add current theme
    if (theme !== 'light') {
      root.classList.add(`theme-${theme}`);
    }
    
    // Apply custom accent if set
    if (accentColor) {
      root.style.setProperty('--accent', accentColor);
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, accentColor]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const changeAccent = (color) => {
    setAccentColor(color);
    localStorage.setItem('accentColor', color);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, accentColor, changeAccent, availableThemes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```

### Phase 3: Routing & Layout

#### 3.1 App.jsx
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import DashboardPage from './routes/DashboardPage';
import CalendarPage from './routes/CalendarPage';
import AnalyticsPage from './routes/AnalyticsPage';
import SettingsPage from './routes/SettingsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-fg flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### Phase 4: localStorage Service (Basic Version)

#### 4.1 services/localStorage.js
```js
const STORAGE_KEY = 'productivity_tasks';

export const localStorage
