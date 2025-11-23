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
  const links = [
    "About us",
    "Contact",
    "Website with Coding",
    "Website with Wordpress",
    "Graphic Design",
    "Social Media Boosting"
  ];

  const socialMedia = [
    { icon: <FaWhatsapp />, color: "hover:text-green-400", bgColor: "group-hover:bg-green-500/20", name: "WhatsApp" },
    { icon: <FaFacebook />, color: "hover:text-blue-400", bgColor: "group-hover:bg-blue-500/20", name: "Facebook" },
    { icon: <FaInstagram />, color: "hover:text-pink-400", bgColor: "group-hover:bg-pink-500/20", name: "Instagram" },
    { icon: <FaTwitter />, color: "hover:text-blue-300", bgColor: "group-hover:bg-blue-400/20", name: "Twitter" },
    { icon: <FaYoutube />, color: "hover:text-red-500", bgColor: "group-hover:bg-red-500/20", name: "YouTube" },
    { icon: <FaLinkedin />, color: "hover:text-blue-500", bgColor: "group-hover:bg-blue-600/20", name: "LinkedIn" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white w-full py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-2xl shadow-2xl">
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  className="h-16 w-auto filter brightness-0 invert"
                />
              </div>
            
            </div>
            <p className="text-gray-400 text-center lg:text-left leading-relaxed">
              Transforming ideas into digital reality with cutting-edge solutions and unparalleled creativity.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              {links.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center cursor-pointer transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-purple-400/30 hover:shadow-2xl"
                >
                  <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-end">
            <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              {socialMedia.map((social, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center group"
                >
                  <a
                    href="#"
                    className={`
                      relative text-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl 
                      transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 
                      ${social.color} ${social.bgColor} group-hover:border-opacity-50
                      shadow-lg hover:shadow-2xl
                    `}
                    aria-label={social.name}
                  >
                    {social.icon}
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </a>
                  <span className="text-xs mt-3 text-gray-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {social.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">
                © 2025 All rights reserved
              </span>
              <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">
                Made with ❤️ by Your Team
              </span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Privacy Policy
              </a>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Terms of Service
              </a>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Support
              </a>
            </div>
          </div>

          {/* Brand Logo */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-6 w-auto opacity-80"
              />
              <span className="text-gray-300 text-sm font-medium">
                Transforming Digital Experiences
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse delay-500"></div>
    </div>
  );
};

export default Footer;