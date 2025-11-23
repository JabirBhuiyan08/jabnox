import { Link } from "react-router-dom";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { useEffect, useRef, useState } from "react";

const OurProduct = () => {
  const products = [
    {
      id: 1,
      name: "Monthly Food",
      image: "https://monthly-makan.web.app/assets/logo-Z1iByHe2.png",
      logo: "https://jabnox.com/assets/logo-nw2GzLug.png",
      description: "Food subscription service",
      category: "Subscription",
      status: "Live"
    },
    {
      id: 2,
      name: "Web Platform",
      image: "https://cdn.iplocation.net/assets/images/pages/featured/Create-a-Website.jpg",
      logo: "http://localhost:5173/src/assets/logo.png",
      description: "Custom web solutions",
      category: "SaaS",
      status: "Live"
    },
    {
      id: 3,
      name: "Business Suite",
      image: "https://cdn.iplocation.net/assets/images/pages/featured/Create-a-Website.jpg",
      logo: "http://localhost:5173/src/assets/logo.png",
      description: "Enterprise tools",
      category: "Enterprise",
      status: "Beta"
    },
    {
      id: 4,
      name: "Digital Solution",
      image: "https://cdn.iplocation.net/assets/images/pages/featured/Create-a-Website.jpg",
      logo: "http://localhost:5173/src/assets/logo.png",
      description: "Tech innovation",
      category: "Platform",
      status: "Coming Soon"
    }
  ];

  const flickingRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // AutoPlay plugin configuration only
  const plugins = [
    new AutoPlay({ 
      duration: 3500, 
      direction: "NEXT", 
      stopOnHover: true,
      animationDuration: 1000 
    })
  ];

  useEffect(() => {
    if (flickingRef.current) {
      setTimeout(() => {
        flickingRef.current?.resize();
      }, 100);
    }
  }, []);

  const handleMove = (e) => {
    setActiveIndex(e.index);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Live": return "bg-green-500";
      case "Beta": return "bg-yellow-500";
      case "Coming Soon": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="w-full py-12 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <div className="
          bg-gradient-to-r from-emerald-500 to-cyan-500 
          text-white px-8 py-4 rounded-full font-semibold
          shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
          hover:scale-105 transition-all duration-300
          inline-block mb-6 cursor-pointer
        ">
          Our Products
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mt-6 mb-4">
          Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Digital Products</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Discover our cutting-edge products designed to transform your business operations
        </p>
      </div>

      {/* Products Carousel with Flicking */}
      <div className="relative px-4 lg:px-12">
        <Flicking
          ref={flickingRef}
          align="center"
          circular={true}
          horizontal={true}
          plugins={plugins}
          moveType="snap"
          deceleration={0.008}
          duration={600}
          interruptable={true}
          bound={false}
          adaptive={true}
          onMove={handleMove}
          className="mx-auto"
          style={{ 
            padding: '20px 0',
            cursor: 'grab'
          }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="flicking-panel mx-3 lg:mx-4 select-none"
              style={{
                width: '320px',
                minWidth: '320px',
                flexShrink: 0
              }}
            >
              <Link 
                to="#"
                className="
                  group flex flex-col items-center 
                  hover:scale-105 transition-all duration-500 
                  cursor-pointer w-full h-full
                  bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6
                  border border-white/20 hover:border-cyan-400/50
                  shadow-2xl hover:shadow-cyan-500/20
                  relative overflow-hidden
                "
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(product.status)} backdrop-blur-sm`}>
                    {product.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/30">
                    {product.category}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative mb-6 w-full mt-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  <img
                    className="
                      w-full h-40 object-cover rounded-2xl
                      shadow-2xl group-hover:shadow-3xl
                      transition-all duration-500 group-hover:scale-105
                      border-2 border-white/10 group-hover:border-cyan-400/30
                    "
                    src={product.image}
                    alt={product.name}
                  />
                  
                  {/* Logo Overlay */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black rounded-xl p-2 shadow-2xl border border-white/20">
                      <img
                        className="object-contain"
                        src={product.logo}
                        alt={`${product.name} logo`}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="text-center w-full mt-4">
                  <h3 className="
                    font-bold text-white text-xl mb-2
                    group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 
                    transition-all duration-500
                  ">
                    {product.name}
                  </h3>
                  <p className="
                    text-gray-300 text-sm leading-relaxed mb-4
                    group-hover:text-gray-200 transition-colors duration-300
                  ">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex justify-center items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span>Active</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Scalable</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="
                  w-full py-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 
                  text-cyan-300 rounded-xl font-semibold text-sm
                  border border-cyan-400/30 hover:border-cyan-300
                  hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-cyan-500/20
                  hover:scale-105 transition-all duration-300
                  backdrop-blur-sm
                  flex items-center justify-center gap-2
                ">
                  Learn More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </Link>
            </div>
          ))}
        </Flicking>

        {/* Custom Navigation Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => flickingRef.current?.moveTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 w-8' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Instructions */}
      <div className="text-center mt-8 px-4">
        <p className="text-gray-500 text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Auto-scrolls every 3.5s
          </span>
          <span className="hidden sm:block">•</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Drag or click dots to navigate
          </span>
        </p>
      </div>
    </div>
  );
};

export default OurProduct;