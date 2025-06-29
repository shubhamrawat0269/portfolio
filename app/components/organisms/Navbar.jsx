"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";

import { X, ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import menuItems from "@/app/shared/json/menu-items.json";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScrolled, setScrolled] = useState(false);

  const openMenu = () =>
    (sideMenuRef.current.style.transform = "translateX(-100%)");
  const closeMenu = () =>
    (sideMenuRef.current.style.transform = "translateX(100%)");

  // Improvement : we should be cleaning scroll event listener in useEffect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={isScrolled ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`w-full fixed z-50 ${
        isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
      }`}
    >
      <nav className="max-w-screen-xl mx-auto p-3 flex items-center justify-between">
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-52 cursor-pointer mr-14"
            alt={assets.logo}
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8  rounded-full px-12 py-3 ${
            isScrolled ? "" : "shadow-sm bg-opacity-50 bg-white"
          }`}
        >
          {menuItems.data.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-5 py-1.5 border border-gray-500 rounded-full ml-5"
          >
            Contact
            <ArrowUpRight />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Menu />
          </button>
        </div>
      </nav>
      {/* menu items mobile  */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 -right-full w-full z-50  h-screen bg-[#bc6c25] transition duration-500"
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <X size={24} color="white" />
        </div>
          
        {menuItems.data.map((item, index) => {
          return (
            <li onClick={closeMenu} key={index}>
              <a href={item.href} className="text-[#fefae0] text-xl">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Navbar;
