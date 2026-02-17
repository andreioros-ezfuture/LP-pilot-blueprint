export function Footer() {
  return (
    <footer className="relative bg-gray-900 grain-overlay text-white overflow-hidden">
      {/* Gradient line separator at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />

      <div className="py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main row with borders between items */}
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-gray-700/50 text-sm text-gray-400">
            <div className="py-3 md:py-0 md:px-5">
              <img
                src="/ezfuture-logo-white.svg"
                alt="ezfuture.ai"
                className="h-7"
              />
            </div>
            <a
              href="/legal/confidentialitate.html"
              className="py-3 md:py-0 md:px-5 min-h-[44px] flex items-center hover:text-white transition-colors duration-200"
            >
              Confidențialitate
            </a>
            <a
              href="/legal/termeni.html"
              className="py-3 md:py-0 md:px-5 min-h-[44px] flex items-center hover:text-white transition-colors duration-200"
            >
              Termeni
            </a>
            <a
              href="mailto:contact@ezfuture.ai"
              className="py-3 md:py-0 md:px-5 min-h-[44px] flex items-center hover:text-white transition-colors duration-200"
            >
              contact@ezfuture.ai
            </a>
            <p className="py-3 md:py-0 md:px-5 text-gray-500">
              &copy; 2026 EZFuture.ai &mdash; Toate drepturile rezervate.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-600">
              Numărul de locuri este limitat la 10. Aplicările sunt procesate în
              ordinea primirii.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
