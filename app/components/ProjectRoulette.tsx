"use client";

import { useTheme } from "next-themes";
import { useRef } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

interface ProjectRouletteProps {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function ProjectRoulette({
  projects,
  activeIndex,
  onSelect,
}: ProjectRouletteProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-center w-full py-8"
    >
      {/* Left Arrow - Full Height */}
      <button
        onClick={() => onSelect((activeIndex - 1 + projects.length) % projects.length)}
        className={`absolute left-0 top-0 bottom-0 w-12 md:w-16 z-30 flex items-center justify-center transition-colors duration-300 ${
          theme === 'dark'
            ? 'hover:bg-white/15 text-white'
            : 'hover:bg-black/15 text-gray-900'
        }`}
        aria-label="Previous project"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Carousel Container */}
      <div className="relative w-full px-12 md:px-20 overflow-hidden">
        {/* Desktop View - Show 3 projects */}
        <div className="hidden md:flex justify-center items-center gap-8">
          {(() => {
            const prevIdx = (activeIndex - 1 + projects.length) % projects.length;
            const nextIdx = (activeIndex + 1) % projects.length;
            const projectsToShow = [
              { idx: prevIdx, project: projects[prevIdx], position: 'left' },
              { idx: activeIndex, project: projects[activeIndex], position: 'center' },
              { idx: nextIdx, project: projects[nextIdx], position: 'right' }
            ];

            return projectsToShow.map(({ idx, project, position }) => {
              const isActive = position === 'center';
              const scale = isActive ? 1 : 0.8;
              const opacity = isActive ? 1 : 0.7;

              return (
                <button
                  key={`${position}-${idx}`}
                  onClick={() => onSelect(idx)}
                  className={`shrink-0 rounded-xl overflow-hidden transition-all duration-500 transform focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${
                    isActive
                      ? `${
                          theme === 'dark'
                            ? 'ring ring-cyan-400 shadow-lg shadow-cyan-500/40'
                            : 'ring ring-cyan-500 shadow-lg shadow-cyan-400/40'
                        }`
                      : ""
                  } ${
                    theme === 'dark'
                      ? 'focus:ring-offset-slate-950'
                      : 'focus:ring-offset-slate-50'
                  }`}
                  style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                  }}
                >
                  {/* Desktop Carousel item card */}
                  <div
                    className={`relative p-4 md:p-6 w-56 md:w-72 rounded-xl overflow-hidden transition-all duration-500 ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-white/10 border border-cyan-400/50'
                          : 'bg-white/50 border border-cyan-400/50'
                        : theme === 'dark'
                          ? 'bg-white/5 border border-white/10'
                          : 'bg-white/30 border border-white/20'
                    } backdrop-blur-md`}
                  >
                    {/* Icon */}
                    {project.icon && (
                      <div className={`text-3xl md:text-4xl mb-2 md:mb-3 transition-transform duration-500 ${
                        theme === 'light' ? 'text-gray-900' : ''
                      }`}>
                        {project.icon}
                      </div>
                    )}

                    {/* Project name */}
                    <h4
                      className={`font-semibold mb-1 md:mb-2 truncate transition-all duration-500 ${
                        isActive
                          ? theme === 'dark'
                            ? 'text-cyan-300 text-base md:text-lg'
                            : 'text-cyan-700 text-base md:text-lg'
                          : theme === 'dark'
                            ? 'text-white text-sm md:text-base'
                            : 'text-gray-900 text-sm md:text-base'
                      }`}
                    >
                      {project.title}
                    </h4>

                    {/* Short description - only visible on active */}
                    {isActive && (
                      <p
                        className={`text-xs md:text-sm leading-snug line-clamp-2 md:line-clamp-3 transition-all duration-500 ${
                          theme === 'dark'
                            ? 'text-gray-300/80'
                            : 'text-gray-700/90'
                        }`}
                      >
                        {project.description}
                      </p>
                    )}

                    {/* Top glow effect on active */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent" />
                    )}
                  </div>
                </button>
              );
            });
          })()}
        </div>

        {/* Mobile View - Show only active project */}
        <div className="md:hidden flex justify-center">
          {(() => {
            const project = projects[activeIndex];

            return (
              <button
                key={`mobile-${activeIndex}`}
                onClick={() => onSelect(activeIndex)}
                className={`shrink-0 rounded-xl overflow-hidden transition-all duration-500 transform focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${
                  theme === 'dark'
                    ? 'ring ring-cyan-400 shadow-lg shadow-cyan-500/40 focus:ring-offset-slate-950'
                    : 'ring ring-cyan-500 shadow-lg shadow-cyan-400/40 focus:ring-offset-slate-50'
                }`}
              >
                {/* Mobile carousel item card */}
                <div
                  className={`relative p-6 w-80 rounded-xl overflow-hidden transition-all duration-500 ${
                    theme === 'dark'
                      ? 'bg-white/10 border border-cyan-400/50'
                      : 'bg-white/50 border border-cyan-400/50'
                  } backdrop-blur-md`}
                >
                  {/* Icon */}
                  {project.icon && (
                    <div className={`text-4xl mb-3 transition-transform duration-500 ${
                      theme === 'light' ? 'text-gray-900' : ''
                    }`}>
                      {project.icon}
                    </div>
                  )}

                  {/* Project name */}
                  <h4
                    className={`font-semibold mb-2 truncate transition-all duration-500 ${
                      theme === 'dark'
                        ? 'text-cyan-300 text-lg'
                        : 'text-cyan-700 text-lg'
                    }`}
                  >
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p
                    className={`text-sm leading-snug line-clamp-3 transition-all duration-500 ${
                      theme === 'dark'
                        ? 'text-gray-300/80'
                        : 'text-gray-700/90'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Top glow effect */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent" />
                </div>
              </button>
            );
          })()}
        </div>
      </div>

      {/* Right Arrow - Full Height */}
      <button
        onClick={() => onSelect((activeIndex + 1) % projects.length)}
        className={`absolute right-0 top-0 bottom-0 w-12 md:w-16 z-30 flex items-center justify-center transition-colors duration-300 ${
          theme === 'dark'
            ? 'hover:bg-white/15 text-white'
            : 'hover:bg-black/15 text-gray-900'
        }`}
        aria-label="Next project"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
