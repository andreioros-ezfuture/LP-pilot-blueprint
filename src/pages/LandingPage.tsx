import { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StickyMobileCTA from '../components/layout/StickyMobileCTA';
import HeroSection from '../components/sections/HeroSection';
import OfferSection from '../components/sections/OfferSection';
import WhyOfferSection from '../components/sections/WhyOfferSection';
import ApplicationFormSection from '../components/sections/ApplicationFormSection';
import TeamSection from '../components/sections/TeamSection';
import ExclusiveProgramSection from '../components/sections/ExclusiveProgramSection';
import WhatIsBlueprintSection from '../components/sections/WhatIsBlueprintSection';
import ForWhoSection from '../components/sections/ForWhoSection';
import DeliverablesSection from '../components/sections/DeliverablesSection';
import CTABanner from '../components/sections/CTABanner';
import ProcessSection from '../components/sections/ProcessSection';
import GuaranteeSection from '../components/sections/GuaranteeSection';
import CreditSystemSection from '../components/sections/CreditSystemSection';
import InvestmentSection from '../components/sections/InvestmentSection';
import AfterBlueprintSection from '../components/sections/AfterBlueprintSection';
import TrainingAddonSection from '../components/sections/TrainingAddonSection';
import AboutSection from '../components/sections/AboutSection';
import FAQSection from '../components/sections/FAQSection';
import { scrollToSection } from '../hooks/useScrollToSection';

export default function LandingPage() {
  const handleScrollToApply = () => scrollToSection('aplica');

  // Scroll to hash target after page renders (e.g. navigating from /exemplu/... to /#aplica)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <OfferSection />
      <WhyOfferSection />
      <ApplicationFormSection id="aplica" />
      <TeamSection />
      <ExclusiveProgramSection />
      <WhatIsBlueprintSection />
      <ForWhoSection />
      <DeliverablesSection />

      <CTABanner
        text="Ai vazut cele 10 livrabile. Vrei sa le primesti pe ale tale?"
        buttonText="Vreau Planul Meu"
        caption="Inscrierea dureaza sub 2 minute. Fara angajament."
        variant="accent"
        onButtonClick={handleScrollToApply}
      />

      <ProcessSection />

      <CTABanner
        text="21 de zile. 3 sesiuni. Restul e treaba noastra."
        buttonText="Rezerva-ti Locul"
        caption="Inscrierea dureaza sub 2 minute. Fara angajament."
        variant="dark"
        onButtonClick={handleScrollToApply}
      />

      <GuaranteeSection />
      <CreditSystemSection />
      <InvestmentSection />

      <CTABanner
        text="Money back daca nu livram. Credit integral in BUILD daca livram. Risc asumat impreuna."
        buttonText="Rezerva-ti Locul"
        caption="Inscrierea dureaza sub 2 minute. Fara angajament."
        variant="accent"
        onButtonClick={handleScrollToApply}
      />

      <AfterBlueprintSection />
      <TrainingAddonSection />
      <ApplicationFormSection id="aplica-bottom" />
      <AboutSection />
      <FAQSection />
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
