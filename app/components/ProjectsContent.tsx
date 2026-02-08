"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import HologramStage from "./HologramStage";
import ProjectRoulette from "./ProjectRoulette";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon?: string;
  stack: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export default function ProjectsContent() {
  const { theme } = useTheme();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Projects from CV
  const projects: Project[] = [
    {
      id: "project-1",
      title: "Role-Based Access Control (RBAC) Web Application",
      description: "Secure user, role, and permission management system",
      longDescription:
        "A secure web application designed to manage users, roles, and permissions using role-based access control. The system ensures that users can access only the features and resources assigned to their roles, following secure authentication and authorization practices.",
      icon: "🔐",
      stack: ["ASP.NET Core", "ASP.NET Identity", "Entity Framework Core", "MySQL", "MVC"],
      links: {
        github: "https://github.com/Akshat-Ajit/RBACWebApp",
      },
    },
    {
      id: "project-2",
      title: "Enterprise Role-Based Management System (ERBMS)",
      description: "Full-stack RBAC platform with admin approvals and audit logging",
      longDescription:
        "A full-stack RBAC platform built with ASP.NET Core and React using Clean Architecture. It includes JWT auth with Identity, users/roles/permissions CRUD, admin approval workflow for self-signup, audit logging, caching, and a React admin dashboard with validation and search.",
      icon: "🔐",
      stack: [
        "ASP.NET Core (.NET 9)",
        "EF Core",
        "ASP.NET Identity",
        "React",
        "Vite",
        "TypeScript",
        "SQL Server LocalDB",
      ],
      links: {
        github: "https://github.com/Akshat-Ajit/RBAC-Platform",
      },
    },
    {
      id: "project-3",
      title: "Smart Inventory & Order Management System (SIOMS)",
      description: "In progress — business-grade inventory and order platform",
      longDescription:
        "A full-stack system to manage products, inventory, orders, vendors, and stock movement with role-based access, auditability, and real-time inventory consistency. Built with Clean Architecture, background services, and a React admin dashboard.",
      icon: "🧠",
      stack: [
        "ASP.NET Core Web API",
        "Clean Architecture",
        "EF Core",
        "SQL Server",
        "React",
        "Vite",
        "TypeScript",
      ],
      links: {},
    },
    {
      id: "project-4",
      title: "Inventory Management System",
      description: "Product tracking and stock level management",
      longDescription:
        "A web-based inventory management system built to track products, stock levels, and basic operations. The application focuses on efficient data handling, structured backend logic, and reliable CRUD functionality.",
      icon: "📦",
      stack: ["ASP.NET Core", "C#", "SQL", "REST APIs"],
      links: {
        github: "https://github.com/Akshat-Ajit/Inventory-Management-System",
      },
    },
  ];

  const activeProject = projects[activeProjectIndex];

  return (
    <div className="relative z-10 isolate flex items-center justify-center py-24 md:py-40">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 mt-6 md:mt-0">
          <p
            className={`text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-4 animate-fade-in ${
              theme === "dark"
                ? "text-cyan-400/60"
                : "text-cyan-600/70"
            }`}
          >
            Projects
          </p>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Selected projects showcasing practical full-stack development
          </h2>

          <p
            className={`text-base md:text-lg transition-colors duration-700 animate-fade-in ${
              theme === "dark"
                ? "text-gray-400/80"
                : "text-gray-700/90"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Navigate through projects built with ASP.NET Core and modern technologies
          </p>
        </div>

        {/* Hologram Stage */}
        <HologramStage project={activeProject} />

        {/* Project Roulette */}
        <ProjectRoulette
          projects={projects}
          activeIndex={activeProjectIndex}
          onSelect={setActiveProjectIndex}
        />
      </div>

      {/* Subtle fade to next section */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-700 ${
          theme === "dark"
            ? "bg-linear-to-b from-transparent via-transparent to-slate-900/20"
            : "bg-linear-to-b from-transparent via-transparent to-slate-100/20"
        }`}
      />
    </div>
  );
}
