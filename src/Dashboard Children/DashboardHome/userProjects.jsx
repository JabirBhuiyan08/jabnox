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
      <h1 className="text-3xl font-bold mb-8 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-red-300">
        Your Projects
      </h1>

      <div className="space-y-6">
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <div
              key={project._id}
              className="rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-col gap-2 justify-between items-start">
                  <h2 className="text-xl font-bold">
                    Company Name: {project.companyname}
                  </h2>
                  <p className="text-xl font-bold">
                    Website Name:{" "}
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {project.websiteUrl}
                    </a>
                  </p>
                  <p className="text-xl font-bold">
                    Website Expiry Date: {project.domainExpiry}
                  </p>
                  <p className="text-xl font-bold">
                    Web Licence No: {project.webLicence}
                  </p>
                  <p className="text-xl font-bold">
                    Project Owner Name: {project.ownerName}
                  </p>
                  <p className="text-xl font-bold">
                    Country: {project.countryName}
                  </p>
                  <p className="text-xl font-bold">Email: {project.Email}</p>
                  <p className="text-xl font-bold">
                    Email Password: {project.EmailPassword}
                  </p>
                  <p className="text-xl font-bold">
                    Wordpress UserName: {project.wpUserName}
                  </p>
                  <p className="text-xl font-bold">
                    Wordpress Password: {project.wpPassword}
                  </p>
                </div>

                <p className=" mt-2 mb-4">
                  Short Description: {project.shortDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm">Description About Project:</p>
                    <p className="">{project.projectDescription}</p>
                  </div>
                  <div></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="space-y-1 w-90 bg-black rounded-lg p-4">
                    <p className="text-sm font-medium ">Progress</p>

                    <div className="flex items-center gap-3">
                      {/* Progress bar background */}
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        {/* Filled bar */}
                        <div
                          className="bg-gradient-to-r from-red-500 to-pink-500 h-full transition-all duration-500 ease-out"
                          style={{ width: `${project.projectPorgress}%` }}
                        ></div>
                      </div>

                      {/* Percentage text */}
                      <span className="text-sm font-semibold min-w-[2.5rem] text-right">
                        {project.projectPorgress}%
                      </span>
                    </div>
                  </div>
                </div>

{/* cost section */}
                <div className="overflow-x-auto">
                  <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                    <thead className="">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Category
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Amount
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {project?.costs?.map((cost, index) => (
                        <tr key={index} className="hover:bg-gray-500">
                          <td className="border border-gray-300 px-4 py-2">
                            {cost.category}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            ${cost.amount}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {new Date(cost.date).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserProjects;
