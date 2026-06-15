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
    <section className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4">
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
              <ExperienceDetail
                key={selectedExperience.id}
                experience={selectedExperience}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
