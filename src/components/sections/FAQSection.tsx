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
            ÎNTREBĂRI FRECVENTE
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
            Ai întrebări? Avem răspunsuri.
          </h2>
          <p className="text-body mt-4">
            Dacă un subiect important pentru tine nu a fost acoperit pe această pagină, nu ezita să ne scrii. <strong>Discutăm orice ai nevoie ca să poți decide.</strong> Scrie-ne ori în formularul de înscriere, ori pe email, la contact@ezfuture.ai. Orice ne spui rămâne <strong>100% confidențial</strong>.
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
              Rezervă-ți Locul &rarr;
            </Button>
            <p className="text-sm text-muted mt-3">
              Înscrierea durează sub 2 minute. <strong>Fără angajament</strong>. Primești un răspuns în 48 de ore.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
