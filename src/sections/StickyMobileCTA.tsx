import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pastHero = scrollY > 600;

      const formSection = document.getElementById('aplica');
      let atForm = false;
      if (formSection) {
        const rect = formSection.getBoundingClientRect();
        atForm = rect.top < window.innerHeight && rect.bottom > 0;
      }

      setVisible(pastHero && !atForm);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('aplica')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <>
      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-fade-in">
        <div className="bg-white/90 backdrop-blur-md border-t border-gray-200/60 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-elevated">
          <a
            href="#aplica"
            onClick={handleClick}
            className="btn-primary w-full text-center"
          >
            Vreau Planul Meu
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Desktop floating CTA */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a href="#aplica" onClick={handleClick} className="btn-primary shadow-elevated px-6 py-3 text-sm hover:shadow-glow-cta">
          Rezervă-ți Locul <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
