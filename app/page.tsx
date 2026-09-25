import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { cvData } from '@/lib/cv-data';

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
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="page-width">
          <span>
            © {new Date().getFullYear()} {cvData.displayName}
          </span>
          <span>Mexico City.</span>
          <a href="/llms.txt">Information for AI agents</a>
          <a href="#hero">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
