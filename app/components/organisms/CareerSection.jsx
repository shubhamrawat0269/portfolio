"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ExperienceDetail from "./ExperienceDetail";

const CareerSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const experiences = [
    {
      id: 1,
      company: "Vectorshift",
      role: "Frontend Engineer",
      period: "Jan 2025 — present",
      duration: "NEW",
      location: "REMOTE",
      tags: [
        "REACT",
        "TYPESCRIPT",
        "WEBSOCKETS",
        "ZUSTAND",
        "TAILWIND CSS",
        "FASTAPI",
      ],
      achievements: [
        "Generalized 100+ unique node types into a single config-driven system, eliminating per-node boilerplate and making additions a one-liner",
        "Built an agentic chatbot UI supporting 1,000+ message conversations with sub-100ms interaction times via virtualized rendering and incremental state updates",
        "Developed real-time analytics dashboards showing pipeline execution metrics, latency breakdowns, and error traces",
        "Owned the Marketplace frontend end-to-end — browse, preview, fork, and deploy community templates — driving 40%+ template adoption among new users",
      ],
      learnings: [
        "Config-driven UI architecture scales dramatically better than component-per-feature as a product grows",
        "Performance in chat UIs is non-negotiable — virtualization and incremental appending are table stakes at scale",
        "Thinking about system architecture before touching code saves far more time than any refactor ever can",
        "Owning a complete product surface (Marketplace) taught me how to reason in user flows, not just components",
        "YC-backed startups move at a pace that forces you to be comfortable shipping 80% solutions and iterating fast",
      ],
      feedback:
        "Praised for moving fast without sacrificing code quality, and for proactively improving DX across the codebase with shared abstractions.",
      highlight:
        "Led the frontend revamp of a no-code AI workflow builder used by teams to build and deploy AI pipelines without writing code.",
      type: "current",
    },
    {
      id: 2,
      company: "Perman AI",
      role: "Founding Frontend Engineer",
      period: "Apr 2023 — Dec 2024",
      duration: "1yr 8 mo",
      location: "REMOTE",
      tags: [
        "REACT",
        "NEXT.JS",
        "TYPESCRIPT",
        "LEXICAL",
        "TAILWIND",
        "NODE.JS",
      ],
      achievements: [
        "Built a Framer-like drag-and-drop website builder with AI-driven creation and editing — every layout, component, and style was configurable via a custom property panel",
        "Designed and implemented a high-performance SSR/edge renderer that served published websites with near-instant load times and perfect Core Web Vitals",
        "Built an AI-powered blog editor on top of Lexical with real-time AI suggestions, inline rewrites, and SEO scoring",
        "Established the entire frontend architecture: monorepo, shared design system, CI/CD pipeline, and review conventions",
      ],
      learnings: [
        "Building a no-code builder forces you to deeply understand how component trees, layout systems, and state machines actually work",
        "Being a founding engineer means your decisions compound — bad abstractions early cost weeks later",
        "SSR and edge rendering require thinking about data fetching, caching, and hydration as first-class concerns, not afterthoughts",
        "Working directly with founders teaches you to think from a product lens, not just a dev lens — understanding the why behind every feature changes the quality of your decisions",
      ],
      feedback:
        "Praised for strong work ethic and the ability to move very fast. Early on, received constructive feedback to communicate more openly about work in progress — took that forward and it became a consistent strength from that point on.",
      whyLeft:
        "The company ran out of funding and had to shut down. The entire development team was relieved as there was no remaining runway. Permar shut down fully within the following six months.",
      highlight:
        "First frontend hire at an AI-powered no-code website builder — built core product from scratch and shaped the entire frontend architecture.",
      type: "previous",
    },
    {
      id: 3,
      company: "Hush",
      role: "Software Engineer",
      period: "May 2022 — Apr 2023",
      duration: "11 mo",
      location: "REMOTE",
      tags: ["REACT", "TYPESCRIPT", "CHROME EXTENSIONS", "NODE.JS"],
      achievements: [
        "Developed privacy-focused Chrome extension with real-time data blocking capabilities",
        "Built backend services using Node.js for extension coordination and analytics",
        "Implemented efficient state management for cross-tab communication",
      ],
      learnings: [
        "Browser extension development requires deep understanding of Chrome APIs and security constraints",
        "Cross-tab state synchronization is uniquely challenging and requires careful architecture",
        "User privacy features demand rigorous testing and compliance consideration",
      ],
      feedback:
        "Recognized for delivering high-quality code under tight deadlines and mentoring junior developers.",
      highlight:
        "Built privacy tools that protected thousands of users from data tracking.",
      type: "previous",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where I've shipped things.
          </h1>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Experience Cards */}
          <div className="lg:w-2/5">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  isSelected={selectedIndex === index}
                  onClick={() => {
                    setSelectedExperience(exp);
                    setSelectedIndex(index);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Detailed View */}
          <div className="lg:w-3/5">
            <AnimatePresence mode="wait">
              {selectedExperience ? (
                <ExperienceDetail
                  key={selectedExperience.id}
                  experience={selectedExperience}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl shadow-xl p-8 text-center"
                >
                  <div className="text-gray-400 mb-4">
                    <svg
                      className="w-16 h-16 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Click on any experience to view details
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
