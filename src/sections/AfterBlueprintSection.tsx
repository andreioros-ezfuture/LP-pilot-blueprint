export function AfterBlueprintSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-10 bg-white">
          <div className="text-center mb-10">
            <span className="section-label">DUPĂ BLUEPRINT</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Blueprint îți dă claritate.
              <br />
              Ce faci cu ea, e decizia ta.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-2 border-gray-200 rounded-2xl overflow-hidden">
            {/* Column 1 */}
            <div className="p-6 md:border-r-2 border-b-2 md:border-b-0 border-gray-200">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                Recomandat
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                Implementezi cu noi (<span className="text-primary">BUILD</span>)
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Fiecare card (automatizare mapată la nivel de proces) are preț fix, suport garantat 30 zile pe bug fixes și documentație completă.{' '}
                <span className="text-primary font-semibold">EZ CREDIT</span> aplicat pe{' '}
                <span className="text-primary font-semibold">BLUEPRINT</span> reduce costul.
              </p>
            </div>

            {/* Column 2 */}
            <div className="p-6 md:border-r-2 border-b-2 md:border-b-0 border-gray-200">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                Flexibil
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                Implementezi intern sau cu alt vendor
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Livrabilele sunt ale tale, complete și suficient de detaliate pentru oricine le-ar implementa.
              </p>
            </div>

            {/* Column 3 */}
            <div className="p-6">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                Enterprise
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                Treci la <span className="text-primary font-extrabold">AI STRATEGY</span>
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Dacă ai nevoie de un partener strategic pe termen lung,{' '}
                <span className="text-primary font-semibold">BLUEPRINT</span> devine fundația programului.{' '}
                <span className="text-primary font-semibold">EZ CREDIT</span> se aplică și aici.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
