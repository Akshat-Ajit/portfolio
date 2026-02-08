"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = mounted ? resolvedTheme === "dark" : false;
  const navTone = isDark
    ? "border-slate-700/40 bg-slate-950/30 supports-[backdrop-filter]:bg-slate-950/20"
    : "border-slate-200/60 bg-white/40 supports-[backdrop-filter]:bg-white/25";
  const navScrolledTone = isDark
    ? "border-slate-600/60 bg-slate-950/75 shadow-lg"
    : "border-slate-200/80 bg-white/80 shadow-md";
  const linkTone = isDark
    ? "text-slate-100 hover:text-cyan-300"
    : "text-slate-800 hover:text-cyan-600";
  const toggleTone = isDark ? "bg-slate-800/80" : "bg-gray-200/80";
  const knobTone = isDark ? "bg-slate-100" : "bg-white";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 border-b ${navTone} ${scrolled ? navScrolledTone : ""}`}
    >
      <div className="w-full h-12 md:h-14 px-4 md:px-8 relative flex items-center overflow-visible">
        {/* NAV CENTER - Links */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8 absolute left-1/2 -translate-x-1/2 flex-wrap text-[11px] sm:text-xs md:text-sm tracking-wide">
          <a href="#about" className={`font-semibold transition-all duration-200 ${linkTone}`}>About</a>
          <a href="#skills" className={`font-semibold transition-all duration-200 ${linkTone}`}>Skills</a>
          <a href="#projects" className={`font-semibold transition-all duration-200 ${linkTone}`}>Projects</a>
          <a href="#contact" className={`font-semibold transition-all duration-200 ${linkTone}`}>Contact</a>
        </div>

        {/* NAV RIGHT - Theme Switch */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${toggleTone}`}
              aria-label="Toggle theme"
            >
              <span
                className={`inline-flex h-5 w-5 items-center justify-center transform rounded-full shadow transition-transform duration-300 ${knobTone} ${
                  isDark ? "translate-x-6" : "translate-x-1"
                }`}
              >
                <span className="text-xs">{isDark ? "🌙" : "☀️"}</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
