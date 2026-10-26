import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechMarquee from "../components/TechMarquee";
import DataFlowSection from "../components/DataFlowSection";
import Highlights from "../components/Highlights";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import EngineeringApproach from "../components/EngineeringApproach";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Global scroll-reveal — adds .visible to any .reveal / .stagger-children element
function useScrollReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children";
    const elements = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Re-observe after a short delay to catch late-mounted elements
    const timeout = setTimeout(() => {
      const newEls = document.querySelectorAll(`${selectors}:not(.visible)`);
      newEls.forEach((el) => observer.observe(el));
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);
}

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <DataFlowSection />
        <Highlights />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <EngineeringApproach />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
