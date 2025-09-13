import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiArrowDown, FiMenu, FiX } from "react-icons/fi";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMoreMobileOpen, setIsMoreMobileOpen] = useState(false);
  const { user } = useAuth();

  let servicesTimeout;
  let aboutTimeout;
  let moreTimeout;

  return (
    <nav className="bg-gray-900 backdrop-blur-sm bg-opacity-95 border-b border-gray-800 p-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-40 md:w-48 transition-all duration-300 hover:opacity-90" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
          >
            Home
          </Link>
          
          {user && (
            <Link 
              to="project-store" 
              className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
            >
              Project Store
            </Link>
          )}

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              clearTimeout(servicesTimeout);
              setIsServicesOpen(true);
            }}
            onMouseLeave={() => {
              servicesTimeout = setTimeout(() => setIsServicesOpen(false), 300);
            }}
          >
            <button className="flex items-center text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium py-2">
              Services <FiArrowDown className={`ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-gray-800 border border-gray-700 shadow-xl rounded-lg overflow-hidden">
                <Link
                  to="/coding"
                  className="block px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-700 last:border-0"
                >
                  Website with Coding
                </Link>
                <Link
                  to="/wordpress"
                  className="block px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-700 last:border-0"
                >
                  WordPress Website
                </Link>
                <Link
                  to="/graphic-design"
                  className="block px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-700 last:border-0"
                >
                  Graphic Design
                </Link>
                <Link
                  to="/social-booster"
                  className="block px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200"
                >
                  Social Media Boosting
                </Link>
              </div>
            )}
          </div>

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(moreTimeout);
              setIsMoreOpen(true);
            }}
            onMouseLeave={() => {
              moreTimeout = setTimeout(() => setIsMoreOpen(false), 300);
            }}
          >
            <button className="flex items-center text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium py-2">
              More <FiArrowDown className={`ml-1 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMoreOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-gray-800 border border-gray-700 shadow-xl rounded-lg overflow-hidden">
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-700"
                >
                  Contact
                </Link>
                <Link 
                  to="/excel" 
                  className="block px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-700"
                >
                  Excel File
                </Link>
                
                {/* About Dropdown inside More */}
                <div
                  className=""
                  onMouseEnter={() => {
                    clearTimeout(aboutTimeout);
                    setIsAboutOpen(true);
                  }}
                  onMouseLeave={() => {
                    aboutTimeout = setTimeout(() => setIsAboutOpen(false), 300);
                  }}
                >
                  <button className="flex items-center justify-between w-full px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-700">
                    About us <FiArrowDown className={`transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isAboutOpen && (
                    <div>
                      <Link
                        to="/about"
                        className="block px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-700"
                      >
                        About us
                      </Link>
                      <Link
                        to="/reviews"
                        className="block px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-700"
                      >
                        Reviews
                      </Link>
                      <Link
                        to="/review-form"
                        className="block px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200 border-b border-gray-700"
                      >
                        Review Us
                      </Link>
                      <Link
                        to="/our-profile"
                        className="block px-4 py-3 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 transition-colors duration-200"
                      >
                        Our Profile
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link 
            to="/dashboard" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium shadow-md hover:shadow-cyan-800/20"
          >
            {user ? "Dashboard" : "Login"}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 mt-2 shadow-xl">
          <div className="max-w-7xl mx-auto py-4 px-4">
            <Link
              to="/"
              className="block py-3 px-4 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {user && (
              <Link 
                to="project-store" 
                className="block py-3 px-4 text-gray-200 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Project Store
              </Link>
            )}

            {/* Services Accordion */}
            <div className="border-b border-gray-700 last:border-0">
              <button
                className="flex items-center justify-between w-full py-3 px-4 text-gray-200 hover:text-cyan-400 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              >
                <span>Services</span>
                <FiArrowDown className={`transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileAboutOpen && (
                <div className="pl-6 pb-2">
                  <Link
                    to="/coding"
                    className="block py-2 px-4 text-gray-300 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Website with Coding
                  </Link>
                  <Link
                    to="/wordpress"
                    className="block py-2 px-4 text-gray-300 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    WordPress Website
                  </Link>
                  <Link
                    to="/graphic-design"
                    className="block py-2 px-4 text-gray-300 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Graphic Design
                  </Link>
                  <Link
                    to="/social-booster"
                    className="block py-2 px-4 text-gray-300 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Social Media Boosting
                  </Link>
                </div>
              )}
            </div>

            {/* More Accordion */}
            <div className="border-b border-gray-700 last:border-0">
              <button
                className="flex items-center justify-between w-full py-3 px-4 text-gray-200 hover:text-cyan-400 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsMoreMobileOpen(!isMoreMobileOpen)}
              >
                <span>More</span>
                <FiArrowDown className={`transition-transform duration-200 ${isMoreMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMoreMobileOpen && (
                <div className="pl-6 pb-2">
                  <Link
                    to="/contact"
                    className="block py-2 px-4 text-gray-300 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link 
                    to="/excel" 
                    className="block py-2 px-4 text-gray-300 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Excel File
                  </Link>
                  
                  {/* About Accordion inside More */}
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-2 px-4 text-gray-300 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      <span>About us</span>
                      <FiArrowDown className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isMobileServicesOpen && (
                      <div className="pl-4">
                        <Link
                          to="/about"
                          className="block py-2 px-4 text-gray-400 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          About us
                        </Link>
                        <Link
                          to="/reviews"
                          className="block py-2 px-4 text-gray-400 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Reviews
                        </Link>
                        <Link
                          to="/review-form"
                          className="block py-2 px-4 text-gray-400 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Review Us
                        </Link>
                        <Link
                          to="/our-profile"
                          className="block py-2 px-4 text-gray-400 hover:bg-cyan-900/20 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Our Profile
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/dashboard"
              className="block py-3 px-4 mt-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-center transition-colors duration-300 font-medium shadow-md hover:shadow-cyan-800/20"
              onClick={() => setIsOpen(false)}
            >
              {user ? "Dashboard" : "Login"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;