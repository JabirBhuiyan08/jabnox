import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/axiosSecure";
import { Globe } from "lucide-react";

const UsersByCountry = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["country-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/analytics/users-by-country");
      return res.data;
    },
  });

  return (
    <div className="bg-white/10 mt-12 shadow-md rounded-2xl p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Globe className="text-blue-600 w-6 h-6" />
        <h2 className="text-lg sm:text-xl font-bold text-gray-100">
          Users by Country (60 days)
        </h2>
      </div>

      {/* Table wrapper for horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        {stats.length === 0 ? (
          <p className="text-gray-200 text-sm">No data available.</p>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100/10">
                <th className="px-4 py-2 text-left text-gray-200 text-sm sm:text-base">
                  Country
                </th>
                <th className="px-4 py-2 text-left text-gray-200 text-sm sm:text-base">
                  Users
                </th>
               
                <th className="px-4 py-2 text-left text-gray-200 text-sm sm:text-base">
                  Sessions
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map((row, i) => (
                <tr key={i} className="hover:bg-gray-500  transition rounded-md">
                  <td className="px-4 py-2 text-gray-200 text-sm sm:text-base">
                    {row.country}
                  </td>
                  <td className="px-4 py-2 text-gray-200 font-semibold text-sm sm:text-base">
                    {row.users}
                  </td>
                  <td className="px-4 py-2 text-gray-200 font-semibold text-sm sm:text-base">
                    {row.sessions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UsersByCountry;
