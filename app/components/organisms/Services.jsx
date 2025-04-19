import React from "react";
import PrimaryInfo from "../atoms/PrimaryInfo";
import { MoveRight } from "lucide-react";
import { serviceCardData } from "@/assets/assets";

const Services = () => {
  return (
    <div id="services" className="py-14">
      <div className="max-w-sm sm:max-w-md md:max-w-screen-xl mx-auto">
        <PrimaryInfo
          heading={"What I offers"}
          subHeading={"My Services"}
          para={
            "I am a frontend developer with over 3 years of experience in multiple companies like Webreinvent, EZ & Mobilous"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-3">
          {serviceCardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white border border-[#99582a] rounded-2xl shadow-md shadow-[#bc6c25] flex-1"
            >
              <div className="mb-4 text-[#bc6c25]">{card.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 h-24">{card.description}</p>

              <a href="#" className="text-base flex items-center gap-3 py-5">
                Read More
                <MoveRight size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
