import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Blueprint e doar un raport?',
    a: 'Nu. Blueprint este un pachet de 10 documente interconectate, fiecare cu un rol specific. Cardurile de automatizare, de exemplu, contin preturi fixe si garantate — poti trece direct la implementare cu ele.',
  },
  {
    q: 'Ce se intampla daca nu vreau sa implementez cu voi?',
    a: 'Livrabilele sunt ale tale. Le poti folosi intern, cu alt vendor sau le poti pune pe raft. Nu exista obligatie de continuare. Dar creditul expira — deci daca vrei sa implementezi, ai avantaj sa o faci repede.',
  },
  {
    q: 'Cat timp imi ia din zi?',
    a: '3 intalniri (1h + 2h + 1h) + ceva pregatire (documente, acces la sisteme). Total: 8-13 ore pe parcursul celor 21 de zile. Restul lucram noi.',
  },
  {
    q: 'Ce garantii am?',
    a: 'Garantie 100% money back daca nu livram minim 5 carduri in 21 de zile. Plus pret fix garantat pe fiecare card de implementare.',
  },
  {
    q: 'Pot aplica daca am doar 1-2 automatizari in minte?',
    a: 'Blueprint e optimizat pentru 3+ procese. Daca ai 1-2 automatizari clare, serviciul nostru Chat (€197/workflow) este mai potrivit — si creditul se aplica si acolo.',
  },
  {
    q: 'Ce sisteme trebuie sa am?',
    a: 'Orice combinatie de sisteme digitale (CRM, ERP, email, contabilitate, project management, etc.). Nu este necesar un tech stack specific — ne adaptam la ce folosesti.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">Intrebari Frecvente</span>
          <h2 className="section-title">Ai intrebari? Avem raspunsuri.</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 animate-fade-in">
                  <p className="text-gray-600 text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
