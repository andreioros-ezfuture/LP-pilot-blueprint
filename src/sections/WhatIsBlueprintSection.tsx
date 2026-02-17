import { useScrollReveal } from '../hooks/useScrollReveal';
import { useStaggerReveal } from '../hooks/useStaggerReveal';

export function WhatIsBlueprintSection() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: cardsRef, getStaggerClass, getStaggerStyle } = useStaggerReveal(0.1, 150);
  const cards = [
    {
      title: 'Analiză Profundă',
      desc: 'Înțelegem fiecare proces ales: pași, decizii, excepții, bottleneck-uri. Facem o radiografie completă, nu un audit superficial.',
    },
    {
      title: 'Hartă Detaliată',
      desc: 'Adaptată 100% la realitatea companiei tale: sistemele tale, procesele tale, volumele tale, obiectivele tale.',
    },
    {
      title: 'ROI Calculat',
      desc: 'Fiecare automatizare vine cu un business case: ore economisite, bani recuperați, timp de amortizare.',
    },
  ];

  return (
    <section id="ce-este" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle blob */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(91,106,232,0.04)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />

      <div ref={ref} className={`max-w-6xl mx-auto px-6 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-12">
          <span className="section-label">CE ESTE BLUEPRINT</span>
          <h2 className="section-title">
            Analiză și planificare strategică a automatizărilor
          </h2>
          <p className="section-desc">
            În 21 de zile,{' '}
            <span className="text-primary font-semibold">analizăm procesele</span> tale
            operaționale pe care decidem să ne concentrăm,{' '}
            <span className="text-primary font-semibold">
              identificăm oportunitățile de automatizare
            </span>{' '}
            cu cel mai mare potențial de impact și{' '}
            <span className="text-primary font-semibold">livrăm un plan complet</span> (cu minim
            5 automatizări personalizate, mapate riguros la nivel de proces) - cu
            prețuri fixe, timpi estimați și ROI calculat pentru fiecare
            automatizare.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className={getStaggerClass(i, 'bg-white border border-gray-200/80 rounded-2xl p-8 text-center hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300')}
                style={getStaggerStyle(i)}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
