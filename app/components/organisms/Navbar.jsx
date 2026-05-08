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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    sideMenuRef.current.style.transform = "translateY(0%)";
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    sideMenuRef.current.style.transform = "translateY(-100%)";
  };

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
        isScrolled
          ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm transition-all duration-300 ease-in-sine"
          : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto p-3 flex items-center justify-between">
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-52 cursor-pointer"
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
            className="hidden md:flex items-center gap-3 p-2 px-3 text-amber-50 bg-[#bc6c25]"
          >
            Contact
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Menu />
          </button>
        </div>
      </nav>
      {/* overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
      {/* menu items mobile  */}
      <ul
        ref={sideMenuRef}
        style={{ transform: "translateY(-100%)" }}
        className="flex md:hidden flex-col gap-4 py-10 px-10 fixed top-0 left-0 right-0 w-full h-auto rounded-bl-xl rounded-br-xl z-50 bg-[#c46410] transition duration-500"
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
