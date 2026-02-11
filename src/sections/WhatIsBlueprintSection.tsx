import { Search, Map, BarChart3 } from 'lucide-react';

export function WhatIsBlueprintSection() {
  return (
    <section id="ce-este" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Ce este Blueprint</span>
          <h2 className="section-title">Analiza si planificare strategica a automatizarilor</h2>
          <p className="section-desc">
            In 21 de zile, analizam procesele tale operationale, identificam oportunitatile
            de automatizare si livram un plan complet — cu preturi fixe, timpi estimati
            si ROI calculat pentru fiecare automatizare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Search,
              title: 'Analiza Profunda',
              desc: 'Intelegem fiecare proces: pasi, decizii, exceptii, bottleneck-uri. Nu un audit superficial, ci o radiografie completa.',
            },
            {
              icon: Map,
              title: 'Harta Detaliata',
              desc: 'Adaptata 100% la realitatea companiei tale: sistemele tale, procesele tale, volumele tale, obiectivele tale.',
            },
            {
              icon: BarChart3,
              title: 'ROI Calculat',
              desc: 'Fiecare automatizare vine cu un business case: ore economisit, bani recuperati, timp de amortizare.',
            },
          ].map((item, i) => (
            <div key={i} className="card text-center">
              <div className="icon-box mx-auto mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
