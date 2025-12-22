import { useState, useEffect } from 'react';
import { loadTasks, saveTasks } from '../utils/storage';
import { TASK_STATUS } from '../utils/constants';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = loadTasks();
    setTasks(data);
    setLoading(false);
  }, []);

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      title: taskData.title,
      description: taskData.description || '',
      status: TASK_STATUS.PENDING,
      priority: taskData.priority || 'medium',
      category: taskData.category || 'Personal',
      tags: taskData.tags || [],
      dueDate: taskData.dueDate || null,
      createdAt: new Date().toISOString(),
      completedAt: null,
      subtasks: taskData.subtasks || [],
    };
    const updated = [...tasks, newTask];
    setTasks(updated);
    saveTasks(updated);
    return newTask;
  };

  const updateTask = (id, updates) => {
    const updated = tasks.map(t => 
      t.id === id ? { ...t, ...updates } : t
    );
    setTasks(updated);
    saveTasks(updated);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter(t => t.id !== id);
    setTasks(updated);
    saveTasks(updated);
  };

  const toggleComplete = (id) => {
    const updated = tasks.map(t => {
      if (t.id === id) {
        const isCompleting = t.status !== TASK_STATUS.COMPLETED;
        return {
          ...t,
          status: isCompleting ? TASK_STATUS.COMPLETED : TASK_STATUS.PENDING,
          completedAt: isCompleting ? new Date().toISOString() : null,
        };
      }
      return t;
    });
    setTasks(updated);
    saveTasks(updated);
  };

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === TASK_STATUS.COMPLETED).length,
    pending: tasks.filter(t => t.status === TASK_STATUS.PENDING).length,
  };

  return {
    tasks,
    loading,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    stats,
  };
};
