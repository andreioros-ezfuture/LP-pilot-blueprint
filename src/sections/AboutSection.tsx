export function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-10">
          <span className="section-label">DESPRE EZFUTURE</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Rezultate, nu promisiuni.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            EZ Future AI este o agenție de automatizare și strategie AI construită
            pentru companii care vor{' '}
            <strong>rezultate măsurabile</strong>. Modelul nostru este simplu: prima
            dată înțelegem și planificăm (
            <span className="text-primary font-semibold">BLUEPRINT</span>), apoi
            construim (<span className="text-primary font-semibold">BUILD</span>),
            iar pe urmă susținem pe termen lung (
            <span className="text-primary font-semibold">RUN &amp; CARE</span>).
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Fiecare etapă vine cu prețuri fixe, garanții clare și livrabile
            concrete. Nu vindem ore.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Nu vindem „consulting". Vindem{' '}
            <strong>transformare operațională pe care o poți măsura</strong>.
          </p>

          <a
            href="#aplica"
            onClick={(e) => { e.preventDefault(); document.getElementById('aplica')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-primary font-semibold hover:underline text-lg"
          >
            Aplică pentru BLUEPRINT &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
