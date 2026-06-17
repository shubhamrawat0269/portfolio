"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pb-10 max-w-screen-xl mx-auto p-3">
      <div className="flex flex-col md:flex-row gap-5 md:gap-20">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#7284c7]">
            About Me
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Less robotic, more real.
          </h2>
        </motion.div>
        <div className="flex gap-20 items-center">
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 70,
              mass: 1,
            }}
            className="flex flex-col space-y-3"
          >
            <p className="flex flex-col gap-5 text-xl text-[#FFFFFF] max-w-2xl">
              <span>
                Hi there! I'm Shubham, and if you've made it here, you probably
                know I build for the web. But let's make this less robotic and
                more real.
              </span>{" "}
              <span>
                This website exists to show what I do, what I love, and maybe
                even help you get to know me a little better. I thrive in
                fast-paced environments because, honestly, slow just isn't my
                thing.
              </span>{" "}
              <span>
                This is my little corner of the internet; if you like what you
                see, feel free to reach out. Let's build something awesome.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
