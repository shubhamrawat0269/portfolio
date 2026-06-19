"use client";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "EcoTrack Dashboard",
      description:
        "A real-time environmental monitoring dashboard with interactive maps, data visualization, and predictive analytics for climate researchers.",
      imageSrc: "/images/ecotrack.jpg",
      imageAlt: "EcoTrack Dashboard screenshot",
      category: "Data Visualization",
      featured: true,
      techStack: ["Next.js", "D3.js", "Tailwind CSS", "WebSocket"],
      liveUrl: "https://ecotrack-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/ecotrack",
    },
    {
      id: 2,
      title: "ArtVault Gallery",
      description:
        "A digital art marketplace and portfolio platform for emerging artists, featuring NFT integration and a curated exhibition space.",
      imageSrc: "/images/artvault.jpg",
      imageAlt: "ArtVault Gallery homepage",
      category: "Marketplace",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://artvault.vercel.app",
      githubUrl: "https://github.com/yourusername/artvault",
    },
    {
      id: 3,
      title: "FitFlow Tracker",
      description:
        "An AI-powered fitness and nutrition tracking app with personalized workout plans, meal suggestions, and progress analytics.",
      imageSrc: "/images/fitflow.jpg",
      imageAlt: "FitFlow Tracker app screenshot",
      category: "Health & Fitness",
      techStack: ["React Native", "Firebase", "TensorFlow", "Expo"],
      liveUrl: "https://fitflow.vercel.app",
      githubUrl: "https://github.com/yourusername/fitflow",
    },
  ];

  return (
    <div className="p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          My Projects
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
