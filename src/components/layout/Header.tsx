import { useState, useEffect, useRef } from 'react';
import { scrollToSection } from '../../hooks/useScrollToSection';

export default function Header({ showNav = true }: { showNav?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel div placed at the top of the page to detect hero visibility */}
      <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-1" aria-hidden="true" />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-sm h-14 md:h-16'
            : 'bg-transparent h-14 md:h-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className={`font-heading font-bold text-lg transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            ezfuture.ai
          </a>

          {/* Navigation pills */}
          {showNav && <nav className="hidden md:flex items-center gap-2">
            {[
              { label: 'Ce Primesti', target: 'livrabile' },
              { label: 'Cum Functioneaza', target: 'proces' },
              { label: 'Investitie', target: 'investitie' },
              { label: 'Garantie', target: 'garantie' },
            ].map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  isScrolled
                    ? 'text-primary hover:bg-light-gray'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('aplica')}
              className="px-3 py-1.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-colors duration-200"
            >
              Aplica Acum
            </button>
          </nav>}

          {/* Right side: Log In + Sign Up */}
          <div className="flex items-center gap-4">
            <a
              href="https://app.ezfuture.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              Log In
            </a>
            <button
              onClick={() => scrollToSection('aplica')}
              className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
