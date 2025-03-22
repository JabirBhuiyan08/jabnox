import React from "react";
import { FaFacebook, FaInstagram, FaChartLine, FaBullhorn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Whatsapp from "../Components/Whatsapp";

const SocialBoost = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-pink-100 py-16 px-6 lg:px-16 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Social <span className="text-blue-600">Boost</span> Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Grow your brand with our expert Facebook and Instagram marketing strategies. Get more followers, engagement, and reach your target audience effortlessly.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <FaFacebook className="text-blue-600 text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Facebook Growth</h2>
          <p className="mt-4 text-gray-600">
            We provide targeted Facebook promotions, ad campaigns, and organic strategies to boost your page likes, followers, and engagement.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <FaInstagram className="text-pink-600 text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Instagram Boost</h2>
          <p className="mt-4 text-gray-600">
            Our Instagram strategies include influencer collaborations, ad campaigns, and content optimization to increase visibility and engagement.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-4xl mx-auto">
          We use AI-driven insights, ad optimization, and content strategies to ensure your brand reaches the right audience with maximum impact.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 text-center">
            <FaChartLine className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Data-Driven Strategy</h3>
            <p className="mt-2">We analyze market trends to optimize your ad spend and audience reach.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 text-center">
            <FaBullhorn className="text-red-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Powerful Engagement</h3>
            <p className="mt-2">We craft compelling content and ads to attract and convert your audience.</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Boost Your Social Presence Today!</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Take your brand to the next level with our expert social media growth strategies.
        </p>
        <Whatsapp></Whatsapp>
      </div>
    </div>
  );
};

export default SocialBoost;
