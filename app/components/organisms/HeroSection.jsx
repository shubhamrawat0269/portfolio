"use client";

import { assets, containerVariants, fadeUp, scaleIn } from "@/assets/assets";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center bg-[#fefae0] px-4 py-28">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-center max-w-screen-md"
      >
        {/* Profile Image */}
        <motion.div variants={scaleIn}>
          <Image
            src={assets.profile_img}
            alt="Shubham Rawat"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div variants={fadeUp}>
          <h4 className="text-xl text-gray-600 my-2">
            Hi! I'm <span className="text-[#432818]">Shubham Rawat</span>
          </h4>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            frontend web developer based in India.
          </h1>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="text-gray-700 mb-6">
            I am a frontend developer from India, New Delhi with 3 years of
            experience in multiple companies like Webreinvent, EZ and Pepcoding.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a href="/Resume.pdf" download="Resume.pdf">
            <button className="bg-gray-800 order-1 md:order-2 text-white px-4 py-2 rounded-md md:rounded-full cursor-pointer flex items-center gap-2 hover:bg-gray-900 transition">
              <FileText size={18} />
              My Resume
            </button>
          </a>
          <a href="#contact">
            <button className="bg-[#bc6c25] order-2 md:order-1 text-white px-4 py-2 rounded-md md:rounded-full cursor-pointer flex items-center gap-2 hover:bg-[#611a00] transition">
              <Mail size={18} />
              Connect with Me
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
