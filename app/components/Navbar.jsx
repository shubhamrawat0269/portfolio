import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full fixed z-50">
      <nav className="max-w-screen-xl mx-auto p-3 flex items-center justify-between">
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-52 cursor-pointer mr-14"
            alt=""
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rouned-full">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-5 py-1.5 border border-gray-500 rounded-full ml-5"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
