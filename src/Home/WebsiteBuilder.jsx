import React from "react";
import Button from "./Button";
import picture1 from "../assets/Picture1.png";
import picture2 from "../assets/Picture2.png";
import picture3 from "../assets/Picture3.png";
import { Link } from "react-router-dom";

const WebsiteBuilder = () => {
  return (
    <div className="grid grid-cols-1  gap-10 pt-10 px-4 pb-10">
      {/* Website Builder */}
      <div className="flex flex-col-reverse md:flex-row lg:justify-center items-center gap-10 border-b-2 pb-20">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Website Builder</h1>
          <p className="text-gray-600 mt-2">
            I provide professional website development services using WordPress
            or custom coding, <br />
            ensuring a premium, responsive, and user-friendly design.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-5">
            <Link to="/coding">
              <Button text="<Coding> MERN <Coding/>" variant="mern" />
            </Link>
            <Link to="/wordpress">
              <Button text="WordPress" variant="wordpress" />
            </Link>
          </div>
        </div>
        <img
          src={picture1}
          alt=""
          className="w-3/5 md:w-1/5 border-amber-200 border-8 rounded-lg"
        />
      </div>

      {/* Social Booster */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center lg:justify-center gap-10 border-b-2 pb-20">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Social Booster</h1>
          <p className="text-gray-600 mt-2">
            Boost likes, followers, subscribers, and website traffic on all
            social platforms with our premium service. <br /> Get fast, reliable
            growth today!
          </p>
          <Link
            to="/social-booster"
            className="flex justify-center md:justify-start pt-5"
          >
            <Button text="Order Now" />
          </Link>
        </div>
        <img
          src={picture2}
          alt=""
          className="w-3/5 md:w-1/5 border-amber-200 border-8 rounded-lg"
        />
      </div>

      {/* Designer */}
      <div className="flex flex-col-reverse md:flex-row items-center lg:justify-center gap-10 border-b-2 pb-20">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Designer</h1>
          <p className="text-gray-600 mt-2">
            JABNOX.com creates professional logo designs, posters, online
            posters, and <br />
            book covers with premium and unique designs.
          </p>
          <Link
            to="/graphic-design"
            className="flex justify-center md:justify-start pt-5"
          >
            <Button text="Order Now" />
          </Link>
        </div>
        <img
          src={picture3}
          alt=""
          className="w-3/5 md:w-1/5 border-amber-200 border-8 rounded-lg"
        />
      </div>
    </div>
  );
};

export default WebsiteBuilder;
