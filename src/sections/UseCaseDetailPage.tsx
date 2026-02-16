import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useCases, UseCaseData } from '../data/useCasesData';
import { Header } from './Header';
import { OfferSection } from './OfferSection';
import { Footer } from './Footer';

const TOTAL_SPOTS = 10;

function renderWithLineBreaks(text: string, highlightClass: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => (
    <span key={i}>
      <span className={highlightClass}>{line}</span>
      {i < lines.length - 1 && <br />}
    </span>
  ));
}

function renderPlainWithBreaks(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </span>
  ));
}

export function UseCaseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [remainingSpots, setRemainingSpots] = useState(TOTAL_SPOTS);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const data: UseCaseData | undefined = useCases.find((uc) => uc.slug === slug);

  useEffect(() => {
    supabase.rpc('get_pilot_spots_remaining').then(({ data }) => {
      if (data !== null && data !== undefined) {
        setRemainingSpots(data as number);
      }
    });
  }, []);

  // Auto-resize iframe
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data && typeof event.data.iframeHeight === 'number' && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.iframeHeight}px`;
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  function handleIframeLoad() {
    const iframe = iframeRef.current;
    if (!iframe) return;

    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        const height = doc.documentElement.scrollHeight || doc.body.scrollHeight;
        if (height > 0) {
          iframe.style.height = `${height}px`;
        }
      }
    } catch {
      // Cross-origin restriction - fall back to minHeight
    }
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-28 pb-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Pagina nu a fost găsită</h1>
          <p className="text-gray-600 mb-6">Use case-ul căutat nu există.</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition-all"
          >
            Înapoi la pagina principală
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-8 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Category label */}
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            {data.category}
          </p>

          {/* Hero title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {renderPlainWithBreaks(data.heroTitle)}
          </h1>

          {/* Hero highlight */}
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            {renderWithLineBreaks(data.heroHighlight, 'bg-red-100/70 px-2 py-0.5')}
          </p>

          {/* Savings text */}
          <p className="text-2xl md:text-3xl font-extrabold text-gray-900">
            {renderWithLineBreaks(data.savingsLine1, 'bg-green-100/70 px-2 py-0.5')}
          </p>
          {data.savingsLine2 && (
            <p className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
              {renderWithLineBreaks(data.savingsLine2, 'bg-green-100/70 px-2 py-0.5')}
            </p>
          )}
        </div>
      </section>

      {/* Executive Summary */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8">
          <p className="text-sm font-bold text-primary mb-2">Executive Summary</p>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
            {data.execSummary.title}
          </h2>
          <p className="text-sm text-primary italic mb-4">{data.execSummary.subtitle}</p>
          {data.execSummary.paragraphs.map((para, i) => (
            <p key={i} className="text-gray-700 text-[15px] leading-relaxed mb-3">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Automation Opportunity Label */}
      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 text-center py-8">
        Oportunitate de Automatizare
      </h2>

      {/* Iframe Section */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <iframe
          ref={iframeRef}
          src={data.htmlFile}
          width="100%"
          style={{ border: 'none', overflow: 'hidden' }}
          title="Automation Opportunity Card"
          onLoad={handleIframeLoad}
        />
      </section>

      {/* Offer Section */}
      <OfferSection remainingSpots={remainingSpots} totalSpots={TOTAL_SPOTS} />

      <Footer />
    </div>
  );
}
