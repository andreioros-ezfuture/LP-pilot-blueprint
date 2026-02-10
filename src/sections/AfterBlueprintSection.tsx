import { Wrench, Building2, Brain } from 'lucide-react';

export function AfterBlueprintSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Dupa Blueprint</span>
          <h2 className="section-title">Blueprint iti da claritate. Ce faci cu ea, e decizia ta.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Wrench,
              title: 'Implementezi cu noi (BUILD)',
              desc: 'Fiecare card are pret fix, garantie 30 zile pe bug fixes si documentatie completa. Creditul Blueprint reduce costul.',
              tag: 'Cel mai ales',
              tagColor: 'bg-success/10 text-success',
            },
            {
              icon: Building2,
              title: 'Implementezi intern sau cu alt vendor',
              desc: 'Livrabilele sunt ale tale, complete si suficient de detaliate pentru oricine le-ar implementa.',
              tag: 'Flexibil',
              tagColor: 'bg-gray-100 text-gray-600',
            },
            {
              icon: Brain,
              title: 'Treci la AI Strategy',
              desc: 'Daca ai nevoie de un partener strategic pe termen lung, Blueprint devine fundatia programului. Creditul se aplica si aici.',
              tag: 'Enterprise',
              tagColor: 'bg-primary/10 text-primary',
            },
          ].map((item, i) => (
            <div key={i} className="card relative">
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${item.tagColor}`}>
                {item.tag}
              </span>
              <div className="icon-box-light mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
