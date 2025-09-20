import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Links Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
            {[
              "About us",
              "Contact",
              "Website with Coding",
              "Website with Wordpress",
              "Graphic Design",
              "Social Media Boosting"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-750 transition-all duration-300 rounded-xl p-4 text-center cursor-pointer transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-xl font-semibold mb-6 text-gray-300">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {[
              { icon: <FaWhatsapp />, color: "hover:text-green-400", name: "WhatsApp" },
              { icon: <FaFacebook />, color: "hover:text-blue-400", name: "Facebook" },
              { icon: <FaInstagram />, color: "hover:text-pink-400", name: "Instagram" },
              { icon: <FaTwitter />, color: "hover:text-blue-300", name: "Twitter" },
              { icon: <FaYoutube />, color: "hover:text-red-500", name: "YouTube" },
              { icon: <FaLinkedin />, color: "hover:text-blue-500", name: "LinkedIn" },
            ].map((social, index) => (
              <div 
                key={index}
                className="flex flex-col items-center group"
              >
                <a
                  href="#"
                  className={`text-3xl bg-gray-800 p-3 rounded-full transition-all duration-300 transform group-hover:scale-110 group-hover:bg-gray-700 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
                <span className="text-xs mt-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 pt-8 border-t border-gray-700">
          <span className="text-sm text-gray-400">copyright 2025 ©</span>
          <img src={logo} alt="Company Logo" className="h-8 w-auto opacity-90" />
        </div>
      </div>
    </div>
  );
};

export default Footer;