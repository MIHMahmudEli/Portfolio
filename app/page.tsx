import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Animated gradient orbs */}
      <div className="bg-orbs" aria-hidden="true" />
      {/* Subtle noise texture */}
      <div className="noise-overlay" aria-hidden="true" />

      <div className="page-wrapper">
        <Navbar />

        <main id="main-content">
          <Hero />

          <hr className="gradient-divider" />
          <Education />

          <hr className="gradient-divider" />
          <Skills />

          <hr className="gradient-divider" />
          <Projects />

          <hr className="gradient-divider" />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
