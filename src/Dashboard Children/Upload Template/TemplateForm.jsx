import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/axiosSecure";
import useImageUpload from "../../hooks/useImageUpload";

const TemplateForm = () => {
  const [image, setImage] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { uploadImage } = useImageUpload();

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      additionalServices: [{ additionalServices: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalServices",
  });

  const mutation = useMutation({
    mutationFn: async (template) => {
      const res = await axiosSecure.post("/template", template);
      return res.data;
    },
  });

  const onsubmit = async (data) => {
    if (image) {
      const imageUrl = await uploadImage(image);
      data.image = imageUrl;
    }
    mutation.mutate(data);
    if (mutation.isSuccess) {
      setImage(null);
      reset();
      alert("Template uploaded successfully");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl ring-1 ring-white/30 p-10 relative">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white drop-shadow-lg">
          Upload Template
        </h1>

        <form
          className="grid grid-cols-1 gap-6"
          onSubmit={handleSubmit(onsubmit)}
        >
          {/* Image Upload */}
          <div className="flex items-center justify-center w-full">
            {!image ? (
              <label
                htmlFor="projectImage"
                className="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-gray-400/60 rounded-2xl cursor-pointer hover:bg-white/10 hover:border-blue-400 transition-all duration-300 ease-in-out"
              >
                <svg
                  className="w-12 h-12 mb-3 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mb-1 text-sm text-gray-200">
                  <span className="font-semibold">Click to upload</span> or drag
                  & drop
                </p>
                <p className="text-xs text-gray-400">PNG, JPG, GIF (max 5MB)</p>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="projectImage"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            ) : (
              <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => setImage(null)}
                  className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 shadow-lg transition"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Inputs */}
          <input
            type="text"
            placeholder="Template Name"
            {...register("templateName", { required: true })}
            className="p-4 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="text"
            placeholder="Description"
            {...register("disction", { required: true })}
            className="p-4 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
          />

          <input
            type="text"
            placeholder="Template Price"
            {...register("templatePrice", { required: true })}
            className="p-4 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
          />

          {/* Additional Services */}
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Additional Service"
                {...register(`additionalServices.${index}.additionalServices`, {
                  required: true,
                })}
                className="flex-1 p-4 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow transition"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ additionalServices: "" })}
            className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add Additional Service
          </button>

          <input
            type="text"
            placeholder="Preview Link"
            {...register("previewLink", { required: true })}
            className="p-4 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 py-4 px-6 text-lg font-bold bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-2xl shadow-xl transition transform hover:scale-[1.02]"
          >
            🚀 Submit Template
          </button>
        </form>
      </div>
    </div>
  );
};

export default TemplateForm;
