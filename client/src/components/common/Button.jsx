const Button = ({ children, onClick, variant = 'primary', size = 'md', className = '', disabled = false, type = 'button' }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[var(--accent)] text-white hover:opacity-90 focus:ring-[var(--accent)]',
    secondary: 'bg-[var(--bg-elevated)] text-[var(--fg)] border border-[var(--border)] hover:bg-[var(--bg-glass)]',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    ghost: 'text-[var(--fg)] hover:bg-[var(--bg-glass)]',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? disabledStyles : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
