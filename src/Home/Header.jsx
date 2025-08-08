import React from "react";
import img1 from "../assets/img1.jpg";
import logo from "../assets/logo.png";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";


const Header = () => {

  return (
    <div className="flex flex-col-reverse  md:flex-row items-center justify-center md:justify-evenly text-center p-4 md:p-8 gap-4 md:gap-10">
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
      
      {/* Image on the Left */}
      <img
        src={img1}
        alt="Header Image"
        className="w-96 md:w-60 lg:w-xl rounded-md shadow-md lg:mt-10 md:mt-20 -mt-32 opacity-45"
      />
      {/* Text & Logo */}
      <div className="text-center md:text-left z-40">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-5xl md:text-6xl text-cyan-500">H!</span> Welcome
          To
        </h1>

        {/* Logo Image */}
        <img
          src={logo}
          alt="Logo"
          className="w-40 md:w-52 lg:w-60 mx-auto md:mx-0"
        />

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
     
    </div>
  );
};

export default Header;
