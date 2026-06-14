"use client";
import { X, Menu } from "lucide-react";
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
          ? "bg-[#000000d1] bg-opacity-50 backdrop-blur-lg shadow-sm transition-all duration-300 ease-in-sine"
          : ""
      }`}
    >
      <nav className="max-w-[1560px] mx-auto p-3 flex items-center justify-between">
        <a href="#top">
          <h1 className="text-xl text-[#dcdcdc] font-semibold">
            Shubham Rawat
          </h1>
        </a>
        <ul
          className={
            "hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 text-[#b1b1b1]"
          }
        >
          {menuItems.data.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:text-[#ffffff] transition-colors"
              >
                <a href={item.href}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 p-1 px-4 rounded-md bg-[#adc6ff] text-[#365398]"
          >
            Hire Me
          </a>
          <button
            className="block md:hidden ml-3 text-[#adc6ff]"
            onClick={openMenu}
          >
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
        className="flex md:hidden flex-col gap-4 p-8 fixed top-0 left-0 right-0 w-full h-auto rounded-bl-xl rounded-br-xl z-50 bg-[#100f0f] transition duration-500"
      >
        <div className="absolute right-3 top-2.5" onClick={closeMenu}>
          <X size={24} color="#adc6ff" />
        </div>

        {menuItems.data.map((item, index) => {
          return (
            <li onClick={closeMenu} key={index}>
              <a
                href={item.href}
                className="text-[#b1b1b1] hover:text-[#ffffff] transition-colors"
              >
                {item.title}
              </a>
            </li>
          );
        })}

        <a
          href="#contact"
          className="inline w-24 p-1 px-4 rounded-md text-center bg-[#adc6ff] text-[#365398]"
        >
          Hire Me
        </a>
      </ul>
    </motion.div>
  );
};

export default Navbar;
