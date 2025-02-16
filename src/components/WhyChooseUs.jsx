import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaQuestionCircle,
  FaSnowflake,
  FaRobot,
  FaUserFriends,
  FaDollarSign,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher className="text-blue-600 text-4xl mb-3" />,
    title: "Expert Faculty",
    description: "Learn from industry experts with years of experience.",
  },
  {
    icon: <FaQuestionCircle className="text-blue-600 text-4xl mb-3" />,
    title: "Subject-Specific Doubt Classes",
    description: "Get personalized attention for all your subject doubts.",
  },
  {
    icon: <FaSnowflake className="text-blue-600 text-4xl mb-3" />,
    title: "AC Classrooms",
    description: "Comfortable air-conditioned classrooms for focused learning.",
  },
  {
    icon: <FaRobot className="text-blue-600 text-4xl mb-3" />,
    title: "AI-Enabled Digital Classroom",
    description: "Advanced learning with AI-powered interactive lessons.",
  },
  {
    icon: <FaUserFriends className="text-blue-600 text-4xl mb-3" />,
    title: "Monthly Student Counselling",
    description: "Guidance and motivation sessions for academic success.",
  },
  {
    icon: <FaDollarSign className="text-blue-600 text-4xl mb-3" />,
    title: "Affordable Price",
    description: "Quality education at budget-friendly prices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-indigo-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <p className="text-lg text-gray-700 mt-3">
          Discover what makes us the best choice for your learning journey.
        </p>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-1 text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
