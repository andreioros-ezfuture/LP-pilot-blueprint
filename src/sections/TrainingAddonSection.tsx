export function TrainingAddonSection() {
  const sessions = [
    {
      name: 'Pregătire pentru Analiză',
      duration: '2h',
      desc: 'Cum să se pregătească echipa pentru sesiunile de analiză, ce documente să furnizeze pentru a maximiza valoarea planului de automatizări care rezultă.',
    },
    {
      name: 'Pregătire Internă #1',
      duration: '2h',
      desc: 'Cum să identifice singuri procese automatizabile și cum să le documenteze.',
    },
    {
      name: 'Pregătire Internă #2',
      duration: '2h',
      desc: 'Cum să măsoare și să raporteze rezultatele automatizărilor.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border border-gray-200/80 rounded-3xl p-8 md:p-10 bg-white shadow-soft">
          {/* Header */}
          <div className="mb-8">
            <span className="section-label">ADD-ON OPȚIONAL</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
              Training Plan
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-cta mb-4">€997</p>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Pentru companiile care vor să construiască și capabilități interne, de durată.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              3 sesiuni, 6 ore total — maximizează valoarea Blueprint-ului și reduce rezistența la schimbare.
            </p>
          </div>

          {/* Sessions table */}
          <div className="border border-gray-200/80 rounded-2xl overflow-hidden mb-8">
            {sessions.map((session, i) => (
              <div
                key={i}
                className={`p-5 hover:bg-gray-50/50 transition-colors duration-200 ${i < sessions.length - 1 ? 'border-b border-gray-200/60' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-900">{session.name}</span>
                  <span className="text-sm font-semibold text-gray-500 ml-4 flex-shrink-0">
                    {session.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{session.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="text-center">
            <p className="font-bold text-gray-900 mb-2">
              Toate sesiunile sunt ținute de oameni seniori, cu experiență și track record.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="text-primary font-semibold">EZ CREDIT</span> se aplică și aici.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Menționează că dorești și trainingul când discutăm —
              <br className="hidden md:block" />
              fie când te înscrii, fie ulterior, la telefon sau prin e-mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
