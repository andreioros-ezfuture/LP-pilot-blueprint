import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/ezfuture-logo-dark.svg" alt="ezfuture.ai" className="h-9" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#ce-este" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Ce este Blueprint
          </a>
          <a href="#livrabile" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Livrabile
          </a>
          <a href="#investitie" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Investitie
          </a>
          <a
            href="#aplica"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-all hover:-translate-y-0.5 shadow-button hover:shadow-button-hover"
          >
            Vreau Propunerile Mele
            <ArrowRight className="w-4 h-4" />
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Inchide meniu' : 'Deschide meniu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3 animate-fade-in">
          <a href="#ce-este" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
            Ce este Blueprint
          </a>
          <a href="#livrabile" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
            Livrabile
          </a>
          <a href="#investitie" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
            Investitie
          </a>
          <a href="#aplica" className="btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>
            Vreau Propunerile Mele
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
