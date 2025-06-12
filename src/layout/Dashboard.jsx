import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const{logOut} = useAuth();

    const handleLogout = async() => {
         await logOut();
    }


  return (
    <div className="flex">
      <div className="w-65 min-h-screen bg-violet-800 ">
        <ul className="menu p-4 text-lg text-white">
          <>
            <li>
              <NavLink to="">
                <FaHome></FaHome> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <FaCalendar></FaCalendar> Portfolios
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard-reviews">
                <FaAd></FaAd> Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <FaShoppingCart></FaShoppingCart> Clients Certificates
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <FaList></FaList> contacts
              </NavLink>
            </li>
            <li>
                <button onClick={handleLogout} className="btn bg-red-400 text-white mt-10">Logout</button>
            </li>
          </>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
