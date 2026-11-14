import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { WorkWithMe } from '@/components/work-with-me';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <WorkWithMe />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
