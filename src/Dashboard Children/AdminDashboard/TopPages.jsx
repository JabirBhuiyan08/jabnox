import React from "react";
import useAxiosSecure from "../../hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";

const TopPages = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["top-pages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/analytics/top-pages");
      return res.data;
    },
  });
  return (
    <div className="bg-white/10 shadow-lg rounded-2xl p-6 w-full mt-12 mx-auto">
      <h2 className="text-2xl font-bold text-gray-200 mb-6 mt-20">
        Top Pages (Last 60 Days)
      </h2>
      {stats.length === 0 ? (
        <p className="text-gray-500 text-sm">No data available.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {stats.map((row, i) => (
            <li
              key={i}
              className="flex justify-between items-center py-2 hover:bg-gray-500 rounded-md px-2 transition"
            >
              <span className="font-medium text-gray-200">{row.page}</span>
              <span className="font-medium text-gray-200">
                Views: {row.views}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopPages;
