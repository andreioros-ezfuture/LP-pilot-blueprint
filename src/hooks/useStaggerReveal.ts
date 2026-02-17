import { useEffect, useRef, useState } from 'react';

/**
 * Hook for staggered reveal animations.
 * Returns `isVisible` (parent in view) and a helper `getStaggerClass(index)`
 * that applies a cascading delay to each child element.
 */
export function useStaggerReveal(threshold = 0.1, staggerMs = 100) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, prefersReducedMotion]);

  const getStaggerStyle = (index: number) => ({
    transitionDelay: isVisible || prefersReducedMotion ? (prefersReducedMotion ? '0ms' : `${index * staggerMs}ms`) : '0ms',
  });

  const getStaggerClass = (_index: number, base = '') =>
    `${base} ${prefersReducedMotion ? '' : 'transition-all duration-700'} ${
      isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-6'
    }`.trim();

  return { ref, isVisible, getStaggerClass, getStaggerStyle };
}
