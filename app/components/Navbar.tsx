"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 bg-white/95 dark:bg-black/85 shadow-md border-b border-black/10 dark:border-white/10 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="w-full h-10 md:h-12 px-6 relative flex items-center overflow-visible">
        {/* NAV CENTER - Links */}
        <div className="flex items-center justify-center gap-4 md:gap-8 absolute left-1/2 -translate-x-1/2 flex-wrap text-xs md:text-sm">
          <a href="#about" className="font-medium text-gray-600 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-200">About</a>
          <a href="#skills" className="font-medium text-gray-600 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-200">Skills</a>
          <a href="#projects" className="font-medium text-gray-600 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-200">Projects</a>
          <a href="#contact" className="font-medium text-gray-600 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-200">Contact</a>
        </div>

        {/* NAV RIGHT - Theme Switch */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative inline-flex h-7 w-12 items-center rounded-full bg-gray-200/80 dark:bg-gray-800/80 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle theme"
            >
              <span
                className={`inline-flex h-5 w-5 items-center justify-center transform rounded-full bg-white shadow transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-6" : "translate-x-1"
                }`}
              >
                <span className="text-xs">{theme === "dark" ? "🌙" : "☀️"}</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
