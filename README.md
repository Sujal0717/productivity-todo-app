# 🎯 Productivity Todo App

A modern, full-stack productivity To-Do List application with React, Node.js, MongoDB, featuring 9 beautiful themes, analytics, cloud sync, and advanced task management capabilities.

## ✨ Features

### Core Task Management
- ✅ Add, Edit, Delete tasks
- ✅ Mark complete/incomplete
- ✅ Task timestamps (created/completed)
- ✅ Categories & folders
- ✅ Tags & labels
- ✅ Priority levels (Low/Medium/High)
- ✅ Due dates with calendar picker

### Advanced Productivity
- 🔄 Recurring tasks (daily, weekly, custom)
- ⏰ Task reminders & notifications
- 🎯 Drag-and-drop reordering
- ☑️ Sub-tasks with checklists
- 📊 Progress tracking
- 🔍 Search & filters
- 📈 Sorting options

### Analytics & Insights
- 📊 Daily/weekly completion stats
- 📉 Productivity charts
- 🔥 Streak tracking
- ⏱️ Time tracking per task

### 🎨 9 Theme Options
1. **Light** - Clean & minimal
2. **Dark** - Eye-friendly dark mode
3. **Solarized** - Soft contrast palette
4. **Pastel** - Aesthetic & calm
5. **Glassmorphism** - Blur & transparency
6. **Neumorphism** - Soft shadows
7. **Cyberpunk** - Neon colors
8. **Monochrome** - Minimalist grayscale
9. **Custom Accent** - Your own color!

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- React Query
- Chart.js
- react-beautiful-dnd

### Backend (Coming Soon)
- Node.js
- Express
- MongoDB
- JWT Authentication

## 📁 Project Structure

```
productivity-todo-app/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── tasks/       # Task management
│   │   │   ├── layout/      # Layout components
│   │   │   └── analytics/   # Charts & stats
│   │   ├── context/         # Context providers
│   │   ├── hooks/           # Custom hooks
│   │   ├── routes/          # Page components
│   │   ├── services/        # API services
│   │   ├── styles/          # CSS & themes
│   │   └── utils/           # Utilities
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                    # Node.js backend (coming soon)
│   ├── src/
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Auth & validation
│   │   └── config/          # Configuration
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16
- npm or yarn

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/Sujal0717/productivity-todo-app.git

# Navigate to client directory
cd productivity-todo-app/client

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Theme System

The app uses CSS variables for dynamic theming:

- All themes are defined in `client/src/index.css`
- Apply theme by adding class to `<html>` element (e.g., `theme-dark`)
- Custom accent colors can be set via JavaScript
- Smooth 150ms transitions between themes
- Utility classes: `.glass`, `.neumorphic`, `.neumorphic-inset`

## 📝 Usage

### Basic Task Management
1. Click **+ Add Task** to create a new task
2. Set title, description, priority, due date
3. Add tags and assign to categories
4. Mark complete with checkbox

### Advanced Features
- **Subtasks**: Click on task to add checklist items
- **Recurring**: Set recurrence pattern in task modal
- **Drag & Drop**: Reorder tasks by dragging
- **Search**: Use search bar to filter tasks
- **Analytics**: View stats in Analytics page

## 🔐 Security Features (Backend)
- JWT authentication
- Password hashing with bcrypt
- Input validation
- Rate limiting
- CORS configuration
- Environment variables

## 🌐 Deployment

### Frontend (Vercel/Netlify)
```bash
# Vercel
vercel deploy

# Netlify
netlify deploy --prod
```

### Backend (Render/Railway)
- Set environment variables (MONGODB_URI, JWT_SECRET)
- Connect GitHub repository
- Auto-deploy on push

## 📄 License

MIT License

## 👤 Author

**Sujal0717**
- GitHub: [@Sujal0717](https://github.com/Sujal0717)

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

## 📞 Support

For issues or questions, open a GitHub issue.

---

**Status**: 🚧 In Development

Current features: Theme system, project structure, configuration files

Coming soon: Full UI components, backend API, authentication, deployment
