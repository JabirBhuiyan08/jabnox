import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ShowReport = () => {
  const axiosPublic = useAxiosPublic();

  const { data: report = [], isLoading } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await axiosPublic.get("/report");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="animate-pulse text-lg font-semibold text-gray-600">
          Loading pending applications...
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-4xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Submitted Reports
      </h2>
      {report.slice().reverse().map((e) => (
        <div
          key={e._id}
          className="border p-5 rounded-xl shadow-sm bg-white hover:shadow-md transition"
        >
          
          <p className="mb-1 text-gray-700">
            <strong>Email:</strong> {e.email}
          </p>
          <p className="text-gray-700">
            <strong>Message:</strong> {e.message}
          </p>
          {e.image && (
            <img
              src={e.image}
              alt="Report"
              className="mt-3 rounded-lg shadow w-1/2"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowReport;
