import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
