import { assets } from "@/assets/assets";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#fefae0]">
      <div className="max-w-sm sm:max-w-md md:max-w-screen-xl mx-auto ">
        <div className="flex flex-col justify-center items-center text-center py-5">
          <a href="#top">
            <Image src={assets.logo} className="w-56 cursor-pointer" alt="" />
          </a>

          <div className="flex items-center gap-2">
            <Mail size={18} />
            rawatshubam269@gmail.com
          </div>
        </div>

        <div className="border-t border-gray-300 px-4 py-3 flex justify-between items-center text-xs md:text-sm text-gray-700">
          <p>© 2025 Shubham Rawat, all rights reserved.</p>
          <p>Connect with me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
