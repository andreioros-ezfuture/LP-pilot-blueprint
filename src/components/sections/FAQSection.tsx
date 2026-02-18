import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Accordion from '../ui/Accordion';
import Button from '../ui/Button';
import { faqItems } from '../../data/faqItems';
import { scrollToSection } from '../../hooks/useScrollToSection';

export default function FAQSection() {

  return (
    <SectionWrapper id="faq" variant="light" maxWidth="medium">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
            INTREBARI FRECVENTE
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
            Ai intrebari? Avem raspunsuri.
          </h2>
          <p className="text-body mt-4">
            Daca un subiect important pentru tine nu a fost acoperit pe aceasta pagina, nu ezita sa ne scrii. <strong>Discutam orice ai nevoie ca sa poti decide.</strong> Scrie-ne ori in formularul de inscriere, ori pe email, la contact@ezfuture.ai. Orice ne spui ramane <strong>100% confidential</strong>.
          </p>
        </div>

        {/* FAQ Accordion */}
        <FadeInOnScroll>
          <div className="mt-10 space-y-3">
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </FadeInOnScroll>

        {/* Bottom CTA */}
        <FadeInOnScroll>
          <div className="text-center mt-12">
            <Button size="lg" onClick={() => scrollToSection('aplica')}>
              Rezerva-ti Locul &rarr;
            </Button>
            <p className="text-sm text-muted mt-3">
              Inscrierea dureaza sub 2 minute. <strong>Fara angajament</strong>. Primesti un raspuns in 48 de ore.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
