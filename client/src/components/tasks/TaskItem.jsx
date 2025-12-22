import { CheckCircle2, Circle, Trash2, Edit2 } from 'lucide-react';
import { TASK_STATUS, PRIORITY_COLORS } from '../../utils/constants';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const isCompleted = task.status === TASK_STATUS.COMPLETED;
  const priorityColor = PRIORITY_COLORS[task.priority] || 'text-gray-500';

  return (
    <div className={`bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg p-4 transition-all hover:shadow-md ${
      isCompleted ? 'opacity-60' : ''
    }`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className="mt-1 transition-colors hover:scale-110"
        >
          {isCompleted ? (
            <CheckCircle2 size={24} className="text-[var(--success)]" />
          ) : (
            <Circle size={24} className="text-[var(--fg-muted)]" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <h3 className={`font-medium text-[var(--fg)] ${
            isCompleted ? 'line-through' : ''
          }`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="text-sm text-[var(--fg-muted)] mt-1">{task.description}</p>
          )}
          <div className="flex items-center gap-3 mt-2 text-xs text-[var(--fg-muted)]">
            <span className={`font-medium ${priorityColor}`}>
              {task.priority}
            </span>
            {task.category && <span>• {task.category}</span>}
            {task.dueDate && <span>• {new Date(task.dueDate).toLocaleDateString()}</span>}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="p-2 hover:bg-[var(--bg-glass)] rounded transition-colors"
          >
            <Edit2 size={16} className="text-[var(--fg-muted)]" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 hover:bg-red-50 rounded transition-colors"
          >
            <Trash2 size={16} className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
