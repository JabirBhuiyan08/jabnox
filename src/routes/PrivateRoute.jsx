import { Children } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import logo from "../assets/logo.png";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-black">
        <img src={logo} alt="" className="w-40" />
        <div className="flex">
          <span className="loading loading-ball loading-xl text-[#10f1ff]"></span>
          <span className="loading loading-ball loading-xl text-white"></span>
          <span className="loading loading-ball loading-xl text-[#ff0808]"></span>
          <span className="loading loading-ball loading-xl text-[#10f1ff]"></span>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
