"use client";

import ProjectsBackground from "./ProjectsBackground";
import ProjectsContent from "./ProjectsContent";

export default function Projects() {
  return (
    <section id="projects" className="relative isolate min-h-screen overflow-hidden">
      <ProjectsBackground />
      <ProjectsContent />
    </section>
  );
}
