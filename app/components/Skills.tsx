"use client";

import SkillsBackground from "./SkillsBackground";
import SkillsContent from "./SkillsContent";

export default function Skills() {
  return (
    <section id="skills" className="relative isolate min-h-screen md:min-h-fit overflow-hidden">
      <SkillsBackground />
      <SkillsContent />
    </section>
  );
}
