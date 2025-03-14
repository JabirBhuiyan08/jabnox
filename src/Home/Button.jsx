import React from "react";

const Button = ({ text, variant = "default" }) => {
  const buttonStyles = {
    default:
      "bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300",
    mern:
      "bg-gradient-to-r from-orange-900 to-rose-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300",
    wordpress:
      "bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300",
  };

  return (
    <button className={`${buttonStyles[variant]} relative overflow-hidden`}>
      {text}
      {/* Ripple Effect */}
      <span className="absolute inset-0 bg-white opacity-10 rounded-full transform scale-0 transition-transform duration-500"></span>
    </button>
  );
};

export default Button;
