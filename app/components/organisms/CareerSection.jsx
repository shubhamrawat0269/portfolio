"use client";
import { useState } from "react";
import careerData from "../../shared/json/experirence.json";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ExperienceDetail from "./ExperienceDetail";

const CareerSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(
    careerData.experiences[0],
  );

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
              {careerData.experiences.map((exp, index) => (
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
