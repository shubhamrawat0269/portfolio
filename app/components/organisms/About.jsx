"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/assets/assets";
import PrimaryInfo from "../atoms/PrimaryInfo";

const About = () => {
  return (
    <section id="about" className="pb-10 max-w-[1560px] mx-auto p-3">
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-20">
        <PrimaryInfo
          heading={"About Me"}
          subHeading={"Less robotic, more real."}
        />
        <div className="flex gap-20 items-center md:mr-20 md:pr-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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

            {/* Tools I Use */}
            {/* <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#adc6ff]">Tools I Use</h3>
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
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
