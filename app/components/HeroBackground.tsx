"use client";

import Celestial from "./Celestial";

export default function HeroBackground({ mounted, theme }: { mounted: boolean; theme?: string }) {
  return (
    <div className="absolute inset-0 z-0 isolate">
      <div className={`absolute inset-0 transition-all duration-700 ${theme === 'dark' ? 'bg-linear-to-b from-blue-950 via-slate-900 to-black' : 'bg-linear-to-b from-sky-400 via-sky-200 to-yellow-100'}`} />
      <Celestial mounted={mounted} theme={theme} />
    </div>
  );
}
