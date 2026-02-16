import { ArrowRight, Check } from 'lucide-react';

export function InvestmentSection() {
  const checklistItems = [
    { text: 'Toate cele 10 livrabile profesionale', highlight: false },
    { text: '21 de zile, colaborare structurată', highlight: false },
    { text: '3 sesiuni (4 ore cu tine)', highlight: false },
    { text: 'Colectare date (~4-9 ore cu echipa ta)', highlight: false },
    {
      text: 'Minim 5 Carduri de Automatizare cu preț fix de implementare',
      highlight: false,
    },
    { text: 'Plan de acțiune 90 de zile + 12 luni', highlight: false },
    { text: 'ROI calculat pentru fiecare automatizare', highlight: false },
    { text: 'Garanție 100% money back', highlight: false },
    {
      text: '100% credit către BUILD - Blueprint devine gratuit',
      highlightSuffix: 'Blueprint devine gratuit',
      highlight: true,
    },
    { text: 'Acces direct la fondator', highlight: false },
    { text: 'Prioritate la implementare', highlight: false },
  ];

  return (
    <section id="investitie" className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main bordered card */}
        <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-10">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-4">
              INVESTIȚIA ÎN PLANUL TĂU DE AUTOMATIZARE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Preț transparent
              <br />
              pentru valoare pe care o poți măsura
            </h2>
          </div>

          {/* Pricing card */}
          <div className="max-w-md mx-auto text-center mb-10">
            {/* Pilot badge */}
            <div className="inline-block bg-cta text-white text-sm font-bold px-5 py-2 rounded-full mb-4">
              PILOT -50%
            </div>

            {/* Strikethrough price */}
            <div className="mb-1">
              <span className="text-2xl text-gray-400 line-through font-medium">
                €7.500
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              Preț standard după încheierea pilotului
            </p>

            {/* Big price */}
            <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2">
              €3.750
            </div>
            <p className="text-success font-bold text-lg mb-8">
              Economisești €3.750
            </p>

            {/* Nu poți pierde box */}
            <div className="bg-gray-800 rounded-2xl p-5 text-center">
              <p className="text-white font-bold text-base mb-2">
                Nu poți pierde:
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nu livrăm?{' '}
                <span className="text-white font-bold">
                  100% banii înapoi.
                </span>
                <br />
                Livrăm și continui cu BUILD?{' '}
                <span className="text-white font-bold">
                  €3.750 devine credit.
                </span>
              </p>
            </div>
          </div>

          {/* Checklist */}
          <ul className="space-y-3 mb-10 max-w-lg mx-auto">
            {checklistItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                {item.highlight && item.highlightSuffix ? (
                  <span>
                    {item.text.replace(item.highlightSuffix, '')}
                    <span className="text-success font-semibold">
                      {item.highlightSuffix}
                    </span>
                  </span>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#aplica"
            onClick={(e) => { e.preventDefault(); document.getElementById('aplica')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary w-full text-lg py-4 justify-center"
          >
            Vreau Planul Meu de Automatizare
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
            Doar 10 locuri cu 50% reducere.{' '}
            <span className="text-primary underline font-medium">
              Primul venit, primul servit.
            </span>{' '}
            Răspuns în maximum 48 de ore.
          </p>
        </div>
      </div>
    </section>
  );
}
