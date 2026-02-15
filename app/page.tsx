// app/page.tsx

// Imports atualizados para apontar para a pasta /sections
import { HeroSection } from './sections/hero';
import { AboutSection } from './sections/about';
import {ExperienceSection} from './sections/xp';
import ProjectsSection from './sections/projects'; // Mantenha como está se 'projects' for um componente complexo
// Se ProjectsSection for uma seção, mova-a para /sections também. Vamos assumir que é uma seção para consistência:
// import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/contact';
import { BlogSection } from './sections/lastblogposts';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <BlogSection />
    </>
  );
}