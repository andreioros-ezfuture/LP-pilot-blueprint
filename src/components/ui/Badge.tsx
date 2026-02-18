import React from 'react';

interface BadgeProps {
  variant?: 'accent' | 'success' | 'danger' | 'warning' | 'dark' | 'neutral' | 'info';
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<string, string> = {
  accent: 'bg-accent-light text-accent',
  success: 'bg-success-light text-success',
  danger: 'bg-danger-light text-danger',
  warning: 'bg-warning-light text-warning',
  dark: 'bg-dark text-white',
  neutral: 'bg-light-gray text-body',
  info: 'bg-blue-50 text-blue-600',
};

export default function Badge({
  variant = 'accent',
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`${variantClasses[variant]} px-4 py-1.5 rounded-full text-sm font-semibold inline-block ${className}`.trim()}
    >
      {children}
    </span>
  );
}
