import { Check, X } from 'lucide-react';

export function ForWhoSection() {
  const forYou = [
    'Ai 3 sau mai multe procese pe care le-ai vrea automatizate, dar nu stii cu care sa incepi',
    'Echipa ta pierde ore pe sarcini repetitive: data entry, raportare, procesare documente, sincronizare sisteme',
    'Ai incercat solutii punctuale, dar nu ai o strategie coerenta de automatizare',
    'Vrei sa intelegi impactul real — timp recuperat, bani economisiti, erori eliminate — inainte de a investi',
    'Ai nevoie de un plan clar pe care sa-l prezinti echipei de management',
    'Ai cel putin un decision maker disponibil pentru cele 3 sesiuni de analiza',
    'Ai buget realist pentru implementarea ulterioara (minim €10.000 pentru primele automatizari)',
  ];

  const notForYou = [
    'Ai un singur workflow simplu de automatizat — serviciul nostru Chat (€197/workflow) e mai potrivit',
    'Cauti un parteneriat strategic pe termen lung — AI Strategy (CAO-as-a-Service) e solutia',
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Pentru cine este Blueprint</span>
          <h2 className="section-title">Te regasesti in cel putin una din aceste situatii?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For you */}
          <div className="bg-white rounded-3xl border-2 border-success/20 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                <Check className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Blueprint este pentru tine daca...</h3>
            </div>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <X className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Blueprint NU este pentru tine daca...</h3>
            </div>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-500 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
