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
            Vrem sa demonstram ce impact poate avea pe piata din Romania o strategie de automatizare
            bine facuta. Si sa construim studii de caz autentice, cu rezultate masurabile.
          </p>

          <p className="text-lg leading-relaxed text-body">
            Tu ne ajuti pe noi, noi te ajutam pe tine. E un schimb cat se poate de echitabil.
          </p>

          <p className="text-muted italic">
            Numarul de locuri este limitat la 10. Aplicarile sunt procesate in ordinea primirii.
          </p>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
