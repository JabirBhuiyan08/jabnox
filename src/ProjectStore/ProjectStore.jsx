import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import img1 from "../assets/img1.jpg";
import tflixsIcon from "../assets/favicon.png";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Link } from "react-router-dom";
import { FaLeaf, FaCalculator, FaTimes, FaExternalLinkAlt, FaCheck } from "react-icons/fa";

const tflixsProject = {
  _id: "tflixs-fertilizer-calculator",
  companyname: "tflixs.com",
  projectImage: tflixsIcon,
  projectDescription: "Free fertilizer calculator for farmers. Get accurate NPK recommendations for rice, wheat, vegetables, potato, sugarcane and 15+ crops. No registration required.",
  countryName: "Bangladesh"
};

const TflixsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-green-500/30">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition">
          <FaTimes className="text-2xl" />
        </button>
        
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
              <FaLeaf className="text-3xl text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">tflixs.com</h2>
              <p className="text-green-300">Fertilizer Calculator for Farmers</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-gray-200 leading-relaxed">
              <strong className="text-green-400">tflixs.com</strong> is a free online fertilizer calculator designed for Bangladeshi farmers. 
              It provides accurate NPK recommendations for various crops including rice, wheat, vegetables, potato, 
              sugarcane, and 15+ other crops.
            </p>
            
            <div className="bg-black/20 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <FaCalculator className="text-green-400" /> Key Features
              </h3>
              <ul className="space-y-2">
                {[
                  "NPK recommendations for 15+ crops",
                  "Rice, Wheat, Vegetables, Potato, Sugarcane",
                  "Soil type consideration",
                  "No registration required",
                  "Free to use",
                  "Mobile friendly"
                ].map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <FaCheck className="text-green-400 text-sm" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://tflixs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt /> Visit tflixs.com
            </a>
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectStore = () => {
  const axiosPublic = useAxiosPublic();
  const [showTflixsModal, setShowTflixsModal] = useState(false);

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/projectstore");
      return res.data;
    },
  });
  
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  const allProjects = tflixsProject 
    ? [tflixsProject, ...(projects || [])]
    : projects;

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>Project Store | JABNOX</title>
        <meta name="description" content="Browse our project store for web development solutions. JABNOX is a professional web application development company offering custom projects." />
        <meta name="keywords" content="web application development company, custom web application development company, best web development company, web app development company, custom web development company, need freelance web developer, web developer freelance" />
      </Helmet>
      
      <TflixsModal isOpen={showTflixsModal} onClose={() => setShowTflixsModal(false)} />
      
      {/* Background with overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 md:pt-10 pb-20 px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Project Store</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-2">
            Explore our collection of innovative projects and creative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {allProjects?.map((project) => (
            <div key={project._id} className="group">
              {project._id === "tflixs-fertilizer-calculator" ? (
                <div 
                  onClick={() => setShowTflixsModal(true)}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-green-500 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-green-500/20 group-hover:scale-[1.02] h-full flex flex-col cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={tflixsIcon}
                      alt="tflixs.com"
                      className="w-full h-32 sm:h-40 md:h-48 object-contain bg-white p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <h3 className="text-white font-semibold text-sm sm:text-lg truncate max-w-[90px] sm:max-w-[180px]">
                        {project.companyname}
                      </h3>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 flex-grow">
                    <p className="text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">
                      {project.projectDescription}
                    </p>
                    <div className="flex items-center justify-between mt-2 sm:mt-4">
                      <span className="text-[10px] sm:text-xs text-green-300 bg-green-900/30 px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                        {project.countryName}
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-400">
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
              <Link to={`/projects-store/${project._id}`}>
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-indigo-500/20 group-hover:scale-[1.02] h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.projectImage}
                      alt={project.companyname}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <h3 className="text-white font-semibold text-sm sm:text-lg truncate max-w-[90px] sm:max-w-[180px]">
                        {project.companyname}
                      </h3>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 flex-grow">
                    <p className="text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">
                      {project.projectDescription}
                    </p>
                    <div className="flex items-center justify-between mt-2 sm:mt-4">
                      <span className="text-[10px] sm:text-xs text-indigo-300 bg-indigo-900/30 px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                        {project.countryName}
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-400">
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              )}
            </div>
          ))}
        </div>
        
        {projects?.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <div className="text-gray-400 text-lg sm:text-xl">No projects found</div>
            <p className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-2">Check back later for new projects</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectStore;