"use client";

import { useTheme } from "next-themes";

export default function AboutContent() {
  const { theme } = useTheme();

  const highlights = [
    {
      icon: "👔",
      title: "Current Role",
      description: "Associate Software Engineer at Accenture"
    },
    {
      icon: "⚙️",
      title: "Technical Focus",
      description: "ASP.NET Core, C#, React, TypeScript, SQL"
    },
    {
      icon: "🏗️",
      title: "Engineering Experience",
      description: "APIs, authentication, RBAC, database-driven applications"
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Cloud fundamentals, security concepts, modern development practices"
    }
  ];

  return (
    <div className="relative z-10 isolate flex items-center justify-center py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* 2-column layout: text on left, highlights on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN — ABOUT TEXT */}
          <div className="animate-slide-in-left opacity-0 flex flex-col h-full mt-6 md:mt-0">
            {/* Section Label */}
            <p className={`text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-6 ${
              theme === 'dark' ? 'text-cyan-400/60' : 'text-cyan-600/70'
            }`}>
              About
            </p>

            {/* Main Heading */}
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Focused on building reliable, scalable, and secure web applications.
            </h2>

            {/* Core Description - with scroll */}
            <div className={`mb-6 max-h-40 md:max-h-56 overflow-y-auto pr-4 ${
              theme === 'dark' ? 'text-gray-300/90' : 'text-gray-700/90'
            } text-base md:text-lg leading-relaxed`}>
              <p className="mb-4">
                I am an Associate Software Engineer with hands-on experience in building full-stack web applications using ASP.NET Core and modern frontend frameworks. My work focuses on writing clean, maintainable code while designing systems that are scalable, secure, and easy to extend.
              </p>
            </div>

            {/* Optional Secondary Text - with separate scroll */}
            <div className={`max-h-32 overflow-y-auto pr-4 ${
              theme === 'dark' ? 'text-gray-400/80' : 'text-gray-600/80'
            } text-sm md:text-base leading-relaxed`}>
              <p>
                I have worked on implementing features such as role-based access control, authentication, RESTful APIs, and database-driven workflows. Alongside backend development, I actively work with React and TypeScript to build intuitive user interfaces, and I continuously upskill myself in cloud and security fundamentals.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — HIGHLIGHTS PANEL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-center h-full">
            {highlights.map((highlight, i) => (
              <div
                key={highlight.title}
                className={`animate-slide-in-right opacity-0 transform transition-all duration-300 overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10 focus-within:ring-2 focus-within:ring-cyan-400'
                    : 'bg-white/40 border border-gray-200/30 focus-within:ring-2 focus-within:ring-cyan-500'
                } rounded-xl p-5 backdrop-blur-sm`}
                style={{
                  animationDelay: `${i * 100}ms`
                }}
              >
                {/* Icon */}
                <div className="text-3xl md:text-4xl mb-3 transition-transform duration-200">
                  {highlight.icon}
                </div>

                {/* Title */}
                <h3 className={`text-sm md:text-base font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className={`text-xs md:text-sm leading-snug ${
                  theme === 'dark' ? 'text-gray-400/80' : 'text-gray-700/80'
                }`}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle transition to Skills section */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-700 ${
          theme === 'dark'
            ? 'bg-linear-to-b from-transparent via-transparent to-slate-950/30'
            : 'bg-linear-to-b from-transparent via-transparent to-gray-50/40'
        }`}
      />
    </div>
  );
}
