import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'accent-border';
}

export function Card({ children, className = '', variant = 'default', ...props }: CardProps) {
  const baseStyles = 'liquid-glass-card overflow-hidden transition-all duration-300 ease-out';

  const variants = {
    default: '',
    'accent-border': 'border-s-4 border-s-sky-500 shadow-md'
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
