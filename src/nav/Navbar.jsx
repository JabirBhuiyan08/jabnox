import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiArrowDown, FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu
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

  let servicesTimeout; // For hover delay on desktop
  let aboutTimeout; // For hover delay on desktop
  let moreTimeout; // For hover delay on desktop

  return (
    <nav className="text-white bg-gray-900/90 p-4 md:px-16 lg:px-32 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-40 md:w-56" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}{" "}
          {/* Toggle between menu and close icon */}
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          {/* Services Dropdown - Desktop */}
          <div
            className="relative cursor-pointer hover:text-cyan-400"
            onMouseEnter={() => {
              clearTimeout(servicesTimeout);
              setIsServicesOpen(true);
            }}
            onMouseLeave={() => {
              servicesTimeout = setTimeout(() => setIsServicesOpen(false), 300);
            }}
          >
            <div className="flex items-center gap-1">
              Services <FiArrowDown />
            </div>
            {isServicesOpen && (
              <div className="absolute -left-10 mt-2 w-56 bg-gray-800/90 shadow-lg rounded-lg text-white">
                <Link
                  to="/coding"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Website with Coding
                </Link>
                <Link
                  to="/wordpress"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  WordPress Website
                </Link>
                <Link
                  to="/graphic-design"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Graphic Design
                </Link>
                <Link
                  to="/social-booster"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Social Media Boosting
                </Link>
              </div>
            )}
          </div>

          {/* More Dropdown - Desktop */}
          <div
            className="relative cursor-pointer hover:text-cyan-400 "
            onMouseEnter={() => {
              clearTimeout(moreTimeout);
              setIsMoreOpen(true);
            }}
            onMouseLeave={() => {
              moreTimeout = setTimeout(() => setIsMoreOpen(false), 300);
            }}
          >
            <Link className="flex items-center gap-1">
              More <FiArrowDown />
            </Link>
            {isMoreOpen && (
              <div className="absolute -left-10 mt-2 w-56 bg-gray-800/90 shadow-lg rounded-lg text-white">
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Contact
                </Link>
                <Link to="/excel" className="block px-4 py-2 hover:bg-gray-700">
                  Excel File
                </Link>
                {/* About us Dropdown - Desktop */}
                <div
                  className="relative cursor-pointer hover:text-cyan-400 block px-4 py-2 hover:bg-gray-700"
                  onMouseEnter={() => {
                    clearTimeout(aboutTimeout);
                    setIsAboutOpen(true);
                  }}
                  onMouseLeave={() => {
                    aboutTimeout = setTimeout(() => setIsAboutOpen(false), 300);
                  }}
                >
                  <div className="flex items-center gap-1">
                    About us <FiArrowDown />
                  </div>
                  {isAboutOpen && (
                    <div className="absolute -left-10 mt-2 w-56 bg-gray-800/90 shadow-lg rounded-lg text-white">
                      <Link
                        to="/about"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        About us{" "}
                      </Link>
                      <Link
                        to="/reviews"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Reviews
                      </Link>
                      <Link
                        to="/review-form"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Review Us
                      </Link>
                      <Link
                        to="/our-profile"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Our Profile
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link to="/dashboard">{user ? "Dashboard" : "Login"}</Link>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="bg-gray-800/80 p-6 rounded-xl md:hidden flex flex-col space-y-4 text-center text-lg font-semibold">
          <Link
            to="/"
            className="hover:text-cyan-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* More Dropdown - Mobile */}
          <div
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => setIsMoreMobileOpen(!isMoreMobileOpen)}
          >
            More {isMoreMobileOpen ? "▲" : "▼"}
          </div>
          {isMoreMobileOpen && (
            <div className="bg-gray-700/90 rounded-lg text-white mt-2">
              <Link
                to="/contact"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link to="/excel" className="block px-4 py-2 hover:bg-gray-600"
                onClick={() => setIsOpen(false)}>Excel File</Link>

              {/* About us in Mobile Menu */}
              <div
                className="cursor-pointer hover:text-cyan-400 block px-4 py-2 hover:bg-gray-600"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                About us {isMobileServicesOpen ? "▲" : "▼"}
              </div>
              {/* About us Dropdown - Mobile */}
              {isMobileServicesOpen && (
                <div className="bg-gray-700/90 rounded-lg text-white mt-2">
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    About us
                  </Link>
                  <Link
                    to="/reviews"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Reviews
                  </Link>
                  <Link
                    to="/review-form"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Review Us
                  </Link>
                  <Link
                    to="/our-profile"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Profile
                  </Link>
                </div>
              )}
            </div>
          )}

          

          {/* Services in Mobile Menu */}
          <div
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
          >
            Services {isMobileAboutOpen ? "▲" : "▼"}
          </div>
          {isMobileAboutOpen && (
            <div className="bg-gray-700/90 rounded-lg text-white mt-2">
              <Link
                to="/coding"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Website with Coding
              </Link>
              <Link
                to="/wordpress"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={() => setIsOpen(false)}
              >
                WordPress Website
              </Link>
              <Link
                to="/graphic-design"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Graphic Design
              </Link>
              <Link
                to="/social-booster"
                className="block px-4 py-2 hover:bg-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Social Media Boosting
              </Link>
            </div>
          )}
          <Link to="/dashboard">Dashboard</Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
