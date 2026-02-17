import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';

export default function TrainingAddonSection() {
  const sessions = [
    {
      name: 'Pregatire pentru Analiza',
      duration: '2h',
      description:
        'Cum sa se pregateasca echipa pentru sesiunile de analiza, ce documente sa furnizeze pentru a maximiza valoarea planului de automatizari care rezulta.',
    },
    {
      name: 'Pregatire Interna #1',
      duration: '2h',
      description:
        'Cum sa identifice singuri procese automatizabile si cum sa le documenteze.',
    },
    {
      name: 'Pregatire Interna #2',
      duration: '2h',
      description:
        'Cum sa masoare si sa raporteze rezultatele automatizarilor.',
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
            Pentru companiile care vor sa construiasca si capabilitati interne, de durata.
          </p>
          <p className="text-body mt-2">
            3 sesiuni, 6 ore total &mdash; maximizeaza valoarea Blueprint-ului si reduce rezistenta la schimbare.
          </p>
        </div>
      </FadeInOnScroll>

      {/* Sessions Table */}
      <FadeInOnScroll>
        <div className="rounded-2xl overflow-hidden border border-border mt-8">
          {/* Header */}
          <div className="bg-dark text-white px-6 py-4 font-semibold hidden md:grid grid-cols-[1fr_80px_2fr] gap-4 text-sm">
            <span>Sesiune</span>
            <span>Durata</span>
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
            Toate sesiunile sunt tinute de oameni seniori, cu experienta si track record.
          </p>
          <p className="text-body mt-3">
            <strong>EZ CREDIT</strong> se aplica si aici.
          </p>
          <p className="text-body text-sm mt-3">
            Mentioneaza ca doresti si trainingul cand discutam &mdash; fie cand te inscrii, fie ulterior, la telefon sau prin e-mail.
          </p>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
