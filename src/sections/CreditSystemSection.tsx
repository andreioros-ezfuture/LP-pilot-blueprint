import { ArrowRight, TrendingUp } from 'lucide-react';

export function CreditSystemSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Sistemul de Credit</span>
          <h2 className="section-title">Blueprint-ul devine gratuit daca implementezi</h2>
          <p className="section-desc">
            Intreaga suma investita in Blueprint se transforma in credit aplicat direct pe prima automatizare din BUILD.
            Practic, platesti o data si primesti de doua ori.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Credit table */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 overflow-hidden mb-10">
            <div className="grid grid-cols-2 bg-gray-900 text-white">
              <div className="p-4 text-sm font-bold">Daca incepi implementarea in...</div>
              <div className="p-4 text-sm font-bold text-center">Credit aplicat</div>
            </div>
            {[
              { period: '14 zile de la livrare', credit: '100% din valoarea Blueprint', highlight: true },
              { period: '15-30 zile de la livrare', credit: '50% din valoarea Blueprint', highlight: false },
              { period: 'Dupa 30 de zile', credit: 'Creditul expira', highlight: false },
            ].map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 border-t border-gray-100 ${
                  row.highlight ? 'bg-success/5' : ''
                }`}
              >
                <div className="p-4 text-sm text-gray-700">{row.period}</div>
                <div className={`p-4 text-sm text-center font-bold ${
                  row.highlight ? 'text-success' : 'text-gray-700'
                }`}>
                  {row.credit}
                </div>
              </div>
            ))}
          </div>

          {/* Example */}
          <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl border border-primary/20 p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-gray-900">Exemplu concret</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Blueprint-ul se livreaza pe 1 martie (dupa cele 21 de zile). Unul dintre cardurile de automatizare are pret BUILD de €10.000. Creditul se calculeaza din momentul livrarii:
            </p>
            <div className="space-y-3">
              {[
                { label: 'Semnezi in 14 zile (pana pe 15 martie)', credit: '€3.750', total: '€10.000', result: '€6.250', highlight: true },
                { label: 'Semnezi in 15-30 zile (pana pe 31 martie)', credit: '€1.875', total: '€10.000', result: '€8.125', highlight: false },
                { label: 'Semnezi dupa 30 zile (dupa 31 martie)', credit: '€0', total: '€10.000', result: '€10.000', highlight: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <ArrowRight className={`w-4 h-4 flex-shrink-0 ${item.highlight ? 'text-success' : 'text-gray-400'}`} />
                  <span className="text-gray-700">
                    <strong>{item.label}:</strong>{' '}
                    <span className="font-mono text-[13px]">{item.total} − <span className={item.highlight ? 'text-success font-semibold' : ''}>{item.credit} credit</span> = </span>
                    mai platesti <strong className="text-gray-900">{item.result}</strong>
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-primary font-medium mt-4">
              Nu livram Blueprint-ul? Primesti 100% banii inapoi. Livram si continui cu BUILD? Blueprint-ul a fost gratuit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
