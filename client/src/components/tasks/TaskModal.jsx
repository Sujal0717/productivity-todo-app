import { useState, useEffect } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { TASK_STATUS, PRIORITY_OPTIONS, CATEGORY_OPTIONS } from '../../utils/constants';

const TaskModal = ({ isOpen, onClose, onSave, taskToEdit = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    category: 'Personal',
    tags: '',
    dueDate: '',
  });

  useEffect(() => {
    if (taskToEdit) {
      setFormData({
        title: taskToEdit.title || '',
        description: taskToEdit.description || '',
        priority: taskToEdit.priority || 'medium',
        category: taskToEdit.category || 'Personal',
        tags: taskToEdit.tags?.join(', ') || '',
        dueDate: taskToEdit.dueDate || '',
      });
    } else {
      setFormData({
        title: '',
        description: '',
        priority: 'medium',
        category: 'Personal',
        tags: '',
        dueDate: '',
      });
    }
  }, [taskToEdit, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert('Please enter a task title');
      return;
    }

    const taskData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
    };

    onSave(taskData);
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={taskToEdit ? 'Edit Task' : 'Add New Task'}
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-[var(--fg)] mb-1">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Enter task title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-[var(--fg)] mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Enter task description"
          />
        </div>

        {/* Priority & Category */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--fg)] mb-1">
              Priority
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              {PRIORITY_OPTIONS.map(option => (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--fg)] mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              {CATEGORY_OPTIONS.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-sm font-medium text-[var(--fg)] mb-1">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-[var(--fg)] mb-1">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="work, urgent, important"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <Button 
            type="submit" 
            className="flex-1 bg-[var(--accent)] text-white hover:opacity-90"
          >
            {taskToEdit ? 'Update Task' : 'Add Task'}
          </Button>
          <Button 
            type="button" 
            onClick={onClose}
            className="flex-1 bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--border)]"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default TaskModal;
