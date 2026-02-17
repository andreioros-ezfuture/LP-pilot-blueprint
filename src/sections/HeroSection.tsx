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
  category,
  redTitle,
  description,
  loss,
  consequence,
  link,
}: {
  category: string;
  redTitle: string;
  description: string;
  loss: string;
  consequence: string;
  link: string;
}) {
  return (
    <div className="group relative overflow-hidden p-5 md:p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50/50 transition-colors duration-300">
      <span className="md:hidden font-medium text-primary/50 text-xs mb-3 inline-block">
        {category}
      </span>
      <p className="text-primary font-extrabold text-2xl md:text-3xl mb-1">{redTitle}</p>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <p className="text-red-600 font-extrabold text-2xl md:text-3xl leading-tight mb-1">
        poate pierde {loss}
      </p>
      <p className="text-gray-600 text-sm mb-4">{consequence}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary hover:shadow-soft transition-all duration-200">
        Vezi Exemplul Detaliat
        <span className="sr-only"> (se deschide în fereastră nouă)</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-cta scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}

function CategoryLabel({ label }: { label: string }) {
  return (
    <div className="hidden md:flex p-5 md:p-6 items-center justify-center h-full">
      <span className="font-medium text-primary/50 text-sm md:text-base text-center">
        {label}
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-[#ECEFFE] via-[#F5F6FE] to-white relative overflow-hidden">
      {/* Dot pattern with fade-out mask */}
      <div
        className="absolute inset-0 opacity-[0.04] section-bg-dots"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 70%)',
        }}
      />

      {/* Decorative gradient blobs */}
      <div className="absolute -top-20 -right-40 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(91,106,232,0.12)_0%,transparent_60%)] pointer-events-none animate-float" aria-hidden="true" />
      <div className="absolute top-40 -left-32 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(240,93,42,0.08)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" style={{ animationDelay: '3s', animationName: 'float', animationDuration: '8s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite' }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Title */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.06] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] mb-0">
            <span className="text-gray-900">Un business de</span>
            {' '}<br className="hidden md:block" />
            <span className="text-gray-900">2-10 milioane de euro/an</span>
            <br />
            <span className="text-red-600">
              care NU automatizează procesele manuale
            </span>
            <br />
            <span className="text-gray-900">
              ar putea la fel de bine
            </span>
            {' '}<br className="hidden md:block" />
            <span className="text-gray-900">
              să dea foc unei valize cu &euro;100.000
            </span>
          </h1>
        </div>

        {/* Grid of 6 business examples */}
        <div className="border border-gray-200/80 rounded-2xl overflow-hidden mb-10 shadow-soft bg-white/80 backdrop-blur-sm">
          {examples.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 ${
                idx !== examples.length - 1 ? 'border-b border-gray-200/60' : ''
              }`}
            >
              {item.side === 'left' ? (
                <>
                  <div className="md:border-r border-gray-200/60">
                    <ExampleCard
                      category={item.category}
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
                  <div className="hidden md:block md:border-r border-gray-200/60">
                    <CategoryLabel label={item.category} />
                  </div>
                  <div>
                    <ExampleCard
                      category={item.category}
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
