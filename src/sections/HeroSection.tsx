import { ArrowRight, Beaker, Users } from 'lucide-react';

interface HeroSectionProps {
  remainingSpots: number;
  totalSpots: number;
}

export function HeroSection({ remainingSpots, totalSpots }: HeroSectionProps) {
  const filledPercent = ((totalSpots - remainingSpots) / totalSpots) * 100;

  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 text-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(91,106,232,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[100px] right-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,107,53,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Pilot badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cta to-cta-dark rounded-full mb-8 shadow-lg shadow-cta/20">
          <Beaker className="w-4 h-4 text-white" />
          <span className="text-[13px] font-bold text-white tracking-wide uppercase">
            Program Pilot — Locuri Limitate
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
          Stii ca pierzi bani pe procese manuale.
          <br />
          <span className="text-primary">Dar nu stii cat te costa — si nici de unde sa incepi.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
          In 21 de zile, iti aratam exact unde, cat si cum poti recupera
          — cu preturi fixe si ROI calculat pentru fiecare automatizare.
        </p>

        <p className="text-base font-bold text-cta mb-10">
          Blueprint by EZFuture — Program Pilot | €3.750 in loc de €7.500
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href="#aplica" className="btn-primary text-base md:text-lg px-10 py-4">
            Rezerva-ti Locul
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#ce-este" className="btn-secondary text-base md:text-lg px-10 py-4">
            Vezi Ce Primesti
          </a>
        </div>

        {/* Spots counter */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border-2 border-gray-100 shadow-soft">
          <Users className="w-5 h-5 text-cta" />
          <span className="text-sm font-bold text-gray-900">
            {remainingSpots} din {totalSpots} locuri ramase
          </span>
          <div className="w-28 h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cta to-cta-dark rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${filledPercent}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
