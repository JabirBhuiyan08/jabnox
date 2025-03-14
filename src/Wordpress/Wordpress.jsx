import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WordpressServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-gray-400 text-gray-900 p-6">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">Professional WordPress Services</h1>
        <p className="text-lg mt-3">Boost your online presence with a stunning WordPress website.</p>
        <button className="mt-5 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          Get a Free Quote
        </button>
      </div>

      {/* Services Section */}
       <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-xl text-center transform hover:scale-105 transition duration-300 ease-in-out">
            
            <h2 className="text-2xl font-semibold mb-3 text-Black-600">{service.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="text-lg mt-2">Contact me for a free consultation and let's build your dream website.</p>
        <Link to="https://wa.me/+8801749424565">
        <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
         <FaWhatsapp className="mr-2 inline w-10 h-10" /> Contact Now
        </button>
        </Link>
      </div>
    </div>
  );
};

const services = [
  { title: "Custom WordPress Design", description: "Get a unique and fully customized website tailored to your needs." },
  { title: "WooCommerce Setup", description: "Launch your online store with WooCommerce and start selling today." },
  { title: "Speed Optimization", description: "Improve your site speed and user experience for better rankings." },
  { title: "SEO & Performance", description: "Enhance your site's visibility with proper SEO optimization." },
  { title: "Theme & Plugin Customization", description: "Modify themes and plugins to match your requirements." },
  { title: "Maintenance & Support", description: "Keep your site secure and updated with regular maintenance." }
];

export default WordpressServices;
