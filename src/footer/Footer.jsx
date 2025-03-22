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
import About from "../About/About";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900/50 text-white p-8 flex flex-col items-center">
      <div className="flex items-center flex-col gap-2 mb-5 text-sm ">
        <div className="flex items-center gap-1 lg:gap-5">
        <Link to="" className="font-bold bg-gray-900 px-5 py-2 rounded-4xl">About</Link>
        <Link to="" className="font-bold bg-gray-900 px-5 py-2 rounded-4xl">Contact</Link>
        <Link to="" className="font-bold bg-gray-900 px-5 py-2 rounded-4xl">Website with Coding</Link> 
        </div>
        <div className="flex items-center gap-5">
        <Link to="" className="font-bold bg-gray-900 px-5 py-2 rounded-4xl">Website with Wordpress</Link>
        <Link to="" className="font-bold bg-gray-900 px-3 py-2 rounded-4xl">Graphic Design</Link>
        <Link to="" className="font-bold bg-gray-900 px-3 py-2 rounded-4xl">Social Media Boosting</Link>
        </div>
      </div>
      <div className="flex items-center gap-2 text-3xl">
        <FaWhatsapp />
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
        <FaLinkedin />
      </div>
      <div className="flex items-center">
        copyright 2025 © <img src={logo} alt="" className="w-40" />
      </div>
    </div>
  );
};

export default Footer;
