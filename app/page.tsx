// app/page.tsx

import { HeroSection } from './sections/hero';
import { HowIHelpSection } from './sections/howhelp';
import ProjectsSection from './sections/projects';
import { ContactSection } from './sections/contact';
import { BlogSection } from './sections/lastblogposts';
import { ServicesSection } from './sections/services';


export default function Home() {
  

  return (
    <>
      <HeroSection />
      <HowIHelpSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <BlogSection />
    </>
  );
}
