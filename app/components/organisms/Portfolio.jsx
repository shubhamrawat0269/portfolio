import React from "react";
import PrimaryInfo from "../atoms/PrimaryInfo";
import Card from "../molecules/Card";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const cards = [
    {
      imageUrl: "/work-1.png",
      title: "Explore Nature",
    },
    {
      imageUrl: "/work-2.png",
      title: "Mountain Views",
    },
    {
      imageUrl: "/work-3.png",
      title: "City Nights",
    },
    {
      imageUrl: "/work-4.png",
      title: "City Nights",
    },
  ];
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
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              onClick={() => alert(`${card.title} clicked!`)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center py-5">
        <button className="flex items-center gap-2 px-5 py-1.5 border border-gray-500 rounded-full cursor-pointer">
          Contact
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
