"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

export default function SkillsContent() {
  const { theme } = useTheme();
  const [selected, setSelected] = useState(0);

  const skillCategories = [
    {
      icon: "⚙️",
      title: "Backend Development",
      skills: [
        "C#",
        "ASP.NET Core",
        "RESTful APIs",
        "Entity Framework Core",
        "Authentication & Authorization",
        "Role-Based Access Control"
      ]
    },
    {
      icon: "💻",
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap"
      ]
    },
    {
      icon: "🗄️",
      title: "Databases",
      skills: [
        "SQL",
        "MySQL",
        "Database Design",
        "CRUD Operations"
      ]
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      skills: [
        "Microsoft Azure",
        "Docker",
        "Cloud Fundamentals"
      ]
    },
    {
      icon: "🔐",
      title: "Security & Practices",
      skills: [
        "JWT Authentication",
        "Secure API Design",
        "Clean Architecture",
        "Version Control (Git)"
      ]
    }
  ];

  return (
    <div className="relative z-10 isolate flex items-center justify-center py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* 2-COLUMN LAYOUT (LEFT: text, RIGHT: clickable titles + details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start md:items-center">
          {/* LEFT: Section description */}
          <div className={`animate-slide-in-left opacity-0 flex flex-col mt-6 md:mt-0 ${
            theme === 'dark' ? 'text-gray-300/90' : 'text-gray-700/90'
          } text-base md:text-lg leading-relaxed`}
          >
            <p className={`text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-6 ${
              theme === 'dark' ? 'text-cyan-400/60' : 'text-cyan-600/70'
            }`}>
              Skills
            </p>

            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Technologies and tools I work with
            </h2>

            <div className={`mb-6 ${
              theme === 'dark' ? 'text-gray-400/80' : 'text-gray-700/90'
            } text-base md:text-lg leading-relaxed`}>
              <p className="mb-4">
                A focused set of technologies from my professional experience, covering full-stack development with emphasis on backend systems and cloud technologies.
              </p>
            </div>

            <div className={`${
              theme === 'dark' ? 'text-gray-400/80' : 'text-gray-700/90'
            } text-base md:text-lg leading-relaxed`}>
              <p>
                Select each category to explore the specific tools and techniques I use in production applications.
              </p>
            </div>
          </div>

          {/* RIGHT: Clickable titles + details panel */}
          <div className="animate-slide-in-right opacity-0 flex flex-col justify-start">
            {/* Category Title Buttons */}
            <div className="flex gap-2 md:gap-3 flex-wrap mb-6 w-fit">
              {skillCategories.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => setSelected(idx)}
                  className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    selected === idx
                      ? theme === 'dark'
                        ? 'bg-cyan-500/90 text-white ring-cyan-400'
                        : 'bg-cyan-600/90 text-white ring-cyan-500'
                      : theme === 'dark'
                        ? 'bg-white/5 text-gray-200 hover:bg-white/10'
                        : 'bg-black/3 text-gray-800 hover:bg-black/5'
                  }`}
                  aria-pressed={selected === idx}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Details Panel - Constrained Width */}
            <div className={`rounded-xl p-6 max-w-md w-full ${
              theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-black/3 border border-gray-300/20'
            } backdrop-blur-sm`}>
              <ul className={`flex flex-wrap gap-2 ${
                theme === 'dark' ? 'text-gray-300/80' : 'text-gray-700/80'
              }`}>
                {skillCategories[selected].skills.map((skill, idx) => (
                  <li 
                    key={`${skillCategories[selected].title}-${idx}`}
                    className="flex items-center text-sm md:text-base leading-relaxed"
                  >
                    <span className="mr-2 text-cyan-400/80">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle fade to next section */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-700 ${
          theme === 'dark'
            ? 'bg-linear-to-b from-transparent via-transparent to-slate-900/20'
            : 'bg-linear-to-b from-transparent via-transparent to-gray-200/20'
        }`}
      />
    </div>
  );
}
