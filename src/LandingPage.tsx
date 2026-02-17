import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { Header } from './sections/Header';
import { HeroSection } from './sections/HeroSection';
import { OfferSection } from './sections/OfferSection';
import { WhyOfferSection, ExclusiveProgramSection } from './sections/WhyPilotSection';
import { WhatIsBlueprintSection } from './sections/WhatIsBlueprintSection';
import { ForWhoSection } from './sections/ForWhoSection';
import { DeliverablesSection } from './sections/DeliverablesSection';
import { CTABanner } from './sections/CTABanner';
import { ProcessSection } from './sections/ProcessSection';
import { GuaranteeSection } from './sections/GuaranteeSection';
import { CreditSystemSection } from './sections/CreditSystemSection';
import { InvestmentSection } from './sections/InvestmentSection';
import { AfterBlueprintSection } from './sections/AfterBlueprintSection';
import { TrainingAddonSection } from './sections/TrainingAddonSection';
import { ApplicationFormSection } from './sections/ApplicationFormSection';
import { FAQSection } from './sections/FAQSection';
import { TeamSection } from './sections/TeamSection';
import { AboutSection } from './sections/AboutSection';
import { Footer } from './sections/Footer';
import { StickyMobileCTA } from './sections/StickyMobileCTA';
import { SectionDivider } from './components/SectionDivider';

const TOTAL_SPOTS = 10;

export function LandingPage() {
  const [remainingSpots, setRemainingSpots] = useState(TOTAL_SPOTS);

  useEffect(() => {
    supabase.rpc('get_pilot_spots_remaining').then(({ data, error }) => {
      if (!error && data !== null && data !== undefined) {
        setRemainingSpots(data as number);
      }
    });
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <a href="#aplica" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-primary focus:font-bold">
        Sari la formularul de aplicare
      </a>
      <Header />
      <main>
        <HeroSection />
        <OfferSection remainingSpots={remainingSpots} totalSpots={TOTAL_SPOTS} />
        <WhyOfferSection />
        <ApplicationFormSection
          id="aplica"
          spotsAvailable={remainingSpots > 0}
          onSubmitSuccess={() => setRemainingSpots(prev => Math.max(0, prev - 1))}
        />
        <TeamSection />
        <ExclusiveProgramSection />
        <WhatIsBlueprintSection />
        <ForWhoSection />
        <DeliverablesSection />
        <SectionDivider variant="dots" />
        <CTABanner text="Ai văzut cele 10 livrabile. Vrei să le primești pe ale tale?" />
        <ProcessSection />
        <SectionDivider variant="dots" />
        <CTABanner text="21 de zile. 3 sesiuni. Restul e treaba noastră." buttonText="Rezervă-ți Locul" />
        <GuaranteeSection />
        <CreditSystemSection />
        <InvestmentSection />
        <SectionDivider variant="dots" />
        <CTABanner text="Money back dacă nu livrăm. Credit integral în BUILD dacă livrăm. Risc asumat împreună." buttonText="Rezervă-ți Locul" />
        <AfterBlueprintSection />
        <TrainingAddonSection />
        <SectionDivider />
        <ApplicationFormSection
          id="aplica-bottom"
          spotsAvailable={remainingSpots > 0}
          onSubmitSuccess={() => setRemainingSpots(prev => Math.max(0, prev - 1))}
        />
        <AboutSection />
        <FAQSection remainingSpots={remainingSpots} totalSpots={TOTAL_SPOTS} />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
