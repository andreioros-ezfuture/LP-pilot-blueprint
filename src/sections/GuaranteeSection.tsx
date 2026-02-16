export function GuaranteeSection() {
  return (
    <section id="garantie" className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top banner */}
        <div className="text-center mb-10">
          <p className="text-lg italic text-primary font-medium">
            Doar 10 locuri în Programul Pilot cu 50% reducere. Primul venit, primul servit.
          </p>
        </div>

        {/* Main bordered card */}
        <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="section-label">GARANȚIE DUBLĂ</span>
            <h2 className="section-title">Nu poți pierde.</h2>
            <p className="section-desc">
              Planul tău complet de automatizare (Blueprint-ul) e protejat din 2 direcții. Oricare ar fi rezultatul, investiția ta e acoperită.
            </p>
          </div>

          {/* Two guarantee columns */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Left - Money back */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Nu livrăm? Ai banii înapoi.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Dacă <span className="font-bold">în 21 de zile</span> nu primești <span className="font-bold">minim 5 Carduri de Automatizare</span> (adică minim 5 automatizări mapate riguros la nivel de proces, pe baza cărora pot fi construite soluții tehnice eficiente și sigure în etapa de implementare) îți returnăm <strong className="italic">100% din suma plătită</strong>. Fără discuții.
              </p>
              <p className="text-sm font-semibold text-success">
                100% money back garantat
              </p>
            </div>

            {/* Right - Credit in BUILD */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Livrăm? Devine credit în BUILD.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Dacă în 14 zile după ce-ți livrăm Blueprint-ul decizi să continui cu noi, <span className="font-bold">întreaga sumă devine credit</span> aplicat pe implementarea primei automatizări.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Practic, Blueprint-ul a fost gratuit <span className="italic">(între 15-30 zile e 50%, iar din ziua 31 creditul expiră)</span>.
              </p>
              <p className="text-sm font-semibold text-primary">
                &euro;3.750 credit către implementare
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Oricum ar fi, nu poți pierde.
            </h3>
            <p className="text-base text-gray-500 mb-1">
              Singura condiție: participi la cele 3 sesiuni și răspunzi la solicitări în timp util.
            </p>
            <p className="text-base text-gray-500 mb-6">
              Restul e responsabilitatea noastră.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                '100% money back',
                '100% credit în BUILD',
                'Risc asumat împreună',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5"
                >
                  <span className="text-success text-base">&#10003;</span>
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
