import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import bistroboss from "../assets/bistroboss.png";
import docs1 from "../assets/docs1.png";
import jb2 from "../assets/jb2.png";

const Portfolios = () => {
  const projects = [
    {
      _id: "monthly-makan",
      name: "Monthly Makan",
      description: "A restaurant app with coin base payment system. Track all delivery, user and payment information. Full admin panel for managing orders, delivery tracking, and customer management.",
      image: "https://i.ibb.co/NWW5X9z/monthly-makan.png",
      link: "https://monthly-makan.web.app/",
      tech: ["React", "Node.js", "MongoDB", "Firebase"],
      type: "MERN Stack"
    },
    {
      _id: "small-box",
      name: "Small Box",
      description: "A worker checkin/checkout tracker application. Track employee attendance, working hours, and manage workforce efficiently.",
      image: "https://i.ibb.co/sMkVHz8/small-box.png",
      link: "https://small-box-inside.web.app/",
      tech: ["React", "Node.js", "MongoDB"],
      type: "MERN Stack"
    },
    {
      _id: "bistro-boss",
      name: "Bistro Boss",
      description: "A restaurant management system for small businesses. Manage orders, tables, menus, and payments efficiently.",
      image: bistroboss,
      link: "https://bistro-boss.netlify.app",
      tech: ["React", "Node.js", "MongoDB"],
      type: "MERN Stack"
    },
    {
      _id: "docs-wallet",
      name: "Docs Wallet",
      description: "A document management system for enterprises. Securely store, organize, and share documents.",
      image: docs1,
      link: "https://docs-wallet-93b4b.web.app",
      tech: ["React", "Node.js", "MongoDB"],
      type: "MERN Stack"
    },
    {
      _id: "portfolio",
      name: "Jabir Bhuiyan Portfolio",
      description: "A professional portfolio website for a Full Stack Developer showcasing projects and skills.",
      image: jb2,
      link: "https://tourmaline-tiramisu-5a6cb5.netlify.app",
      tech: ["React", "Tailwind CSS"],
      type: "React"
    },
    {
      _id: "tflixs",
      name: "tflixs.com",
      description: "Free fertilizer calculator for farmers. Get accurate NPK recommendations for rice, wheat, vegetables, potato, sugarcane and 15+ crops.",
      image: null,
      link: "https://tflixs.com",
      tech: ["React", "Node.js", "MongoDB"],
      type: "Web App"
    },
    {
      _id: "bdnetworks",
      name: "bdnetworkspteltd.com",
      description: "Network solutions company website with web hosting, domain registration, and IT infrastructure services.",
      image: null,
      link: "https://www.bdnetworkspteltd.com/",
      tech: ["WordPress"],
      type: "WordPress"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio | JABNOX</title>
        <meta name="description" content="View our portfolio of web development projects. JABNOX is a professional web application development company with a track record of custom web development success." />
        <meta name="keywords" content="web application development company, custom web application development company, best web development company, web app development company, custom web development company, need freelance web developer, web developer freelance" />
      </Helmet>
      
      <div className="min-h-screen relative">
        {/* Background with overlay */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-fixed z-0"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 py-16 px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Portfolio</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore our collection of innovative projects and creative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div key={project._id} className="group">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">{project.name.charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs text-amber-400 bg-amber-900/30 px-2 py-1 rounded">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolios;