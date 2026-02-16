import { useState } from 'react';
import { ChevronDown, Users } from 'lucide-react';

interface FAQSectionProps {
  remainingSpots: number;
  totalSpots: number;
}

const faqs = [
  {
    q: 'Blueprint e doar un raport?',
    a: (
      <>
        Nu. <span className="text-primary font-semibold">BLUEPRINT</span> este un
        pachet de 10 documente interconectate, fiecare cu un rol specific. Cardurile
        de automatizare, de exemplu, conțin prețuri fixe și garantate - iar pe baza
        lor poți construi soluțiile tehnice la începutul etapei de implementare.
      </>
    ),
  },
  {
    q: 'Ce se întâmplă dacă nu vreau să implementez cu voi?',
    a: 'Livrabilele sunt ale tale. Le poți folosi intern, cu alt vendor sau le poți pune pe raft. Nu există obligație de continuare. Dar creditul expiră - deci dacă vrei să implementezi, ai avantaj să o faci repede.',
  },
  {
    q: 'Cât timp îmi ia din zi?',
    a: 'Sunt doar 3 întâlniri (1h + 2h + 1h) + ceva pregătire (~4-9h cu oameni din echipa ta, pentru documente, acces la sisteme etc). Total: maxim 8-13 ore pentru voi pe parcursul celor 21 de zile. Restul lucrăm noi.',
  },
  {
    q: 'Ce garanții am?',
    a: 'Garanție 100% money back dacă în 21 de zile nu livrăm minim 5 carduri de automatizare (adică 5 automatizări mapate riguros la nivel de proces). Plus preț fix garantat pe fiecare card de implementare.',
  },
  {
    q: 'Pot aplica dacă am doar 1-2 automatizări în minte?',
    a: (
      <>
        <span className="text-primary font-semibold">BLUEPRINT</span> e optimizat
        pentru 3+ procese. Dacă ai 1-2 automatizări clare, serviciul nostru{' '}
        <span className="text-primary font-semibold">CHAT</span> (€197/workflow)
        este mai potrivit - iar{' '}
        <span className="text-primary font-semibold">EZ CREDIT</span> se aplică și
        acolo.
      </>
    ),
  },
  {
    q: 'Ce sisteme trebuie să am?',
    a: 'Orice combinație de sisteme digitale (CRM, ERP, email, contabilitate, project management etc). Nu este necesar un tech stack specific - ne adaptăm la ce folosești.',
  },
];

export function FAQSection({ remainingSpots, totalSpots }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const spotsPercentage = ((totalSpots - remainingSpots) / totalSpots) * 100;

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="section-label">ÎNTREBĂRI FRECVENTE</span>
            <h2 className="section-title">Ai întrebări? Avem răspunsuri.</h2>
            <p className="section-desc">
              Dacă un subiect important pentru tine nu a fost acoperit pe această
              pagină, nu ezita să ne scrii.{' '}
              <strong>Discutăm orice ai nevoie ca să poți decide.</strong>{' '}
              Scrie-ne ori în formularul de înscriere, ori pe email, la{' '}
              <a
                href="mailto:contact@ezfuture.ai"
                className="text-primary hover:underline"
              >
                contact@ezfuture.ai
              </a>
              . Orice ne spui rămâne <strong>100% confidențial</strong>.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="divide-y-2 divide-gray-200 border-y-2 border-gray-200">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between py-5 px-2 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4 text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-2 pb-5 animate-fade-in">
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 bg-orange-50 border-2 border-orange-200 rounded-2xl p-8 text-center">
            <a
              href="#aplica"
              onClick={(e) => { e.preventDefault(); document.getElementById('aplica')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary inline-flex items-center gap-2 mb-4"
            >
              Rezervă-ți Locul &rarr;
            </a>
            <p className="text-gray-600 text-sm">
              Înscrierea durează sub 2 minute.{' '}
              <span className="text-primary font-semibold underline">
                Fără angajament
              </span>
              . Primești un răspuns în 48 de ore.
            </p>

            {/* Spots counter */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Users className="w-5 h-5 text-gray-600" />
                <span>
                  {remainingSpots} din {totalSpots} locuri rămase
                </span>
              </div>
              <div className="w-full max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cta rounded-full transition-all duration-500"
                  style={{ width: `${spotsPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
