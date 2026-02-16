import { ArrowRight } from 'lucide-react';

const examples = [
  {
    side: 'left' as const,
    category: 'Vânzări & Marketing',
    redTitle: 'O firma de servicii IT de 8 mil. \u20AC',
    description: 'care face follow-up manual pe leaduri',
    loss: '~50.000 \u20AC/an',
    consequence: 'din oportunități necontactate la timp.',
    link: '/exemplu/vanzari-marketing',
  },
  {
    side: 'right' as const,
    category: 'Customer Support',
    redTitle: 'Un magazin online de 3,5 mil. \u20AC',
    description: 'care răspunde manual la aceleași întrebări de la clienți',
    loss: '~90.000 \u20AC/an',
    consequence: 'prin timp consumat pe sarcini repetitive.',
    link: '/exemplu/customer-support',
  },
  {
    side: 'left' as const,
    category: 'Operational / Delivery',
    redTitle: 'Un distribuitor de 6 mil. \u20AC',
    description:
      'care urmărește livrările manual, verificând AWB-uri pe site-urile curierilor',
    loss: '~90.000 \u20AC/an',
    consequence: 'făcând zilnic o muncă aproape inutilă.',
    link: '/exemplu/operational-delivery',
  },
  {
    side: 'right' as const,
    category: 'HR & Administrativ',
    redTitle: 'O agenție de marketing (5 mil. \u20AC)',
    description:
      'care programează manual concediile pentru zeci de angajați',
    loss: '~15.000 \u20AC/an',
    consequence: 'doar din timp irosit intern.',
    link: '/exemplu/hr-administrativ',
  },
  {
    side: 'left' as const,
    category: 'Management & Decision Intelligence',
    redTitle: 'Un furnizor B2B de 10 mil. \u20AC',
    description:
      'care lucrează cu rapoarte de vânzări săptămânale, făcute manual,',
    loss: '~65.000 \u20AC/an',
    consequence: 'din decizii luate pe date întârziate.',
    link: '/exemplu/management-decision',
  },
  {
    side: 'right' as const,
    category: 'Financiar & Contabilitate',
    redTitle: 'Un producător de mobilă (7 mil. \u20AC)',
    description: 'care face reconcilierea bancară manual, în Excel,',
    loss: '~40.000 \u20AC/an',
    consequence: 'din întârzieri, erori și bani încasați prea târziu.',
    link: '/exemplu/financiar-contabilitate',
  },
];

function ExampleCard({
  redTitle,
  description,
  loss,
  consequence,
  link,
}: {
  redTitle: string;
  description: string;
  loss: string;
  consequence: string;
  link: string;
}) {
  return (
    <div className="p-5 md:p-6 flex flex-col items-center justify-center text-center">
      <p className="text-red-600 font-bold text-base md:text-lg mb-1">{redTitle}</p>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <p className="text-red-600 font-extrabold text-2xl md:text-3xl leading-tight mb-1 whitespace-nowrap">
        poate pierde {loss}
      </p>
      <p className="text-gray-600 text-sm mb-4">{consequence}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all duration-200">
        Vezi Exemplul Detaliat
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function CategoryLabel({ label }: { label: string }) {
  return (
    <div className="p-5 md:p-6 flex items-center justify-center h-full">
      <p className="text-gray-400 font-medium text-base md:text-lg text-center">
        {label}
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] mb-0">
            <span className="text-gray-900">Un business de</span>
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900">
                2-10 milioane de euro/an
              </span>
              <span
                className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-blue-200/60 -z-0 rounded-sm"
                aria-hidden="true"
              />
            </span>
            <br />
            <span className="text-red-600">
              care NU automatizează procesele manuale
            </span>
            <br />
            <span className="text-gray-900">
              ar putea la fel de bine
            </span>
            <br />
            <span className="text-gray-900">
              să dea foc unei valize cu &euro;100.000
            </span>
          </h1>
        </div>

        {/* Grid of 6 business examples */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden mb-10">
          {examples.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 ${
                idx !== examples.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              {item.side === 'left' ? (
                <>
                  <div className="border-b md:border-b-0 md:border-r border-gray-200">
                    <ExampleCard
                      redTitle={item.redTitle}
                      description={item.description}
                      loss={item.loss}
                      consequence={item.consequence}
                      link={item.link}
                    />
                  </div>
                  <CategoryLabel label={item.category} />
                </>
              ) : (
                <>
                  <div className="order-2 md:order-1 md:border-r border-gray-200">
                    <CategoryLabel label={item.category} />
                  </div>
                  <div className="order-1 md:order-2 border-b md:border-b-0">
                    <ExampleCard
                      redTitle={item.redTitle}
                      description={item.description}
                      loss={item.loss}
                      consequence={item.consequence}
                      link={item.link}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-gray-600 text-base md:text-lg mx-auto leading-relaxed">
          Când tragi linie s-ar putea să realizezi că arzi (prea) multe astfel de &bdquo;valize cu bani&rdquo;.
        </p>
      </div>
    </section>
  );
}
