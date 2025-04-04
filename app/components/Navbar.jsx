"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () =>
    (sideMenuRef.current.style.transform = "translateX(-16rem)");
  const closeMenu = () =>
    (sideMenuRef.current.style.transform = "translateX(16rem)");

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <div className="w-full fixed z-50">
        <nav className="max-w-screen-xl mx-auto p-3 flex items-center justify-between">
          <a href="#top">
            <Image
              src={assets.logo}
              className="w-52 cursor-pointer mr-14"
              alt=""
            />
          </a>
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 bg-white rounded-full px-12 py-3 shadow-sm bg-opacity-50">
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
          <div className="flex items-center gap-3">
            <button>
              <Image src={assets.moon_icon} alt="" className="w-4" />
            </button>
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-3 px-5 py-1.5 border border-gray-500 rounded-full ml-5"
            >
              Contact
              <Image src={assets.arrow_icon} className="w-3" alt="" />
            </a>
            <button className="block md:hidden ml-3" onClick={openMenu}>
              <Image src={assets.menu_black} alt="" className="w-4" />
            </button>
          </div>
        </nav>

        {/* menu items mobile  */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50  h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-4 cursor-pointer"
            />
          </div>
          <li>
            <a onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
