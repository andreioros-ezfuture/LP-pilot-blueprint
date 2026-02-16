export function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main row with borders between items */}
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-gray-700 text-sm text-gray-400">
          <div className="py-3 md:py-0 md:px-5">
            <img
              src="/ezfuture-logo-white.svg"
              alt="ezfuture.ai"
              className="h-7"
            />
          </div>
          <a
            href="/legal/confidentialitate.html"
            className="py-3 md:py-0 md:px-5 hover:text-white transition-colors"
          >
            Confidențialitate
          </a>
          <a
            href="/legal/termeni.html"
            className="py-3 md:py-0 md:px-5 hover:text-white transition-colors"
          >
            Termeni
          </a>
          <a
            href="mailto:contact@ezfuture.ai"
            className="py-3 md:py-0 md:px-5 hover:text-white transition-colors"
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
    </footer>
  );
}
