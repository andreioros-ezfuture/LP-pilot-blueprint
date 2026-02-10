import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { Header } from './sections/Header';
import { HeroSection } from './sections/HeroSection';
import { WhyPilotSection } from './sections/WhyPilotSection';
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

const TOTAL_SPOTS = 10;

export default function App() {
  const [remainingSpots, setRemainingSpots] = useState(TOTAL_SPOTS);

  useEffect(() => {
    supabase.rpc('get_pilot_spots_remaining').then(({ data }) => {
      if (data !== null && data !== undefined) {
        setRemainingSpots(data as number);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection remainingSpots={remainingSpots} totalSpots={TOTAL_SPOTS} />
        <WhyPilotSection />
        <WhatIsBlueprintSection />
        <ForWhoSection />
        <DeliverablesSection />
        <CTABanner text="Ai vazut cele 10 livrabile. Vrei sa le primesti pe ale tale?" />
        <ProcessSection />
        <CTABanner text="21 de zile. 3 sesiuni. Restul e treaba noastra." />
        <GuaranteeSection />
        <CreditSystemSection />
        <InvestmentSection />
        <CTABanner text="Money back daca nu livram. Credit integral in BUILD daca livram. Zero risc." />
        <AfterBlueprintSection />
        <TrainingAddonSection />
        <ApplicationFormSection
          spotsAvailable={remainingSpots > 0}
          onSubmitSuccess={() => setRemainingSpots(prev => Math.max(0, prev - 1))}
        />
        <FAQSection />
        <TeamSection />
        <AboutSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
