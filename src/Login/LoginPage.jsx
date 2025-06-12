import { useContext } from "react";
import "./loginPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const LoginPage = () => {
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    signIn(username, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User login successfully",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      form.reset();
      navigation(location?.state?.from?.pathname || "");
    });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className="neumorphic neumorphic-card text-black 
  flex flex-col items-center justify-center 
    "
      >
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <form onSubmit={handleLogin} className="card-body">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="neumorphic neumorphic-input p-4 mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="neumorphic neumorphic-input p-4 mb-4"
          />
          <button type="submit" className="neumorphic neumorphic-button p-4 mb-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
