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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/85 dark:bg-black/60 shadow-lg' : 'backdrop-blur-sm bg-white/70 dark:bg-black/30'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* NAV LEFT - Brand */}
        <a href="#home" className="text-2xl font-extrabold text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors duration-200 group relative">
          Akshat
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 dark:from-cyan-400 to-transparent group-hover:w-full transition-all duration-300"></span>
        </a>

        {/* NAV CENTER - Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-200">About</a>
          <a href="#skills" className="text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-200">Skills</a>
          <a href="#projects" className="text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-200">Projects</a>
          <a href="#contact" className="text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-300 transition-all duration-200">Contact</a>
        </div>

        {/* NAV RIGHT - Theme Toggle */}
        <div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-900/10 dark:hover:bg-white/5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <span className="text-xl transform transition-transform duration-500 inline-block">☀️</span>
              ) : (
                <span className="text-xl transform transition-transform duration-500 inline-block">🌙</span>
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
