"use client";

import { useTheme } from "next-themes";

export default function ContactContent() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "akshatajit2001@gmail.com",
      href: "mailto:akshatajit2001@gmail.com"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/akshat-ajit-86a1a73a4",
      href: "https://www.linkedin.com/in/akshat-ajit-86a1a73a4/"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/Akshat-Ajit",
      href: "https://github.com/Akshat-Ajit"
    },
    {
      icon: "📄",
      label: "Resume",
      value: "Download CV",
      href: "/Akshat fullstack CV.pdf"
    }
  ];

  return (
    <div className="relative z-10 isolate flex items-center justify-center min-h-screen md:min-h-fit py-24 md:py-40">
      <div className="w-full max-w-2xl mx-auto px-6">
        {/* CONTACT HEADER */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <p
            className={`text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-6 ${
              theme === "dark"
                ? "text-cyan-400/60"
                : "text-cyan-600/70"
            }`}
          >
            Contact
          </p>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Let's connect and build something meaningful.
          </h2>

          <p
            className={`text-base md:text-lg transition-colors duration-700 ${
              theme === "dark"
                ? "text-gray-400/80"
                : "text-gray-700/90"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            I'm open to software engineering opportunities, collaborations, and professional discussions. Feel free to reach out through any of the platforms below.
          </p>
        </div>

        {/* CONTACT CARD */}
        <div
          className={`rounded-2xl overflow-hidden backdrop-blur-md border transition-all duration-500 animate-fade-in ${
            theme === "dark"
              ? "bg-white/5 border-white/10 shadow-xl shadow-cyan-500/5 hover:shadow-cyan-500/10 hover:bg-white/8"
              : "bg-white/40 border-white/30 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/15 hover:bg-white/50"
          }}`}
          style={{ animationDelay: "300ms" }}
        >


          {/* CONTACT METHODS */}
          <div className="p-8 md:p-12 space-y-4">
            {contactMethods.map((method, idx) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  theme === "dark"
                    ? "hover:bg-white/8 focus:ring-cyan-400 focus:ring-offset-slate-950"
                    : "hover:bg-white/30 focus:ring-cyan-500 focus:ring-offset-slate-50"
                }`}
                style={{ animationDelay: `${400 + idx * 50}ms` }}
              >
                {/* Icon */}
                <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>

                {/* Label & Value */}
                <div className="flex-1">
                  <p
                    className={`text-xs md:text-sm font-semibold uppercase tracking-widest mb-1 ${
                      theme === "dark"
                        ? "text-cyan-400/80"
                        : "text-cyan-600/90"
                    }`}
                  >
                    {method.label}
                  </p>
                  <p
                    className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-gray-300 group-hover:text-cyan-300"
                        : "text-gray-800 group-hover:text-cyan-700"
                    }`}
                  >
                    {method.value}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-1 ${
                    theme === "dark"
                      ? "text-cyan-400/60 group-hover:text-cyan-300"
                      : "text-cyan-600/70 group-hover:text-cyan-600"
                  }`}
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
              </a>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-16 md:mt-20 text-center">
          <p
            className={`text-xs md:text-sm ${
              theme === "dark"
                ? "text-gray-600/80"
                : "text-gray-500/80"
            }`}
          >
            © {currentYear} Akshat Ajit. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
