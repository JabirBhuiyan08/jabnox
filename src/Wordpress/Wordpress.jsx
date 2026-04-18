import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Whatsapp from "../Components/Whatsapp";
import { FaCheck, FaWordpress, FaRocket, FaShoppingCart, FaSearch, FaPaintBrush, FaTools } from "react-icons/fa";

const CheckIcon = () => (
  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
    <FaCheck className="text-white text-xs" />
  </div>
);

const pricingPackages = [
  {
    plan: "Starter",
    price: "$99",
    subtitle: "Simple business site",
    delivery: "3–4 days",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
    ],
    icon: FaRocket,
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    plan: "Business",
    price: "$199",
    subtitle: "Professional site + features",
    delivery: "5–7 days",
    features: [
      "Up to 10 pages",
      "Custom design",
      "Contact + booking form",
      "SEO optimised",
      "Google Analytics",
    ],
    icon: FaWordpress,
    gradient: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    plan: "Premium",
    price: "$349",
    subtitle: "Full business + blog/shop",
    delivery: "10–14 days",
    features: [
      "Unlimited pages",
      "Blog or WooCommerce shop",
      "Speed optimisation",
      "1 month free support",
    ],
    icon: FaShoppingCart,
    gradient: "from-orange-500 to-red-500",
    popular: false,
  },
];

const services = [
  { 
    title: "Custom WordPress Design", 
    description: "Get a unique and fully customized website tailored to your needs.",
    icon: FaPaintBrush,
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    title: "WooCommerce Setup", 
    description: "Launch your online store with WooCommerce and start selling today.",
    icon: FaShoppingCart,
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    title: "Speed Optimization", 
    description: "Improve your site speed and user experience for better rankings.",
    icon: FaRocket,
    gradient: "from-orange-500 to-red-500"
  },
  { 
    title: "SEO & Performance", 
    description: "Enhance your site's visibility with proper SEO optimization.",
    icon: FaSearch,
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Theme & Plugin Customization", 
    description: "Modify themes and plugins to match your requirements.",
    icon: FaTools,
    gradient: "from-indigo-500 to-purple-500"
  },
  { 
    title: "Maintenance & Support", 
    description: "Keep your site secure and updated with regular maintenance.",
    icon: FaWordpress,
    gradient: "from-teal-500 to-green-500"
  }
];

const WordpressServices = () => {
  return (
    <div className="min-h-screen bg-black text-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      
      <Helmet>
        <title>WordPress Development Services | JABNOX</title>
        <meta name="description" content="JABNOX offers professional WordPress development services. As a top web development company, we provide custom WordPress solutions, WooCommerce setup, and website maintenance." />
        <meta name="keywords" content="web application development company, custom web application development company, best web development company, web app development company, custom web development company, need freelance web developer, web developer freelance" />
      </Helmet>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center py-16 mb-8">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
            <span className="text-purple-300 text-sm font-medium">WordPress Experts</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Professional WordPress Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mt-3 max-w-3xl mx-auto leading-relaxed">
            Build your business presence with a stunning WordPress website. 
            <span className="text-white font-medium"> Affordable pricing with fast delivery.</span>
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-400">Available for projects</span>
            </div>
            <div className="w-px h-6 bg-gray-700" />
            <div className="flex items-center gap-2">
              <FaWordpress className="text-blue-400 text-lg" />
              <span className="text-gray-400">WordPress Specialists</span>
            </div>
          </div>
          
          <Link to="https://wa.me/+8801749424565">
            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 transition transform hover:scale-105">
              Get a Free Quote →
            </button>
          </Link>
        </div>

        {/* Pricing Section */}
        <div className="">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <span className="text-purple-300 text-sm font-medium">Pricing Plans</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                WordPress Packages
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Choose the perfect plan for your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPackages.map((item) => {
              const Icon = item.icon;
              return (
                <Link to="https://wa.me/+8801749424565" key={item.plan}>
                  <div className={`relative group h-full transition-all duration-300 ${
                    item.popular ? "md:-translate-y-4" : "hover:-translate-y-2"
                  }`}>
                    {item.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/50">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className={`h-full p-6 md:p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 ${
                      item.popular 
                        ? "bg-gradient-to-b from-purple-900/40 to-gray-900/40 border-2 border-purple-500 shadow-xl shadow-purple-500/30" 
                        : "bg-gray-900/40 border border-gray-800 hover:border-gray-700"
                    }`}>
                      <div className="space-y-5">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                          <Icon className="text-white text-xl" />
                        </div>
                        
                        <h3 className={`text-2xl md:text-3xl font-bold ${
                          item.popular ? "text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text" : "text-white"
                        }`}>
                          {item.plan}
                        </h3>
                        
                        <p className="text-gray-400 text-sm">{item.subtitle}</p>
                        
                        <div className="flex items-end gap-2">
                          <span className="text-4xl md:text-5xl font-bold text-white">
                            {item.price}
                          </span>
                          <span className="text-gray-400 text-lg mb-1">USD</span>
                        </div>
                        
                        <p className="text-sm text-gray-400">
                          ⏱️ Delivery: {item.delivery}
                        </p>

                        <div className="space-y-3 pt-4">
                          {item.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start space-x-3">
                              <CheckIcon />
                              <span className="text-left text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <span className="text-purple-300 text-sm font-medium">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our WordPress Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Comprehensive solutions for your WordPress needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="group p-6 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Contact us for a free consultation and let's build your dream website.
            </p>
            <Whatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordpressServices;