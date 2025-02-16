import React, { useState } from "react";
import { motion } from "framer-motion";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = `Hello, my name is ${formData.name} and my email is ${formData.email}. ${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`,
      "_blank"
    );

    // Show success message
    setSuccess("Opening WhatsApp...");

    // Reset form after a small delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-gray-900">Get In Touch</h2>
        <p className="text-lg text-gray-700 mt-2">
          Have questions? Reach out to us, and we'll be happy to assist you!
        </p>
      </motion.div>

      {/* Form Section */}
      <motion.div
        className="max-w-lg mx-auto mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          ></textarea>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Success Message */}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-2xl text-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send via WhatsApp"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
