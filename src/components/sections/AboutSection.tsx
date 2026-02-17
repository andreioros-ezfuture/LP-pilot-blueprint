import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import { scrollToSection } from '../../hooks/useScrollToSection';

export default function AboutSection() {
  return (
    <SectionWrapper id="despre" variant="white" maxWidth="narrow">
      <div className="text-center">
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          DESPRE EZFUTURE
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
          Rezultate, nu promisiuni.
        </h2>
      </div>

      <FadeInOnScroll>
        <div className="mt-8 space-y-4 text-body leading-relaxed">
          <p>
            EZ Future AI este o agentie de automatizare si strategie AI construita pentru companii care vor <strong>rezultate masurabile</strong>. Modelul nostru este simplu: prima data intelegem si planificam (<strong>BLUEPRINT</strong>), apoi construim (<strong>BUILD</strong>), iar pe urma sustinem pe termen lung (<strong>RUN &amp; CARE</strong>).
          </p>
          <p>
            Fiecare etapa vine cu preturi fixe, garantii clare si livrabile concrete. Nu vindem ore.
          </p>
          <p>
            Nu vindem &ldquo;consulting&rdquo;. Vindem <strong>transformare operationala pe care o poti masura</strong>.
          </p>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="mt-8">
          <button
            onClick={() => scrollToSection('aplica')}
            className="text-accent font-semibold hover:underline cursor-pointer"
          >
            Aplica pentru BLUEPRINT &rarr;
          </button>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
