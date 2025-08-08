import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoIosNotifications } from "react-icons/io";

import useAxiosSecure from "../hooks/axiosSecure";
import LoadingSpinner from "../Components/LoadingSpinner";
import useAdmin from "../hooks/UseAdmin";

const Dashboard = () => {
  const { logOut, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [contacts, setContacts] = useState([]);
  const [isAdmin, isAdminLoading] = useAdmin();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axiosSecure.get("/contact");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    if (isAdmin) {
      fetchContacts();
    }
  }, [isAdmin, axiosSecure]);

  const handleActiveClass = ({ isActive }) =>
    isActive
      ? "bg-violet-700 text-white font-medium shadow-md"
      : "text-gray-300 hover:bg-violet-600 hover:text-white transition-all duration-200 ease-in-out transform hover:scale-[1.02]";

  const handleLogout = async () => {
    try {
      await logOut();

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (isAdminLoading) {
    return <LoadingSpinner fullScreen />;
  }

  if (!user) {
    navigate("/login", { replace: true });
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Nav Toggle Button */}
      <div className="bg-violet-900 p-4 md:hidden flex justify-between items-center text-white sticky top-0 z-50">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-24 mb-1" />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md hover:bg-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes className="text-white text-4xl" />
          ) : (
            <FaBars className="text-white text-4xl" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isMenuOpen ? "block fixed inset-0 z-20 pt-28" : "hidden"
        } md:block md:fixed md:top-0 md:bottom-0 md:left-0 w-full md:w-64 bg-violet-800 text-white shadow-xl`}
      >
        <ul className="menu p-4 text-lg gap-2 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <img
              src={user?.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{user?.displayName}</p>
              <p className="text-sm text-violet-200">
                {isAdmin ? "Admin" : "User"}
              </p>
            </div>
          </div>

          {/* Common Routes for All Users */}

          <li>
            <NavLink
              to="/dashboard"
              
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="portfolios"
              className={handleActiveClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Jabnox's Portfolios
            </NavLink>
          </li>

          <li>
            <NavLink
              to="dashboard-reviews"
              className={handleActiveClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </NavLink>
          </li>

          <li>
            <NavLink
              to="blogs"
              className={handleActiveClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </NavLink>
          </li>

          <div className="divider"></div>

          {/* Admin Only Routes */}
          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="projects"
                  className={handleActiveClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Users Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="portfolio-form"
                  className={handleActiveClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio Form
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="blog-form"
                  className={handleActiveClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Post a Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="projects-form"
                  className={handleActiveClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects Form
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="new-dashboard-contact"
                  className={handleActiveClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <div>New Contacts</div>
                    <span className="flex items-center justify-center bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      <IoIosNotifications className="mr-1" />
                      {contacts.filter((c) => c.read === false).length}
                    </span>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="dashboard-users"
                  className={handleActiveClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="note-form"
                  className={handleActiveClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sent Note to user
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          <li className="mt-auto">
            <button
              onClick={handleLogout}
              className="btn bg-red-600 hover:bg-red-700 text-white mt-6 w-full transition-colors duration-200 shadow-md"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 bg-gray-50 min-h-screen md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
