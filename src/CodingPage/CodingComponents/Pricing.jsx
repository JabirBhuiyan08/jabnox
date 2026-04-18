import React from "react";
import { Link } from "react-router-dom";
import Whatsapp from "../../Components/Whatsapp";
import { FaCheck, FaStar, FaCrown, FaGem } from "react-icons/fa";

const CheckIcon = () => (
  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
    <FaCheck className="text-white text-xs" />
  </div>
);

const Pricing = () => {
  const mernPackages = [
    {
      plan: "Landing Page",
      price: "$149",
      subtitle: "Single page, high converting",
      delivery: "3–5 days",
      features: [
        "React frontend",
        "Contact / lead form",
        "Mobile responsive",
        "Deployed on Vercel",
      ],
      icon: FaStar,
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      plan: "Full Website",
      price: "$299",
      subtitle: "Multi-page MERN site",
      delivery: "7–10 days",
      features: [
        "React + Node + MongoDB",
        "Up to 8 pages",
        "Email notifications",
        "Admin panel included",
        "2 weeks free support",
      ],
      icon: FaCrown,
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      plan: "Custom System",
      price: "$499+",
      subtitle: "Dashboard, portal, booking",
      delivery: "14–21 days",
      features: [
        "Full MERN stack",
        "User auth & roles",
        "Custom dashboard",
        "1 month free support",
      ],
      icon: FaGem,
      gradient: "from-orange-500 to-red-500",
      popular: false,
    },
  ];

  const addOns = [
    { name: "Booking / appointment system", price: "$79", icon: "📅" },
    { name: "Payment gateway (Stripe)", price: "$99", icon: "💳" },
    { name: "WhatsApp chat button", price: "$19", icon: "💬" },
    { name: "Live chat integration", price: "$39", icon: "💭" },
    { name: "Blog setup", price: "$49", icon: "✍️" },
    { name: "Monthly maintenance", price: "$29/mo", icon: "🔧" },
    { name: "SEO package (3 months)", price: "$99", icon: "📈" },
    { name: "Speed optimisation", price: "$49", icon: "⚡" },
  ];

  return (
    <div className="relative">
      {/* MERN Stack Packages */}
      <div className="relative py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <span className="text-purple-300 text-sm font-medium">Pricing Plans</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                MERN Stack Packages
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Custom web applications with React, Node, Express & MongoDB
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {mernPackages.map((item) => {
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
                      <div className="relative space-y-5">
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
                          <span className={`text-4xl md:text-5xl font-bold ${
                            item.popular ? "text-white" : "text-white"
                          }`}>
                            {item.price}
                          </span>
                          {item.price !== "$499+" && (
                            <span className="text-gray-400 text-lg mb-1">USD</span>
                          )}
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
      </div>

      {/* Add-on Extras */}
      <div className="relative py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Add-on Extras
              </span>
            </h2>
            <p className="text-gray-400">Enhance your package with these additional services</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {addOns.map((item, index) => (
              <div 
                key={index} 
                className="group bg-gray-900/40 backdrop-blur-sm p-5 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white font-medium text-sm">{item.name}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {item.price}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition">
                    <span className="text-purple-400 text-lg">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center py-8">
        <Whatsapp />
      </div>

      <div className="text-center pb-12">
        <p className="text-gray-400">
          Need custom solution?{" "}
          <Link to="/contact" className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold hover:from-purple-300 hover:to-blue-300 transition">
            Let's discuss →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Pricing;