import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Badge from '../ui/Badge';
import CheckList from '../ui/CheckList';
import Button from '../ui/Button';
import { useAppContext } from '../../AppContext';
import { scrollToSection } from '../../hooks/useScrollToSection';

export default function OfferSection() {
  const { spots } = useAppContext();

  return (
    <SectionWrapper id="oferta" variant="white">
      {/* Credibility Stats */}
      <FadeInOnScroll>
        <p className="text-center text-body text-lg mb-6">
          Echipa noastra pune la bataie, cumulat:
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { number: '16+', label: 'ani de experienta' },
            { number: '100+', label: 'procese optimizate' },
            { number: '20+', label: 'piete globale' },
          ].map((stat) => (
            <div key={stat.label} className="bg-light-gray rounded-2xl p-4 md:p-6 text-center">
              <p className="text-4xl font-extrabold text-accent">{stat.number}</p>
              <p className="text-body text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
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
            Blueprint by EZ Future AI
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
              'In 21 de zile primesti un <strong>Plan Complet de Automatizare</strong> (cu minim 5 automatizari personalizate, mapate la nivel de proces) &mdash; cu <strong>preturi fixe</strong> si <strong>ROI calculat</strong> (economii de €100.000/an nu sunt atipice pentru afaceri de €2-10 mil).',
              'Investitie: <strong>€3.750</strong> in loc de <s>€7.500</s> (pret standard dupa incheierea pilotului).',
              'Garantie dubla: daca nu livram, ai 100% banii inapoi. Daca livram, suma platita pe <strong>BLUEPRINT</strong> se scade din <strong>BUILD</strong> daca decizi in 14 zile sa implementezi cu noi (ai optiunea, nu si obligatia).',
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

          {/* Spots Counter */}
          <p className="text-accent font-semibold text-sm mt-3">
            {spots.remaining} din {spots.total} locuri ramase
          </p>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
