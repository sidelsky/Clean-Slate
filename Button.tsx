import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
}) => {
  // Base styles with all state transitions
  const baseStyles = 'font-bold font-kollektif transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[48px] inline-flex items-center justify-center';
  
  // Variant styles with all states: default, hover, active, focus, disabled
  const variantStyles = {
    primary: [
      'bg-[#8fd6c9] text-[#32373d]', // Default state
      'hover:bg-[#7fc9bb] hover:shadow-sm', // Hover state
      'active:bg-[#6fb8a8] active:shadow-inner', // Active/pressed state
      'focus:ring-[#8fd6c9] focus:ring-opacity-50', // Focus state
      'disabled:bg-[#8fd6c9] disabled:opacity-50 disabled:cursor-not-allowed', // Disabled state
      'rounded-[8px]',
    ].join(' '),
    secondary: [
      'bg-gray-600 text-white',
      'hover:bg-gray-700 hover:shadow-sm',
      'active:bg-gray-800 active:shadow-inner',
      'focus:ring-gray-500 focus:ring-opacity-50',
      'disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed',
      'rounded-lg',
    ].join(' '),
    outline: [
      'border-2 border-blue-600 text-blue-600 bg-transparent',
      'hover:bg-blue-50 hover:border-blue-700',
      'active:bg-blue-100 active:border-blue-800',
      'focus:ring-blue-500 focus:ring-opacity-50',
      'disabled:border-blue-300 disabled:text-blue-300 disabled:opacity-50 disabled:cursor-not-allowed',
      'rounded-lg',
    ].join(' '),
  };
  
  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm min-h-[36px]',
    medium: 'px-[12px] py-2 text-base text-[16px] min-h-[48px]',
    large: 'px-[16px] py-3 text-lg min-h-[56px]',
  };
  
  const isDisabled = disabled || loading;
  
  const combinedStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    isDisabled ? '' : 'cursor-pointer',
    loading ? 'relative' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={combinedStyles}
      aria-busy={loading}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
