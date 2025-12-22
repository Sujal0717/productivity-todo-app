export const TASK_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  ARCHIVED: 'archived',
};

export const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
};

export const TASK_CATEGORIES = [
  'Work',
  'Personal',
  'Shopping',
  'Health',
  'Study',
  'Other',
];

export const PRIORITY_COLORS = {
  low: 'text-blue-500',
  medium: 'text-yellow-500',
  high: 'text-red-500',
};

export const STATUS_FILTERS = [
  { id: 'all', label: 'All Tasks' },
  { id: 'pending', label: 'Pending' },
  { id: 'completed', label: 'Completed' },
];
