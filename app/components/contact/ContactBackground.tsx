"use client";

import { useTheme } from "next-themes";

export default function ContactBackground() {
  const { theme } = useTheme();

  return (
    <div
      className={`absolute inset-0 -z-10 ${
        theme === "dark"
          ? "bg-linear-to-b from-slate-950 via-slate-900 to-black"
          : "bg-linear-to-b from-slate-50 via-gray-50 to-white"
      }`}
    >
      {/* Subtle radial gradient glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          theme === "dark"
            ? "bg-cyan-500/20"
            : "bg-cyan-300/15"
        }`}
      />

      {/* Optional minimal texture overlay - very subtle */}
      <div
        className={`absolute inset-0 opacity-[0.02] ${
          theme === "dark" ? "bg-white" : "bg-black"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
