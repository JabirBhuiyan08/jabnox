import React from "react";
import Button from "../Home/Button";
import { Helmet } from "react-helmet-async";

import Pricing from "./CodingComponents/Pricing";
import PortfolioSection from "./CodingComponents/PortfolioSection";

const Coding = () => {
  return (
    <div className="min-h-screen bg-black px-6 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <Helmet>
          <title>Custom Web Development | JABNOX</title>
          <meta name="description" content="JABNOX is a leading web application development company offering custom web development, MERN stack solutions, and freelance web developer services. Build your dream web app with our expert team." />
          <meta name="keywords" content="web application development company, custom web application development company, best web development company, web app development company, custom web development company, need freelance web developer, web developer freelance" />
        </Helmet>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
            <span className="text-purple-400 text-sm font-medium">MERN Stack Specialists</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              MERN Stack Development
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            High-performance web applications using MongoDB, Express.js, React, 
            and Node.js. <span className="text-white font-medium">Build fast, scale faster.</span>
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-400">Available for projects</span>
            </div>
            <div className="w-px h-6 bg-gray-700" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-400">5+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-8">
          
          <PortfolioSection />
        </div>

        {/* Pricing Plans */}
        <div>
          
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default Coding;