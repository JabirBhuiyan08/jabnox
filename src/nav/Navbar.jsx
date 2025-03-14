import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for mobile menu

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" text-white bg-gray-900/90 p-4 md:px-16 lg:px-32 fixed top-0 left-0 w-full  z-50">
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

                {/* Nav Links (Desktop) */}
                <ul className="hidden md:flex space-x-8 text-lg font-semibold">
                    <Link to="/" className="hover:text-cyan-400">Home</Link>
                    <Link to="/about" className="hover:text-cyan-400">About</Link>
                    <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
                </ul>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="bg-gray-800/80 p-10 rounded-4xl md:hidden flex flex-col space-y-4 text-center mt-4 text-lg font-semibold">
                    <Link to="/" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
