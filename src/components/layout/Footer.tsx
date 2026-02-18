export default function Footer() {
  return (
    <footer className="bg-dark py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <div>
            <a href="/" className="font-heading font-bold text-lg text-white">
              ezfuture.ai
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a
              href="/legal/confidentialitate.html"
              className="text-white/70 text-sm hover:text-white transition-colors duration-200"
            >
              Confidentialitate
            </a>
            <a
              href="/legal/termeni.html"
              className="text-white/70 text-sm hover:text-white transition-colors duration-200"
            >
              Termeni
            </a>
            <a
              href="mailto:contact@ezfuture.ai"
              className="text-white/70 text-sm hover:text-white transition-colors duration-200"
            >
              contact@ezfuture.ai
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/50 text-sm">
              &copy; 2026 EZFuture.ai. Toate drepturile rezervate.
            </p>
            <p className="text-white/40 text-xs">
              Numarul de locuri este limitat la 10. Aplicarile sunt procesate in ordinea primirii.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
