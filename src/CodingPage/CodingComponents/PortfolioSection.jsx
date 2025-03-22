import project1 from "../../assets/docs1.png";
import project2 from "../../assets/jb2.png";
import project3 from "../../assets/bistroboss.png";
import { Link } from "react-router-dom";
const PortfolioSection = () => {
  return (
    <div>
      <div className="relative py-20 bg-gradient-to-b from-blue-800 to-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
                Crafted Experiences
              </span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Where innovation meets execution - Explore our digital
              masterpieces
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                img:project1,
                projectName: "Docs",
                projectDescription:
                  "A document management system for enterprises",
                link: "https://docs-wallet-93b4b.web.app",
              },
              {
                img:project2,
                projectName: "Jabir Bhuiyan",
                projectDescription: "A Profile Portfolio for Jabir Bhuiyan. A Full Stack Developer",
                link: "https://tourmaline-tiramisu-5a6cb5.netlify.app",
              },
              {
                img:project3,
                projectName: "Bistro Boss",
                projectDescription:
                  "A restaurant management system for small businesses",
                link: "https://bistro-boss.netlify.app",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 ease-out"
              >
                {/* Image container with hover overlay */}
                <div className="relative h-80 overflow-hidden">
                 <Link to={project.link} target="_blank">
                  <img
                    src={project.img}
                    alt={`Project ${project.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  </Link>

                  {/* Hover overlay */}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      
                      <Link to={project.link} target="_blank">
                      <button className="w-full py-3 px-6 bg-amber-500/90 hover:bg-amber-600 text-white font-semibold rounded-xl backdrop-blur-sm">
                        View Project →
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {["React", "Node.js", "MongoDB"].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/90 text-slate-700 text-sm font-medium rounded-full backdrop-blur-sm shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={project.link} target="_blank">
                <div className="bg-white p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                    <h3 className="text-xl font-bold text-slate-800">
                      {project.projectName}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {project.projectDescription}
                  </p>
                </div>
                </Link>
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-16 h-16 -translate-x-7 -translate-y-7 rotate-45 bg-amber-500/20"></div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <button target="_blank" className=" inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
              <span>View All Projects</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
