import React from "react";
import aboutImg from "../assets/about-us.png";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              At{" "}
              <span className="font-semibold text-blue-600">
                Learning Trees
              </span>
              , we empower individuals to achieve their goals through
              personalized coaching. Our dedicated team of experts is here to
              guide you every step of the way.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutImg}
              alt="About Us"
              className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
