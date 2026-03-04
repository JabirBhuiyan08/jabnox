import React from "react";
// import logoX from "../assets/logo X.png";
// import logo from "../assets/logo.png";
import img from "../../src/assets/loginbg.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import GoogleSignIn from "../Components/GoogleSignIn/GoogleSignIn";

const Header = () => {
  const { user } = useAuth();

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "darken",
        minHeight: "80vh",
        height: "90vh",
      }}
    >
      {/* Enhanced Overlay Effects */}
      <div className="bg-gradient-to-br from-slate-900/40 via-purple-900/20 to-blue-900/30">
        {/* Animated Grid Pattern */}
        <div className="opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Helmet>
        <title>jabnox | Creative Tech Solutions & Web Development</title>
        <meta
          name="description"
          content="jabnox offers expert web development, experience-focused design, and creative tech solutions. Your trusted partner for digital innovation."
        />
        <meta
          name="keywords"
          content="jabnox, web development, tech solutions, creative design, digital platform"
        />
      </Helmet>

      <div className="flex flex-col justify-center items-center container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center justify-center text-center w-full py-8 sm:py-12 lg:py-16">
          {/* Main Brand */}
          <div className="w-full max-w-4xl mx-auto">
            {/* Welcome Text */}
            <div className="mb-6 mt-20 sm:mb-8 lg:mb-10">
              {/* <div className="text-lg sm:text-xl lg:text-2xl text-cyan-400 font-light mb-4 tracking-widest">
                Hi! Welcome to your online platform helper.
              </div> */}

              <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black text-white leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 animate-gradient-x">
                  Jabnox
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-light block mt-2">
                  .com
                </span>
              </h1>
            </div>

            {/* Rotating Services */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <div className="text-xl sm:text-2xl lg:text-3xl text-white font-medium min-h-[40px] sm:min-h-[48px] lg:min-h-[56px] flex items-center justify-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                  <Typewriter
                    words={[
                      "Web Development",
                      "Experience-Focused Design",
                      "Creative Tech Solutions",
                      "Digital Innovation",
                      "Future-Ready Platforms",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </div>
              </div>
            </div>

            {/* Google Sign In Only */}
            {!user && (
              <div className="flex flex-col items-center space-y-6 mt-8 sm:mt-10 lg:mt-12">
                {/* Enhanced Google Sign In */}
                <div className="flex flex-col items-center bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl w-full ">
                  <span>
                    <h3 className="text-xl font-semibold text-white mb-6 text-center">
                      Welcome to Jabnox
                    </h3>

                    <p className="text-gray-300 text-sm mb-6 text-center">
                      Join thousands of developers and creators building the
                      future with jabnox's cutting-edge platform.
                    </p>
                  </span>

                  {/* Google Sign In Button Only */}
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <GoogleSignIn />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Enhanced Scroll Indicator */}
        <div className="animate-bounce  mb-20">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm">Explore More</span>
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute top-20 left-10 text-cyan-400/20 text-4xl animate-float">
        {"</>"}
      </div>
      <div className="absolute top-40 right-16 text-purple-400/20 text-3xl animate-float delay-1000">
        {"{}"}
      </div>
      <div className="absolute bottom-32 left-20 text-blue-400/20 text-2xl animate-float delay-500">
        {"<>"}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;
