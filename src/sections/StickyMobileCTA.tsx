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

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-fade-in">
      <div className="bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 py-3">
        <a
          href="#aplica"
          className="btn-primary w-full text-center"
        >
          Vreau Propunerile Mele
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
