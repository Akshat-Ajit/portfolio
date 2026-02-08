"use client";

import { useTheme } from "next-themes";

export default function SkillsBackground() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 z-0">
      {/* Clean base background with gradient transition */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          theme === 'dark'
            ? 'bg-linear-to-b from-slate-900 via-slate-950 to-black'
            : 'bg-linear-to-b from-sky-100 via-gray-50 to-white'
        }`}
      />

      {/* Soft diagonal lines texture (< 3% opacity) */}
      <svg
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          theme === 'dark' ? 'opacity-2' : 'opacity-3'
        }`}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="diagonals" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="60" stroke={theme === 'dark' ? '#475569' : '#E5E7EB'} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonals)" />
      </svg>
    </div>
  );
}
