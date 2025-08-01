import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoIosNotifications } from "react-icons/io";
import UseAdmin from "../hooks/UseAdmin";
import useAxiosSecure from "../hooks/axiosSecure";


const Dashboard = () => {
  const { logOut, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 const axiosSecure = useAxiosSecure();
const [contacts, setContacts] = useState([]);

useEffect(()=>{
  const fetchContacts = async () => {
    try {
      const response = await axiosSecure.get('/contact');
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  fetchContacts();
})




 
  //todo: get isAdmin value from the database

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

  const [isAdmin] = UseAdmin();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Nav Toggle Button - Enhanced */}
      <div className="bg-violet-900 p-4 md:hidden flex justify-between items-center text-white sticky top-0 z-50">
        <div className="flex flex-col items-center ">
          <img src={logo} alt="Logo" className="w-24 mb-1" />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        {/* Toggle Button - Fixed */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md hover:bg-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes className="text-white text-4xl" /> // Using text-4xl instead of size prop
          ) : (
            <FaBars className="text-white text-4xl" />
          )}
        </button>
      </div>

      {/* Sidebar - Enhanced */}
      <div
        className={`${
          isMenuOpen ? "block fixed inset-0 z-20 pt-28" : "hidden"
        } md:block md:fixed md:top-0 md:bottom-0 md:left-0 w-full md:w-64 bg-violet-800 text-white shadow-xl`}
      >
        <ul className="menu p-4 text-lg gap-2 h-full flex flex-col">
          <div className="flex items-center gap-2">
            <img
              src={user?.photoURL}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            {user?.displayName}
          </div>
          {/* Projects */}
          <li>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                `${handleActiveClass({
                  isActive,
                })} transition-colors duration-200 hover:bg-violet-700 rounded-lg`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              My Projects
            </NavLink>
          </li>
          {/* Jabnox's Portfolios */}

          <li>
            <NavLink
              to="portfolios"
              className={({ isActive }) =>
                `${handleActiveClass({
                  isActive,
                })} transition-colors duration-200 hover:bg-violet-700 rounded-lg`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Jabnox's Portfolios
            </NavLink>
          </li>

          {/* Reviews */}
          <li>
            <NavLink
              to="dashboard-reviews"
              className={({ isActive }) =>
                `${handleActiveClass({
                  isActive,
                })} transition-colors duration-200 hover:bg-violet-700 rounded-lg`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </NavLink>
          </li>

          {/* blogs */}
          <li>
            <NavLink
              to="blogs"
              className={({ isActive }) =>
                `${handleActiveClass({
                  isActive,
                })} transition-colors duration-200 hover:bg-violet-700 rounded-lg`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </NavLink>
          </li>

          <div className="divider"></div>

{isAdmin == true && (
  <>
            {/* Portfolio Form */}
            <li>
              <NavLink
                to="portfolio-form"
                className={({ isActive }) =>
                  `${handleActiveClass({
                    isActive,
                  })} transition-colors duration-200 hover:bg-violet-700 rounded-lg`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio Form
              </NavLink>
            </li>

            {/* blog form */}
            <li>
              <NavLink
                to="blog-form"
                className={({ isActive }) =>
                  `${handleActiveClass({
                    isActive,
                  })} transition-colors duration-200 hover:bg-violet-700 rounded-lg`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Post a Blog
              </NavLink>
            </li>

            {/* Projects Form */}
            <li>
              <NavLink
                to="projects-form"
                className={({ isActive }) =>
                  `${handleActiveClass({
                    isActive,
                  })} transition-colors duration-200 hover:bg-violet-700 rounded-lg`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects Form
              </NavLink>
            </li>

            
            {/* New contact */}
            <li>
              <NavLink
                to="new-dashboard-contact"
                className={({ isActive }) =>
                  `${handleActiveClass({
                    isActive,
                  })} transition-colors duration-200 hover:bg-violet-700 rounded-lg`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <div>New Contacts</div>
                  <span className="flex items-center justify-center bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    <IoIosNotifications className="mr-1" />
                    {contacts.filter(c => c.read === false).length}

                  </span>
                </div>
              </NavLink>
            </li>

            {/* Users - Conditional Rendering for Admin */}
            <li>
              <NavLink
                to="dashboard-users"
                className={({ isActive }) =>
                  `${handleActiveClass({
                    isActive,
                  })} transition-colors duration-200 hover:bg-violet-700 rounded-lg`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <div>Users</div>
                </div>
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

      {/* Main Content - Enhanced */}
      <div className="flex-1 p-4 md:p-8 bg-gray-50 min-h-screen md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
