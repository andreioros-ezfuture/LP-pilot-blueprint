import { CheckCircle, Clock } from 'lucide-react';

const phases = [
  {
    week: 'Saptamana 1',
    title: 'Start si Analiza',
    sessions: [
      { name: 'Sesiunea 1: Start', duration: '1 ora', desc: 'Aliniem asteptarile, stabilim echipa, planificam sesiunile de analiza.' },
      { name: 'Sesiunea 2: Analiza detaliata', duration: '2 ore', desc: 'Analizam fiecare proces: pasi, decizii, date, sisteme, exceptii.' },
    ],
  },
  {
    week: 'Saptamana 2',
    title: 'Lucru Intern',
    sessions: [
      { name: 'Echipa ta lucreaza', duration: '8+ ore intern', desc: 'Pe baza tool-urilor si directiilor primite, echipa ta colecteaza date, documenteaza procesele si pregateste materialele.' },
    ],
    note: 'Noi oferim structura si tool-urile, voi executati intern',
  },
  {
    week: 'Saptamana 3',
    title: 'Validare si Livrare',
    sessions: [
      { name: 'Sesiunea 3: Validare', duration: '1 ora', desc: 'Prezentam livrabilele, validam cu decidenții, ajustam prioritatile, stabilim pasii urmatori.' },
    ],
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Procesul in 21 de Zile</span>
          <h2 className="section-title">Structurat, eficient, fara pierderi de timp</h2>
          <p className="section-desc">
            3 sesiuni cu tine, restul e treaba noastra. Timpul tau total: 8-13 ore in 21 de zile.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mt-2 mb-4 italic">
            Stim ca ai mai trecut prin &ldquo;proiecte de analiza&rdquo; care s-au transformat in sedinte interminabile si documente pe care nimeni nu le-a mai deschis. Blueprint-ul e construit sa fie exact opusul.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {phases.map((phase, i) => (
            <div key={i} className="bg-white rounded-3xl border-2 border-gray-200 p-7 relative">
              <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit mb-5">
                {phase.week}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-5">{phase.title}</h3>

              <div className="space-y-4">
                {phase.sessions.map((session, j) => (
                  <div key={j}>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-900">{session.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 ml-6 mb-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs font-medium text-gray-500">{session.duration}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed ml-6">{session.desc}</p>
                  </div>
                ))}
              </div>

              {phase.note && (
                <div className="mt-5 px-3 py-2 bg-primary/5 rounded-xl">
                  <p className="text-xs font-medium text-primary">{phase.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-gray-200 shadow-soft">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-gray-900">Timpul tau total: 8-13 ore</span>
            <span className="text-sm text-gray-500">in 21 de zile</span>
          </div>
        </div>
      </div>
    </section>
  );
}
