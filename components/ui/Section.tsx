import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'muted' | 'white' | 'navy' | 'none';
}

export function Section({ children, id, className = '', background = 'default' }: SectionProps) {
  const backgrounds = {
    default: 'bg-pattern-light border-y border-white/60',
    muted: 'bg-pattern-light border-y border-white/60',
    white: 'bg-pattern-light border-y border-white/60',
    navy: 'bg-pattern-dark text-white border-y border-white/10',
    none: ''
  };

  const bgClass = background === 'none' ? '' : (backgrounds[background] || backgrounds.default);

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      {children}
    </section>
  );
}

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
}
