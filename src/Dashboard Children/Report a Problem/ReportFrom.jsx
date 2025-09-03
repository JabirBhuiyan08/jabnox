import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FcAddColumn } from "react-icons/fc";
import { LuImageUp } from "react-icons/lu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useImageUpload from "../../hooks/useImageUpload";
import Swal from "sweetalert2";
import ShowReport from "./ShowReport";

const ReportFrom = () => {
  const { user } = useAuth();
  const [image, setImage] = useState();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const { uploadImage } = useImageUpload();

  const clearImage = () => {
    setImage(null);
    reset();
  };

  const applyMutation = useMutation({
    mutationFn: async (reportData) => {
      const res = await axiosPublic.post("/report", reportData);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Report submitted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      clearImage();
      queryClient.invalidateQueries({ queryKey: ["report"] });
    },
    onError: (error) => {
      console.error("Error submitting report:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    },
  });
  const onSubmit = async (data) => {
    if (image) {
      const imageUrl = await uploadImage(image);
      data.image = imageUrl;
    }
    applyMutation.mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="w-full max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-white/20">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="text-[120px] text-blue-500 drop-shadow-lg">
              <FcAddColumn />
            </div>
            <p className="text-3xl font-extrabold text-gray-200/80 mt-2">
              REPORT A PROBLEM
            </p>
          </div>

          {/* User Info */}
          <div className="flex flex-col items-center mb-8 space-y-3">
            <input
              type="email"
              defaultValue={user?.email}
              {...register("email", { required: true })}
              className="w-72 sm:w-80 px-6 py-3 border rounded-2xl bg-white/10 text-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <p className="text-center text-gray-200 text-lg sm:text-xl px-6 py-4 border rounded-2xl bg-white/10 shadow-md">
              Hello{" "}
              <span className="font-bold text-red-500">
                {user?.displayName}
              </span>
              , tell us your problem. <br />
              <span className="text-sm text-gray-400">
                For your safety, do not include any personal information.
              </span>
            </p>
          </div>

          {/* Message Box */}
          <div className="flex flex-col w-full mb-6 ">
            <textarea
              placeholder="Tell us about your problem"
              {...register("message", { required: true })}
              className="w-full h-32 px-4 py-3 rounded-2xl border border-gray-200/20 bg-white/10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md resize-none"
            ></textarea>
          </div>

          {/* Image Upload Section */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <label
              htmlFor="image"
              className="cursor-pointer flex flex-col items-center"
            >
              <div className="text-[80px] text-gray-400 hover:text-blue-500 transition-all duration-300">
                <LuImageUp />
              </div>
              <span className="text-sm mt-2 text-gray-500">
                Click image to upload
              </span>
            </label>

            <input
              type="file"
              id="image"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage(e.target.files[0]);
                }
              }}
            />

            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                className="w-1/2 sm:w-64 rounded-2xl shadow-lg border border-gray-200/20  mt-2"
              />
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">
            <button type="submit" className="btn btn-primary w-40 sm:w-auto">
              Submit Report
            </button>
            <button
              type="button"
              className="btn btn-secondary w-40 sm:w-auto"
              onClick={clearImage}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>

      <ShowReport />
    </div>
  );
};

export default ReportFrom;
