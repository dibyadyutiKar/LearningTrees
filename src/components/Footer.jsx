import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#162447] text-white py-14 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Logo & Name */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-12 w-12" />
            <span className="text-xl font-semibold">Learning Trees</span>
          </div>
          <p className="text-gray-300 text-sm mt-3 text-center md:text-left">
            Empowering digital learning with AI-driven classrooms.
          </p>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/3 text-left">
          <h3 className="text-lg font-medium">Contact Us</h3>
          <p className="text-gray-300 text-sm mt-2">
            Vaishnomata Vihar, Phase-1, Near Food Court,
            <br />
            Opposite of Utkal Greenex, Sundarapada,
            <br />
            Bhubaneswar, PIN-751002
          </p>
          <p className="text-gray-300 text-sm mt-1">
            Email: beherarojalin2@gmail.com
          </p>
          <p className="text-gray-300 text-sm mt-1">
            Phone: (+91) 7735668445, 8114377310
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center md:items-start space-y-2">
          <a href="#home" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 transition">
            About Us
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-5">
          {/* Gmail Icon */}
          <a
            href="mailto:beherarojalin2@gmail.com"
            title="Email Us"
            className="hover:text-gray-400 transition"
          >
            <SiGmail size={24} />
          </a>

          {/* WhatsApp Icon */}
          {/* Replace '917735668444' with your full phone number in international format */}
          <a
            href="https://wa.me/917735668445"
            title="Chat on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaWhatsapp size={24} />
          </a>

          {/*
          // Other social media icons (commented out for now)
          <a href="#" className="hover:text-gray-400 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaInstagram size={24} />
          </a>
          */}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Learning Trees. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
