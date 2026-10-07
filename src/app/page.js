"use client";
import Navbar from "../components/Navbar";
import SideRail from "../components/SideRail";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Interests from "../components/Interests";
import Contact from "../components/Contact";
import Modals from "../components/Modals";
import Footer from "../components/Footer";
import InitScripts from "../components/InitScripts";
import GridBackground from "../components/GridBackground";

export default function Home() {
  return (
    <>
      <GridBackground />
      <InitScripts />
      {/* Ambient Lighting Background */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>
      <div className="mouse-glow" id="mouseGlow"></div>

      <Navbar />
      <SideRail />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Interests />
        <Contact />
      </main>

      <Modals />
      <Footer />

      {/* Back To Top Button */}
      <button className="back-to-top" id="backToTop" title="Back to Top" aria-label="Back to Top">
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </>
  );
}
