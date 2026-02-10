export function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src="/ezfuture-logo-white.svg" alt="ezfuture.ai" className="h-8" />
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="/legal/confidentialitate.html" className="hover:text-white transition-colors">Confidentialitate</a>
            <a href="/legal/termeni.html" className="hover:text-white transition-colors">Termeni</a>
            <a href="mailto:contact@ezfuture.ai" className="hover:text-white transition-colors">
              contact@ezfuture.ai
            </a>
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} EZFuture.ai — Toate drepturile rezervate.
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-600">
            Numarul de locuri este limitat la 10. Aplicarile sunt procesate in ordinea primirii.
          </p>
        </div>
      </div>
    </footer>
  );
}
