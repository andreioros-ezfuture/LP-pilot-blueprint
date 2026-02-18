import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';

export default function WhyOfferSection() {
  return (
    <SectionWrapper id="de-ce" variant="light" maxWidth="narrow">
      <FadeInOnScroll>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary">
          De ce facem oferta asta?
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="mt-8 space-y-6">
          <p className="text-lg leading-relaxed text-body">
            Vrem să demonstrăm ce impact poate avea pe piața din România o strategie de automatizare
            bine făcută. Și să construim studii de caz autentice, cu rezultate măsurabile.
          </p>

          <p className="text-lg leading-relaxed text-body">
            Tu ne ajuți pe noi, noi te ajutăm pe tine. E un schimb cât se poate de echitabil.
          </p>

          <p className="text-muted italic">
            Numărul de locuri este limitat la 10. Aplicările sunt procesate în ordinea primirii.
          </p>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
