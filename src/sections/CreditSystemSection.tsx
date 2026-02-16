export function CreditSystemSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main bordered card */}
        <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-10">
          <div className="mb-8">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-4">
              SISTEMUL EZ CREDIT
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
              Blueprint-ul devine gratuit dacă implementezi cu noi
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Întreaga sumă investită în{' '}
              <span className="text-primary font-semibold">BLUEPRINT</span> se
              transformă în{' '}
              <span className="text-primary font-semibold underline">
                EZ CREDIT
              </span>{' '}
              <span className="text-gray-400 text-sm">(se citește &ldquo;easy credit&rdquo;)</span>{' '}
              aplicat direct pe prima automatizare din{' '}
              <span className="font-bold text-gray-900">BUILD</span>. Practic,
              plătești o dată și primești de 2 ori.
            </p>
          </div>

          {/* Credit table */}
          <div className="border-2 border-gray-200 rounded-2xl overflow-hidden mb-8">
            <div className="grid grid-cols-2 bg-gray-900 text-white">
              <div className="p-4 text-sm font-bold">
                Dacă începi implementarea cu noi în...
              </div>
              <div className="p-4 text-sm font-bold text-right">
                Credit aplicat
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200 bg-success/5">
              <div className="p-4 text-sm text-gray-700">
                14 zile de la livrare
              </div>
              <div className="p-4 text-sm text-right font-bold text-success">
                100% din valoarea Blueprint
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200">
              <div className="p-4 text-sm text-gray-700">
                15-30 zile de la livrare
              </div>
              <div className="p-4 text-sm text-right font-bold text-gray-900">
                50% din valoarea Blueprint
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-4 text-sm text-gray-700">Din ziua 31</div>
              <div className="p-4 text-sm text-right font-bold text-gray-900">
                Creditul expiră
              </div>
            </div>
          </div>

          {/* Exemplu concret */}
          <div className="border-2 border-gray-200 rounded-2xl p-6 md:p-8 mb-6">
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
      </div>
    </section>
  );
}
