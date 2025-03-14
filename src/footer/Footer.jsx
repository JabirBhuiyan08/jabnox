import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-900/50 text-white p-8 flex flex-col items-center'>
            <div className='flex items-center gap-2 text-5xl'>
                <FaWhatsapp />
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
                <FaLinkedin />
            </div>
            <div className='flex items-center'>copyright 2025 © <img src={logo} alt="" className='w-40'/></div>
        </div>
    );
};

export default Footer;