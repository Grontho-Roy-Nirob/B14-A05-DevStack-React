import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mobile Menu */}
        <button className="text-xl text-gray-700 md:hidden">
          <FaBars />
        </button>

        <div className="flex items-center">
          <img src={Logo} alt="Dev Stack" className="h-9 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          <li className="cursor-pointer text-pink-600">Home</li>

          <li className="cursor-pointer hover:text-pink-600">Technologies</li>

          <li className="cursor-pointer hover:text-pink-600">Projects</li>

          <li className="cursor-pointer hover:text-pink-600">About</li>

          <li className="cursor-pointer hover:text-pink-600">Contact</li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-slate-600 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
