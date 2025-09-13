import React from "react";
import useAxiosSecure from "../hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { QRCodeCanvas } from "qrcode.react";
import { FaArrowDown, FaShare, FaGlobe, FaDownload } from "react-icons/fa";
import img1 from "../assets/img1.jpg";

const ProjectStore = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: projects = [] } = useQuery({
    queryKey: ["projects", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/projects/${user?.email}`);
      console.log("API Response:", res);
      return res.data;
    },
  });

  return (
    <div 
      className="min-h-screen bg-cover bg-fixed bg-center relative"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-10 pt-4">Project Store</h1>
        
        {projects.length === 0 && (
          <div className="bg-white/10 rounded-lg p-8 text-center max-w-2xl mx-auto shadow-xl">
            <p className="text-xl text-gray-800">No projects found.</p>
            <p className="text-gray-600 mt-2">Get started by creating your first project!</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-8">
          {projects.slice().reverse().map((project) => (
            <div 
              key={project.Email} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-200 mb-4">{project.companyname}</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaGlobe className="text-blue-500 mt-1 mr-2" />
                      <div className="md:flex  items-center gap-2">
                        <p className="text-sm text-gray-200">Website Address :</p>
                        <p className="text-gray-200 font-medium">{project.websiteUrl}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-200">Project Owner Name :</p>
                      <p className="text-gray-200 font-medium">{project.ownerName}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-200">Country : </p>
                      <p className="text-gray-200 font-medium"> {project.countryName}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-200">Website Completion</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${project.projectPorgress}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-200 font-medium mt-1">{project.projectPorgress}% Complete</p>
                    </div>
                    
                    <div className="flex gap-3 mt-4">
                      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center transition-colors">
                        <span>WhatsApp</span>
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center transition-colors">
                        <span>Facebook</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <QRCodeCanvas value={project.websiteUrl} size={128} />
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors"
                    >
                      <FaGlobe className="mr-2" />
                      Website
                    </a>
                    {/* <button className="p-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition-colors">
                      <FaShare />
                    </button> */}
                  </div>
                  
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors w-full justify-center">
                    <FaDownload className="mr-2" />
                    Certificate
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 mt-8 pt-6 border-t border-gray-200">
                {project.projectImage && (
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">Project Image</h3>
                    <img 
                      src={project.projectImage} 
                      alt="Project" 
                      className="w-full h-64 object-cover rounded-lg shadow-md" 
                    />
                  </div>
                )}
                
                {project.certificate && (
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">Certificate</h3>
                    <img 
                      src={project.certificate} 
                      alt="Certificate" 
                      className="w-full h-64 object-cover rounded-lg shadow-md" 
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStore;