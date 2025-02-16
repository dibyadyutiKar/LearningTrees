import React from "react";
import { motion } from "framer-motion";
import classRoom from "../assets/classroom1.png";

export default function OurClassrooms() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 xl:px-32 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900">
            AI-Enabled Digital Classrooms
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Experience next-level learning with our AI-powered classrooms,
            designed for seamless digital collaboration and personalized
            education.
          </p>
        </motion.div>

        {/* Right Side: Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={classRoom}
            alt="AI-Enabled Classroom"
            className="w-[300px] md:w-[400px] lg:w-[450px] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
