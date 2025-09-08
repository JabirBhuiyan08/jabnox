import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/axiosSecure";

const OverviewStats = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["overview-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/analytics/overview-stats");
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="bg-white/10 shadow-lg rounded-2xl p-6 w-full mt-12 mx-auto">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">
        Overview (Last 60 Days)
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {/* Active Users */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 shadow">
          <p className="text-sm opacity-80">Active Users</p>
          <p className="text-2xl font-bold">{stats.activeUsers}</p>
        </div>

        {/* New Users */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4 shadow">
          <p className="text-sm opacity-80">New Users</p>
          <p className="text-2xl font-bold">{stats.newUsers}</p>
        </div>

        {/* Sessions */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4 shadow">
          <p className="text-sm opacity-80">Sessions</p>
          <p className="text-2xl font-bold">{stats.sessions}</p>
        </div>

        {/* Avg. Session Duration */}
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-4 shadow">
          <p className="text-sm opacity-80">Avg. Session</p>
          <p className="text-2xl font-bold">{Number(stats.avgSession).toFixed(2)}s</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewStats;
