import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import CheckList from '../ui/CheckList';

const forYouItems = [
  'Ai 3 sau mai multe procese pe care ai vrea sa le automatizezi, dar nu stii cu care sa incepi sau cat de sigur poti fi ca nu strici ce merge (chiar daca e mai ineficient).',
  'Echipa ta pierde ore intregi in fiecare saptamana pe sarcini repetitive: data entry, raportare, procesare documente, sincronizare sisteme etc.',
  'Ai incercat solutii punctuale, dar nu ai o strategie coerenta de automatizare.',
  'Vrei sa intelegi si sa poti cuantifica impactul in mod realist — timp recuperat, bani economisiti, erori eliminate — INAINTE sa investesti in implementare.',
  'Ai nevoie de un plan clar pe care sa-l prezinti echipei de management.',
  'Ai cel putin un decision maker disponibil pentru cele 3 sesiuni de analiza (4h in total).',
  'Ai buget realist pentru implementarea ulterioara (minim €10.000 pentru primele automatizari).',
];

const notForYouItems = [
  'Ai un singur workflow simplu de automatizat — serviciul nostru <strong class="text-primary">CHAT</strong> (€197/workflow) e mai potrivit.',
  'Cauti un parteneriat strategic pe termen lung — <strong class="text-primary">AI STRATEGY</strong> (Chief-Automation-Officer-as-a-Service) e solutia. Putem discuta in orice moment.',
];

export default function ForWhoSection() {
  return (
    <SectionWrapper id="pentru-cine" variant="light">
      <FadeInOnScroll>
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          PENTRU CINE ESTE BLUEPRINT
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
          Te regasesti in cel putin una dintre aceste situatii?
        </h2>
      </FadeInOnScroll>

      <div className="grid md:grid-cols-5 gap-8 mt-12">
        {/* Left column - FOR YOU */}
        <FadeInOnScroll className="md:col-span-3">
          <div className="bg-white rounded-2xl p-8 border border-border h-full">
            <h3 className="font-heading font-bold text-xl text-primary mb-6">
              Blueprint este pentru tine daca...
              <span className="inline-block w-2 h-2 rounded-full bg-success ml-2 align-middle" />
            </h3>

            <CheckList items={forYouItems} variant="success" />

            <div className="bg-success-light rounded-xl p-4 mt-6">
              <p className="text-sm text-body">
                <strong>Banii investiti in Blueprint se scad din costul de implementare</strong> daca
                decizi sa continui cu noi.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Right column - NOT FOR YOU */}
        <FadeInOnScroll className="md:col-span-2" delay={150}>
          <div className="bg-white rounded-2xl p-8 border border-border h-full">
            <h3 className="font-heading font-bold text-xl text-primary mb-6">
              Blueprint NU este pentru tine daca...
              <span className="inline-block w-2 h-2 rounded-full bg-danger ml-2 align-middle" />
            </h3>

            <CheckList items={notForYouItems} variant="danger" />
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
