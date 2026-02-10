import {
  Layers,
  Route,
  GitBranch,
  GitMerge,
  FileText,
  BookOpen,
  Users,
  AlertTriangle,
  Compass,
  ShieldAlert,
} from 'lucide-react';

const deliverables = [
  {
    icon: Layers,
    title: 'Carduri de Automatizare',
    subtitle: 'Minim 5 bucati',
    desc: 'Descriere AS IS / TO BE, integratii necesare, calcul ROI, pret fix BUILD, timeline, garantii incluse.',
    highlight: true,
  },
  {
    icon: Route,
    title: 'Roadmap de Implementare',
    desc: 'Ordinea recomandata, dependinte, timeline pe 90 zile si 12 luni, ROI agregat pe etape.',
  },
  {
    icon: GitBranch,
    title: 'Process Map AS IS',
    desc: 'Diagrame vizuale ale proceselor actuale — pasi, decizii, exceptii si bottleneck-uri.',
  },
  {
    icon: GitMerge,
    title: 'Process Map TO BE',
    desc: 'Procesele automatizate — ce face automatizarea si unde ramane interventia umana.',
  },
  {
    icon: FileText,
    title: 'Documentatie Procese AS IS',
    desc: 'Descriere detaliata: pasi, responsabili, frecventa, volume, inputuri, outputuri, exceptii.',
  },
  {
    icon: BookOpen,
    title: 'Decision Log',
    desc: 'Registru al deciziilor: ce am ales, de ce, ce alternative am exclus si pe ce baza.',
  },
  {
    icon: Users,
    title: 'Matrice RACI',
    desc: 'Cine e Responsible, Accountable, Consulted si Informed pentru fiecare automatizare.',
  },
  {
    icon: AlertTriangle,
    title: 'Evaluare Impact Schimbare',
    desc: 'Analiza impactului: ce se schimba, cine e afectat, training necesar, riscuri de rezistenta.',
  },
  {
    icon: Compass,
    title: 'Plan de Adoptie',
    desc: 'Strategie de implementare: comunicare, training, timeline de tranzitie, indicatori de succes.',
  },
  {
    icon: ShieldAlert,
    title: 'Ghid de Exceptii',
    desc: 'Scenarii de exceptie documentate: ce se intampla cand ceva nu merge si cum trateaza automatizarea fiecare caz.',
  },
];

export function DeliverablesSection() {
  return (
    <section id="livrabile" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">10 Livrabile Profesionale</span>
          <h2 className="section-title">Tot ce ai nevoie pentru a lua decizii informate</h2>
          <p className="section-desc">
            Fiecare Blueprint livreaza un pachet complet de 10 documente, personalizate pe compania ta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {deliverables.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 ${
                item.highlight
                  ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/[0.02] md:col-span-2'
                  : 'border-gray-200 bg-white hover:border-primary/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    item.highlight ? 'bg-primary/10' : 'bg-gray-100'
                  }`}>
                    <item.icon className={`w-5 h-5 ${item.highlight ? 'text-primary' : 'text-gray-500'}`} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    {item.subtitle && (
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
