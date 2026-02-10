import { Gift, Handshake, Check } from 'lucide-react';

export function PilotBenefitsSection() {
  const youGet = [
    'Pret preferential — conditii pe care nu le vom replica dupa pilot',
    'Atentie dedicata — echipa senior lucreaza direct, fara delegare',
    'Acces direct la fondator — comunicare fara intermediari',
    'Feedback loop — sugestiile tale influenteaza produsul final',
    'Prioritate la implementare — daca continui cu BUILD, ai prioritate in calendar',
  ];

  const weNeed = [
    'Disponibilitate — cele 3 sesiuni programate si raspunsuri in maximum 48 de ore',
    'Feedback sincer — ne spui ce functioneaza si ce nu',
    'Permisiunea de a folosi rezultatele ca studiu de caz — datele pot fi anonimizate',
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,107,53,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-cta mb-4">
            Beneficii Pilot
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Ce primesti si ce cerem in schimb
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What you get */}
          <div className="bg-white/[0.05] border border-white/[0.1] rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cta/20 rounded-xl flex items-center justify-center">
                <Gift className="w-5 h-5 text-cta" />
              </div>
              <h3 className="text-lg font-bold">Ce primesti tu</h3>
            </div>
            <ul className="space-y-3">
              {youGet.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we need */}
          <div className="bg-white/[0.05] border border-white/[0.1] rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                <Handshake className="w-5 h-5 text-primary-light" />
              </div>
              <h3 className="text-lg font-bold">Ce cerem in schimb</h3>
            </div>
            <ul className="space-y-3">
              {weNeed.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
