import React from "react";
import useAxiosSecure from "../../hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import ApplyNewService from "../ApplyNewService/ApplyNewService";
import WebsiteTemplate from "../Buy Website Template/WebsiteTemplate";
import { QRCodeCanvas } from "qrcode.react";

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

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse text-xl text-gray-500">
          Loading your projects...
        </div>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        <p className="text-red-700 font-medium">Error loading projects</p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-red-300">
          {projects.length === 0 ? "Your Projects" : "Your Projects"}
        </h1>
        
        
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
          <div className="max-w-md mx-auto">
            <svg className="w-16 h-16 mx-auto text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects yet</h3>
            <p className="text-gray-400 mb-6">Get started by applying for a new service or browsing our templates</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {projects
            .slice()
            .reverse()
            .map((project) => (
              <div
                key={project._id}
                className="rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-4 md:p-6 flex flex-col lg:flex-row gap-6">
                  {/* Left Column - Project Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h2 className="text-xl md:text-2xl font-bold text-white">
                        {project.companyname}
                      </h2>
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-700 rounded-full h-2.5 w-24 md:w-32 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-red-500 to-pink-500 h-full transition-all duration-500 ease-out"
                            style={{ width: `${project.projectPorgress}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-200 min-w-[2.5rem]">
                          {project.projectPorgress}%
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-400">Website</span>
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline break-all truncate"
                        >
                          {project.websiteUrl}
                        </a>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-400">Expiry</span>
                        <span>{project.domainExpiry}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-400">Web Licence</span>
                        <span>{project.webLicence}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-400">Owner</span>
                        <span>{project.ownerName}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-gray-200 line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Login Details - Collapsible Section */}
                    <details className="group">
                      <summary className="flex items-center cursor-pointer text-gray-300 hover:text-white">
                        <span className="text-sm font-medium">Login Details</span>
                        <svg className="w-4 h-4 ml-2 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </summary>
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-400">Email</span>
                          <span>{project.Email}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-400">Email Password</span>
                          <span>{project.EmailPassword}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-400">WP Username</span>
                          <span>{project.wpUserName}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-400">WP Password</span>
                          <span>{project.wpPassword}</span>
                        </div>
                      </div>
                    </details>

                    {/* Project Description - Collapsible Section */}
                    {project.projectDescription && (
                      <details className="group">
                        <summary className="flex items-center cursor-pointer text-gray-300 hover:text-white">
                          <span className="text-sm font-medium">Project Details</span>
                          <svg className="w-4 h-4 ml-2 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </summary>
                        <div className="mt-3">
                          <p className="text-gray-300">{project.projectDescription}</p>
                        </div>
                      </details>
                    )}

                    {/* Cost Table */}
                    {project?.costs?.length > 0 && (
                      <div className="mt-4 overflow-x-auto">
                        <p className="text-sm font-medium text-gray-400 mb-2">Cost Breakdown</p>
                        <table className="w-full text-sm border border-gray-700 rounded-lg overflow-hidden">
                          <thead className="bg-gray-700 text-gray-300">
                            <tr>
                              <th className="px-3 py-2 text-left">Category</th>
                              <th className="px-3 py-2 text-left">Amount</th>
                              <th className="px-3 py-2 text-left">Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.costs.map((cost, index) => (
                              <tr
                                key={index}
                                className="hover:bg-gray-700/50 border-t border-gray-700 even:bg-gray-800/30"
                              >
                                <td className="px-3 py-2 text-gray-300">{cost.category}</td>
                                <td className="px-3 py-2 text-gray-300">${cost.amount}</td>
                                <td className="px-3 py-2 text-gray-300">
                                  {new Date(cost.date).toLocaleDateString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Right Column - QR + Images */}
                  <div className="flex flex-col items-center gap-4 lg:w-48 w-full">
                    <div className="bg-black/20 p-3 rounded-lg border border-gray-700">
                      <QRCodeCanvas
                        value={project.websiteUrl}
                        size={120}
                        level="H"
                        bgColor="transparent"
                        fgColor="#ffffff"
                      />
                      <p className="text-xs text-gray-400 mt-2 text-center">Scan to visit</p>
                    </div>
                    
                    {project.projectImage && (
                      <div className="text-center">
                        <p className="text-sm text-gray-400 mb-1">Project Image</p>
                        <img
                          src={project.projectImage}
                          alt="Project"
                          className="border border-gray-700 rounded-lg w-32 h-32 object-cover mx-auto"
                        />
                      </div>
                    )}
                    
                    {project.certificate && (
                      <div className="text-center">
                        <p className="text-sm text-gray-400 mb-1">Certificate</p>
                        <img
                          src={project.certificate}
                          alt="Certificate"
                          className="border border-gray-700 rounded-lg w-32 h-32 object-cover mx-auto"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default UserProjects;