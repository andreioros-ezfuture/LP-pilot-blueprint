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
            EZ Future AI este o agenție de automatizare și strategie AI construită pentru companii care vor <strong>rezultate măsurabile</strong>. Modelul nostru este simplu: prima dată înțelegem și planificăm (<strong>BLUEPRINT</strong>), apoi construim (<strong>BUILD</strong>), iar pe urmă susținem pe termen lung (<strong>RUN &amp; CARE</strong>).
          </p>
          <p>
            Fiecare etapă vine cu prețuri fixe, garanții clare și livrabile concrete. Nu vindem ore.
          </p>
          <p>
            Nu vindem &ldquo;consulting&rdquo;. Vindem <strong>transformare operațională pe care o poți măsura</strong>.
          </p>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="mt-8">
          <button
            onClick={() => scrollToSection('aplica')}
            className="text-accent font-semibold hover:underline cursor-pointer"
          >
            Aplică pentru BLUEPRINT &rarr;
          </button>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
