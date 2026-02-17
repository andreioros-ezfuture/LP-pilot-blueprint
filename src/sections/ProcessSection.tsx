import { useScrollReveal } from '../hooks/useScrollReveal';

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Subtle blob */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(91,106,232,0.03)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />

      <div ref={ref} className={`max-w-6xl mx-auto px-6 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Main card */}
        <div className="border border-gray-200/80 rounded-3xl p-8 md:p-10 shadow-soft">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="section-label">PROCESUL ÎN 21 DE ZILE</span>
            <h2 className="section-title">Structurat, eficient, fără pierderi de timp</h2>
            <p className="text-lg text-gray-600 mb-1">
              3 sesiuni cu tine, restul e treaba noastră.
            </p>
            <p className="text-lg text-gray-600">
              Timpul vostru total: <span className="font-bold text-gray-900">maxim 8-13 ore în 21 de zile.</span>
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mt-5 italic leading-relaxed">
              Știm că ai mai trecut prin &bdquo;proiecte de analiză&rdquo; care s-au transformat în ședințe interminabile și documente pe care nimeni nu le-a mai deschis. Blueprint-ul e construit să fie exact opusul.
            </p>
          </div>

          {/* Step indicators */}
          <div className="hidden md:flex items-center justify-center mb-6">
            {[1, 2, 3].map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-glow-primary">
                  {step}
                </div>
                {i < 2 && (
                  <div className="w-24 lg:w-32 h-px bg-gradient-to-r from-primary/40 to-primary/10 mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* 3-column week table */}
          <div className="grid md:grid-cols-3 border border-gray-200/80 rounded-2xl overflow-hidden mb-8">
            {/* Week 1 */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200/60">
              <p className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Săptămâna 1</p>
              <p className="text-base font-bold text-gray-900 mb-5">&ldquo;Start și Analiză&rdquo;</p>

              <div className="space-y-5">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-0.5">Sesiunea 1: Start</p>
                  <p className="text-sm text-gray-500 mb-1">1 oră</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Aliniem așteptările, stabilim echipa, planificăm sesiunile de analiză.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900 mb-0.5">Sesiunea 2: Analiză detaliată</p>
                  <p className="text-sm text-gray-500 mb-1">2 ore</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Analizăm fiecare proces: pași, decizii, date, sisteme, excepții.
                  </p>
                </div>
              </div>
            </div>

            {/* Week 2 */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200/60">
              <p className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Săptămâna 2</p>
              <p className="text-base font-bold text-gray-900 mb-5">&ldquo;Colectare date&rdquo;</p>

              <div className="mb-5">
                <p className="text-sm font-bold text-gray-900 mb-0.5">Echipa ta colectează date</p>
                <p className="text-sm text-gray-500 mb-1">4-9 ore (intern)</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pe baza tool-urilor și direcțiilor primite de la noi, echipa ta colectează date, documentează procesele și pregătește materialele.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-primary/[0.06] rounded-xl px-4 py-3">
                  <p className="text-xs font-medium text-primary leading-relaxed">
                    Noi oferim structura și tool-urile, iar ulterior facem analiza și mapăm automatizările.
                  </p>
                </div>
                <div className="bg-primary/[0.06] rounded-xl px-4 py-3">
                  <p className="text-xs font-medium text-primary leading-relaxed">
                    Echipa ta doar colectează date interne și ni le transmite.
                  </p>
                </div>
              </div>
            </div>

            {/* Week 3 */}
            <div className="p-6">
              <p className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Săptămâna 3</p>
              <p className="text-base font-bold text-gray-900 mb-5">&ldquo;Validare și Livrare&rdquo;</p>

              <div>
                <p className="text-sm font-bold text-gray-900 mb-0.5">Sesiunea 3: Validare</p>
                <p className="text-sm text-gray-500 mb-1">1 oră</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Prezentăm livrabilele, validăm cu decidenții, ajustăm prioritățile, stabilim pașii următori.
                </p>
              </div>
            </div>
          </div>

          {/* Time summary below the table */}
          <div className="text-center mb-10">
            <p className="text-base text-gray-900 font-medium">
              Timpul vostru total: <span className="font-bold">maxim 8-13 ore în 21 de zile</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">
              (4 ore pentru cele trei sesiuni + posibil alte 4-9 ore ca să ne dați offline rapoarte, exemple, acces la date etc)
            </p>
          </div>

          {/* CONSTRUIM CU section — styled badges */}
          <div className="bg-primary/[0.06] border border-primary/15 rounded-2xl p-6">
            <p className="text-center font-bold text-gray-900 uppercase tracking-wide text-sm mb-5">
              CONSTRUIM CU
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
              {['n8n', 'Make', 'OpenAI', 'Supabase', 'Google Workspace'].map((tech, i) => (
                <div
                  key={i}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200/80 rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 leading-relaxed">
              Și (aproape) orice altă soluție tehnică necesară ca să automatizăm procesele manuale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
