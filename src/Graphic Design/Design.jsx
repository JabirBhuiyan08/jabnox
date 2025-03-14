import React from "react";
import { FaWhatsapp, FaPalette, FaBullhorn, FaRegImages, FaLaptopCode } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Design = () => {
  // Sample portfolio items
  const portfolio = [
    { id: 1, title: "Logo Design", img: "/images/logo-design.jpg" },
    { id: 2, title: "Business Card", img: "/images/business-card.jpg" },
    { id: 3, title: "Social Media Banner", img: "/images/social-banner.jpg" },
    { id: 4, title: "Flyer Design", img: "/images/flyer.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-500 to-gray-600 py-16 px-6 lg:px-16 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Graphic Design <span className="text-amber-400">Services</span>
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Elevate your brand with professional graphic design solutions. From logos to social media creatives, we craft visuals that stand out.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-white p-8 rounded-xl shadow-md flex items-center space-x-4">
          <FaPalette className="text-amber-500 text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Logo & Branding</h2>
            <p className="mt-2 text-gray-600">Custom logos and branding kits designed for a unique and memorable identity.</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md flex items-center space-x-4">
          <FaBullhorn className="text-red-500 text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Marketing Materials</h2>
            <p className="mt-2 text-gray-600">Posters, flyers, business cards, and brochures to boost your marketing efforts.</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md flex items-center space-x-4">
          <FaRegImages className="text-green-500 text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Social Media Graphics</h2>
            <p className="mt-2 text-gray-600">Engaging and branded graphics for Facebook, Instagram, and LinkedIn.</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md flex items-center space-x-4">
          <FaLaptopCode className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">UI/UX Design</h2>
            <p className="mt-2 text-gray-600">Intuitive and modern UI/UX designs for websites and mobile applications.</p>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">Our Portfolio</h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Explore some of our recent designs that have helped brands make an impact.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {portfolio.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-900">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="max-w-7xl mx-auto mt-16 text-center flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-white">Let's Create Something Amazing</h2>
        <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
          Get in touch today to start your next graphic design project.
        </p>
        <Link to="https://wa.me/+8801749424565">
          <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition duration-300 flex items-center justify-center">
            <FaWhatsapp className="mr-2 w-6 h-6" /> Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Design;
