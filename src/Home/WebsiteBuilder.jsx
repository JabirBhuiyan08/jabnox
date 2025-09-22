import React from "react";
import Button from "./Button";
import picture1 from "../assets/Picture1.png";
import picture2 from "../assets/Picture2.png";
import picture3 from "../assets/Picture3.png";
import { Link } from "react-router-dom";

const WebsiteBuilder = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-16 animate-fade-in">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Personal Website Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10 border-opacity-30 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-4">
                  Personal Website
                </h1>
                <p className="text-white text-opacity-80 mb-6 leading-relaxed">
                  Our{" "}
                  <span className="font-semibold text-[#ffc060]">
                    Personal Website Template
                  </span>{" "}
                  is a ready-made solution that you can purchase and launch
                  quickly.
                  <br />
                  <br />
                  With your purchase, you’ll receive:
                  <ul className="list-disc list-inside  text-sm text-gray-300 space-y-1">
                    <li>1-year complete service & support</li>
                    <li>Domain included (no extra payment)</li>
                    <li>Full setup & Google visibility</li>
                    <li>Optional customization available (extra cost)</li>
                  </ul>
                  <br />
                  no hidden
                  or separate domain fees.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Link to={"/dashboard/website-template"}>
                    <button className="px-6 py-3 bg-[#ffc060] text-black font-semibold rounded-lg shadow-md hover:bg-[#e6ac4d] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      View Template
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={picture1}
                  alt="Website Builder"
                  className="w-48 h-48 object-cover border-4 border-white border-opacity-30 rounded-xl shadow-lg transform transition-transform duration-700 hover:rotate-3"
                />
              </div>
            </div>
          </div>

          {/* Website Builder Card */}
          <div className="flex flex-col justify-center items-center bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10 border-opacity-30 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-4">
                  Website Builder
                </h1>
                <p className="text-white text-opacity-80 mb-6">
                  I provide professional website development services using
                  WordPress or custom coding, ensuring a premium, responsive,
                  and user-friendly design
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Link to="/coding">
                    <Button text="<Coding> MERN <Coding/>" variant="mern" />
                  </Link>
                  <Link to="/wordpress">
                    <Button text="WordPress" variant="wordpress" />
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={picture1}
                  alt="Website Builder"
                  className="w-48 h-48 object-cover border-4 border-white border-opacity-30 rounded-xl shadow-lg transform transition-transform duration-700 hover:rotate-3"
                />
              </div>
            </div>
          </div>

          {/* Social Booster Card */}
          <div className=" bg-white/10 flex flex-col md:flex-row-reverse items-center gap-8 backdrop-blur-md rounded-xl p-8 border border-white/10 border-opacity-30 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-4">
                  Social Booster
                </h1>
                <p className="text-white text-opacity-80 mb-6">
                  Boost likes, followers, subscribers, and website traffic on
                  all social platforms with our premium service. Get fast,
                  reliable growth today!
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link to="/social-booster">
                    <Button text="Order Now" />
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={picture2}
                  alt="Social Booster"
                  className="w-48 h-48 object-cover border-4 border-white border-opacity-30 rounded-xl shadow-lg transform transition-transform duration-700 hover:rotate-3"
                />
              </div>
            </div>
          </div>

          {/* Designer Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10 border-opacity-30 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-4">Designer</h1>
                <p className="text-white text-opacity-80 mb-6">
                  jabnox.com creates professional logo designs, posters, online
                  posters and book covers with premium and unique designs.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link to="/graphic-design">
                    <Button text="Order Now" />
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={picture3}
                  alt="Designer"
                  className="w-48 h-48 object-cover border-4 border-white border-opacity-30 rounded-xl shadow-lg transform transition-transform duration-700 hover:rotate-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;
