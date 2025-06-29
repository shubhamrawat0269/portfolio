"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  assets,
  cardData,
  fadeInLeft,
  fadeInUp,
  scaleUpIn,
  toolsData,
} from "@/assets/assets";
import PrimaryInfo from "../atoms/PrimaryInfo";

const About = () => {
  return (
    <section id="about" className="max-w-sm md:max-w-screen-xl mx-auto py-20">
      <PrimaryInfo heading={"Introduction"} subHeading={"About me"} />
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src={assets.user_image}
            alt="Profile"
            width={600}
            height={350}
            className="object-cover shadow-lg"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col space-y-3"
        >
          <p className="text-lg text-gray-700 max-w-2xl">{assets.about_me}</p>

          <div className="flex flex-col md:flex-row gap-6 py-3">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={scaleUpIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center text-center p-6 bg-white border border-[#99582a] rounded-2xl shadow-md shadow-[#bc6c25] flex-1"
              >
                <div className="mb-4 text-[#bc6c25]">{card.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Tools I Use */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Tools I Use</h3>
            <div className="flex flex-wrap gap-2">
              {toolsData.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={scaleUpIn}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white shadow rounded-xl p-2 flex items-center justify-center cursor-pointer border border-[#99582a]"
                >
                  <Image
                    src={tool}
                    width={20}
                    height={20}
                    alt={`Tool ${index}`}
                    className="max-w-full max-h-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
