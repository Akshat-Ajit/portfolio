"use client";

import AboutBackground from "./AboutBackground";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section id="about" className="relative isolate min-h-screen md:min-h-fit overflow-hidden">
      <AboutBackground />
      <AboutContent />
    </section>
  );
}
