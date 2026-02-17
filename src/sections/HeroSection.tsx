import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const gradients = [
  'from-primary/15 to-primary/5',
  'from-primary/15 to-primary/5',
  'from-primary/15 to-primary/5',
];

const examples = [
  {
    category: 'Vânzări & Marketing',
    redTitle: 'O firma de servicii IT de 8 mil. \u20AC',
    description: 'care face follow-up manual pe leaduri',
    loss: '~50.000 \u20AC/an',
    consequence: 'din oportunități necontactate la timp.',
    link: '/exemplu/vanzari-marketing',
  },
  {
    category: 'Customer Support',
    redTitle: 'Un magazin online de 3,5 mil. \u20AC',
    description: 'care răspunde manual la aceleași întrebări de la clienți',
    loss: '~90.000 \u20AC/an',
    consequence: 'prin timp consumat pe sarcini repetitive.',
    link: '/exemplu/customer-support',
  },
  {
    category: 'Operational / Delivery',
    redTitle: 'Un distribuitor de 6 mil. \u20AC',
    description:
      'care urmărește livrările manual, verificând AWB-uri pe site-urile curierilor',
    loss: '~90.000 \u20AC/an',
    consequence: 'făcând zilnic o muncă aproape inutilă.',
    link: '/exemplu/operational-delivery',
  },
  {
    category: 'HR & Administrativ',
    redTitle: 'O agenție de marketing (5 mil. \u20AC)',
    description:
      'care programează manual concediile pentru zeci de angajați',
    loss: '~15.000 \u20AC/an',
    consequence: 'doar din timp irosit intern.',
    link: '/exemplu/hr-administrativ',
  },
  {
    category: 'Management & Decision Intelligence',
    redTitle: 'Un furnizor B2B de 10 mil. \u20AC',
    description:
      'care lucrează cu rapoarte de vânzări săptămânale, făcute manual,',
    loss: '~65.000 \u20AC/an',
    consequence: 'din decizii luate pe date întârziate.',
    link: '/exemplu/management-decision',
  },
  {
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
  gradient,
}: {
  category: string;
  redTitle: string;
  description: string;
  loss: string;
  consequence: string;
  link: string;
  gradient: string;
}) {
  return (
    <div className={`group relative bg-gradient-to-br ${gradient} border border-gray-100 rounded-2xl p-8 text-center flex flex-col items-center hover:border-primary/30 hover:shadow-card transition-all duration-300`}>
      <span className="font-medium text-primary/50 text-xs uppercase tracking-wider mb-4 inline-block">
        {category}
      </span>
      <p className="text-gray-900 font-extrabold text-2xl md:text-3xl mb-1">{redTitle}</p>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <p className="text-red-600 font-extrabold text-2xl md:text-3xl leading-tight mb-1">
        poate pierde {loss}
      </p>
      <p className="text-gray-600 text-sm mb-5">{consequence}</p>
      <a href={link} className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary hover:shadow-soft transition-all duration-200 mt-auto">
        Vezi Exemplul Detaliat
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

export function HeroSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleExamples = showAll ? examples : examples.slice(0, 2);

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

        {/* Grid of business examples */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleExamples.map((item, idx) => (
              <ExampleCard
                key={idx}
                category={item.category}
                redTitle={item.redTitle}
                description={item.description}
                loss={item.loss}
                consequence={item.consequence}
                link={item.link}
                gradient={gradients[idx % gradients.length]}
              />
            ))}
          </div>

          {/* Toggle button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary hover:shadow-soft transition-all duration-200 bg-white"
            >
              {showAll ? 'Vezi mai puține' : 'Vezi mai multe exemple'}
              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-gray-600 text-base md:text-lg mx-auto leading-relaxed">
          Când tragi linie s-ar putea să realizezi că arzi (prea) multe astfel de &bdquo;valize cu bani&rdquo;.
        </p>
      </div>
    </section>
  );
}
