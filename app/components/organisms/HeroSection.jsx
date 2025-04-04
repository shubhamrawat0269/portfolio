"use client";

import { assets } from "@/assets/assets";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center bg-[#fefae0] px-4 py-28">
      <div className="text-center max-w-screen-md">
        <div className="">
          <Image
            src={assets.profile_img} // Make sure the image exists in /public folder
            alt="Shubham Rawat"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
        </div>

        <div>
          <h4 className="text-xl text-gray-600 my-2">
            Hi! I'm <span className="text-[#432818]">Shubham Rawat</span>
          </h4>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            frontend web developer based in India.
          </h1>
          <p className="text-gray-700 mb-6">
            I am a frontend developer from India, New Delhi with 3 years of
            experience in multiple companies like Webreinvent, EZ and Pepcoding.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="bg-[#bc6c25] order-2 md:order-1 text-white px-4 py-2 rounded-md md:rounded-full cursor-pointer flex items-center gap-2 hover:bg-[#611a00] transition">
            <Mail size={18} />
            Connect with Me
          </button>
          <button className="bg-gray-800 order-1 md:order-2 text-white px-4 py-2 rounded-md md:rounded-full cursor-pointer flex items-center gap-2 hover:bg-gray-900 transition">
            <FileText size={18} />
            My Resume
          </button>
        </div>
      </div>
    </section>
  );
}
