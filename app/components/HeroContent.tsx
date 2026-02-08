"use client";

import { useTheme } from "next-themes";

export default function HeroContent() {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 isolate min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center animate-hero-fade-in opacity-0">
        {/* Greeting */}
        <p className={`text-xs md:text-sm mb-4 font-semibold tracking-widest uppercase ${
          theme === 'dark' ? 'text-cyan-400/70' : 'text-cyan-600/80'
        }`}>
          Hi, I'm
        </p>

        {/* Name - PRIMARY */}
        <h1 className={`text-6xl md:text-7xl font-bold mb-4 leading-tight ${
          theme === 'dark' 
            ? 'text-white drop-shadow-lg' 
            : 'text-gray-900'
        }`}>
          Akshat Ajit
        </h1>

        {/* Role / Tagline - MOST IMPORTANT */}
        <p className={`text-xl md:text-2xl font-semibold mb-6 max-w-3xl mx-auto leading-relaxed ${
          theme === 'dark'
            ? 'text-cyan-300/90'
            : 'text-cyan-700/90'
        }`}>
          Associate Software Engineer | Full-Stack .NET Developer
        </p>

        {/* Value Proposition */}
        <p className={`text-base md:text-lg mb-8 max-w-2xl mx-auto ${
          theme === 'dark'
            ? 'text-gray-400/90'
            : 'text-gray-700/90'
        }`}>
          Building scalable, secure web applications using ASP.NET Core, React, and cloud technologies
        </p>

        {/* Tech Stack */}
        <p className={`text-sm md:text-base mb-12 max-w-2xl mx-auto font-mono ${
          theme === 'dark'
            ? 'text-gray-500/90'
            : 'text-gray-600/90'
        }`}>
          ASP.NET Core • C# • React • TypeScript • SQL • Azure • Docker
        </p>

        {/* Optional Tagline */}
        <p className={`text-xs md:text-sm mb-12 max-w-2xl mx-auto italic ${
          theme === 'dark'
            ? 'text-gray-600/80'
            : 'text-gray-600/70'
        }`}>
          {theme === 'dark' 
            ? 'Engineering reliable systems behind clean interfaces.'
            : 'Designing clarity, backed by solid engineering.'
          }
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a
            href="#projects"
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:-translate-y-1 border ${
              theme === 'dark'
                ? 'border-cyan-400/50 text-cyan-300 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 focus-visible:ring-cyan-400 focus-visible:ring-offset-black'
                : 'border-cyan-500/50 text-cyan-600 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 focus-visible:ring-cyan-500 focus-visible:ring-offset-sky-100'
            }`}
          >
            View Projects
          </a>
          <a
            href="/Akshat fullstack CV.pdf"
            download
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:-translate-y-1 border ${
              theme === 'dark'
                ? 'border-white/30 text-white hover:border-white/60 hover:shadow-lg hover:shadow-white/10 focus-visible:ring-white/50 focus-visible:ring-offset-black'
                : 'border-gray-600/50 text-gray-700 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-400/10 focus-visible:ring-gray-600 focus-visible:ring-offset-sky-100'
            }`}
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Subtle transition to About section */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-700 ${
          theme === 'dark'
            ? 'bg-linear-to-b from-transparent via-transparent to-slate-900/20'
            : 'bg-linear-to-b from-transparent via-transparent to-gray-100/20'
        }`}
      />
    </div>
  );
}
