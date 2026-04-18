import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    { name: "Web Development", link: "/coding" },
    { name: "WordPress", link: "/wordpress" },
    { name: "Graphic Design", link: "/graphic-design" },
    { name: "Social Media", link: "/social-booster" },
  ];

  const company = [
    { name: "About Us", link: "/about" },
    { name: "Our Team", link: "/our-profile" },
    { name: "Contact", link: "/contact" },
    { name: "Portfolio", link: "/portfolios" },
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: "+880 1749-424565", link: "tel:+8801749424565" },
    { icon: <FaEnvelope />, text: "info.jabnox@gmail.com", link: "mailto:info.jabnox@gmail.com" },
    { icon: <FaMapMarkerAlt />, text: "Khilgaon, Dhaka, Bangladesh", link: "#" },
  ];

  const socialMedia = [
    { icon: <FaWhatsapp />, name: "WhatsApp", link: "https://wa.me/8801749424565", color: "hover:bg-green-500" },
    { icon: <FaFacebook />, name: "Facebook", link: "https://www.facebook.com/jabnoxdotcom", color: "hover:bg-blue-500" },
    { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/company/jabnox/", color: "hover:bg-blue-600" },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-xl">
                <img 
                  src={logo} 
                  alt="JABNOX" 
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                JABNOX
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into digital reality with cutting-edge solutions and unparalleled creativity.
            </p>
            
            {/* Newsletter Signup */}
            <div className="pt-4">
              <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105">
                  <FaArrowRight className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-start gap-3 group"
                  >
                    <span className="text-purple-400 group-hover:text-purple-300 transition-colors mt-0.5">
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-6">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center
                    text-gray-400 transition-all duration-300
                    ${social.color} hover:text-white hover:scale-110
                  `}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} JABNOX. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;