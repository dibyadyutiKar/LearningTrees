import React from "react";
import HeroImg from "../assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl p-6 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Transform Your Future With Expert Coaching
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          Join Learning Trees and unlock new career opportunities.
        </p>
        <button
          onClick={scrollToContact}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white font-semibold text-lg rounded-lg shadow-lg"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
