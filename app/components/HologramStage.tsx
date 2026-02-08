"use client";

import { useTheme } from "next-themes";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export default function HologramStage({ project }: { project: Project }) {
  const { theme } = useTheme();

  return (
    <div className="relative flex justify-center items-center mb-20">
      {/* Hologram glow effect */}
      <div
        className={`absolute inset-0 w-96 h-80 rounded-2xl blur-3xl opacity-30 -z-10 animate-pulse transition-colors duration-700 ${
          theme === 'dark' ? 'bg-cyan-500/40' : 'bg-cyan-400/30'
        }`}
      />

      {/* Hologram container */}
      <div
        className={`relative w-full max-w-2xl p-10 md:p-12 rounded-2xl overflow-hidden transition-all duration-500 ${
          theme === 'dark'
            ? 'bg-white/5 border border-cyan-500/30 shadow-lg shadow-cyan-500/20'
            : 'bg-white/40 border border-cyan-300/40 shadow-lg shadow-cyan-300/20'
        } backdrop-blur-md`}
      >
        {/* Light reflection overlay */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent opacity-50" />

        {/* Inner glow */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 animate-fade-in ${
            theme === 'dark'
              ? 'shadow-inner shadow-cyan-500/10'
              : 'shadow-inner shadow-cyan-400/5'
          }`}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Project Title */}
          <h3
            className={`text-4xl md:text-5xl font-bold mb-4 leading-tight transition-all duration-500 animate-fade-in ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className={`text-base md:text-lg mb-6 leading-relaxed transition-all duration-500 animate-fade-in ${
              theme === 'dark' ? 'text-gray-300/80' : 'text-gray-700/90'
            }`}
            style={{ animationDelay: '100ms' }}
          >
            {project.longDescription || project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.15em] mb-3 transition-all duration-500 animate-fade-in ${
                theme === 'dark' ? 'text-cyan-400/60' : 'text-cyan-600/70'
              }`}
              style={{ animationDelay: '200ms' }}
            >
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.stack.map((tech, idx) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 animate-fade-in ${
                    theme === 'dark'
                      ? 'bg-cyan-500/20 text-cyan-300/80 border border-cyan-500/30'
                      : 'bg-cyan-400/20 text-cyan-700/80 border border-cyan-400/40'
                  }`}
                  style={{ animationDelay: `${300 + idx * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex gap-4 pt-4 border-t justify-center ${
            theme === 'dark' ? 'border-white/10' : 'border-gray-400/20'
          }`}>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 group animate-fade-in ${
                  theme === 'dark'
                    ? 'border border-cyan-400/50 text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:border-cyan-400'
                    : 'border border-cyan-500/50 text-cyan-700 hover:shadow-lg hover:shadow-cyan-400/50 hover:border-cyan-500'
                }`}
                style={{ animationDelay: '400ms' }}
              >
                View Project
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 group animate-fade-in ${
                  theme === 'dark'
                    ? 'border border-white/20 text-gray-300 hover:shadow-lg hover:shadow-white/20 hover:border-white/30'
                    : 'border border-gray-400/30 text-gray-700 hover:shadow-lg hover:shadow-gray-400/30 hover:border-gray-400/50'
                }`}
                style={{ animationDelay: '500ms' }}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
