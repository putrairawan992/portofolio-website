import Nav from './components/Nav';
import Hero from './components/Hero';
import TechMarquee from './components/Marquee';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Home page — assembles all sections in semantic document order.
 * Each section is an independent, reusable component.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <TechMarquee />
        <About />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
