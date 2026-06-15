"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#cfccd7] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Name and Role */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Shubham.
            </h3>
            <p className="text-gray-500 mt-1">FULLSTACK DEVELOPER</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
            <Link
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="#experience"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              EXPERIENCE
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              PROJECTS
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              CONTACT
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm space-y-2">
            <p>© 2026 SHUBHAM RAWAT — ALL RIGHTS RESERVED</p>
            <p className="flex items-center justify-center gap-1">
              Built with <span className="text-red-500">❤️</span> by Shubham
              Rawat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
