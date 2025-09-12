"use client";
import Hero from '../components/Hero';
import ComputersCanvas from '../components/canvas/Computers';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import GlassBlobsCanvas from '../components/GlassBlobsCanvas';

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-primary scroll-smooth">
      <GlassBlobsCanvas />
      <section className="relative w-full h-screen">
        <Hero />
        <div className="absolute w-full h-screen top-0 left-0 z-0 pointer-events-none">
          <ComputersCanvas />
        </div>
        {/* Rotate hint overlay */}
        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 bg-black/70 px-4 py-2 rounded-xl shadow-lg pointer-events-auto" style={{backdropFilter: 'blur(6px)'}}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#915EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin-slow">
            <path d="M21 12a9 9 0 1 1-9-9" />
            <polyline points="22 12 21 12 15 12" />
          </svg>
          <span className="text-[#915EFF] text-sm font-semibold">Drag to rotate</span>
        </div>
      </section>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
