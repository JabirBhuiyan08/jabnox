import GoogleSignIn from "../Components/GoogleSignIn/GoogleSignIn";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import { useNavigate, useLocation } from "react-router-dom";
// import Swal from "sweetalert2";

const LoginPage = () => {
  // const { signIn } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const location = useLocation();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const username = form.username.value;
  //   const password = form.password.value;

  //   signIn(username, password).then((result) => {
  //     Swal.fire({
  //       title: "Login Successful",
  //       icon: "success",
  //       timer: 1500,
  //       showConfirmButton: false,
  //     });
  //     form.reset();
  //     navigate(location?.state?.from?.pathname || "/");
  //   });
  // };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="bg-[#e0e5ec] rounded-2xl p-10 w-full max-w-md shadow-[9px_9px_20px_#a3b1c6,-9px_-9px_20px_#ffffff]
        flex flex-col items-center"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Login</h2>

        {/* <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-4 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[inset_6px_6px_12px_#c5c9d3,inset_-6px_-6px_12px_#ffffff] focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-4 rounded-xl bg-[#e0e5ec] shadow-inner shadow-[inset_6px_6px_12px_#c5c9d3,inset_-6px_-6px_12px_#ffffff] focus:outline-none"
            required
          />

          <button
            type="submit"
            className="p-4 mt-2 bg-[#e0e5ec] rounded-xl font-medium shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] hover:shadow-inner transition"
          >
            Login
          </button>
        </form> */}

        

        <GoogleSignIn />
      </div>
    </div>
  );
};

export default LoginPage;
