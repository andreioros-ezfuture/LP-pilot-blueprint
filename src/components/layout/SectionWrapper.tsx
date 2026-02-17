import React from 'react';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  variant?: 'white' | 'light' | 'dark' | 'accent';
  maxWidth?: 'narrow' | 'medium' | 'standard' | 'wide';
  className?: string;
}

const variantClasses: Record<string, string> = {
  white: 'bg-warm-white',
  light: 'bg-light-gray',
  dark: 'bg-dark text-white',
  accent: 'bg-accent text-white',
};

const maxWidthClasses: Record<string, string> = {
  narrow: 'max-w-2xl',
  medium: 'max-w-4xl',
  standard: 'max-w-6xl',
  wide: 'max-w-7xl',
};

export default function SectionWrapper({
  id,
  children,
  variant = 'white',
  maxWidth = 'standard',
  className = '',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-14 md:py-24 ${variantClasses[variant]} ${className}`}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClasses[maxWidth]}`}>
        {children}
      </div>
    </section>
  );
}
