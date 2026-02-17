import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useCases } from '../../data/useCases';
import { scrollToSection } from '../../hooks/useScrollToSection';

const AUTO_PLAY_MS = 3500;
const TOTAL = useCases.length;
const GAP = 20;

function getVisibleCount(width: number) {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Duplicate cards for seamless infinite loop
  const cards = [...useCases, ...useCases];
  const step = cardWidth + GAP;

  // Measure card width based on container and visible count
  useEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      const visible = getVisibleCount(el.offsetWidth);
      setCardWidth((el.offsetWidth - GAP * (visible - 1)) / visible);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Auto-play timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, AUTO_PLAY_MS);
  }, []);

  useEffect(() => {
    if (!hovered) resetTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hovered, resetTimer]);

  // When reaching clone zone, snap back instantly
  const onTransitionEnd = () => {
    if (index >= TOTAL) {
      setAnimate(false);
      setIndex((i) => i - TOTAL);
    }
  };

  const goNext = () => {
    setAnimate(true);
    setIndex((i) => i + 1);
    resetTimer();
  };

  const goPrev = () => {
    if (index <= 0) {
      // Jump to clone zone instantly (visually identical), then animate back
      setAnimate(false);
      setIndex(TOTAL);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(TOTAL - 1);
        });
      });
    } else {
      setAnimate(true);
      setIndex((i) => i - 1);
    }
    resetTimer();
  };

  const goToDot = (dot: number) => {
    setAnimate(true);
    setIndex(dot);
    resetTimer();
  };

  const activeDot = ((index % TOTAL) + TOTAL) % TOTAL;

  return (
    <section id="hero" className="bg-gradient-to-b from-dark to-dark-end pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight text-white text-center max-w-4xl mx-auto">
          Un business de 2&ndash;10 milioane €/an<br />
          <em className="not-italic whitespace-nowrap text-accent">care nu automatizeaza procesele manuale</em><br />
          ar putea la fel de bine sa dea foc unei valize cu{' '}
          <span className="text-white">€100.000</span>
        </h1>
      </div>

      {/* Carousel */}
      <div
        className="relative mt-12"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Arrow — prev */}
        <button
          onClick={goPrev}
          aria-label="Anterior"
          className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors duration-200 backdrop-blur-sm"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Arrow — next */}
        <button
          onClick={goNext}
          aria-label="Urmator"
          className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors duration-200 backdrop-blur-sm"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Track container (overflow hidden) */}
        <div ref={containerRef} className="overflow-hidden mx-6 lg:mx-20 xl:mx-28">
          <div
            className={animate ? 'transition-transform duration-500 ease-in-out' : ''}
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transform: `translateX(-${index * step}px)`,
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {cards.map((uc, i) => (
              <div
                key={`${uc.slug}-${i}`}
                className="shrink-0 bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col"
                style={{ width: cardWidth || undefined }}
              >
                <span className="text-xs uppercase tracking-widest text-white/50">
                  {uc.category}
                </span>

                <h3 className="text-white font-semibold mt-3 text-lg">
                  {uc.cardTitle}
                </h3>

                <p className="text-white/70 mt-2 text-sm leading-relaxed">
                  {uc.cardDescription}
                </p>

                <p className="text-accent text-xl font-bold mt-4">
                  {uc.cardLoss}
                </p>

                <p className="text-white/60 text-sm mt-1">
                  {uc.cardConsequence}
                </p>

                <Link
                  to={`/exemplu/${uc.slug}`}
                  className="mt-auto pt-5 inline-flex items-center gap-1.5 text-accent hover:text-accent-hover text-sm font-semibold transition-colors duration-200"
                >
                  Vezi mai mult
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="translate-y-px">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {useCases.map((_, i) => (
            <button
              key={i}
              onClick={() => goToDot(i)}
              aria-label={`Card ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeDot
                  ? 'w-6 bg-accent'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom text + CTA */}
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-white/80 italic mt-10 text-center max-w-3xl mx-auto text-lg">
          Cand tragi linie s-ar putea sa realizezi ca arzi (prea) multe astfel de
          &ldquo;valize cu bani&rdquo;.
        </p>

        <div className="mt-10 text-center">
          <button
            onClick={() => scrollToSection('aplica')}
            className="bg-accent hover:bg-accent-hover text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
          >
            Rezerva-ti Locul
          </button>
          <p className="text-white/60 text-sm mt-4">
            Inscrierea dureaza sub 2 minute. Fara angajament.
          </p>
        </div>
      </div>
    </section>
  );
}
