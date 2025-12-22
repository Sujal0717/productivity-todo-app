import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--fg-muted)] text-lg">No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
