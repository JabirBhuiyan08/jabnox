import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Whatsapp from "../Components/Whatsapp";
import ReviewsCarousel from "../Home/ReviewsCarousel";
import Button from "../Home/Button";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-gray-500 text-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-amber-400">JABNOX</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          At JABNOX, we specialize in crafting high-quality websites, digital
          solutions, and marketing strategies. Whether you're looking for a
          custom MERN-based website, WordPress solutions, or social media
          growth, we've got you covered.
        </p>
      </div>

      {/* Mission & Expertise Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-amber-400">Our Mission</h2>
          <p className="mt-4 text-gray-300">
            Our goal is to empower businesses and individuals by providing
            top-notch web development and digital solutions. We focus on
            high-performance, scalable, and visually appealing designs.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-amber-400">
            Our Expertise
          </h2>
          <p className="mt-4 text-gray-300">
            We specialize in MERN stack development, WordPress customization,
            graphic design, SEO optimization, and social media marketing. Our
            team ensures that every project we handle is innovative and
            result-driven.
          </p>
        </div>
      </div>

      {/* Why Choose Us? Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold">
          Why Choose <span className="text-amber-400">JABNOX?</span>
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-4xl mx-auto">
          We believe in delivering quality, affordability, and innovation. Our
          solutions are designed to help your business stand out in the digital
          world with a perfect balance of aesthetics and functionality.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "⚡ High Performance",
              desc: "Optimized for speed and efficiency.",
            },
            {
              title: "🎨 Unique Designs",
              desc: "Custom-crafted for a strong brand identity.",
            },
            {
              title: "💼 Professional Support",
              desc: "Dedicated assistance to ensure success.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-amber-400">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold text-center">
          What Our Clients Say
        </h2>
        <ReviewsCarousel></ReviewsCarousel>
      </div>
      <Link to={"/reviews"} className="flex justify-center">
        <button className="mt-4 w-44 px-6 py-3 bg-violet-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
          All Reviews
        </button>
      </Link>
      {/* Call-to-Action Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Let's create something amazing together. Contact us today to get
          started!
        </p>
        <Whatsapp></Whatsapp>
      </div>
    </div>
  );
};

export default About;
