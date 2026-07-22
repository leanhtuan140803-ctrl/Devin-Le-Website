import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Skills from '@/components/Skills';
import CVSection from '@/components/CVSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      {/* Skip to main content — keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-burnt-orange focus:text-white focus:px-4 focus:py-2 focus:rounded focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <CVSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
