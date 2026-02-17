export function AfterBlueprintSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
            <span className="section-label">DUPĂ BLUEPRINT</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Blueprint îți dă claritate.
              <br className="hidden md:block" />
              Ce faci cu ea, e decizia ta.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-8 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
              <span className="inline-block text-xs font-bold text-success uppercase tracking-wide bg-success/10 px-3 py-1 rounded-full">
                Recomandat
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                Implementezi cu noi (<span className="text-primary">BUILD</span>)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fiecare card (automatizare mapată la nivel de proces) are preț fix, suport garantat 30 zile pe bug fixes și documentație completă.{' '}
                <span className="text-primary font-semibold">EZ CREDIT</span> aplicat pe{' '}
                <span className="text-primary font-semibold">BLUEPRINT</span> reduce costul.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-8 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
              <span className="inline-block text-xs font-bold text-gray-900 uppercase tracking-wide bg-gray-900/10 px-3 py-1 rounded-full">
                Flexibil
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                Implementezi intern sau cu alt vendor
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Livrabilele sunt ale tale, complete și suficient de detaliate pentru oricine le-ar folosi.
              </p>
            </div>

            {/* Column 3 */}
            <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-8 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
              <span className="inline-block text-xs font-bold text-primary uppercase tracking-wide bg-primary/10 px-3 py-1 rounded-full">
                Enterprise
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                Treci la <span className="text-primary font-extrabold">AI STRATEGY</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dacă ai nevoie de un partener strategic pe termen lung,{' '}
                <span className="text-primary font-semibold">BLUEPRINT</span> devine fundația programului.{' '}
                <span className="text-primary font-semibold">EZ CREDIT</span> se aplică și aici.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
