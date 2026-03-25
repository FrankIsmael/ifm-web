import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { cvData } from '@/lib/cv-data';

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
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">
            {cvData.name} &mdash; {new Date().getFullYear()}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {cvData.location}
          </span>
        </div>
      </footer>
    </div>
  );
}
