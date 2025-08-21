import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleSignIn = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigation = useNavigate();
  const axiosPublic = useAxiosPublic();

  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Welcome Back!',
      html: `
        <div style="
          color: #e2e8f0;
          font-size: 0.95rem;
          margin-top: 0.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(74, 222, 128, 0.2);
        ">
          You've successfully logged in
        </div>
        <div style="
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          margin-top: 1rem;
          overflow: hidden;
        ">
          <div style="
            height: 100%;
            width: 100%;
            background: linear-gradient(90deg, #4ade80, #22d3ee);
            border-radius: 2px;
            animation: swalProgress 1500ms linear forwards;
          "></div>
        </div>
      `,
      icon: 'success',
      iconColor: '#4ade80',
      background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)',
      color: '#ffffff',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: false,
      backdrop: `
        rgba(10,10,20,0.8)
        url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='0.5' fill='%2342b883' fill-opacity='0.2'/%3E%3Ccircle cx='10' cy='10' r='0.5' fill='%2342b883' fill-opacity='0.2'/%3E%3Ccircle cx='17' cy='17' r='0.5' fill='%2342b883' fill-opacity='0.2'/%3E%3C/svg%3E")
      `,
      willOpen: () => {
        const style = document.createElement('style');
        style.textContent = `
          @keyframes swalProgress {
            0% { width: 0; }
            100% { width: 100%; }
          }
        `;
        document.head.appendChild(style);
      }
    });
  };

  const showErrorAlert = (error) => {
    Swal.fire({
      title: 'Login Failed',
      html: `
        <div style="
          color: #fecaca;
          font-size: 0.95rem;
          margin: 0.5rem 0 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(248, 113, 113, 0.2);
        ">
          ${error.message}
        </div>
        <button id="swalRetryBtn" style="
          background: linear-gradient(90deg, #ef4444, #f97316);
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 6px;
          margin-top: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
        ">
          Try Again
        </button>
      `,
      icon: 'error',
      iconColor: '#ef4444',
      background: 'linear-gradient(145deg, #1a1a2e 0%, #3a1b2e 100%)',
      showConfirmButton: false,
      showCloseButton: true,
      closeButtonHtml: `
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="#f87171" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      `,
      backdrop: `
        rgba(20,10,15,0.9)
        url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='0.5' fill='%23ef4444' fill-opacity='0.2'/%3E%3Ccircle cx='10' cy='10' r='0.5' fill='%23ef4444' fill-opacity='0.2'/%3E%3Ccircle cx='17' cy='17' r='0.5' fill='%23ef4444' fill-opacity='0.2'/%3E%3C/svg%3E")
      `,
      didOpen: () => {
        const btn = document.getElementById('swalRetryBtn');
        btn.onclick = () => {
          Swal.close();
          handleGoogleSignIn();
        };
        btn.onmouseenter = () => {
          btn.style.transform = 'translateY(-2px)';
          btn.style.boxShadow = '0 4px 8px rgba(239, 68, 68, 0.3)';
        };
        btn.onmouseleave = () => {
          btn.style.transform = '';
          btn.style.boxShadow = '';
        };
      }
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = {
          email: result.user?.email,
          name: result.user?.displayName,
        };

        if (user) {
          navigation("/dashboard");
        }

        showSuccessAlert();
        
        axiosPublic.post("/users", user)
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => {
        console.log(error);
        showErrorAlert(error);
      });
  };

  return (
    <div className="w-80 mt-4 shadow-xl">
      <motion.button
        onClick={handleGoogleSignIn}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-3 px-6 py-3.5
        rounded-xl border border-gray-200 dark:border-gray-600
        bg-blue-600 dark:bg-gray-800 hover:bg-blue-500/90 dark:hover:bg-gray-700/90
        transition-all duration-200 ease-out
        shadow-sm hover:shadow-md
        text-gray-800 dark:text-gray-100 font-medium tracking-wide
        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1
        group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12" />
        
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          <FaGoogle className="text-[#4285F4] text-xl bg-white w-10 h-10 p-2 rounded-full " />
        </motion.div>
        
        <span className="relative text-white">
          Sign in with Google
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 
            group-hover:w-full transition-all duration-300 ease-out" />
        </span>
      </motion.button>
    </div>
  );
};

export default GoogleSignIn;