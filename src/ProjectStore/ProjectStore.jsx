import { useQuery } from "@tanstack/react-query";
import img1 from "../assets/img1.jpg";
import useAxiosPublic from "../hooks/useAxiosPublic";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Link } from "react-router-dom";

const ProjectStore = () => {
  const axiosPublic = useAxiosPublic();

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/projectstore");
      return res.data;
    },
  });
  
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="min-h-screen relative">
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
          {projects?.map((project) => (
            <div key={project._id} className="group">
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