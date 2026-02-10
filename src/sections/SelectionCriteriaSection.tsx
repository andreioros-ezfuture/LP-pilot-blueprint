import { Check } from 'lucide-react';

export function SelectionCriteriaSection() {
  const criteria = [
    'Ai minim 3 procese repetitive pe care le-ai vrea automatizate',
    'Ai cel putin un decision maker disponibil pentru cele 3 sesiuni de discovery',
    'Folosesti deja sisteme digitale (CRM, ERP, Google Workspace, contabilitate online etc.)',
    'Ai buget realist pentru implementarea ulterioara (minim €10.000-€30.000 pentru primele automatizari)',
    'Intelegi ca Blueprint este faza de planificare, nu implementarea propriu-zisa',
    'Esti dispus sa oferi feedback si sa contribui la un studiu de caz',
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Criterii de Selectie</span>
          <h2 className="section-title">Nu orice companie se potriveste pentru pilot</h2>
          <p className="section-desc">
            Cautam companii care indeplinesc aceste criterii. Aplicarile sunt procesate in ordinea primirii.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {criteria.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >
                <div className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-gray-700 text-[15px] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
