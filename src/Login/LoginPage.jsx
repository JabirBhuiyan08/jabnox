import React from "react";
import "./loginPage.css";

const LoginPage = () => {
  return <div className="h-screen flex items-center justify-center">
  <div className="neumorphic neumorphic-card text-black 
  flex flex-col items-center justify-center 
    ">
    <h1 className="text-3xl font-bold mb-8">
    Login
    </h1>

    <input type="text" placeholder="Username" 
    className="neumorphic neumorphic-input p-4 mb-4"/>
    <input type="password" placeholder="Password" 
    className="neumorphic neumorphic-input p-4 mb-4"/>
    <button className="neumorphic neumorphic-button p-4 mb-3">Login</button>
    </div>
    </div>;
};

export default LoginPage;
