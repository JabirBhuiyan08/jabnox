import React, { useState } from "react";
import useAxiosSecure from "../../hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import ApplyNewService from "../ApplyNewService/ApplyNewService";
import WebsiteTemplate from "../Buy Website Template/WebsiteTemplate";
import { QRCodeCanvas } from "qrcode.react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { IoIosNotifications } from "react-icons/io";
import NoteFromJabnox from "./NoteFromJabnox";
import { IoCloseCircleSharp } from "react-icons/io5";

const UserProjects = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [showLogin, setShowLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data: notes = [], refetch } = useQuery({
    queryKey: ["notes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notes/${user?.email}`);
      return res.data;
    },
  });

  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/projects/email/${user?.email}`);
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
    <div className="max-w-6xl mx-auto py-5">
      {/* Header */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col p-3 sm:flex-row 
        justify-center items-center sm:items-center mb-2 gap-4 
        text-white bg-gradient-to-r from-violet-500 to-pink-500 rounded "
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-sm flex items-center gap-5"
        >
          Your Projects
          <div className="z-30 text-black">
            {/* Notification button */}
            <button
              className="btn text-red-500 text-2xl"
              onClick={() =>{ setIsOpen(!isOpen); refetch();}}
            >
              <IoIosNotifications /> {notes.length}
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-84  bg-base-100 shadow rounded-box p-3">
                {/* Close button inside */}
                <div className="flex flex-col items-end mb-2 ">
                  <button
                    className="btn text-5xl btn-outline text-red-500"
                    onClick={() => 
                      setIsOpen(!isOpen)
                    }
                  >
                    <IoCloseCircleSharp />
                  </button>
                </div>

                <ul className="menu">
                  <NoteFromJabnox></NoteFromJabnox>
                </ul>
              </div>
            )}
          </div>
        </motion.h1>
      </motion.div>

      {projects.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
          <div className="max-w-md mx-auto">
            <svg
              className="w-16 h-16 mx-auto text-gray-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No projects yet
            </h3>
            <p className="text-gray-400 mb-6">
              Get started by applying for a new service or browsing our
              templates
            </p>
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
                    {/* company name - weblicence border */}
                    <div className="flex justify-between items-center space-y-2 border border-gray-600 p-2 rounded-2xl">
                      <div className="">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <h2 className=" md:text-2xl font-bold text-white flex justify-between">
                            {project.companyname}
                          </h2>
                          <div className="flex items-center gap-3 -mt-3">
                            <div className="bg-gray-700 rounded-full h-2.5 w-24 md:w-32 overflow-hidden ">
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
                            <a
                              href={project.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 text-xs hover:underline break-all truncate"
                            >
                              {project.websiteUrl}
                            </a>
                          </div>

                          <div>
                            <div className="flex gap-2 items-center -mt-2">
                              <span className="text-sm text-gray-400">
                                Expiry :
                              </span>
                              <span className="text-xs">
                                {project.domainExpiry}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2 items-center -mt-2 text-xs text-gray-400">
                            <span>Web Licence :</span>
                            <span className="">{project.weblicence}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col gap-2 items-center">
                          {project.projectImage && (
                            <div className="text-center">
                              <img
                                src={project.projectImage}
                                alt="Project"
                                className="border border-gray-700 rounded-lg w-12 h-14 object-cover mx-auto"
                              />
                            </div>
                          )}
                          <button
                            className=""
                            onClick={() =>
                              document.getElementById("my_modal_3").showModal()
                            }
                          >
                            <QRCodeCanvas
                              value={project.websiteUrl}
                              size={50}
                              level="H"
                              bgColor="transparent"
                              fgColor="#ffffff"
                              className="rounded-sm"
                            />
                          </button>
                          <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle text-black btn-ghost absolute right-2 top-2">
                                  ✕
                                </button>
                              </form>
                              <div className="flex flex-col items-center">
                                <QRCodeCanvas
                                  value={project.websiteUrl}
                                  size={200}
                                  level="H"
                                  bgColor="transparent"
                                  fgColor="#ffffff"
                                  className="rounded-sm bg-black"
                                />
                                <div className="flex gap-2 items-center justify-center">
                                  <button className="mt-4 bg-blue-600 text-white p-3 rounded-2xl">
                                    Share QR
                                  </button>
                                  <button className="mt-4 bg-blue-600 text-white p-3 rounded-2xl">
                                    Download QR
                                  </button>
                                </div>
                              </div>
                            </div>
                          </dialog>
                        </div>
                      </div>
                    </div>
                    {/*  */}

                    <div className="flex flex-col gap-2 items-start text-[10px]">
                      <p className="text-gray-200 line-clamp-2">
                        Website Start Date : {project.WebsiteStartDate}
                      </p>
                      <p className="text-gray-200 line-clamp-2">
                        Website End Date : {project.WebsiteEndDate}
                      </p>
                    </div>

                    <div className="flex space-y-2 border border-gray-600 p-2 rounded-2xl justify-between">
                      <div className="">
                        <div className="flex gap-2 items-center text-xs">
                          <span className="text-gray-400">Owner :</span>
                          <span>{project.ownerName}</span>
                        </div>

                        {/* Login Details - Collapsible Section */}
                        <details
                          className="group"
                          onClick={() => setShowLogin(!showLogin)}
                        >
                          <summary className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white mt-2">
                            <span className="text-xs font-medium">
                              Login Details
                            </span>
                            {showLogin ? <FaEye /> : <FaEyeSlash />}
                          </summary>
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-xs">
                            <div className="flex flex-col">
                              <span className="text-gray-400">Email :</span>
                              <span>{project.Email}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-gray-400">
                                Email Password :
                              </span>
                              <span>{project.EmailPassword}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-gray-400">
                                WP Username :
                              </span>
                              <span>{project.wpUsername}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-gray-400">
                                WP Password :
                              </span>
                              <span>{project.wpPassword}</span>
                            </div>
                          </div>
                        </details>
                      </div>
                      {project.certificate && (
                        <div className="text-center">
                          <img
                            src={project.certificate}
                            alt="Certificate"
                            className="border border-gray-700 rounded-lg w-14 h-14 object-cover mx-auto"
                            onClick={() =>
                              document.getElementById("my_modal_4").showModal()
                            }
                          />
                          <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-700">
                                  ✕
                                </button>
                              </form>
                              {project.certificate && (
                                <div className="text-center ">
                                  <img
                                    src={project.certificate}
                                    alt="Certificate"
                                    className="border border-gray-700 object-cover mx-auto rounded-sm bg-black mt-4"
                                    onClick={() =>
                                      document
                                        .getElementById("my_modal_4")
                                        .showModal()
                                    }
                                  />
                                  <div>
                                    <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
                                      Download certificate
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </dialog>
                        </div>
                      )}
                    </div>

                    {/* Project Description - Collapsible Section */}
                    {project.projectDescription && (
                      <details className="group">
                        <summary className="flex items-center cursor-pointer text-gray-300 hover:text-white">
                          <span className="text-xs font-medium">
                            Project Details
                          </span>
                          <svg
                            className="w-4 h-4 ml-2 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <div className="mt-3 text-xs">
                          <p className="text-gray-300">
                            {project.projectDescription}
                          </p>
                        </div>
                      </details>
                    )}

                    {/* Cost Table */}
                    {project?.costs?.length > 0 && (
                      <div className="mt-4 overflow-x-auto">
                        <p className="text-sm font-medium text-gray-400 mb-2">
                          Cost Breakdown
                        </p>
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
                                <td className="px-3 py-2 text-gray-300">
                                  {cost.category}
                                </td>
                                <td className="px-3 py-2 text-gray-300">
                                  ${cost.amount}
                                </td>
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
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default UserProjects;
