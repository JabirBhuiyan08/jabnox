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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-red-300">
        {projects.length === 0 ? " " : "Your Projects"}
      </h1>

      <div className="space-y-10">
        {projects.length === 0 && (
          <div className="text-center space-y-6">
            <ApplyNewService />
            <WebsiteTemplate />
          </div>
        )}

        {projects
          .slice()
          .reverse()
          .map((project) => (
            <div
              key={project._id}
              className="rounded-2xl bg-white/10 backdrop-blur-md overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all w-full mx-auto"
            >
              <div className="p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
                {/* Left Column - Project Info */}
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-100">
                    {project.companyname}
                  </h2>
                  <p className="text-lg font-medium text-gray-300">
                    Website:{" "}
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline break-all"
                    >
                      {project.websiteUrl}
                    </a>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 text-gray-300 text-sm">
                    <p>Expiry: {project.domainExpiry}</p>
                    <p>Web Licence: {project.webLicence}</p>
                    <p>Owner: {project.ownerName}</p>
                    <p>Country: {project.countryName}</p>
                    <p>Email: {project.Email}</p>
                    <p>Email Password: {project.EmailPassword}</p>
                    <p>WP Username: {project.wpUserName}</p>
                    <p>WP Password: {project.wpPassword}</p>
                  </div>

                  <p className="mt-4 text-gray-200">
                    <span className="font-medium">Short Description:</span>{" "}
                    {project.shortDescription}
                  </p>

                  {/* Description */}
                  <div className="mt-4">
                    <p className="text-sm text-gray-400">Project Details:</p>
                    <p className="text-gray-200">
                      {project.projectDescription}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-400 mb-2">
                      Progress
                    </p>
                    <div className="flex items-center gap-3 w-full max-w-md">
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-red-500 to-pink-500 h-full transition-all duration-500 ease-out"
                          style={{ width: `${project.projectPorgress}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-200 min-w-[2.5rem] text-right">
                        {project.projectPorgress}%
                      </span>
                    </div>
                  </div>

                  {/* Cost Table */}
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
                      <thead className="bg-white/10 text-gray-300">
                        <tr>
                          <th className="px-4 py-2 text-left">Category</th>
                          <th className="px-4 py-2 text-left">Amount</th>
                          <th className="px-4 py-2 text-left">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project?.costs?.map((cost, index) => (
                          <tr
                            key={index}
                            className="hover:bg-white/5 border-t border-white/10"
                          >
                            <td className="px-4 py-2 text-gray-300">
                              {cost.category}
                            </td>
                            <td className="px-4 py-2 text-gray-300">
                              ${cost.amount}
                            </td>
                            <td className="px-4 py-2 text-gray-300">
                              {new Date(cost.date).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Column - QR + Images */}
                <div className="flex flex-col items-center gap-6 lg:w-72 w-full mt-6 lg:mt-0">
                  <QRCodeCanvas
                    value={project.websiteUrl}
                    size={150}
                    level="H"
                    bgColor="transparent"
                    fgColor="#ffffff"
                    className="border-4 border-white/20 rounded-xl p-2 bg-black/20"
                  />
                  <img
                    src={project.projectImage}
                    alt="Project"
                    className="border-4 border-white/20 rounded-xl w-48 h-48 object-cover"
                  />
                  <img
                    src={project.certificate}
                    alt="Certificate"
                    className="border-4 border-white/20 rounded-xl w-48 h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserProjects;
