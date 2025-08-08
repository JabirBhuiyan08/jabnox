import React from "react";
import useAxiosSecure from "../../hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const UserProjects = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/projects/${user?.email}`);
      console.log("API Response:", res);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-pulse text-xl text-gray-500">Loading your projects...</div>
    </div>
  );
  
  if (error) return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
      <p className="text-red-700 font-medium">Error loading projects</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-red-300">
        Your Projects
      </h1>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <div 
            key={project._id} 
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-gray-800">{project.projectName}</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'in progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 mt-2 mb-4">{project.shortDescription}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Description</p>
                  <p className="text-gray-700">{project.projectDescription}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website URL</p>
                  <a 
                    href={project.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {project.websiteUrl}
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Domain Expiry</p>
                  <p className="text-gray-700">{project.domainExpiry}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Notes</p>
                  <p className="text-gray-700">{project.notes}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Progress</p>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div 
                        className="bg-red-500 h-2.5 rounded-full" 
                        style={{ width: `${project.projectPorgress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{project.projectPorgress}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProjects;