import React from "react";
import Button from "./Button";
import picture1 from "../assets/Picture1.png";
import picture2 from "../assets/Picture2.png";
import picture3 from "../assets/Picture3.png";
import { Link } from "react-router-dom";

const WebsiteBuilder = () => {
  const services = [
    {
      id: 1,
      title: "Personal Website",
      description: "Our Personal Website Template is a ready-made solution that you can purchase and launch quickly.",
      features: [
        "1-year complete service & support",
        "Domain included (no extra payment)",
        "Full setup & Google visibility",
        "Optional customization available (extra cost)"
      ],
      note: "No hidden or separate domain fees.",
      image: picture1,
      buttonText: "View Template",
      link: "/dashboard/website-template",
      variant: "primary",
      reverse: false,
      icon: "🌐",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Website Builder",
      description: "I provide professional website development services using WordPress or custom coding, ensuring a premium, responsive, and user-friendly design",
      image: picture1,
      buttonText: "Explore Options",
      link: "/coding",
      variant: "dual",
      reverse: false,
      icon: "⚡",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Social Booster",
      description: "Boost likes, followers, subscribers, and website traffic on all social platforms with our premium service. Get fast, reliable growth today!",
      image: picture2,
      buttonText: "Order Now",
      link: "/social-booster",
      variant: "primary",
      reverse: true,
      icon: "📈",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Designer",
      description: "jabnox.com creates professional logo designs, posters, online posters and book covers with premium and unique designs.",
      image: picture3,
      buttonText: "Order Now",
      link: "/graphic-design",
      variant: "primary",
      reverse: false,
      icon: "🎨",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
            <h2 className="text-sm font-semibold text-purple-300 tracking-widest uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-400/20">
              ✨ Premium Digital Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">Digital Vision</span>
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            Professional solutions designed to transform your online presence and drive measurable results with cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border border-white/10 hover:border-white/20 shadow-2xl transform transition-all duration-700 hover:scale-[1.02] backdrop-blur-xl hover:shadow-2xl ${
                index === 0 || index === 3 ? 'lg:col-span-1' : 'lg:col-span-1'
              }`}
            >
              {/* Animated Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500 delay-100"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500 delay-300"></div>
              
              <div className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 relative z-10`}>
                {/* Content */}
                <div className="flex-1">
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xl">{service.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                        {service.title}
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-blue-100/80 mb-6 leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  {service.features && (
                    <ul className="mb-6 space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-blue-100/70 group-hover:text-white/80 transition-colors duration-300">
                          <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Note */}
                  {service.note && (
                    <p className="text-cyan-300 font-semibold text-base mb-6 bg-cyan-500/10 inline-block px-4 py-2 rounded-full border border-cyan-400/20 group-hover:bg-cyan-500/20 transition-colors duration-300">
                      💫 {service.note}
                    </p>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {service.variant === 'dual' ? (
                      <>
                        <Link to="/coding">
                          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transform transition-all duration-300 border border-purple-500/30 hover:border-purple-400 flex items-center gap-3 group/btn">
                            <span className="text-cyan-300 group-hover/btn:scale-110 transition-transform duration-300">&lt;</span>
                            Coding
                            <span className="text-cyan-300 group-hover/btn:scale-110 transition-transform duration-300">/&gt;</span>
                            <span className="text-cyan-200">MERN</span>
                            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                          </button>
                        </Link>
                        <Link to="/wordpress">
                          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-pink-500/30 hover:scale-105 transform transition-all duration-300 border border-pink-400/30 hover:border-pink-300 flex items-center gap-3 group/btn">
                            <span className="group-hover/btn:rotate-180 transition-transform duration-500">🚀</span>
                            WordPress
                            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                          </button>
                        </Link>
                      </>
                    ) : (
                      <Link to={service.link}>
                        <button className={`px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-2xl shadow-2xl hover:shadow-xl hover:scale-105 transform transition-all duration-300 border border-white/20 flex items-center gap-3 group/btn`}>
                          {service.buttonText}
                          <svg className="w-5 h-5 transform group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </button>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                    
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl group-hover:border-white/40 transition-all duration-500">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-48 h-48 lg:w-56 lg:h-56 object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      {/* Shine Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-purple-400 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-pink-400 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl p-12 border border-white/20 backdrop-blur-xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#8B5CF6_0%,#EC4899_50%,#8B5CF6_100%)] opacity-5 animate-spin-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Start Your Journey</span>?
              </h3>
              <p className="text-blue-100/80 text-xl mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Get in touch for a free consultation and transform your digital dreams into reality.
              </p>
              <button className="px-16 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-pink-500/40 hover:scale-105 transform transition-all duration-300 border border-white/20 flex items-center gap-3 mx-auto group/cta">
                Begin Your Transformation
                <svg className="w-6 h-6 transform group-hover/cta:translate-x-3 group-hover/cta:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;