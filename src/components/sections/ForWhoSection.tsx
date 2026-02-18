import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import CheckList from '../ui/CheckList';

const forYouItems = [
  'Ai 3 sau mai multe procese pe care ai vrea să le automatizezi, dar nu știi cu care să începi sau cât de sigur poți fi că nu strici ce merge (chiar dacă e mai ineficient).',
  'Echipa ta pierde ore întregi în fiecare săptămână pe sarcini repetitive: data entry, raportare, procesare documente, sincronizare sisteme etc.',
  'Ai încercat soluții punctuale, dar nu ai o strategie coerentă de automatizare.',
  'Vrei să înțelegi și să poți cuantifica impactul în mod realist (timp recuperat, bani economisiți, erori eliminate) ÎNAINTE să investești în implementare.',
  'Ai nevoie de un plan clar pe care să-l prezinți echipei de management.',
  'Ai cel puțin un decision maker disponibil pentru cele 3 sesiuni de analiză (4h în total).',
  'Ai buget realist pentru implementarea ulterioară (minim €10.000 pentru primele automatizări).',
];

const notForYouItems = [
  'Ai un singur workflow simplu de automatizat. Serviciul nostru <strong class="text-primary">CHAT</strong> (€197/workflow) e mai potrivit.',
  'Cauți un parteneriat strategic pe termen lung. <strong class="text-primary">AI STRATEGY</strong> (Chief-Automation-Officer-as-a-Service) e soluția. Putem discuta în orice moment.',
];

export default function ForWhoSection() {
  return (
    <SectionWrapper id="pentru-cine" variant="light">
      <FadeInOnScroll>
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          PENTRU CINE ESTE BLUEPRINT
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
          Te regăsești în cel puțin una dintre aceste situații?
        </h2>
      </FadeInOnScroll>

      <div className="grid md:grid-cols-5 gap-8 mt-12">
        {/* Left column - FOR YOU */}
        <FadeInOnScroll className="md:col-span-3">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-border h-full">
            <h3 className="font-heading font-bold text-xl text-primary mb-6">
              Blueprint este pentru tine dacă...
              <span className="inline-block w-2 h-2 rounded-full bg-success ml-2 align-middle" />
            </h3>

            <CheckList items={forYouItems} variant="success" />

            <div className="bg-success-light rounded-xl p-4 mt-6">
              <p className="text-sm text-body">
                <strong>Banii investiți în Blueprint se scad din costul de implementare</strong> dacă
                decizi să continui cu noi.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Right column - NOT FOR YOU */}
        <FadeInOnScroll className="md:col-span-2" delay={150}>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-border h-full">
            <h3 className="font-heading font-bold text-xl text-primary mb-6">
              Blueprint NU este pentru tine dacă...
              <span className="inline-block w-2 h-2 rounded-full bg-danger ml-2 align-middle" />
            </h3>

            <CheckList items={notForYouItems} variant="danger" />
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
