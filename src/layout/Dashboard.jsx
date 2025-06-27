import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import logo from "../assets/logo.png";
import { useContacts } from "../hooks/ContactsContext";
import { IoIosNotifications } from "react-icons/io";

const Dashboard = () => {
  const { logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { unreadCount } = useContacts();


  // Function to handle active class for NavLink
  // This function returns a string that will be used as the className for the NavLink
  const handleActiveClass = ({ isActive }) =>
    isActive
      ? "bg-violet-700 text-white font-medium shadow-md"
      : "text-gray-300 hover:bg-violet-600 hover:text-white transition-all duration-200 ease-in-out transform hover:scale-[1.02]";
 
//  // Function to handle logout
      const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Nav Toggle Button */}
      <div className="bg-violet-800 p-4 md:hidden flex justify-between items-center text-white">
        <div className="flex flex-col items-center justify-center py-4 bg-violet-800 text-white">
          <img src={logo} alt="Logo" className="w-28 sm:w-32 mb-2" />
          <h1 className="text-base sm:text-lg font-semibold tracking-wide uppercase">
            Dashboard
          </h1>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-violet-800 text-white`}
      >
        <ul className="menu p-4 text-lg gap-2">
          {/* <li>
            <NavLink className={handleActiveClass} to="" onClick={() => setIsMenuOpen(false)}>
              Profile
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="portfolios"
              className={handleActiveClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolios
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
              to="dashboard-reviews"
              className={handleActiveClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="" className={handleActiveClass} onClick={() => setIsMenuOpen(false)}>
              Clients Certificates
            </NavLink>
          </li> */}
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
              to="blogs"
              className={handleActiveClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard-contacts"
              className={handleActiveClass}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <div>Contacts </div>
                <span className="flex items-center justify-center text-red-400 text-sm">
                  <IoIosNotifications /> {unreadCount > 0 && `(${unreadCount})`}
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="btn bg-red-500 hover:bg-red-600 text-white mt-6"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
