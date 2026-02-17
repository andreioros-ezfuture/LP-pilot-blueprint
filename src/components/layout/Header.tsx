import { useState, useEffect, useRef, useCallback } from 'react';
import { scrollToSection } from '../../hooks/useScrollToSection';

const NAV_ITEMS = [
  { label: 'Ce Primesti', target: 'livrabile' },
  { label: 'Cum Functioneaza', target: 'proces' },
  { label: 'Investitie', target: 'investitie' },
  { label: 'Garantie', target: 'garantie' },
];

export default function Header({ showNav = true }: { showNav?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Intersection observer for scroll-based header style
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

  // Close mobile menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    window.addEventListener('scroll', closeMenu, { passive: true });
    return () => window.removeEventListener('scroll', closeMenu);
  }, [menuOpen, closeMenu]);

  // Close mobile menu when viewport crosses md breakpoint (768px)
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) closeMenu();
    };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [closeMenu]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleMobileNav = (target: string) => {
    closeMenu();
    scrollToSection(target);
  };

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

          {/* Desktop navigation pills */}
          {showNav && <nav className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
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

          {/* Right side: Hamburger (mobile) + Log In + Sign Up */}
          <div className="flex items-center gap-4">
            {/* Hamburger button — mobile only */}
            {showNav && (
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className={`md:hidden relative w-6 h-5 flex flex-col justify-between items-center transition-colors duration-300 ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <span
                  className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? 'translate-y-[9px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                    menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? '-translate-y-[9px] -rotate-45' : ''
                  }`}
                />
              </button>
            )}

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

      {/* Mobile menu backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '3.5rem' }}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile slide-down navigation panel */}
      <nav
        className={`fixed top-14 left-0 right-0 bg-white shadow-lg z-40 md:hidden py-4 px-6 transition-all duration-300 ease-out ${
          menuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {NAV_ITEMS.map((item, idx) => (
          <button
            key={item.target}
            onClick={() => handleMobileNav(item.target)}
            className={`block w-full text-left py-3 text-primary font-semibold text-base transition-colors duration-150 hover:text-accent ${
              idx < NAV_ITEMS.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => handleMobileNav('aplica')}
          className="block w-full bg-accent hover:bg-accent-hover text-white rounded-xl py-3 text-center font-semibold mt-2 transition-colors duration-200"
        >
          Aplica Acum
        </button>
      </nav>
    </>
  );
}
