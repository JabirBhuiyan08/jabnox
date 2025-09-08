import { FaBars, FaTimes } from "react-icons/fa";
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
      : "text-gray-200 hover:bg-white/20 hover:text-white transition-colors duration-200";
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
    <div className="flex flex-col lg:flex-row md:flex-row min-h-screen relative">
      {/* Mobile Nav Toggle Button */}
      <div className="bg-blue-500 p-4 md:hidden flex justify-between items-center text-white sticky top-0 z-30">
        <img src={logo} alt="Logo" className="w-32" />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md hover:bg-blue-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="text-white text-xl" />
          ) : (
            <FaBars className="text-white text-xl" />
          )}
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Fixed Sidebar */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 pt-16 lg:pt-0 fixed md:fixed top-0 left-0 z-20 w-90 bg-black shadow-lg transform transition-transform duration-300 ease-in-out h-screen overflow-y-auto`}
      >
        <div className="flex flex-col h-full">
          {/* User Profile Section */}
          <div className="p-4 border-b bg-white/10 border-white/20">
            <div className="flex items-center gap-3">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-gray-200"
              />
              <div>
                <p className="font-medium text-white">{user?.displayName}</p>
                <p className="text-sm text-white truncate">{user?.email}</p>
                {isAdmin && (
                  <span className="inline-block mt-1 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                    Admin
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 p-4 ">
            <nav className="space-y-1">
              {/* User Panel */}
              <div className="mt-2 bg-white/10 p-3 rounded-lg border border-white/20">
                <h3 className="px-3 py-2 text-xs font-semibold text-white uppercase tracking-wider">
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
                  <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Admin Panel
                  </h3>
                  <div>
                  <div className="mt-1 space-y-1 bg-white/10 p-3 rounded-lg border border-white/20">
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



                    {/* <NavLink
                      to="check-payment"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">💰</span> Check Payment
                    </NavLink> */}



                    {/* <NavLink
                      to="template-request"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                          { isActive }
                        )}`
                      }
                    >
                      <span className="mr-2">🎨</span> Web Template Request
                    </NavLink> */}



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
                      {contacts.filter((c) => c.read === false).length > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                          {contacts.filter((c) => c.read === false).length}
                        </span>
                      )}
                    </NavLink>
                    </div>

                    {/* Control Panel */}
              
                    <h3 className="px-3 py-2 mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Control Panel
                    </h3>
                    <div className="mt-1 space-y-1 bg-white/10 p-3 rounded-lg border border-white/20">
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

                      {/* <NavLink
                        to="payment-settings"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center px-3 py-2 rounded-md text-sm ${handleActiveClass(
                            { isActive }
                          )}`
                        }
                      >
                        <span className="mr-2">⚙️</span> Payment Settings
                      </NavLink> */}

                    </div>
                  </div>
                </div>
              )}
            </nav>
          </div>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-90 bg-[#0a0808]">
        <div className="p-4 min-h-screen">
          {/* Content container with elegant styling */}
          <div className="relative rounded-xl border border-gray-200/20 shadow-lg p-6 backdrop-blur-sm bg-white/5">
            {/* Subtle decorative elements */}
            <div className="absolute -top-1 -right-1 w-16 h-16 border-t-2 border-r-2 border-blue-400/30 rounded-tr-xl"></div>
            <div className="absolute -bottom-1 -left-1 w-16 h-16 border-b-2 border-l-2 border-blue-400/30 rounded-bl-xl"></div>

            {/* White text container for Outlet content */}
            <div className="text-white">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
