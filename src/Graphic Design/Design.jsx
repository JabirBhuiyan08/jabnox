import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPalette,
  FaBullhorn,
  FaRegImages,
  FaLaptopCode,
  FaArrowRight,
  FaStar,
  FaDribbble,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Whatsapp from "../Components/Whatsapp";
import portfolio from "./Portfolio";

const Design = () => {
  const services = [
    {
      icon: FaPalette,
      title: "Logo & Branding",
      description: "Custom logos and branding kits designed for a unique and memorable identity.",
      gradient: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400"
    },
    {
      icon: FaBullhorn,
      title: "Marketing Materials",
      description: "Posters, flyers, business cards, and brochures to boost your marketing efforts.",
      gradient: "from-red-500 to-orange-500",
      iconColor: "text-red-400"
    },
    {
      icon: FaRegImages,
      title: "Social Media Graphics",
      description: "Engaging and branded graphics for Facebook, Instagram, and LinkedIn.",
      gradient: "from-green-500 to-emerald-500",
      iconColor: "text-green-400"
    },
    {
      icon: FaLaptopCode,
      title: "UI/UX Design",
      description: "Intuitive and modern UI/UX designs for websites and mobile applications.",
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-6 lg:px-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      
      <Helmet>
        <title>Graphic Design Services | JABNOX</title>
        <meta name="description" content="JABNOX offers professional graphic design services including logo design, branding, and creative solutions. Our web development company provides comprehensive digital design services." />
        <meta name="keywords" content="web application development company, custom web application development company, best web development company, web app development company, custom web development company, need freelance web developer, web developer freelance" />
      </Helmet>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <span className="text-purple-300 text-sm font-medium">Creative Design Studio</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Graphic Design
            </span>
            <span className="text-white"> Services</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Elevate your brand with professional graphic design solutions. From
            logos to social media creatives, we craft visuals that 
            <span className="text-white font-medium"> stand out.</span>
          </p>

          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <span className="text-gray-400">5.0 Rating</span>
            </div>
            <div className="w-px h-6 bg-gray-700" />
            <div className="flex items-center gap-2">
              <FaDribbble className="text-pink-400 text-lg" />
              <span className="text-gray-400">Portfolio on Dribbble</span>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                <div className="p-8 flex items-start space-x-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <span className="text-purple-300 text-sm font-medium">Recent Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Explore some of our recent designs that have helped brands make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.slice(0, 3).map(({ id, title, img }) => (
              <Link 
                to="https://dribbble.com/JabirBhuiyan" 
                target="_blank"
                key={id}
                className="group"
              >
                <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                      {title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
            
            <Link 
              to="https://dribbble.com/JabirBhuiyan" 
              target="_blank"
              className="group"
            >
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl border-2 border-dashed border-purple-500/50 hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 h-full min-h-[280px] flex flex-col items-center justify-center p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaArrowRight className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">View More</h3>
                <p className="text-gray-400 text-center text-sm">
                  See our full portfolio on Dribbble
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Get in touch today to start your next graphic design project.
            </p>
            <Whatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;