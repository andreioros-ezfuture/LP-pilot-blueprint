import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function FadeInOnScroll({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
}: FadeInOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold });

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
