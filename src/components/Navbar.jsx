import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo-2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Base classes for navigation links with underline effect
  const navLinkClasses =
    "relative group text-gray-800 hover:text-[#162447] transition";

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner with increased font size */}
      <div className="bg-[#162447] text-white text-center py-2 px-4 text-lg">
        <span role="img" aria-label="Party Popper">
          🎉
        </span>{" "}
        Demo classes starting from 2nd week of March!
      </div>

      {/* Main Nav with increased height */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Learning Trees Logo"
              className="h-10 w-10 rounded-full border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <span className="text-xl font-semibold text-gray-800 whitespace-nowrap">
              Learning Trees
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className={navLinkClasses}>
              Home
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#162447] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#about" className={navLinkClasses}>
              About Us
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#162447] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#contact" className={navLinkClasses}>
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#162447] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#162447] focus:outline-none"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Slide-down) */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
            <a
              href="#home"
              className={navLinkClasses + " block"}
              onClick={() => setIsOpen(false)}
            >
              Home
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#162447] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a
              href="#about"
              className={navLinkClasses + " block"}
              onClick={() => setIsOpen(false)}
            >
              About Us
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#162447] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a
              href="#contact"
              className={navLinkClasses + " block"}
              onClick={() => setIsOpen(false)}
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#162447] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
