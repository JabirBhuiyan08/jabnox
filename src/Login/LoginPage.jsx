import React from "react";
import "./loginPage.css";
import { useParams } from "react-router-dom";

const LoginPage = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className="neumorphic neumorphic-card text-black 
  flex flex-col items-center justify-center 
    "
      >
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <form className="card-body">
          <input
            type="text"
            name="Username"
            placeholder="Username"
            className="neumorphic neumorphic-input p-4 mb-4"
          />

          <input
            type="password"
            name="Password"
            placeholder="Password"
            className="neumorphic neumorphic-input p-4 mb-4"
          />
        </form>

        <button className="neumorphic neumorphic-button p-4 mb-3">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
