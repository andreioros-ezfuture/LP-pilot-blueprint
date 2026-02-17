import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
  dark?: boolean;
}

export default function Card({
  children,
  className = '',
  highlighted = false,
  dark = false,
}: CardProps) {
  const baseClasses = 'rounded-2xl p-8 transition-all';

  const variantClasses = dark
    ? 'bg-dark text-white'
    : highlighted
      ? 'bg-white border-2 border-accent shadow-lg'
      : 'bg-white border border-border';

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </div>
  );
}
