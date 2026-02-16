import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
        {/* Spacer for centering */}
        <div className="hidden md:flex items-center gap-3 w-[180px]" />

        {/* Logo centered */}
        <a href="#" className="flex items-center group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/ezfuture-logo-dark.svg" alt="ezfuture.ai" className="h-9" />
        </a>

        {/* Sign Up + Log In */}
        <div className="flex items-center gap-3">
          <a
            href="https://ezfuture-app.vercel.app/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-bold text-white bg-black rounded-xl hover:bg-gray-800 transition-all hover:-translate-y-0.5"
          >
            Sign Up
          </a>
          <a
            href="https://ezfuture-app.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all hover:-translate-y-0.5"
          >
            Log In
          </a>
        </div>
      </div>
    </header>
  );
}
