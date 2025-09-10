import useAuth from "../../hooks/useAuth";
import UserProjects from "./UserProjects";
import NoteFromJabnox from "./NoteFromJabnox";
import Popup from "./Popup";

const DashboardHome = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 ">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="lg:text-4xl text-2xl">
          <span className="text-xl lg:text-2xl font-semibold text-gray-300">Welcome!</span>{" "}
          <span className="lg:text-4xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            {user.displayName}
          </span>
        </h1>
        <p className="text-gray-400 mt-2">Manage your projects and services</p>
      </div>

    <Popup/>

      {/* Additional Content */}
      <div className="max-w-9xl mx-auto mt-12 grid grid-cols-1 xl:grid-cols-2 gap-20 xl:justify-between">
        <UserProjects />
        <NoteFromJabnox />
      </div>
    </div>
  );
};

export default DashboardHome;