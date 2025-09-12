import useAuth from "../../hooks/useAuth";
import UserProjects from "./UserProjects";
import NoteFromJabnox from "./NoteFromJabnox";
import Popup from "./Popup";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 ">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="lg:text-4xl text-2xl">
          <span className="text-xl lg:text-2xl font-semibold text-gray-300">
            Welcome!
          </span>{" "}
          <span className="lg:text-4xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            {user.displayName}
          </span>
        </h1>
        <p className="text-gray-400 mt-2">Manage your projects and services</p>
      </div>

      <Popup />

      <div className="flex justify-center">
        <Link to="/dashboard/website-template">
          <div
            className="
        flex flex-col justify-center items-center text-center
        mt-10 h-40 w-80 rounded-2xl p-5
        border border-violet-500/30 bg-gradient-to-b from-violet-600/20 to-blue-600/10
        text-violet-100 text-2xl font-semibold tracking-wide
        shadow-md shadow-violet-900/30
        transition-all duration-300
        hover:scale-105 hover:shadow-xl hover:shadow-violet-700/50 hover:border-violet-400
        active:scale-95
      "
          >
            <span className="mb-2">✨ Buy Website Template</span>
            <p className="text-sm text-violet-300/80">
              Modern & responsive starter
            </p>
          </div>
        </Link>
      </div>

      {/* Additional Content */}
      <div className="max-w-9xl mx-auto mt-12 grid grid-cols-1 xl:grid-cols-2 gap-20 xl:justify-between">
        <UserProjects />
        <NoteFromJabnox />
      </div>
    </div>
  );
};

export default DashboardHome;
