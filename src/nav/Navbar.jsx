import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for mobile menu

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    let servicesTimeout; // For hover delay on desktop

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
                    {isOpen ? <FiX /> : <FiMenu />} {/* Toggle between menu and close icon */}
                </button>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex space-x-8 text-lg font-semibold">
                    <Link to="/" className="hover:text-cyan-400">Home</Link>
                    <Link to="/about" className="hover:text-cyan-400">About</Link>
                    <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
                    
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
                        Services
                        {isServicesOpen && (
                            <div className="absolute -left-10 mt-2 w-56 bg-gray-800/90 shadow-lg rounded-lg text-white">
                                <Link to="/coding" className="block px-4 py-2 hover:bg-gray-700">Website with Coding</Link>
                                <Link to="/wordpress" className="block px-4 py-2 hover:bg-gray-700">WordPress Website</Link>
                                <Link to="/graphic-design" className="block px-4 py-2 hover:bg-gray-700">Graphic Design</Link>
                                <Link to="/social-booster" className="block px-4 py-2 hover:bg-gray-700">Social Media Boosting</Link>
                            </div>
                        )}
                    </div>
                </ul>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="bg-gray-800/80 p-6 rounded-xl md:hidden flex flex-col space-y-4 text-center text-lg font-semibold">
                    <Link to="/" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link>
                    
                    {/* Services in Mobile Menu */}
                    <div 
                        className="cursor-pointer hover:text-cyan-400"
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                        Services {isMobileServicesOpen ? "▲" : "▼"}
                    </div>
                    {isMobileServicesOpen && (
                        <div className="bg-gray-700/90 rounded-lg text-white mt-2">
                            <Link to="/coding" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setIsOpen(false)}>Website with Coding</Link>
                            <Link to="/wordpress" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setIsOpen(false)}>WordPress Website</Link>
                            <Link to="/graphic-design" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setIsOpen(false)}>Graphic Design</Link>
                            <Link to="/social-booster" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setIsOpen(false)}>Social Media Boosting</Link>
                        </div>
                    )}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
