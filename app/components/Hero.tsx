"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden">
      <HeroBackground mounted={mounted} theme={theme} />
      <HeroContent />
    </section>
  );
}
