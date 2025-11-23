import { Link } from "react-router-dom";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { useEffect, useRef } from "react";

const OurServices = () => {
  const services = [
    {
      name: "Make a website",
      image: "https://cdn.iplocation.net/assets/images/pages/featured/Create-a-Website.jpg",
      description: "Custom web development"
    },
    {
      name: "SEO Optimization",
      image: "https://img.freepik.com/free-vector/internet-business-seo-strategy_23-2147494779.jpg?semt=ais_hybrid&w=740&q=80",
      description: "Boost your search ranking"
    },
    {
      name: "Branding & Design",
      image: "https://www.designerpeople.com/wp-content/uploads/2021/10/Brand-Design_-Elements-Strategies-Tips-to-Build-Strong-Brand-Identity.webp",
      description: "Create brand identity"
    },
    {
      name: "Website Audit",
      image: "https://lollypop.design/wp-content/uploads/2025/02/Website-Audit.webp",
      description: "Performance analysis"
    },
    {
      name: "Graphic Design",
      image: "https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?semt=ais_incoming&w=740&q=80",
      description: "Visual content creation"
    }
  ];

  const flickingRef = useRef(null);

  // AutoPlay plugin configuration
  const plugins = [
    new AutoPlay({ 
      duration: 3000, 
      direction: "NEXT", 
      stopOnHover: false,
      animationDuration: 800 
    })
  ];

  // Fix for Flicking initialization
  useEffect(() => {
    if (flickingRef.current) {
      setTimeout(() => {
        flickingRef.current?.resize();
      }, 100);
    }
  }, []);

  return (
    <div className="w-full py-6 lg:py-8 rounded-2xl shadow-lg border border-gray-800 bg-gradient-to-br from-slate-900 to-gray-900">
      {/* Header */}
      <div className="text-center mb-6 lg:mb-8 px-4">
        <div className="
          bg-gradient-to-r from-blue-600 to-pink-500 
          text-white px-5 py-2 lg:px-6 lg:py-3 
          rounded-full font-semibold text-xs lg:text-sm
          shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40
          hover:scale-105 transition-all duration-300
          inline-block mb-3 cursor-pointer
        ">
          Our Services
        </div>
        <h2 className="text-xl lg:text-3xl font-bold text-gray-200 mt-3">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">Digital Solutions</span>
        </h2>
        <p className="text-gray-400 mt-2 text-xs lg:text-sm max-w-2xl mx-auto">
          Comprehensive services to elevate your online presence and drive business growth
        </p>
      </div>

      {/* Services Carousel with Flicking */}
      <div className="px-2 lg:px-4">
        <Flicking
          ref={flickingRef}
          align="center"
          circular={true}
          horizontal={true}
          plugins={plugins}
          moveType="snap"
          deceleration={0.008}
          duration={400}
          interruptable={true}
          bound={false}
          adaptive={true}
          resizeOnContentsReady={true}
          className="services-flicking mx-auto w-full"
          style={{ 
            padding: '10px 0',
            cursor: 'grab'
          }}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="flicking-panel mx-1 lg:mx-2 select-none"
              style={{
                width: '160px', // Smaller card width
                minWidth: '160px',
                flexShrink: 0
              }}
            >
              <Link 
                to="#"
                className="
                  group flex flex-col items-center 
                  hover:scale-105 transition-all duration-300 
                  cursor-pointer w-full
                  bg-white/5 backdrop-blur-sm rounded-xl p-3
                  border border-white/10 hover:border-blue-500/30
                  h-full
                "
              >
                {/* Image Container */}
                <div className="relative mb-3 w-full">
                  <img
                    className="
                      w-full h-20 lg:h-24 // Smaller image height
                      object-cover rounded-lg
                      shadow-md group-hover:shadow-lg
                      transition-all duration-300
                    "
                    src={service.image}
                    alt={service.name}
                  />
                  {/* Hover Overlay */}
                  <div className="
                    absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                    rounded-lg opacity-0 group-hover:opacity-100 
                    transition-all duration-300
                  "></div>
                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center w-full px-1">
                  <p className="
                    font-semibold text-gray-200 text-xs lg:text-sm
                    group-hover:text-blue-400 transition-colors
                    line-clamp-1 mb-1
                  ">
                    {service.name}
                  </p>
                  <p className="
                    text-gray-400 text-xs
                    line-clamp-2 leading-tight
                  ">
                    {service.description}
                  </p>
                </div>

                {/* Indicator Dot */}
                <div className="
                  w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-pink-500 
                  rounded-full mt-2 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "></div>
              </Link>
            </div>
          ))}
        </Flicking>
      </div>

      {/* Navigation Instructions */}
      <div className="text-center mt-6 px-4">
        <p className="text-gray-500 text-xs flex flex-col sm:flex-row items-center justify-center gap-1">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Auto-scrolls
          </span>
          <span className="hidden sm:block text-gray-600">•</span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Drag to navigate
          </span>
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-6 lg:mt-8 px-4">
        <button className="
          bg-gradient-to-r from-blue-600 to-pink-500 
          text-white px-6 py-3 lg:px-8 lg:py-3
          rounded-lg font-semibold text-sm lg:text-base
          shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40
          hover:scale-105 transition-all duration-300
          flex items-center gap-2 mx-auto
        ">
          View All Services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Custom CSS to fix Flicking issues */}
      <style jsx>{`
        .services-flicking {
          width: 100% !important;
          max-width: 100% !important;
        }
        .services-flicking .flicking-viewport {
          overflow: visible !important;
          cursor: grab;
          width: 100% !important;
        }
        .services-flicking .flicking-viewport:active {
          cursor: grabbing;
        }
        .services-flicking .flicking-camera {
          display: flex !important;
          align-items: center;
          width: max-content !important;
        }
        @media (min-width: 1024px) {
          .services-flicking .flicking-viewport {
            max-width: 100vw !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OurServices;