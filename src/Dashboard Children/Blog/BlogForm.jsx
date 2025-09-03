import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import useAxiosSecure from "../../hooks/axiosSecure";
import useImageUpload from "../../hooks/useImageUpload";

const BlogForm = () => {


  const { uploadImage } = useImageUpload()



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const [image, setImage] = useState(null);

  const onSubmit = async (data) => {
    try {
      if (image){
        const imageUrl = await uploadImage(image);
        if(!imageUrl){
          alert('Failed to upload image');
          return;
        }
        data.image = imageUrl;
        console.log(data);

      }

      const res = await axiosSecure.post("/blogs", data);
      if (res.data.insertedId) {
        alert("Blog added successfully");
      }
    } catch (err) {
      console.log(err);
    }
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/10 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create New Blog Post</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Title Field */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-200 text-sm font-bold mb-2"
          >
            Post Title*
          </label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 5,
                message: "Title must be at least 5 characters",
              },
            })}
            className="w-full px-3 py-2 border border-gray-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter post title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Author Field */}
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-200 text-sm font-bold mb-2"
          >
            Author Name*
          </label>
          <input
            type="text"
            id="author"
            {...register("author", { required: "Author name is required" })}
            className="w-full px-3 py-2 border border-gray-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.author && (
            <p className="text-red-500 text-xs mt-1">{errors.author.message}</p>
          )}
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-200 text-sm font-bold mb-2"
          >
            Category*
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className="w-full text-gray-200 bg-white/10 px-3 py-2 border border-gray-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" className="text-gray-700">Select a category</option>
            <option value="technology" className="text-gray-700">Technology</option>
            <option value="business" className="text-gray-700">Business</option>
            <option value="health" className="text-gray-700">Health</option>
            <option value="entertainment" className="text-gray-700">Entertainment</option>
            <option value="sports" className="text-gray-700">Sports</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Featured Image Upload */}
        <div className="mb-6">
          <label
            htmlFor="featuredImage"
            className="block text-gray-200 text-sm font-semibold mb-2"
          >
            Featured Image
          </label>

          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="featuredImage"
              className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50/10 hover:text-gray-700 hover:bg-gray-100 transition relative overflow-hidden"
            >
              {!image ? (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400 hover:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6h.1a5 5 0 010 10H7z"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag & drop
                  </p>
                  <p className="text-xs text-gray-400">
                    PNG, JPG, JPEG (max. 5MB)
                  </p>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="object-cover w-40 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setImage(null)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              )}

              <input
                id="featuredImage"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
        </div>

        {/* Content Field */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-200 text-sm font-bold mb-2"
          >
            Post Content*
          </label>
          <textarea
            id="content"
            {...register("content", {
              required: "Content is required",
            })}
            rows="10"
            className="w-full px-3 py-2 border border-gray-200/20  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your post content here..."
          ></textarea>
          {errors.content && (
            <p className="text-red-500 text-xs mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        {/* Tags Field */}
        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-gray-200 text-sm font-bold mb-2"
          >
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            {...register("tags")}
            className="w-full px-3 py-2 border border-gray-200/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., react, javascript, web-development"
          />
        </div>

        {/* Submit Button */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-200 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150"
          >
            Publish Post
          </button>
        </div>
      </Form>
    </div>
  );
};

export default BlogForm;
