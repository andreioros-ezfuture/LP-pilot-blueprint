export function AboutSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 grain-overlay relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(91,106,232,0.12)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(240,93,42,0.06)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />

      {/* Mesh pattern */}
      <div
        className="absolute inset-0 section-bg-mesh opacity-30 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="border border-gray-700/40 bg-white/[0.04] backdrop-blur-sm rounded-3xl p-8 md:p-10">
          <span className="section-label">DESPRE EZFUTURE</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Rezultate, nu promisiuni.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            EZ Future AI este o agenție de automatizare și strategie AI construită
            pentru companii care vor{' '}
            <strong>rezultate măsurabile</strong>. Modelul nostru este simplu: prima
            dată înțelegem și planificăm (
            <span className="text-primary font-semibold">BLUEPRINT</span>), apoi
            construim (<span className="text-primary font-semibold">BUILD</span>),
            iar pe urmă susținem pe termen lung (
            <span className="text-primary font-semibold">RUN &amp; CARE</span>).
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fiecare etapă vine cu prețuri fixe, garanții clare și livrabile
            concrete. Nu vindem ore.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Nu vindem „consulting". Vindem{' '}
            <strong>transformare operațională pe care o poți măsura</strong>.
          </p>

          <a
            href="#aplica"
            onClick={(e) => { e.preventDefault(); document.getElementById('aplica')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-primary font-semibold hover:text-primary-light hover:underline text-lg transition-colors duration-200"
          >
            Aplică pentru BLUEPRINT &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
