"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";

import menuItems from "@/app/shared/json/menu-items.json";
import { CircleX, Moon } from "lucide-react";

const Navbar = () => {
  const sideMenuRef = useRef();
  const openMenu = () =>
    (sideMenuRef.current.style.transform = "translateX(-16rem)");
  const closeMenu = () =>
    (sideMenuRef.current.style.transform = "translateX(16rem)");

  return (
    <>
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
            {menuItems.data.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.title}</a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3">
            <button>
              <Moon size={24} />
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
            <CircleX size={24} />
          </div>

          {menuItems.data.map((item, index) => {
            return (
              <li onClick={closeMenu} key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
