import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoIosNotifications } from "react-icons/io";
import useAxiosSecure from "../hooks/axiosSecure";
import LoadingSpinner from "../Components/LoadingSpinner";
import useAdmin from "../hooks/UseAdmin";
import { AwesomeButton } from "react-awesome-button";
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "../../src/index.css";
import Swal from "sweetalert2";

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
    isActive ? "!text-white !text-xl !font-bold" : "!text-gray-300";

  const handleLogout = async () => {
    try {
      try {
        const result = await Swal.fire({
          title:
            '<span style="font-size: 1.5rem; font-weight: 600; color: #fff;">Confirm Logout</span>',
          html: '<div style="font-size: 1rem; color: rgba(255, 255, 255, 0.8);">You will be securely signed out of your account.</div>',
          icon: "warning",
          iconColor: "#ff9f43",
          background: "#1a1a2e", // Dark premium background
          showCancelButton: true,
          confirmButtonColor:
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient purple
          cancelButtonColor:
            "linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)", // Gradient dark blue
          confirmButtonText:
            '<span style="padding: 0.5rem 1.5rem;">Yes, Logout</span>',
          cancelButtonText:
            '<span style="padding: 0.5rem 1.5rem;">Cancel</span>',
          customClass: {
            popup: "swal2-premium-popup", // Extra styling if needed
            confirmButton: "swal2-premium-confirm-btn",
            cancelButton: "swal2-premium-confirm-btn",
          },
          backdrop: `
        rgba(10, 10, 20, 0.8)
    `,
          showClass: {
            popup: "animate__animated animate__fadeIn",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOut",
          },
          buttonsStyling: true,
          reverseButtons: true,
          focusCancel: true,
          allowOutsideClick: false,
        });
        if (!result.isConfirmed) {
          return;
        }
      } catch (error) {
        console.log(error);
      }

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
          isMenuOpen ? "block fixed inset-0 z-20 pt-28 bg-violet-800" : "hidden"
        } md:block md:fixed md:top-0 md:bottom-0 md:left-0 w-full md:w-64 bg-violet-800 text-white shadow-xl overflow-y-auto`}
      >
        <div className="flex flex-col h-full">
          {/* User Profile Section */}
          <div className="p-4 border-b border-violet-700 sticky top-0 bg-violet-800 z-10">
            <div className="flex items-center gap-3">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium truncate">{user?.displayName}</p>
                  {isAdmin && (
                    <span className="bg-[#960018] text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                      Admin
                    </span>
                  )}
                </div>
                <p className="text-sm text-violet-200 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Scrollable Menu Content */}
          <div className="flex-1 overflow-y-auto">
            <ul className="menu p-4 text-lg gap-3">
              {/* Common Routes for All Users - Blue Buttons */}
              <div className="flex lg:flex-col md:flex-col gap-2">
                <div>
                  <div className="divider before:bg-[#0c72a1] after:bg-[#0c72a1] text-[#ffccd5] my-2">
                    User Panel
                  </div>
                  <li>
                    <AwesomeButton
                      size="large"
                      type="primary"
                      className="w-full !active:scale-95 !hover:scale-100"
                    >
                      <NavLink
                        to="/dashboard"
                        onClick={() => setIsMenuOpen(false)}
                        className={handleActiveClass}
                      >
                        Dashboard
                      </NavLink>
                    </AwesomeButton>
                  </li>
                  <li>
                    <AwesomeButton
                      size="large"
                      type="primary"
                      className="w-full !active:scale-95 !hover:scale-100"
                    >
                      <NavLink
                        to="portfolios"
                        onClick={() => setIsMenuOpen(false)}
                        className={handleActiveClass}
                      >
                        Jabnox's Portfolios
                      </NavLink>
                    </AwesomeButton>
                  </li>
                  <li>
                    <AwesomeButton
                      size="large"
                      type="primary"
                      className="w-full !active:scale-95 !hover:scale-100"
                    >
                      <NavLink
                        to="dashboard-reviews"
                        onClick={() => setIsMenuOpen(false)}
                        className={handleActiveClass}
                      >
                        Reviews
                      </NavLink>
                    </AwesomeButton>
                  </li>
                  <li>
                    <AwesomeButton
                      size="large"
                      type="primary"
                      className="w-full !active:scale-95 !hover:scale-100"
                    >
                      <NavLink
                        to="blogs"
                        onClick={() => setIsMenuOpen(false)}
                        className={handleActiveClass}
                      >
                        Blogs
                      </NavLink>
                    </AwesomeButton>
                  </li>
                </div>

                {/* Admin Section */}
                <div>
                  {isAdmin && (
                    <>
                      <div className="divider before:bg-[#960018] after:bg-[#960018] text-[#ffccd5] my-2">
                        Admin Panel
                      </div>

                      {[
                        { to: "projects", label: "All Users Projects" },
                        { to: "portfolio-form", label: "Portfolio Form" },
                        { to: "blog-form", label: "Post a Blog" },
                        { to: "projects-form", label: "Projects Form" },
                        {
                          to: "new-dashboard-contact",
                          label: (
                            <div className="flex items-center gap-2">
                              <div>New Contacts</div>
                              {contacts.filter((c) => c.read === false).length >
                                0 && (
                                <span className="flex items-center justify-center bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                  <IoIosNotifications className="mr-1" />
                                  {
                                    contacts.filter((c) => c.read === false)
                                      .length
                                  }
                                </span>
                              )}
                            </div>
                          ),
                        },
                        { to: "dashboard-users", label: "Users" },
                        { to: "note-form", label: "Sent Note to user" },
                      ].map((item, index) => (
                        <li key={index}>
                          <AwesomeButton
                            size="large"
                            type="secondary"
                            className="w-full admin-btn !active:scale-95 !hover:scale-100 [--button-secondary-color:#960018] [--button-secondary-color-dark:#7a0014]"
                          >
                            <NavLink
                              to={item.to}
                              onClick={() => setIsMenuOpen(false)}
                              className={handleActiveClass}
                            >
                              {item.label}
                            </NavLink>
                          </AwesomeButton>
                        </li>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </ul>
          </div>

          {/* Logout Button - Sticky Bottom */}
          <div className="sticky bottom-0 bg-violet-800 p-4 border-t border-violet-700">
            <button
              onClick={handleLogout}
              className="btn bg-red-600 text-white w-full"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 bg-gray-50 min-h-screen md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
