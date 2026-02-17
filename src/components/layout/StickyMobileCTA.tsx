import { useState, useEffect } from 'react';
import { scrollToSection } from '../../hooks/useScrollToSection';

export default function StickyMobileCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past approximately one viewport height (hero)
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      setShowScrollTop(pastHero);

      // Small delay for slide-up animation
      if (pastHero && !isVisible) {
        requestAnimationFrame(() => setIsVisible(true));
      } else if (!pastHero) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile: Fixed bottom bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ${
          showScrollTop ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => scrollToSection('aplica')}
            className="flex-1 bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-sm"
          >
            Vreau Planul Meu
          </button>
          <button
            onClick={scrollToTop}
            aria-label="Mergi sus"
            className="shrink-0 w-11 h-11 bg-dark hover:bg-dark-end text-white rounded-xl flex items-center justify-center transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop: Fixed scroll-to-top circle button */}
      <button
        onClick={scrollToTop}
        aria-label="Mergi sus"
        className={`hidden md:flex fixed bottom-8 right-8 z-40 w-12 h-12 bg-accent hover:bg-accent-hover text-white rounded-full items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollTop
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
