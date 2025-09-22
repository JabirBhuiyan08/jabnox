import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import { QRCodeCanvas } from "qrcode.react";
import Reviews from "../About/Reviews";
import img1 from "../assets/img1.jpg";
import { FaDownload, FaFacebook, FaShare, FaWhatsapp } from "react-icons/fa";

const ShowSingleProject = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: projects, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/projectstore/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      <div className="relative z-10 p-6 md:p-12 max-w-6xl mx-auto">
        {/* Header section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2 text-indigo-400">
            Project Details
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        {/* Main content */}
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden mb-12">
          <div className="p-6 md:p-10 flex flex-col-reverse md:flex-row gap-8">
            {/* Project information */}
            <div className="flex-1">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-indigo-200 min-w-[180px]">
                    Company Name:
                  </span>
                  <span className="bg-gray-700 px-4 py-2 rounded-lg flex-1">
                    {projects.companyname}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-indigo-200 min-w-[180px]">
                    Web Licence:
                  </span>
                  <span className="bg-gray-700 px-4 py-2 rounded-lg flex-1">
                    {projects.weblicence}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-indigo-200 min-w-[180px]">
                    Web Owner Name:
                  </span>
                  <span className="bg-gray-700 px-4 py-2 rounded-lg flex-1">
                    {projects.ownerName}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-indigo-200 min-w-[180px]">
                    Country:
                  </span>
                  <span className="bg-gray-700 px-4 py-2 rounded-lg flex-1">
                    {projects.countryName}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-indigo-200">
                    Project Description:
                  </span>
                  <p className="bg-gray-700 px-4 py-3 rounded-lg">
                    {projects.projectDescription}
                  </p>
                </div>
              </div>
              <div className="flex gap-5 mt-10">
                <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-3xl">
                  Whats app <FaWhatsapp />
                </button>
                <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-3xl">
                  Facebook <FaFacebook />
                </button>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center justify-start p-4">
              <h3 className="text-lg font-semibold mb-4 text-indigo-200">
                Website QR Code
              </h3>
              <div className="p-3 bg-white rounded-lg">
                <QRCodeCanvas
                  value={projects.websiteUrl}
                  size={80}
                  level="H"
                  includeMargin
                />
              </div>
              <p className="mt-3 text-sm text-center text-gray-300 max-w-[160px]">
                Scan to visit website
              </p>

              <div className="flex gap-5 mt-2">
                <Link to={projects.websiteUrl}>
                  <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-3xl">
                    Visit Website
                  </button>
                </Link>
                <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-3xl">
                  <FaShare />
                </button>
              </div>
              <button className="flex items-center justify-center w-48 gap-2 mt-2 bg-blue-600 px-4 py-2 rounded-3xl">
                Certificate <FaDownload /></button>
            </div>
          </div>

          {/* Images section */}
          <div className="border-t border-gray-700 p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-6 text-indigo-300">
              Project Media
            </h2>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <h3 className="font-semibold mb-3 text-indigo-200">
                  Project Image
                </h3>
                <div className="overflow-hidden rounded-lg border-2 border-indigo-500/30">
                  <img
                    src={projects.projectImage}
                    className="w-64 h-64 object-cover transition-transform duration-300 hover:scale-105"
                    alt="Project"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-semibold mb-3 text-indigo-200">
                  Certificate
                </h3>
                <div className="overflow-hidden rounded-lg border-2 border-indigo-500/30">
                  <img
                    src={projects.certificate}
                    className="w-64 h-64 object-cover transition-transform duration-300 hover:scale-105"
                    alt="Certificate"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-300">
            Customer Reviews
          </h2>
          <Reviews></Reviews>
        </div>
      </div>
    </div>
  );
};

export default ShowSingleProject;
