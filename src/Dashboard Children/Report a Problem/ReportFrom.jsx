import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FcAddColumn } from "react-icons/fc";
import { LuImageUp } from "react-icons/lu";

const ReportFrom = () => {
  const { user } = useAuth();
  const [image, setImage] = useState();

  const reset = () =>{
    setImage(null);
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="text-[120px] text-blue-500">
          <FcAddColumn />
        </div>
        <p className="text-3xl font-bold text-gray-800 mt-2">
          REPORT A PROBLEM
        </p>
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center mb-8">
        <span className="text-lg sm:text-xl px-6 py-3 mb-3 border rounded-xl bg-[#dcefff] text-gray-800 shadow">
          {user?.email}
        </span>
        <p className="text-lg sm:text-xl px-6 py-4 border rounded-xl bg-[#f0f9ff] text-gray-700 shadow text-center">
          Hello{" "}
          <span className="font-bold text-red-500">{user?.displayName}</span>,
          tell us your problem. <br />
          <span className="text-sm text-gray-500">
            For your safety, do not include any personal information.
          </span>
        </p>
      </div>

      {/* Image Upload Section */}
      <div className="flex flex-col items-center gap-3">
        {/* Clickable Image / Icon */}
        <label
          htmlFor="image"
          className="cursor-pointer flex flex-col items-center"
        >
          {/* Replace LuImageUp with your own image if you want */}
          <div className="text-[80px] text-gray-500 hover:text-blue-500 transition">
            <LuImageUp />
          </div>
          <span className="text-sm mt-1">Click image to upload</span>
        </label>

        {/* Hidden File Input */}
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files[0]) {
              setImage(e.target.files[0]);
              console.log("Uploaded file:", e.target.files[0].name);
            }
          }}
        />

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className="w-1/2 rounded-xl shadow-md"
          />
        )}
      </div>


        <div className="flex gap-3 items-center justify-center m-5">
          <button className="btn btn-primary">Submit Report</button>
          <button className="btn btn-primary" onClick={reset}>Cancel</button>
        </div>

      {/* Message Box */}
      <div className="flex flex-col space-y-2 w-full">
        <label className="label font-semibold text-gray-700">
          Your Message
        </label>
        <textarea
          className="textarea textarea-bordered text-black bg-white w-full h-32 rounded-xl focus:ring-2 focus:ring-blue-400"
          placeholder="Describe your problem..."
        ></textarea>
      </div>
    </div>
  );
};

export default ReportFrom;
