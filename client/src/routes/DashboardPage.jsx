import { useState } from 'react';
import { Plus, CheckCircle2, Circle, Clock } from 'lucide-react';
import { useTasks } from '../hooks/useTasks';
import TaskList from '../components/tasks/TaskList';
import TaskModal from '../components/tasks/TaskModal';

const DashboardPage = () => {
  const { tasks, loading, addTask, updateTask, deleteTask, toggleComplete, stats } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleAddTask = () => {
    setTaskToEdit(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleSaveTask = (taskData) => {
    if (taskToEdit) {
      updateTask(taskToEdit.id, taskData);
    } else {
      addTask(taskData);
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return task.status === 'pending';
    if (filter === 'completed') return task.status === 'completed';
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-[var(--fg-muted)] text-lg">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[var(--fg)]">Dashboard</h1>
          <p className="text-[var(--fg-muted)] mt-1">Manage your tasks efficiently</p>
        </div>
        <button 
          onClick={handleAddTask}
          className="flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Plus size={20} />
          <span>Add Task</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[var(--fg-muted)] text-sm font-medium">Total Tasks</h3>
              <p className="text-3xl font-bold text-[var(--fg)] mt-2">{stats.total}</p>
            </div>
            <Circle size={48} className="text-[var(--fg-muted)] mx-auto" />
          </div>
        </div>

        <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[var(--fg-muted)] text-sm font-medium">Completed</h3>
              <p className="text-3xl font-bold text-[var(--success)] mt-2">{stats.completed}</p>
            </div>
            <CheckCircle2 size={48} className="text-[var(--success)]" />
          </div>
        </div>

        <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[var(--fg-muted)] text-sm font-medium">Pending</h3>
              <p className="text-3xl font-bold text-[var(--warning)] mt-2">{stats.pending}</p>
            </div>
            <Clock size={48} className="text-[var(--warning)]" />
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === 'all' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-elevated)] text-[var(--fg)] border border-[var(--border)] hover:bg-[var(--border)]'}`}
        >
          All ({stats.total})
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === 'pending' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-elevated)] text-[var(--fg)] border border-[var(--border)] hover:bg-[var(--border)]'}`}
        >
          Pending ({stats.pending})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === 'completed' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-elevated)] text-[var(--fg)] border border-[var(--border)] hover:bg-[var(--border)]'}`}
        >
          Completed ({stats.completed})
        </button>
      </div>

      <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-[var(--fg)] mb-4">Your Tasks</h2>
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleComplete}
          onDelete={deleteTask}
          onEdit={handleEditTask}
        />
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setTaskToEdit(null);
        }}
        onSave={handleSaveTask}
        taskToEdit={taskToEdit}
      />
    </div>
  );
};

export default DashboardPage;
