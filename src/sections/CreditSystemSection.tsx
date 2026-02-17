export function CreditSystemSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-4">
              SISTEMUL EZ CREDIT
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
              Blueprint-ul devine gratuit dacă implementezi cu noi
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Întreaga sumă investită în{' '}
              <span className="text-primary font-semibold">BLUEPRINT</span> se
              transformă în{' '}
              <span className="text-primary font-bold">
                EZ CREDIT
              </span>{' '}
              <span className="text-gray-500 text-sm">(se citește &ldquo;easy credit&rdquo;)</span>{' '}
              aplicat direct pe prima automatizare din{' '}
              <span className="font-bold text-gray-900">BUILD</span>. Practic,
              plătești o dată și primești de 2 ori.
            </p>
          </div>

          {/* Credit table */}
          <div className="border border-gray-200/80 rounded-2xl overflow-hidden mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-900 text-white">
              <div className="p-4 text-sm font-bold">
                Dacă începi implementarea cu noi în...
              </div>
              <div className="p-4 text-sm font-bold sm:text-right">
                Credit aplicat
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-green-200/60 bg-green-50">
              <div className="p-4 text-sm text-green-900 font-medium">
                14 zile de la livrare
              </div>
              <div className="p-4 text-sm sm:text-right font-bold text-green-700">
                100% din valoarea Blueprint
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-amber-200/60 bg-amber-50">
              <div className="p-4 text-sm text-amber-900 font-medium">
                15-30 zile de la livrare
              </div>
              <div className="p-4 text-sm sm:text-right font-bold text-amber-700">
                50% din valoarea Blueprint
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-red-50">
              <div className="p-4 text-sm text-red-900 font-medium">Din ziua 31</div>
              <div className="p-4 text-sm sm:text-right font-bold text-red-600">
                Creditul expiră
              </div>
            </div>
          </div>

          {/* Exemplu concret */}
          <div className="border border-gray-200/80 rounded-2xl p-6 md:p-8 mb-6 bg-gray-50/50">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Exemplu concret
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Să zicem că Blueprint-ul se livrează pe 31 martie (după cele 21 de
              zile). Unul dintre cardurile de automatizare are preț de
              implementare (<span className="font-bold">BUILD</span>) de
              €10.000. Creditul se calculează din momentul livrării:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary mt-0.5">→</span>
                <span>
                  <strong>
                    Semnezi în 14 zile (până pe 14 aprilie):
                  </strong>{' '}
                  €10.000 −{' '}
                  <span className="text-success italic font-semibold">
                    €3.750 credit
                  </span>{' '}
                  = mai plătești{' '}
                  <strong className="text-gray-900">€6.250</strong>
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary mt-0.5">→</span>
                <span>
                  <strong>
                    Semnezi în 15-30 zile (până pe 30 aprilie):
                  </strong>{' '}
                  €10.000 − €1.875 credit = mai plătești{' '}
                  <strong className="text-gray-900">€8.125</strong>
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary mt-0.5">→</span>
                <span>
                  <strong>
                    Semnezi după 30 de zile (din 1 mai):
                  </strong>{' '}
                  €10.000 − €0 credit = mai plătești{' '}
                  <strong className="text-gray-900">€10.000</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="text-sm text-primary italic font-medium leading-relaxed">
            Nu livrăm Blueprint-ul? Primești 100% banii înapoi. Livrăm și
            continui cu BUILD? Blueprint-ul a fost gratuit.
          </p>
      </div>
    </section>
  );
}
