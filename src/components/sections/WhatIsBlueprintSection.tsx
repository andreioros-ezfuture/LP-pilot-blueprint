import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';

const cards = [
  {
    title: 'Analiza Profunda',
    description:
      'Intelegem fiecare proces ales: pasi, decizii, exceptii, bottleneck-uri. Facem o radiografie completa, nu un audit superficial.',
    borderColor: '#3B82F6',
    iconColor: '#3B82F6',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: 'Harta Detaliata',
    description:
      'Adaptata 100% la realitatea companiei tale: sistemele tale, procesele tale, volumele tale, obiectivele tale.',
    borderColor: '#4CAF50',
    iconColor: '#4CAF50',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: 'ROI Calculat',
    description:
      'Fiecare automatizare vine cu un business case: ore economisite, bani recuperati, timp de amortizare.',
    borderColor: '#E8531E',
    iconColor: '#E8531E',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function WhatIsBlueprintSection() {
  return (
    <SectionWrapper id="ce-este" variant="white">
      <FadeInOnScroll>
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          CE ESTE BLUEPRINT
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
          Analiza si planificare strategica a automatizarilor
        </h2>
        <p className="text-body mt-4 text-lg max-w-4xl">
          In 21 de zile, <strong>analizem procesele</strong> tale operationale pe care decidem sa ne
          concentram, <strong>identificam oportunitatile de automatizare</strong> cu cel mai mare
          potential de impact si <strong>livram un plan complet</strong> (cu minim 5 automatizari
          personalizate, mapate riguros la nivel de proces) — cu preturi fixe, timpi estimati si ROI
          calculat pentru fiecare automatizare.
        </p>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {cards.map((card, index) => (
          <FadeInOnScroll key={card.title} delay={index * 100}>
            <div
              className="bg-light-gray rounded-2xl p-6 md:p-8 border-t-4"
              style={{ borderTopColor: card.borderColor }}
            >
              <div className="mb-3" style={{ color: card.iconColor }}>{card.icon}</div>
              <h3 className="font-bold text-lg text-primary">{card.title}</h3>
              <p className="text-body mt-3">{card.description}</p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
