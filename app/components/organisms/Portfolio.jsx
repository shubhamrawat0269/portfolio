"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PrimaryInfo from "../atoms/PrimaryInfo";
import Card from "../molecules/Card";
import { ArrowRight } from "lucide-react";
import {
  buttonVariant,
  cardVariants,
  portfolioCardData,
} from "@/assets/assets";
import { useRouter } from "next/navigation";

const Portfolio = () => {
  const router = useRouter();
  const [limit, setLimit] = useState(4);
  const handleLimit = () => setLimit(limit + 4);

  return (
    <div id="work" className="py-14">
      <div className="max-w-sm sm:max-w-md md:max-w-screen-xl mx-auto">
        <PrimaryInfo
          heading={"My Portfolio"}
          subHeading={"My Latest Work"}
          para={
            "Welcome to my web development portfolio. Explore the collection of projects showcasing  my expertise in frontend development"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-3">
          {portfolioCardData.slice(0, limit).map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card
                imageUrl={card.imageUrl}
                title={card.title}
                onClick={() => router.push(card.link)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        variants={buttonVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center py-5"
      >
        {limit !== portfolioCardData.length && (
          <button
            className="flex items-center gap-2 px-5 py-1.5 border border-gray-500 rounded-full cursor-pointer"
            onClick={handleLimit}
          >
            Show More
            <ArrowRight size={20} />
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default Portfolio;
