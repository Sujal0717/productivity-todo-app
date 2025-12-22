const STORAGE_KEY = 'productivity_tasks';

export const loadTasks = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};

export const clearTasks = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing tasks:', error);
  }
};
