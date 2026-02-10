export function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-xs">EZ</span>
            </div>
            <span className="text-sm font-semibold text-gray-300">
              ezfuture<span className="text-primary-light">.ai</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="text-gray-400">Confidentialitate</span>
            <span className="text-gray-400">Termeni</span>
            <a href="mailto:hello@ezfuture.ai" className="hover:text-white transition-colors">
              hello@ezfuture.ai
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
