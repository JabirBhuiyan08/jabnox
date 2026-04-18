import { useState } from "react";
import project1 from "../../assets/docs1.png";
import project2 from "../../assets/jb2.png";
import project3 from "../../assets/bistroboss.png";
import tflixsIcon from "../../assets/favicon.png";
import { Link } from "react-router-dom";
import { FaGlobe, FaLeaf, FaTimes, FaExternalLinkAlt, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const isTflixs = project.name === "tflixs.com";
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10">
          <FaTimes className="text-2xl" />
        </button>
        
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
              isTflixs ? 'from-green-400 to-emerald-600' : 'from-purple-500 to-blue-600'
            }`}>
              {isTflixs ? <FaLeaf className="text-3xl text-white" /> : <FaGlobe className="text-3xl text-white" />}
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{project.name}</h2>
              <p className="text-purple-300">{project.tagline}</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
            
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <FaCheck className="text-purple-400" /> Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <FaCheck className="text-green-400 text-xs flex-shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 bg-purple-500/20 text-purple-200 text-sm rounded-lg border border-purple-500/30">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
            >
              <FaExternalLinkAlt /> Visit Website
            </a>
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition border border-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const specialProjects = [
    {
      name: "bdnetworkspteltd.com",
      tagline: "Network Solutions Company",
      fullDescription: "bdnetworkspteltd.com is a leading network solutions company in Bangladesh offering IT infrastructure, web hosting, and digital services for businesses.",
      features: [
        "Web Hosting Services",
        "Domain Registration",
        "Network Solutions",
        "24/7 Support",
        "SSL Certificates",
        "Business Email"
      ],
      tech: ["WordPress", "cPanel", "Linux Server"],
      link: "https://www.bdnetworkspteltd.com/"
    },
    {
      name: "tflixs.com",
      tagline: "Fertilizer Calculator",
      fullDescription: "tflixs.com is a free online fertilizer calculator designed for Bangladeshi farmers, providing accurate NPK recommendations for various crops.",
      features: [
        "NPK recommendations for 15+ crops",
        "Rice, Wheat, Vegetables, Potato, Sugarcane",
        "Soil type consideration",
        "No registration required",
        "Free to use",
        "Mobile friendly"
      ],
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://tflixs.com"
    }
  ];

  const regularProjects = [
    {
      img: project1,
      projectName: "Docs Wallet",
      projectDescription: "A document management system for enterprises with secure cloud storage",
      tech: ["React", "Firebase", "Tailwind"],
      link: "https://docs-wallet-93b4b.web.app",
    },
    {
      img: project2,
      projectName: "Jabir Bhuiyan",
      projectDescription: "Professional portfolio for a Full Stack Developer showcasing projects and skills",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://tourmaline-tiramisu-5a6cb5.netlify.app",
    },
    {
      img: project3,
      projectName: "Bistro Boss",
      projectDescription: "Complete restaurant management system with ordering and reservation features",
      tech: ["React", "Express", "Stripe"],
      link: "https://bistro-boss.netlify.app",
    },
  ];

  return (
    <div className="relative">
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      
      <div className="relative py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <span className="text-purple-300 text-sm font-medium">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our latest digital creations - innovative solutions for real-world challenges
            </p>
          </div>

          {/* Special Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {specialProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="relative h-64 overflow-hidden">
                  {project.name === 'tflixs.com' ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8">
                      <img src={tflixsIcon} alt="tflixs.com" className="max-h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                      <FaGlobe className="text-8xl text-blue-400/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg">
                      View Details →
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    <span className="text-xs text-purple-400 font-semibold uppercase tracking-wide">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{project.tagline}</p>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="w-full group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center justify-center gap-3 px-8 py-5 bg-gray-900/40 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 rounded-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-white">More Projects</h3>
                <p className="text-gray-400 hidden sm:block">Additional work showcasing our expertise</p>
                <div className={`transform transition-transform duration-300 ${showMoreProjects ? 'rotate-180' : ''}`}>
                  {showMoreProjects ? (
                    <FaChevronUp className="text-purple-400 text-xl" />
                  ) : (
                    <FaChevronDown className="text-purple-400 text-xl" />
                  )}
                </div>
              </div>
            </button>

            {/* Dropdown Content */}
            <div 
              className={`mt-8 transition-all duration-500 ease-in-out overflow-hidden ${
                showMoreProjects 
                  ? 'max-h-[2000px] opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                {regularProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.projectName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl text-center shadow-lg"
                        >
                          View Project →
                        </a>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[80%]">
                      {project.tech.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-900/90 text-purple-300 text-xs font-medium rounded-lg backdrop-blur-sm border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <h3 className="text-xl font-bold text-white">
                          {project.projectName}
                        </h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {project.projectDescription}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;