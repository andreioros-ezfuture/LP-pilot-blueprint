import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Badge from '../ui/Badge';

export default function AfterBlueprintSection() {
  return (
    <SectionWrapper id="dupa-blueprint" variant="white" maxWidth="standard">
      <div className="text-center">
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          DUPA BLUEPRINT
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
          Blueprint iti da claritate. Ce faci cu ea, e decizia ta.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {/* Card 1 - Recomandat */}
        <FadeInOnScroll>
          <div className="border-2 border-accent shadow-lg rounded-2xl p-6 md:p-8 bg-white h-full flex flex-col">
            <Badge variant="accent">Recomandat</Badge>
            <h3 className="text-lg font-heading font-bold text-primary mt-4">
              Implementezi cu noi (<strong>BUILD</strong>)
            </h3>
            <p className="text-body text-sm leading-relaxed mt-3 flex-1">
              Fiecare card (automatizare mapata la nivel de proces) are pret fix, suport garantat 30 zile pe bug fixes si documentatie completa. <strong>EZ CREDIT</strong> aplicat pe <strong>BLUEPRINT</strong> reduce costul.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Card 2 - Flexibil */}
        <FadeInOnScroll delay={100}>
          <div className="border border-border rounded-2xl p-6 md:p-8 bg-white h-full flex flex-col">
            <Badge variant="neutral">Flexibil</Badge>
            <h3 className="text-lg font-heading font-bold text-primary mt-4">
              Implementezi intern sau cu alt vendor
            </h3>
            <p className="text-body text-sm leading-relaxed mt-3 flex-1">
              Livrabilele sunt ale tale, complete si suficient de detaliate pentru oricine le-ar folosi.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Card 3 - Enterprise */}
        <FadeInOnScroll delay={200}>
          <div className="border border-border rounded-2xl p-6 md:p-8 bg-white h-full flex flex-col">
            <Badge variant="accent">Enterprise</Badge>
            <h3 className="text-lg font-heading font-bold text-primary mt-4">
              Treci la <strong>AI STRATEGY</strong>
            </h3>
            <p className="text-body text-sm leading-relaxed mt-3 flex-1">
              Daca ai nevoie de un partener strategic pe termen lung, <strong>BLUEPRINT</strong> devine fundatia programului. <strong>EZ CREDIT</strong> se aplica si aici.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
