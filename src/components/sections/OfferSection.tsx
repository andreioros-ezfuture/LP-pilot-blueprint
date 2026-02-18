import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Badge from '../ui/Badge';
import CheckList from '../ui/CheckList';
import Button from '../ui/Button';
import { scrollToSection } from '../../hooks/useScrollToSection';
import { Link } from 'react-router-dom';

export default function OfferSection({ showDetailsLink = false }: { showDetailsLink?: boolean }) {

  return (
    <SectionWrapper id="oferta" variant="white">
      {/* Credibility Stats */}
      <FadeInOnScroll>
        <p className="text-center text-body text-lg mb-6">
          Echipa noastră pune la bătaie, cumulat:
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { number: '16+', label: 'ani de experiență în automatizarea de procese' },
            { number: '100+', label: 'procese optimizate' },
            { number: '20+', label: 'piețe globale' },
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
          <span className="font-semibold text-primary">Mentenanță</span>
        </p>
      </FadeInOnScroll>

      {/* Big Offer H2 */}
      <FadeInOnScroll>
        <h2 className="text-center mt-12 text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary">
          Și facem o ofertă pe care probabil nu o vom mai repeta niciodată:
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
              'În 21 de zile <strong>mapăm la nivel de proces minim 5 automatizări</strong> pentru afacerea ta. Pentru implementare ne asumăm prin contract <strong>prețuri fixe</strong> (nu estimări). <strong>Și calculăm ROI</strong> pe fiecare automatizare (economii de €100.000/an nu sunt atipice pentru afaceri de €2-10 mil).',
              'Investiție: <strong>€3.750</strong> în loc de <s>€7.500</s> (preț standard după încheierea pilotului).',
              'Garanție dublă: dacă nu livrăm, ai 100% banii înapoi. Dacă livrăm, suma plătită pe planificare <strong>(BLUEPRINT)</strong> se scade din implementare <strong>(BUILD)</strong> dacă decizi în 14 zile să implementăm noi pentru tine (ai opțiunea, nu și obligația).',
            ]}
          />
        </div>
      </FadeInOnScroll>

      {/* CTA */}
      <FadeInOnScroll>
        <div className="text-center mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection('aplica')}>
              Rezervă-ți Locul
            </Button>
            {showDetailsLink && (
              <Link
                to="/#proces"
                className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-base hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Vezi mai multe detalii
              </Link>
            )}
          </div>
          <p className="text-muted text-sm mt-4">
            Înscrierea durează sub 2 minute.{' '}
            <span className="font-semibold">Fără angajament</span>. Primești un răspuns în 48 de ore.
          </p>
        </div>
      </FadeInOnScroll>
    </SectionWrapper>
  );
}
