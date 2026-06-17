"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { assets, containerVariants } from "@/assets/assets";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center px-4 pt-28 pb-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-center max-w-screen-lg"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 320,
            damping: 70,
            mass: 1,
          }}
        >
          <Image
            src={assets.profile_img}
            alt="Shubham Rawat"
            width={100}
            height={100}
            className="rounded-full mx-auto my-4"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl flex flex-col gap-2 text-[#bcbaba] py-4 font-bold">
            <span>
              Hi, I'm <span className="text-[#a78bfa]">Shubham</span>
            </span>
            <span>I build for the web.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 320,
            damping: 70,
            mass: 1,
          }}
        >
          <h2 className="text-xl font-bold text-[#bcbaba] py-2">
            Building intuitive UIs and AI-driven tools with a sharp eye for
            craft.
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 py-10"
        >
          <a href="#contact">
            <button className="bg-[#a78bfa] order-2 md:order-1 text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 hover:bg-[#1550da] transition">
              <Mail size={18} />
              Connect with Me
            </button>
          </a>
          <button className="bg-transparent order-1 md:order-2 text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 border-2 border-gray-700 hover:bg-gray-900 transition">
            <FileText size={18} />
            View My Work
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
