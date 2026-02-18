import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import FadeInOnScroll from '../components/ui/FadeInOnScroll';
import { useCases } from '../data/useCases';
import { useCaseHtmlMap } from '../data/useCaseHtmlMap';
import OfferSection from '../components/sections/OfferSection';

export default function UseCasePage() {
  const { slug } = useParams<{ slug: string }>();
  const useCase = useCases.find((uc) => uc.slug === slug);
  const [iframeHeight, setIframeHeight] = useState('2000px');

  const htmlSrc = slug ? useCaseHtmlMap[slug] : undefined;

  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    try {
      const doc = e.currentTarget.contentDocument;
      if (doc) {
        setIframeHeight(doc.body.scrollHeight + 'px');
      }
    } catch {
      setIframeHeight('2000px');
    }
  };

  if (!useCase) {
    return (
      <>
        <Header showNav={false} />
        <main className="min-h-screen bg-warm-white flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
              Pagina nu a fost găsită
            </h1>
            <p className="text-body mt-4 text-lg">
              Use case-ul căutat nu există.
            </p>
            <div className="mt-8">
              <Link to="/">
                <Button>Înapoi la pagina principală</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header showNav={false} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark to-dark-end pt-28 pb-14 md:pb-24 text-left text-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeInOnScroll>
            <Badge variant="accent" className="mb-6">
              {useCase.category}
            </Badge>

            <h1 className="text-xl md:text-2xl font-heading font-extrabold leading-tight">
              {useCase.heroTitle}
            </h1>

            <p className="text-lg md:text-2xl text-danger font-semibold mt-4">
              {useCase.heroHighlight}
            </p>

            <div className="mt-6 space-y-1">
              <p className="text-success text-lg md:text-2xl font-semibold">{useCase.savingsLine1}</p>
              <p className="text-success text-lg md:text-2xl font-semibold">{useCase.savingsLine2}</p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="bg-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary">
              {useCase.execSummaryTitle}
            </h2>
            <p className="text-muted font-medium mt-2">
              {useCase.execSummarySubtitle}
            </p>

            <div className="mt-8 space-y-4">
              {useCase.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-body leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeInOnScroll>

        </div>
      </section>

      {/* Automation Card (embedded HTML) */}
      {htmlSrc && (
        <section className="bg-light-gray py-10 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInOnScroll threshold={0.01}>
              <iframe
                src={htmlSrc}
                title="Card de Automatizare"
                className="w-full border-0 rounded-2xl shadow-lg bg-white"
                style={{ height: iframeHeight }}
                onLoad={handleIframeLoad}
              />
            </FadeInOnScroll>
          </div>
        </section>
      )}

      {/* Offer Section */}
      <OfferSection showDetailsLink />

      <Footer />
    </>
  );
}
