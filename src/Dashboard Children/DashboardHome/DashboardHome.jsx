import useAuth from "../../hooks/useAuth";
import UserProjects from "./UserProjects";
import NoteFromJabnox from "./NoteFromJabnox";
import Popup from "./Popup";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#F5EFE6] rounded-2xl">
      {/* Header Section */}
      <div className="text-center flex flex-col items-center">
        <h1 className="lg:text-4xl text-2xl mt-2">
          <span className="text-sm lg:text-2xl font-semibold text-gray-700">
            Welcome
          </span>{" "}
          <span className="lg:text-4xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            {user.displayName}
          </span>
        </h1>
        <p className="text-gray-700 text-xs">Manage your projects and services</p>
      </div>

      <UserProjects />

      <Popup />
      {/* Additional Content */}
      <div className="max-w-9xl mt-10 mx-auto grid grid-cols-1 xl:grid-cols-1 gap-20 xl:justify-center xl:items-center">
        <NoteFromJabnox />
      </div>
    </div>
  );
};

export default DashboardHome;
