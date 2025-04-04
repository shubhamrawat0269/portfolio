import React from "react";
import { Code, Monitor, Paintbrush } from "lucide-react";
import Image from "next/image";
import { assets } from "@/assets/assets";

// JSON for cards
const cardData = [
  {
    icon: <Code size={40} />,
    title: "Frontend Dev",
    description: "Building seamless and responsive UIs with modern frameworks.",
  },
  {
    icon: <Monitor size={40} />,
    title: "UI/UX Enthusiast",
    description: "Focused on crafting intuitive and user-friendly interfaces.",
  },
  {
    icon: <Paintbrush size={40} />,
    title: "Creative Thinker",
    description: "Designing with a balance of functionality and aesthetics.",
  },
];

const tools = [assets.vscode, assets.mongodb, assets.figma];

const About = () => {
  return (
    <section className="max-w-sm md:max-w-screen-xl mx-auto">
      {/* Image and Text Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center py-16">
        <Image
          src={assets.user_image}
          alt="Profile"
          width={350}
          height={350}
          className="object-cover shadow-lg"
        />

        <div className="flex flex-col space-y-3">
          <p className="text-lg text-gray-700 max-w-xl">
            I am an experienced Frontend Developer with over 3 years of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <div className="flex flex-col md:flex-row gap-6 py-3">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md flex-1"
              >
                <div className="mb-4 text-blue-600">{card.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tools I Use</h3>
            <div className="flex flex-wrap gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-xl flex items-center justify-center"
                >
                  <Image
                    src={tool}
                    width={30}
                    height={30}
                    alt={`Tool ${index}`}
                    className="max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
