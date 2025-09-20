import React from 'react';
import logo from "../assets/logo.png";

const LoadingSpinner = () => {
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
};

export default LoadingSpinner;