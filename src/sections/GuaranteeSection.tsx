import { useScrollReveal } from '../hooks/useScrollReveal';

export function GuaranteeSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="garantie" className="py-16 md:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 grain-overlay relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(91,106,232,0.12)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />

      <div ref={ref} className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Top banner */}
        <div className="text-center mb-10">
          <p className="text-lg italic text-red-400 font-medium">
            Doar 10 locuri în Programul Pilot cu 50% reducere. Primul venit, primul servit.
          </p>
        </div>

        {/* Main card */}
        <div className="bg-white/[0.04] backdrop-blur-sm rounded-3xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="section-label">GARANȚIE DUBLĂ</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">Nu poți pierde.</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Planul tău complet de automatizare (Blueprint-ul) e protejat din 2 direcții. Oricare ar fi rezultatul, investiția ta e acoperită.
            </p>
          </div>

          {/* Two guarantee columns */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Left - Money back */}
            <div className={`bg-red-900/20 border border-red-500/20 rounded-2xl p-8 transition-all duration-500 hover:border-red-500/40 hover:bg-red-900/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
              <h3 className="text-lg font-bold text-white mb-4">
                Nu livrăm? Ai banii înapoi.
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Dacă <span className="font-bold text-gray-300">în 21 de zile</span> nu primești <span className="font-bold text-gray-300">minim 5 Carduri de Automatizare</span> (adică minim 5 automatizări mapate riguros la nivel de proces, pe baza cărora pot fi construite soluții tehnice eficiente și sigure în etapa de implementare) îți returnăm <strong className="italic text-white">100% din suma plătită</strong>. Fără discuții.
              </p>
              <p className="text-sm font-semibold text-red-400">
                100% money back garantat
              </p>
            </div>

            {/* Right - Credit in BUILD */}
            <div className={`bg-emerald-900/20 border border-emerald-500/20 rounded-2xl p-8 transition-all duration-500 hover:border-emerald-500/40 hover:bg-emerald-900/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
              <h3 className="text-lg font-bold text-white mb-4">
                Livrăm? Devine credit în BUILD.
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-2">
                Dacă în 14 zile după ce-ți livrăm Blueprint-ul decizi să continui cu noi, <span className="font-bold text-gray-300">întreaga sumă devine credit</span> aplicat pe implementarea primei automatizări.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Practic, Blueprint-ul a fost gratuit <span className="italic text-gray-500">(între 15-30 zile e 50%, iar din ziua 31 creditul expiră)</span>.
              </p>
              <p className="text-sm font-semibold text-emerald-400">
                &euro;3.750 credit către implementare
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Oricum ar fi, nu poți pierde.
            </h3>
            <p className="text-base text-gray-400 mb-1">
              Singura condiție: participi la cele 3 sesiuni și răspunzi la solicitări în timp util.
            </p>
            <p className="text-base text-gray-400 mb-6">
              Restul e responsabilitatea noastră.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                '100% money back',
                '100% credit în BUILD',
                'Risc asumat împreună',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/[0.06] border border-gray-700/40 rounded-xl px-4 py-2.5"
                >
                  <span className="text-emerald-400 text-base">&#10003;</span>
                  <span className="text-sm font-semibold text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
