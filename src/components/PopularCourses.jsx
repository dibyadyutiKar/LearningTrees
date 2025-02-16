import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaFlask,
  FaCalculator,
  FaLaptop,
  FaMedal,
  FaGlobeAmericas,
} from "react-icons/fa";

const courses = [
  {
    icon: <FaBookOpen className="text-blue-600 text-5xl mb-4" />,
    title: "English",
    description: "Improve your communication and writing skills.",
  },
  {
    icon: <FaFlask className="text-green-600 text-5xl mb-4" />,
    title: "Science",
    description: "Discover the wonders of physics, chemistry, and biology.",
  },
  {
    icon: <FaCalculator className="text-orange-600 text-5xl mb-4" />,
    title: "Maths",
    description: "Master numbers, equations, and problem-solving techniques.",
  },
  {
    icon: <FaLaptop className="text-purple-600 text-5xl mb-4" />,
    title: "Basic Computer Classes",
    description: "Learn essential computer skills and digital literacy.",
  },
  {
    icon: <FaMedal className="text-red-600 text-5xl mb-4" />,
    title: "Olympiad (IMO, ISO, IEO)",
    description: "Prepare for competitive exams and showcase your talent.",
  },
  {
    icon: <FaGlobeAmericas className="text-teal-600 text-5xl mb-4" />,
    title: "Social Science",
    description: "Understand history, geography, and society better.",
  },
];

const PopularCourses = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Popular Courses
        </motion.h2>
        <p className="text-lg text-gray-700 mt-3">
          Explore our top-rated courses designed for your success.
        </p>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {course.icon}
              <h3 className="text-lg font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="text-gray-600 mt-2 text-base">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
