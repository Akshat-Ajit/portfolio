"use client";

import React from "react";

export default function Celestial({ mounted, theme }: { mounted: boolean; theme: string | undefined }) {
  // Both moon and sun are rendered so we can animate between them on theme change.
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* Stars (visible in dark mode) */}
      <svg
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${mounted && theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="star" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g fill="url(#star)">
          {mounted && Array.from({ length: 40 }).map((_, i) => (
            <circle key={i} cx={`${Math.random() * 100}%`} cy={`${Math.random() * 100}%`} r={Math.random() * 1.6 + 0.3} opacity={Math.random() * 0.9} />
          ))}
        </g>
      </svg>

      {/* Moon (final position top-right). Animates in from the right when entering dark mode. */}
      <div
        className={`absolute right-4 md:right-12 top-8 md:top-16 transform transition-all duration-700 ${theme === 'dark' ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-28 opacity-0 scale-90'} animate-moon-float`}
        aria-hidden
      >
        <svg width="160" height="160" viewBox="0 0 100 100" className="filter drop-shadow-lg">
          <defs>
            <radialGradient id="g1" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.18" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="36" fill="url(#g1)" />
          <g opacity="0.15">
            <circle cx="60" cy="40" r="6" fill="#0b1220" />
            <circle cx="40" cy="60" r="4" fill="#0b1220" />
            <circle cx="55" cy="65" r="3" fill="#0b1220" />
          </g>
        </svg>
      </div>

      {/* Sun (arises from center and rests at bottom-center of the hero). */}
      <div
        className={`absolute left-1/2 bottom-0 md:bottom-12 z-10 transition-sun ${theme !== 'dark' ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: theme !== 'dark' ? 'translate(-50%, -40vh) scale(1)' : 'translate(-50%, 0) scale(0.95)'
        }}
        aria-hidden
      >
        <svg width="220" height="220" viewBox="0 0 100 100" className="filter drop-shadow-2xl">
          <defs>
            <radialGradient id="sun" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#FFFACD" />
              <stop offset="50%" stopColor="#FFE66D" />
              <stop offset="100%" stopColor="#FFD700" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill="url(#sun)" />
        </svg>
      </div>

      {/* Subtle horizon glow */}
      <div
        className={`absolute inset-x-0 bottom-0 h-56 pointer-events-none transition-opacity duration-700 ${mounted && theme !== 'dark' ? 'opacity-60' : 'opacity-10'}`}
        style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.02))' }}
      />
    </div>
  );
}
