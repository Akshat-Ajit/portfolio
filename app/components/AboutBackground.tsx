"use client";

import { useTheme } from "next-themes";

export default function AboutBackground() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 z-0">
      {/* Gradient background with better light mode transition from hero's yellow/sky */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          theme === 'dark'
            ? 'bg-linear-to-b from-slate-900 via-slate-950 to-black'
            : 'bg-linear-to-b from-sky-100 via-gray-50 to-white'
        }`}
      />

      {/* Faint grid overlay (opacity 2-3%) */}
      <svg
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          theme === 'dark' ? 'opacity-2' : 'opacity-3'
        }`}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={theme === 'dark' ? '#94A3B8' : '#D1D5DB'}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
