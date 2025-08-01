import { useEffect } from "react";
import useAxiosSecure from "../../hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  
  useEffect(() => {
    refetch();
  }, [ refetch]);
  return (
    <div>
      <h2>Total Users: {users.length}</h2>
      

      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            className="border border-gray-200 p-4 mb-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
          >
            {/* User info section */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-5">
              <h3 className="font-semibold text-gray-800 text-lg">
                {user.name}
              </h3>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-600 text-sm">{user.email}</span>
              </div>
            </div>

            {/* Role badge */}
            {user.role && (
              <div
                className={`text-xs py-1.5 px-3 rounded-full font-medium ${
                  user.role === "admin"
                    ? "bg-red-50 text-red-600 border border-red-100"
                    : "bg-blue-50 text-blue-600 border border-blue-100"
                }`}
              >
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
