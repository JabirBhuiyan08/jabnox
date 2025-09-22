import React from "react";
import logoX from "../assets/logo X.png";
import logo from "../assets/logo.png";
import img from "../../src/assets/loginbg.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import GoogleSignIn from "../Components/GoogleSignIn/GoogleSignIn";

const Header = () => {
  const { user } = useAuth();

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <Helmet>
        <title>JABNOX | Digital Services, Web Design & SEO Solutions</title>
        <meta
          name="description"
          content="JABNOX offers expert digital services including custom web design, SEO, and branding solutions to help businesses grow online. Discover why JABNOX is your trusted digital partner."
        />
        <meta
          name="keywords"
          content="jabnox,JABNOX, Jabnox, JABNOX digital services, jabnox web design, jabnox SEO, jabnox branding, jabnox.com, digital marketing jabnox, Jabir Bhuiyan, Sabbir Md Nayan Khan"
        />
      </Helmet>
      <div className="flex flex-col-reverse h-150 md:flex-row-reverse items-center justify-center md:justify-evenly text-center p-4 md:p-8 gap-4 md:gap-10">
        {/* Image on the Left */}
        <img
          src={logoX}
          alt="Header Image"
          className="w-40 md:w-80 rounded-md shadow-md lg:mt-10 md:mt-20 -mt-32 opacity-76"
        />
        {/* Text & Logo */}
        <div className="text-center md:text-left z-40">
          <h1 className="text-3xl md:text-6xl font-bold">
            <span className="text-5xl md:text-8xl text-cyan-500">H!</span>{" "}
            Welcome To
          </h1>
          <div className="flex flex-col items-center">
            {/* Logo Image */}
            <img
              src={logo}
              alt="Logo"
              className="w-40 md:w-52 lg:w-60 mx-auto md:mx-0"
            />
          </div>

          <div className="flex flex-col items-center">
            {/* Tagline */}
            <div className="text-sm md:text-base text-cyan-500 font-semibold mt-2">
              YOUR ONLINE PLATFORM HELPER
            </div>
            <Typewriter
              words={[
                "MERN Stack Developer",
                "React Developer",
                "Full Stack Engineer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          {!user && (
            <span className="mx-auto flex flex-col items-center">
              {" "}
              <GoogleSignIn></GoogleSignIn>{" "}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
