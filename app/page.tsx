// import { BlogPosts } from 'app/components/posts'

// Este é o novo arquivo `page.tsx` que agrupa todas as seções.
import { HeroSection } from './components/hero';
import { AboutSection } from './components/about';
import { ProjectsSection } from './components/projects';
import { ContactSection } from './components/contact';
import { BlogPostsSection } from './components/lastblogposts';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <BlogPostsSection />
    </>
  );
}
