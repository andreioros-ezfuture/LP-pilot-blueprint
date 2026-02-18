import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Badge from '../ui/Badge';

export default function GuaranteeSection() {
  return (
    <SectionWrapper id="garantie" variant="light" maxWidth="standard">
      <div className="text-center">
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          GARANTIE DUBLA
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
          Nu poti pierde.
        </h2>
        <p className="text-body mt-4 max-w-2xl mx-auto">
          Planul tau complet de automatizare (Blueprint-ul) e protejat din 2 directii. Oricare ar fi rezultatul, investitia ta e acoperita.
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
              Nu livram? Ai banii inapoi.
            </h3>
            <p className="text-body text-sm leading-relaxed flex-1">
              Daca <strong>in 21 de zile</strong> nu primesti <strong>minim 5 Carduri de Automatizare</strong> (adica minim 5 automatizari mapate riguros la nivel de proces, pe baza carora pot fi construite solutii tehnice eficiente si sigure in etapa de implementare) iti returnam <em>100% din suma platita</em>. Fara discutii.
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
              Livram? Devine credit in BUILD.
            </h3>
            <p className="text-body text-sm leading-relaxed flex-1">
              Daca in 14 zile dupa ce-ti livram Blueprint-ul decizi sa continui cu noi, <strong>intreaga suma devine credit</strong> aplicat pe implementarea primei automatizari.
            </p>
            <p className="text-body text-sm leading-relaxed mt-3">
              Practic, Blueprint-ul a fost gratuit <em>(intre 15-30 zile e 50%, iar din ziua 31 creditul expira)</em>.
            </p>
            <div className="mt-6">
              <Badge variant="success">€3.750 credit catre implementare</Badge>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      {/* Bottom */}
      <FadeInOnScroll>
        <div className="mt-12 text-center">
          <p className="text-xl font-heading font-bold text-primary">
            Oricum ar fi, nu poti pierde.
          </p>
          <p className="text-body text-sm mt-3">
            Singura conditie: participi la cele 3 sesiuni si raspunzi la solicitari in timp util.
          </p>
          <p className="text-body text-sm mt-1">
            Restul e responsabilitatea noastra.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Badge variant="success">100% money back</Badge>
            <Badge variant="success">100% credit in BUILD</Badge>
            <Badge variant="accent">Risc asumat impreuna</Badge>
          </div>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
