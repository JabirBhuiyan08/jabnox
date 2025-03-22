import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Whatsapp = () => {
  return (
    <div>
      {/* Motion div for animation */}
      <motion.div
        className="max-w-7xl mx-auto mt-16 text-center flex flex-col items-center"
        animate={{ y: [0, -10, 0] }} // Moves up and down
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
      <Link to="https://wa.me/+8801749424565" target="_blank">
        <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
          <FaWhatsapp className="mr-2 inline w-10 h-10" /> Order Now
        </button>
      </Link>
      </motion.div>
      {/* Whatsapp button */}
    </div>
  );
};

export default Whatsapp;
