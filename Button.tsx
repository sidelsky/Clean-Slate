import React from 'react';

// Figma Design Tokens - Explicit token values from Figma
const FIGMA_TOKENS = {
  // Color Tokens
  'button/primary/surface': '#8fd6c9',
  'button/primary/foreground': '#32373d',
  
  // Typography Tokens
  'typography/font-family': 'Kollektif',
  'CTA/Medium/font-size': '16px',
  'CTA/Medium/font-weight': '700', // Bold
  'CTA/Regular': {
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  
  // Spacing Tokens
  'padding/M': '12px',
  'padding/L': '16px',
  
  // Border Radius Tokens
  'cornerRadius/L': '8px',
  
  // Sizing Tokens
  'min-height': '48px',
} as const;

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
  // Base styles using explicit Figma token values
  const baseStyles = [
    'font-bold', // CTA/Medium/font-weight: 700 (Bold)
    'font-kollektif', // typography/font-family: Kollektif (configured in tailwind.config.js)
    `leading-[${FIGMA_TOKENS['CTA/Regular'].lineHeight}]`, // CTA/Regular lineHeight token
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    `min-h-[${FIGMA_TOKENS['min-height']}]`, // min-height token
    'inline-flex items-center justify-center',
  ].join(' ');
  
  // Variant styles using explicit Figma token values
  const variantStyles = {
    primary: [
      `bg-[${FIGMA_TOKENS['button/primary/surface']}]`, // button/primary/surface token
      `text-[${FIGMA_TOKENS['button/primary/foreground']}]`, // button/primary/foreground token
      'border border-[#3c4046]/20', // Subtle border
      'hover:bg-[#7fc9bb] hover:border-[#3c4046]/30 hover:shadow-sm',
      'active:bg-[#6fb8a8] active:border-[#3c4046]/40 active:shadow-inner',
      `focus:ring-[${FIGMA_TOKENS['button/primary/surface']}] focus:ring-opacity-50`,
      `disabled:bg-[${FIGMA_TOKENS['button/primary/surface']}] disabled:opacity-50 disabled:cursor-not-allowed disabled:border-[#3c4046]/10`,
      `rounded-[${FIGMA_TOKENS['cornerRadius/L']}]`, // cornerRadius/L token
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
    medium: [
      `px-[${FIGMA_TOKENS['padding/M']}]`, // padding/M token
      `py-[${FIGMA_TOKENS['padding/M']}]`, // padding/M token
      'text-base',
      `text-[${FIGMA_TOKENS['CTA/Medium/font-size']}]`, // CTA/Medium/font-size token
      `min-h-[${FIGMA_TOKENS['min-height']}]`, // min-height token
    ].join(' '),
    large: [
      `px-[${FIGMA_TOKENS['padding/L']}]`, // padding/L token
      `py-[${FIGMA_TOKENS['padding/L']}]`, // padding/L token
      'text-lg',
      `min-h-[56px]`,
    ].join(' '),
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
