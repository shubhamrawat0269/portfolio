"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Image as ImageIcon,
  FolderOpen,
  Sparkles,
} from "lucide-react";

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  const {
    title,
    description,
    imageSrc,
    imageAlt,
    techStack,
    liveUrl,
    githubUrl,
    category,
    featured,
  } = project;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Overlay */}
      <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-gray-400 dark:text-gray-500">
            <ImageIcon size={48} strokeWidth={1.5} />
            <span className="mt-2 text-sm">No image</span>
          </div>
        )}

        {/* Featured Badge */}
        {featured && (
          <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            <Sparkles size={14} />
            Featured
          </span>
        )}

        {/* Category Badge */}
        {category && !featured && (
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm dark:bg-white/20">
            {category}
          </span>
        )}

        {/* Hover Action Buttons */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-3 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transform rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transform rounded-full border-2 border-white/80 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/20"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <FolderOpen
            size={20}
            className="mt-1 flex-shrink-0 text-gray-400 transition-colors group-hover:text-blue-500 dark:text-gray-500"
          />
        </div>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>

        {/* Tech Stack Tags */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
