import { ArrowRight, CheckCircle2, Users } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface OfferSectionProps {
  remainingSpots: number;
  totalSpots: number;
}

export function OfferSection({ remainingSpots, totalSpots }: OfferSectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const location = useLocation();
  const isOnLP = location.pathname === '/';

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isOnLP) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const filledPercent = ((totalSpots - remainingSpots) / totalSpots) * 100;

  return (
    <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-white relative overflow-hidden">

      <div ref={ref} className={`max-w-4xl mx-auto px-6 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        {/* Part 1 - Credibility Box */}
        <div className="glass-card px-8 py-10 text-center mb-14">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Echipa noastră pune la bătaie
            <br className="hidden md:block" />
            peste <span className="font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded border-b-2 border-primary/30">16 ani</span> de experiență
            <br className="hidden md:block" />
            și peste <span className="font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded border-b-2 border-primary/30">100 de procese</span> optimizate,
            <br className="hidden md:block" />
            pe mai mult de <span className="font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded border-b-2 border-primary/30">20 de piețe</span> globale
          </p>
        </div>

        {/* Part 2 - Big Offer */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Și facem o ofertă pe care probabil<br className="hidden md:block" />
            nu o vom mai repeta niciodată:
          </h2>
        </div>

        {/* Part 3 - Program Details */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-400 uppercase tracking-widest font-medium mb-2">
            Programul Pilot
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            Blueprint by EZ Future AI
          </h3>
          <p className="text-2xl md:text-3xl font-extrabold mb-4">
            cu <span className="bg-gradient-to-r from-red-600 to-cta bg-clip-text text-transparent">50% reducere</span>
          </p>
          <span className="inline-block text-sm font-semibold text-gray-600 border border-gray-200 rounded-full px-5 py-1.5 shadow-soft">
            doar 10 locuri
          </span>
        </div>

        {/* Part 4 - Three Checkmarks */}
        <div className="space-y-6 mb-14">
          {[
            <>În 21 de zile primești un <strong>Plan Complet de Automatizare</strong> (cu minim 5 automatizări personalizate, mapate la nivel de proces) - cu <strong>prețuri fixe</strong> și <strong>ROI calculat</strong> (economii de €100.000/an nu sunt atipice pentru afaceri de €2-10 mil).</>,
            <>Investiție: <span className="font-bold text-cta text-lg">€3.750</span> în loc de <span className="line-through text-gray-400">€7.500</span> (preț standard după încheierea pilotului).</>,
            <>Garanție dublă: dacă nu livrăm, ai 100% banii înapoi. Dacă livrăm, suma plătită pe <span className="font-bold text-primary">BLUEPRINT</span> se scade din <span className="font-bold text-primary">BUILD</span> dacă decizi în 14 zile să implementezi cu noi (ai opțiunea, nu și obligația).</>,
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Part 5 - CTAs */}
        <div className="border border-gray-200/80 rounded-2xl px-8 py-10 mb-14 shadow-soft">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a href="/#aplica" onClick={(e) => handleScrollTo(e, 'aplica')} className="btn-primary text-base md:text-lg px-10 py-4">
              Rezervă-ți Locul
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/#livrabile" onClick={(e) => handleScrollTo(e, 'livrabile')} className="btn-secondary text-base md:text-lg px-10 py-4">
              Vezi ce Primești
            </a>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Înscrierea durează sub 2 minute. <span className="text-primary font-bold">Fără angajament</span>. Primești un răspuns în 48 de ore.
          </p>
        </div>

        {/* Part 6 - Spots Counter */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-gray-500" />
            <span className="text-base font-bold text-gray-900">
              {remainingSpots} din {totalSpots} locuri rămase
              {remainingSpots <= 3 && <span className="ml-2 w-2 h-2 rounded-full bg-cta animate-pulse inline-block" />}
            </span>
          </div>
          <div className="w-full max-w-[16rem] h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${100 - filledPercent}%`,
                background: `linear-gradient(90deg, #10B981, #10B981 ${100 - filledPercent}%, #FF6B35 100%)`,
              }}
            />
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-success inline-block" />
              Disponibile
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-cta inline-block" />
              Ocupate
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
