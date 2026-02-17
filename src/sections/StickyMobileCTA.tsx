import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';

export function StickyMobileCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('aplica')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile sticky CTA - always visible */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-white/90 backdrop-blur-md border-t border-gray-200/60 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-elevated flex items-center gap-3">
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              aria-label="Mergi sus"
              className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-primary text-white hover:bg-primary-dark transition-all duration-200 animate-fade-in"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
          <a
            href="#aplica"
            onClick={handleClick}
            className="btn-primary flex-1 text-center"
          >
            Vreau Planul Meu
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Desktop floating buttons - always visible */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Mergi sus"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary text-white hover:bg-primary-dark hover:shadow-soft transition-all duration-200 animate-fade-in"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
        <a href="#aplica" onClick={handleClick} className="btn-primary shadow-elevated px-6 py-3 text-sm hover:shadow-glow-cta">
          Rezervă-ți Locul <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
