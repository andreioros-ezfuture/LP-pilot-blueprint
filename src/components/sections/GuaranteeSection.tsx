import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Badge from '../ui/Badge';

export default function GuaranteeSection() {
  return (
    <SectionWrapper id="garantie" variant="light" maxWidth="standard">
      <div className="text-center">
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          GARANȚIE DUBLĂ
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
          Nu poți pierde.
        </h2>
        <p className="text-body mt-4 max-w-2xl mx-auto">
          Planul tău complet de automatizare (Blueprint-ul) e protejat din 2 direcții. Oricare ar fi rezultatul, investiția ta e acoperită.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Card 1 - Money Back */}
        <FadeInOnScroll>
          <div className="border-2 border-warning rounded-2xl p-6 md:p-8 bg-white h-full flex flex-col">
            <div className="text-4xl mb-4">
              <svg className="w-10 h-10 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-3">
              Nu livrăm? Ai banii înapoi.
            </h3>
            <p className="text-body text-sm leading-relaxed flex-1">
              Dacă <strong>în 21 de zile</strong> nu primești <strong>minim 5 Carduri de Automatizare</strong> (adică minim 5 automatizări mapate riguros la nivel de proces, pe baza cărora pot fi construite soluții tehnice eficiente și sigure în etapa de implementare) îți returnăm <em>100% din suma plătită</em>. Fără discuții.
            </p>
            <div className="mt-6">
              <Badge variant="warning">100% money back garantat</Badge>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Card 2 - Credit */}
        <FadeInOnScroll delay={100}>
          <div className="border-2 border-success rounded-2xl p-6 md:p-8 bg-white h-full flex flex-col">
            <div className="text-4xl mb-4">
              <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-3">
              Livrăm? Devine credit în BUILD.
            </h3>
            <p className="text-body text-sm leading-relaxed flex-1">
              Dacă în 14 zile după ce-ți livrăm Blueprint-ul decizi să continui cu noi, <strong>întreaga sumă devine credit</strong> aplicat pe implementarea primei automatizări.
            </p>
            <p className="text-body text-sm leading-relaxed mt-3">
              Practic, Blueprint-ul a fost gratuit <em>(între 15-30 zile e 50%, iar din ziua 31 creditul expiră)</em>.
            </p>
            <div className="mt-6">
              <Badge variant="success">€3.750 credit către implementare</Badge>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      {/* Bottom */}
      <FadeInOnScroll>
        <div className="mt-12 text-center">
          <p className="text-xl font-heading font-bold text-primary">
            Oricum ar fi, nu poți pierde.
          </p>
          <p className="text-body text-sm mt-3">
            Singura condiție: participi la cele 3 sesiuni și răspunzi la solicitări în timp util.
          </p>
          <p className="text-body text-sm mt-1">
            Restul e responsabilitatea noastră.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Badge variant="success">100% money back</Badge>
            <Badge variant="success">100% credit în BUILD</Badge>
            <Badge variant="accent">Risc asumat împreună</Badge>
          </div>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
