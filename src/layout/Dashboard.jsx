import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import useAxiosSecure from "../hooks/axiosSecure";
import LoadingSpinner from "../Components/LoadingSpinner";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";

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

  const handleActiveClass = ({ isActive }) => {
    return isActive
      ? "bg-white/10 text-white font-medium border-l-4 border-blue-500"
      : "text-gray-200 hover:bg-white/10 hover:text-white transition-colors duration-200";
  };

  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: "Confirm Logout",
        text: "You will be securely signed out of your account.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout",
      });

      if (!result.isConfirmed) return;

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
    <div className="flex flex-col lg:flex-row min-h-screen relative bg-gray-900">
      {/* Mobile Nav Toggle Button */}
      <div className=" p-3 lg:hidden flex justify-between bg-violet-600/10 items-center text-white sticky top-0 z-30 shadow-md">
        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-blue-700 focus:outline-none mr-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-white text-xl" />
            ) : (
              <FaBars className="text-white text-xl" />
            )}
          </button>
          <img src={logo} alt="Logo" className="w-28" />
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => navigate("/")}
            className="p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            aria-label="Go to homepage"
          >
            <FaHome className="text-white text-lg" />
          </button>
          <img
            src={user?.photoURL}
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-gray-200"
          />
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:sticky top-0 left-0 z-40 w-72 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out h-screen overflow-y-auto flex flex-col`}
      >
        {/* Logo and close button for mobile */}
        <div className="p-4 bg-gray-900 flex justify-between items-center lg:hidden">
          <img src={logo} alt="Logo" className="w-32" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1 rounded-md hover:bg-gray-700 text-white"
            aria-label="Close menu"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-700 bg-gray-900">
          <div className="flex items-center gap-3">
            <img
              src={user?.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-gray-200"
            />
            <div className="overflow-hidden">
              <p className="font-medium text-white truncate">{user?.displayName}</p>
              <p className="text-sm text-gray-300 truncate">{user?.email}</p>
              {isAdmin && (
                <span className="inline-block mt-1 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                  Admin
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 p-4 overflow-y-auto">
          <nav className="space-y-2">
            {/* User Panel */}
            <div className="mt-2 bg-gray-900/50 p-3 rounded-lg border border-gray-700">
              <h3 className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                User Panel
              </h3>
              <div className="mt-1 space-y-1">
                <NavLink
                  to="/dashboard"
                  end
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                      { isActive }
                    )}`
                  }
                >
                  <span className="mr-2">📊</span> My Dashboard
                </NavLink>
                <NavLink
                  to="report-problem"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                      { isActive }
                    )}`
                  }
                >
                  <span className="mr-2">⚠️</span> Report a Problem
                </NavLink>
                <NavLink
                  to="apply-new-service"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                      { isActive }
                    )}`
                  }
                >
                  <span className="mr-2">🛠️</span> Apply New Services
                </NavLink>
                <NavLink
                  to="pending-application"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                      { isActive }
                    )}`
                  }
                >
                  <span className="mr-2">⏳</span> Pending Application
                </NavLink>
                <NavLink
                  to="website-template"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                      { isActive }
                    )}`
                  }
                >
                  <span className="mr-2">🌐</span>Buy Website Template
                </NavLink>
                <NavLink
                  to="portfolios"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                      { isActive }
                    )}`
                  }
                >
                  <span className="mr-2">👀</span> Jabnox Projects Preview
                </NavLink>
                <NavLink
                  to="blogs"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                      { isActive }
                    )}`
                  }
                >
                  <span className="mr-2">📝</span> Blogs Preview
                </NavLink>
                <NavLink
                  to="payment-method"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                      { isActive }
                    )}`
                  }
                >
                  <span className="mr-2">💳</span> Payment Method
                </NavLink>
                <NavLink
                  to="pending-payment"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                      { isActive }
                    )}`
                  }
                >
                  <span className="mr-2">🔄</span> Pending Payment
                </NavLink>
                <NavLink
                  to="dashboard-reviews"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                      { isActive }
                    )}`
                  }
                >
                  <span className="mr-2">⭐</span> Jabnox Reviews
                </NavLink>
              </div>
            </div>

            {/* Admin Panel */}
            {isAdmin && (
              <div className="mt-4">
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Admin Panel
                </h3>
                <div>
                  <div className="mt-1 space-y-1 bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                    <NavLink
                      to="Admin-Dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">👑</span> Admin Dashboard
                    </NavLink>
                    <NavLink
                      to="projects"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">🏗️</span> Owners Projects
                    </NavLink>
                    <NavLink
                      to="note-form"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">🔔</span> Send Notification
                    </NavLink>
                    <NavLink
                      to="users-report"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">📋</span> Users Report
                    </NavLink>
                    <NavLink
                      to="order"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">🛒</span> Check new Order
                    </NavLink>

                    <NavLink
                      to="new-dashboard-contact"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span>
                        <span className="mr-2">📩</span> Customer Contacts
                      </span>
                      {contacts.filter((c) => c.read === true).length > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                          {contacts.filter((c) => c.read === true).length}
                        </span>
                      )}
                    </NavLink>
                  </div>

                  {/* Control Panel */}
                  <h3 className="px-3 py-2 mt-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Control Panel
                  </h3>
                  <div className="mt-1 space-y-1 bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                    <NavLink
                      to="portfolio-form"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">🚀</span> Jabnox Project Upload
                    </NavLink>
                    <NavLink
                      to="blog-form"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">✍️</span> Upload Blog
                    </NavLink>
                    <NavLink
                      to="projects-form"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">🏢</span> Owners Project Upload
                    </NavLink>
                    <NavLink
                      to="upload-service"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">😊</span> Upload Service
                    </NavLink>
                    <NavLink
                      to="template-form"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">😎</span> Template Form
                    </NavLink>

                    <NavLink
                      to="dashboard-users"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">👥</span> Users
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-700 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-0 bg-gray-900 min-h-screen">
        <div className="p-3 lg:p-6">

          {/* Content container */}
          <div className="relative rounded-xl border border-gray-700 shadow-lg p-4 lg:p-6 bg-gray-800/50 backdrop-blur-sm">
            {/* Subtle decorative elements */}
            <div className="absolute -top-1 -right-1 w-12 h-12 lg:w-16 lg:h-16 border-t-2 border-r-2 border-blue-500/30 rounded-tr-xl"></div>
            <div className="absolute -bottom-1 -left-1 w-12 h-12 lg:w-16 lg:h-16 border-b-2 border-l-2 border-blue-500/30 rounded-bl-xl"></div>

            {/* Content area */}
            <div className="text-white relative">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;