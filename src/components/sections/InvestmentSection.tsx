import SectionWrapper from '../layout/SectionWrapper';
import FadeInOnScroll from '../ui/FadeInOnScroll';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import CheckList from '../ui/CheckList';
import { scrollToSection } from '../../hooks/useScrollToSection';

export default function InvestmentSection() {

  const checklistItems = [
    'Toate cele 10 livrabile profesionale',
    '21 de zile, colaborare structurată',
    '3 sesiuni (4 ore cu tine)',
    'Colectare date (~4-9 ore cu echipa ta)',
    'Minim 5 Carduri de Automatizare cu preț fix de implementare',
    'Plan de acțiune 90 de zile + 12 luni',
    'ROI calculat pentru fiecare automatizare',
    'Garanție 100% money back',
    '100% credit către BUILD. <strong>Blueprint devine gratuit</strong>',
    'Acces direct la fondator',
    'Prioritate la implementare',
  ];

  return (
    <SectionWrapper id="investitie" variant="light" maxWidth="wide">
      <div className="text-center mb-12">
        <p className="uppercase text-xs tracking-[0.2em] font-bold text-accent mb-4">
          INVESTIȚIA ÎN PLANUL TĂU DE AUTOMATIZARE
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
          Preț transparent pentru valoare pe care o poți măsura
        </h2>
      </div>

      {/* 2-column layout */}
      <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Left — Pricing card */}
        <FadeInOnScroll className="md:col-span-2">
          <div className="bg-white border-2 border-border rounded-3xl p-8 lg:p-10 shadow-xl text-center md:sticky md:top-24">
            <Badge variant="accent">PILOT -50%</Badge>

            <p className="text-2xl text-muted line-through mt-4">€7.500</p>
            <p className="text-sm text-muted">Preț standard după pilot</p>

            <p className="text-5xl lg:text-6xl font-extrabold text-primary mt-2">€3.750</p>
            <p className="text-success font-semibold mt-2">Economisești €3.750</p>

            <div className="bg-success-light rounded-xl p-4 mt-6 text-sm text-left">
              <p className="font-bold text-primary mb-1">Nu poți pierde:</p>
              <p className="text-body">
                Nu livrăm? <strong>100% banii înapoi.</strong> Livrăm și continui cu BUILD? <strong>€3.750 devine credit.</strong>
              </p>
            </div>

            <Button size="lg" className="w-full mt-6" onClick={() => scrollToSection('aplica')}>
              Vreau Planul Meu
            </Button>
          </div>
        </FadeInOnScroll>

        {/* Right — Checklist + details */}
        <FadeInOnScroll className="md:col-span-3" delay={100}>
          <div>
            <h3 className="font-heading font-bold text-xl text-primary mb-6">
              Ce primești în cele 21 de zile:
            </h3>

            <CheckList items={checklistItems} variant="success" />

            <div className="mt-8 bg-white rounded-2xl border border-border p-6">
              <p className="text-sm text-muted">
                Doar 10 locuri cu 50% reducere. Primul venit, primul servit. Răspuns în maximum 48 de ore.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
