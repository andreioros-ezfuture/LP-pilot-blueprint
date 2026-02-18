import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Badge from '../ui/Badge';
import CheckList from '../ui/CheckList';
import Button from '../ui/Button';
import { scrollToSection } from '../../hooks/useScrollToSection';

export default function OfferSection() {

  return (
    <SectionWrapper id="oferta" variant="white">
      {/* Credibility Stats */}
      <FadeInOnScroll>
        <p className="text-center text-body text-lg mb-6">
          Echipa noastra pune la bataie, cumulat:
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { number: '16+', label: 'ani de experienta in automatizarea de procese' },
            { number: '100+', label: 'procese optimizate' },
            { number: '20+', label: 'piete globale' },
          ].map((stat) => (
            <div key={stat.label} className="bg-light-gray rounded-2xl p-4 md:p-6 text-center">
              <p className="text-4xl font-extrabold text-accent">{stat.number}</p>
              <p className="text-body text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-body font-medium flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
          <span>Automatizare end-to-end:</span>
          <span className="font-semibold text-primary">Strategie</span>
          <span className="text-accent font-bold">&rarr;</span>
          <span className="font-semibold text-primary">Implementare</span>
          <span className="text-accent font-bold">&rarr;</span>
          <span className="font-semibold text-primary">Mentenanta</span>
        </p>
      </FadeInOnScroll>

      {/* Big Offer H2 */}
      <FadeInOnScroll>
        <h2 className="text-center mt-12 text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary">
          Si facem o oferta pe care probabil nu o vom mai repeta niciodata:
        </h2>
      </FadeInOnScroll>

      {/* Program Details Card */}
      <FadeInOnScroll>
        <div className="max-w-xl mx-auto mt-8 bg-white border-2 border-border rounded-3xl p-6 md:p-10 shadow-lg text-center">
          {/* Label */}
          <p className="uppercase text-xs tracking-widest text-muted font-semibold">
            Programul Pilot
          </p>

          {/* Heading */}
          <h3 className="text-2xl font-heading font-bold text-primary mt-3">
            Blueprint - Plan Complet de Automatizare
          </h3>

          {/* Subtext */}
          <p className="text-lg text-muted mt-2">
            cu 50% reducere
          </p>

          {/* Badge */}
          <div className="mt-4">
            <Badge variant="accent" className="animate-pulse-subtle">
              doar 10 locuri
            </Badge>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Three Checkmarks */}
      <FadeInOnScroll>
        <div className="max-w-3xl mx-auto mt-10">
          <CheckList
            variant="success"
            items={[
              'In 21 de zile <strong>mapam la nivel de proces minim 5 automatizari</strong> pentru afacerea ta. Pentru implementare ne asumam prin contract <strong>preturi fixe</strong> (nu estimari). <strong>Si calculam ROI</strong> pe fiecare automatizare (economii de €100.000/an nu sunt atipice pentru afaceri de €2-10 mil).',
              'Investitie: <strong>€3.750</strong> in loc de <s>€7.500</s> (pret standard dupa incheierea pilotului).',
              'Garantie dubla: daca nu livram, ai 100% banii inapoi. Daca livram, suma platita pe planificare <strong>(BLUEPRINT)</strong> se scade din implementare <strong>(BUILD)</strong> daca decizi in 14 zile sa implementam noi pentru tine (ai optiunea, nu si obligatia).',
            ]}
          />
        </div>
      </FadeInOnScroll>

      {/* CTA */}
      <FadeInOnScroll>
        <div className="text-center mt-10">
          <Button size="lg" onClick={() => scrollToSection('aplica')}>
            Rezerva-ti Locul
          </Button>
          <p className="text-muted text-sm mt-4">
            Inscrierea dureaza sub 2 minute.{' '}
            <span className="font-semibold">Fara angajament</span>. Primesti un raspuns in 48 de ore.
          </p>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
