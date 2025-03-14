import React from "react";
import Button from "../Home/Button";

import Pricing from "./CodingComponents/Pricing";
import PortfolioSection from "./CodingComponents/PortfolioSection";

const Coding = () => {
  return (
    <div className="px-6 py-10 max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          MERN Stack Development
        </h1>
        <p className="text-gray-600 mt-2">
          High-performance web applications using MongoDB, Express.js, React,
          and Node.js.
        </p>
      </div>

      {/* Portfolio Section */}
      <PortfolioSection></PortfolioSection>

      {/* Pricing Plans */}
      <Pricing></Pricing>
    </div>
  );
};

export default Coding;
