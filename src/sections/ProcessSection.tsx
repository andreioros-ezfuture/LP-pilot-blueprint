export function ProcessSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main bordered card */}
        <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-10">
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
            <p className="text-base text-gray-500 max-w-2xl mx-auto mt-5 italic leading-relaxed">
              Știm că ai mai trecut prin &bdquo;proiecte de analiză&rdquo; care s-au transformat în ședințe interminabile și documente pe care nimeni nu le-a mai deschis. Blueprint-ul e construit să fie exact opusul.
            </p>
          </div>

          {/* 3-column week table */}
          <div className="grid md:grid-cols-3 border-2 border-gray-200 rounded-2xl overflow-hidden mb-8">
            {/* Week 1 */}
            <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
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
            <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
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
                <div className="bg-primary/10 rounded-xl px-4 py-3">
                  <p className="text-xs font-medium text-primary leading-relaxed">
                    Noi oferim structura și tool-urile, iar ulterior facem analiza și mapăm automatizările.
                  </p>
                </div>
                <div className="bg-primary/10 rounded-xl px-4 py-3">
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

          {/* CONSTRUIM CU section */}
          <div className="border-2 border-gray-200 rounded-2xl p-6">
            <p className="text-center font-bold text-gray-900 uppercase tracking-wide text-sm mb-5">
              CONSTRUIM CU
            </p>
            <div className="flex flex-wrap justify-center items-center gap-0 border-2 border-gray-200 rounded-xl overflow-hidden mb-4">
              {['n8n', 'Make', 'OpenAI', 'Supabase', 'Google Workspace'].map((tech, i) => (
                <div
                  key={i}
                  className={`px-5 py-3 text-sm font-semibold text-gray-700 ${
                    i < 4 ? 'border-r-2 border-gray-200' : ''
                  } flex-1 text-center min-w-[120px]`}
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
