export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="section-label">Despre EZFuture</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
          Rezultate, nu promisiuni.
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          EZFuture este o agentie de automatizare si strategie AI construita pentru companii
          care vor <strong>rezultate masurabile</strong>. Modelul nostru este simplu: mai intai intelegem
          (Blueprint), apoi construim (BUILD), apoi ingrijim (RUN & CARE).
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Fiecare etapa vine cu preturi fixe, garantii clare si livrabile concrete.
          Nu vindem ore. Nu vindem "consulting". Vindem <strong>transformare operationala masurabila</strong>.
        </p>
        <a
          href="#aplica"
          className="text-primary font-semibold hover:underline"
        >
          Aplica pentru Blueprint →
        </a>
      </div>
    </section>
  );
}
