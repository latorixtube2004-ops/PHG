import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'accent-border' | 'dark';
}

export function Card({ children, className = '', variant = 'default', ...props }: CardProps) {
  const isCustomBg =
    className.includes('bg-') ||
    className.includes('liquid-glass-dark') ||
    variant === 'dark';

  const baseStyles = isCustomBg
    ? 'rounded-3xl overflow-hidden transition-all duration-300 ease-out'
    : 'liquid-glass-card overflow-hidden transition-all duration-300 ease-out';

  const variants = {
    default: '',
    'accent-border': 'border-s-4 border-s-sky-500 shadow-md',
    dark: 'liquid-glass-dark text-white border border-white/20',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
