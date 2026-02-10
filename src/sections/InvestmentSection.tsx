import { ArrowRight, Check, Sparkles } from 'lucide-react';

export function InvestmentSection() {
  return (
    <section id="investitie" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Investitia</span>
          <h2 className="section-title">Pret transparent, valoare reala</h2>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Main pricing card */}
          <div className="bg-white border-2 border-primary rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Pilot badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-cta text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                PILOT -50%
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-2xl text-gray-400 line-through font-medium">€7.500</span>
                <Sparkles className="w-5 h-5 text-cta" />
              </div>
              <p className="text-xs text-gray-400 mb-2">Pret standard dupa incheierea pilotului</p>
              <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-1">€3.750</div>
              <p className="text-cta font-bold">Economisesti €3.750</p>
            </div>

            {/* Zero risk callout */}
            <div className="bg-success/5 border border-success/20 rounded-xl p-4 mb-6 text-center">
              <p className="text-sm font-bold text-gray-900 mb-1">Nu pierzi nicicum:</p>
              <p className="text-xs text-gray-600">
                Nu livram? <strong>100% bani inapoi.</strong> Livram si continui cu BUILD? <strong>€3.750 devine credit.</strong>
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Toate cele 10 livrabile profesionale',
                '21 de zile, engagement structurat',
                '3 sesiuni (4 ore cu tine, 8+ ore intern)',
                'Minim 5 carduri de automatizare cu pret fix',
                'Roadmap 90 zile + 12 luni',
                'ROI calculat pentru fiecare automatizare',
                'Garantie 100% money back',
                '100% credit catre BUILD — Blueprint devine gratuit',
                'Acces direct la fondator',
                'Prioritate la implementare',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#aplica" className="btn-primary w-full text-lg py-4 justify-center">
              Rezerva-ti Locul Acum
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-xs text-gray-500 text-center mt-4">
              Locuri limitate. Raspuns in maximum 48 de ore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
