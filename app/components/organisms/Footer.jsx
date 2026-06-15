"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            AVAILABLE FOR OPPORTUNITIES
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
            Let's build something remarkable together.
          </p>

          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-10">
            Whether you're looking for a frontend engineer to join your team or
            a collaborator for your next product, I'd love to hear from you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="#"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-center"
            >
              Send an email
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium text-center"
            >
              Github
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium text-center"
            >
              LinkedIn
            </Link>
          </div>

          {/* Status badges */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12 text-sm text-gray-500">
            <span className="inline-flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              AVAILABLE · 2026
            </span>
            <span>INDIA · IST (UTC+5:30)</span>
          </div>

          {/* Name and Role */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Anshul.
            </h3>
            <p className="text-gray-500 mt-1">FRONTEND ENGINEER</p>
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
          <div className="text-gray-400 text-sm space-y-2">
            <p>© 2026 ANSHUL SHARMA — ALL RIGHTS RESERVED</p>
            <p className="flex items-center justify-center gap-1">
              Built with <span className="text-red-500">❤️</span> by Anshul
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
