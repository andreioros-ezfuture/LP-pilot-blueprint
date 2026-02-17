import { CheckCircle2, XCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ForWhoSection() {
  const forYou = [
    'Ai 3 sau mai multe procese pe care ai vrea să le automatizezi, dar nu știi cu care să începi sau cât de sigur poți fi că nu strici ce merge (chiar dacă e mai ineficient).',
    'Echipa ta pierde ore întregi în fiecare săptămână pe sarcini repetitive: data entry, raportare, procesare documente, sincronizare sisteme etc.',
    'Ai încercat soluții punctuale, dar nu ai o strategie coerentă de automatizare.',
    'Vrei să înțelegi și să poți cuantifica impactul în mod realist - timp recuperat, bani economisiți, erori eliminate - ÎNAINTE să investești în implementare.',
    'Ai nevoie de un plan clar pe care să-l prezinți echipei de management.',
    'Ai cel puțin un decision maker disponibil pentru cele 3 sesiuni de analiză (4h în total).',
    'Ai buget realist pentru implementarea ulterioară (minim €10.000 pentru primele automatizări).',
  ];

  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50/30">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-12">
          <span className="section-label">PENTRU CINE ESTE BLUEPRINT</span>
          <h2 className="section-title">
            Te regăsești
            <br className="hidden md:block" />
            în cel puțin una dintre aceste situații?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {/* Left column - For you */}
            <div className="bg-white border border-gray-200/80 rounded-2xl shadow-soft p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                <CheckCircle2 className="w-5 h-5 text-success inline-block" /> Blueprint este pentru
                tine dacă...
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 text-[15px] leading-relaxed"
                  >
                    <span className="flex-shrink-0 mt-0.5 text-primary">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-success/[0.06] border border-success/15 rounded-2xl px-5 py-4">
                <p className="text-success text-[15px] font-medium leading-relaxed">
                  Banii investiți în Blueprint se scad din costul de
                  implementare dacă decizi să continui cu noi.
                </p>
              </div>
            </div>

            {/* Right column - Not for you */}
            <div className="bg-gray-50 border border-gray-200/80 rounded-2xl shadow-soft p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                <XCircle className="w-5 h-5 text-red-500 inline-block" /> Blueprint NU este
                pentru tine dacă...
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-gray-700 text-[15px] leading-relaxed">
                  <span className="flex-shrink-0 mt-0.5 text-gray-400">→</span>
                  <span>
                    Ai un singur workflow simplu de automatizat - serviciul
                    nostru{' '}
                    <span className="text-primary font-semibold">CHAT</span>{' '}
                    (€197/workflow) e mai potrivit.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-[15px] leading-relaxed">
                  <span className="flex-shrink-0 mt-0.5 text-gray-400">→</span>
                  <span>
                    Cauți un parteneriat strategic pe termen lung -{' '}
                    <span className="text-primary font-semibold">
                      AI STRATEGY
                    </span>{' '}
                    (Chief-Automation-Officer-as-a-Service) e soluția. Putem
                    discuta în orice moment.
                  </span>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
}
