// app/page.tsx
'use client';

import { useEffect } from 'react';
import { pageview } from '../lib/ga';
import { HeroSection } from './sections/hero';
import { AuthoritySection } from './sections/authority';
import { ServicesSection } from './sections/services';
import ProjectsSection from './sections/projects';
import { ProofSection } from './sections/proof';
import { ContactSection } from './sections/contact';
import { FinalCTASection } from './sections/final-cta';

export default function Home() {
  // Pageview automático
  useEffect(() => {
    pageview(window.location.pathname);
  }, []);

  return (
    <>      
      <HeroSection />
      <AuthoritySection />
      <ServicesSection />
      <ProjectsSection />
      <ProofSection />
      <ContactSection />
      <FinalCTASection />
    </>
  );
}