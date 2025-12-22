import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
          onClick={onClose}
        />
        <div className={`relative bg-[var(--bg-elevated)] rounded-lg shadow-xl ${sizes[size]} w-full`}>
          <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
            <h3 className="text-xl font-semibold text-[var(--fg)]">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[var(--bg-glass)] rounded transition-colors"
            >
              <X size={20} className="text-[var(--fg-muted)]" />
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
