import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';

export default function TrainingAddonSection() {
  const sessions = [
    {
      name: 'Pregătire pentru Analiză',
      duration: '2h',
      description:
        'Cum să se pregătească echipa pentru sesiunile de analiză, ce documente să furnizeze pentru a maximiza valoarea planului de automatizări care rezultă.',
    },
    {
      name: 'Pregătire Internă #1',
      duration: '2h',
      description:
        'Cum să identifice singuri procese automatizabile și cum să le documenteze.',
    },
    {
      name: 'Pregătire Internă #2',
      duration: '2h',
      description:
        'Cum să măsoare și să raporteze rezultatele automatizărilor.',
    },
  ];

  return (
    <SectionWrapper id="training" variant="light" maxWidth="medium">
      <div className="text-center">
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          ADD-ON OPTIONAL
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
          Training Plan
        </h2>
        <p className="text-4xl font-extrabold text-primary mt-4">€997</p>
      </div>

      <FadeInOnScroll>
        <div className="mt-8 text-center">
          <p className="text-body">
            Pentru companiile care vor să construiască și capabilități interne, de durată.
          </p>
          <p className="text-body mt-2">
            3 sesiuni, 6 ore total. Maximizează valoarea Blueprint-ului și reduce rezistența la schimbare.
          </p>
        </div>
      </FadeInOnScroll>

      {/* Sessions Table */}
      <FadeInOnScroll>
        <div className="rounded-2xl overflow-hidden border border-border mt-8">
          {/* Header */}
          <div className="bg-dark text-white px-6 py-4 font-semibold hidden md:grid grid-cols-[1fr_80px_2fr] gap-4 text-sm">
            <span>Sesiune</span>
            <span>Durată</span>
            <span>Descriere</span>
          </div>
          {sessions.map((session, index) => (
            <div
              key={session.name}
              className={`px-6 py-4 flex flex-col gap-1 md:grid md:grid-cols-[1fr_80px_2fr] md:gap-4 text-sm ${
                index % 2 === 0 ? 'bg-white' : 'bg-light-gray'
              }`}
            >
              <span className="font-semibold text-primary">{session.name}</span>
              <span className="text-xs text-muted md:text-sm md:text-body">{session.duration}</span>
              <span className="text-body">{session.description}</span>
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      {/* Bottom */}
      <FadeInOnScroll>
        <div className="mt-8 text-center">
          <p className="text-body font-bold">
            Toate sesiunile sunt ținute de oameni seniori, cu experiență și track record.
          </p>
          <p className="text-body mt-3">
            <strong>EZ CREDIT</strong> se aplică și aici.
          </p>
          <p className="text-body text-sm mt-3">
            Menționează că dorești și trainingul când discutăm: fie când te înscrii, fie ulterior, la telefon sau prin e-mail.
          </p>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
