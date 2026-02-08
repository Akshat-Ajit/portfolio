"use client";

import { useTheme } from "next-themes";

export default function ProjectsBackground() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 z-0">
      {/* Base gradient background */}
      <div className={`absolute inset-0 transition-colors duration-700 ${
        theme === 'dark'
          ? 'bg-linear-to-b from-slate-900 via-slate-950 to-black'
          : 'bg-linear-to-b from-cyan-50 via-blue-50 to-slate-100'
      }`} />

      {/* Radial glow at center */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-700 ${
        theme === 'dark' ? 'bg-cyan-500/30' : 'bg-cyan-400/20'
      }`} />

      {/* Subtle grid pattern */}
      <svg
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          theme === 'dark' ? 'opacity-5' : 'opacity-3'
        }`}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid-projects" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={theme === 'dark' ? '#64748b' : '#cbd5e1'}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-projects)" />
      </svg>

      {/* Optional: Subtle animated scan lines (slow) */}
      <div
        className={`absolute inset-0 opacity-5 transition-opacity duration-700 pointer-events-none`}
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            ${theme === 'dark' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.05)'} 2px,
            ${theme === 'dark' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.05)'} 4px
          )`,
          animation: 'scan-lines 8s linear infinite',
        }}
      />
    </div>
  );
}
