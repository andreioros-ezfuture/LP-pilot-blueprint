export function WhatIsBlueprintSection() {
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
    <section id="ce-este" className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">CE ESTE BLUEPRINT</span>
          <h2 className="section-title">
            Analiză și planificare strategică a automatizărilor
          </h2>
          <p className="section-desc">
            În 21 de zile,{' '}
            <span className="underline">analizăm procesele</span> tale
            operaționale pe care decidem să ne concentrăm,{' '}
            <span className="underline">
              identificăm oportunitățile de automatizare
            </span>{' '}
            cu cel mai mare potențial de impact și{' '}
            <span className="underline">livrăm un plan complet</span> (cu minim
            5 automatizări personalizate, mapate riguros la nivel de proces) - cu
            prețuri fixe, timpi estimați și ROI calculat pentru fiecare
            automatizare.
          </p>
        </div>

        <div className="border-2 border-gray-200 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-3 divide-x-0 md:divide-x-2 divide-y-2 md:divide-y-0 divide-gray-200">
            {cards.map((card, i) => (
              <div key={i} className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
