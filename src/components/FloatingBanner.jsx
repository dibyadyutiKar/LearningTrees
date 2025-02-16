import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingBanner = ({ imageUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isManuallyClosed && window.scrollY > 400) {
        // Show banner when scrolled down 100px, unless manually closed
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManuallyClosed]); // Depend on manual close state

  return (
    <>
      {/* Floating Banner */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-4 right-4 z-50 bg-white shadow-lg p-2 rounded-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <button
              className="absolute top-1 right-1 text-black text-sm bg-gray-300 rounded-full px-2"
              onClick={() => {
                setIsVisible(false);
                setIsManuallyClosed(true); // Mark as manually closed
              }}
            >
              ✕
            </button>
            <img
              src={imageUrl}
              alt="Ad Banner"
              className="w-48 h-auto rounded-lg"
              onClick={() => setIsExpanded(true)} // Open overlay on click
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enlarged Image Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)} // Close on click outside
          >
            <motion.img
              src={imageUrl}
              alt="Expanded Banner"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingBanner;
