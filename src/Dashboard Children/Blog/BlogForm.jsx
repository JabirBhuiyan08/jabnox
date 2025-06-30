import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const BlogForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
const axiosPublic = useAxiosPublic();


  const onSubmit = async (data) => {
    try{
      const res = await  axiosPublic.post('/blogs', data);
        if(res.data.insertedId){
          alert('Blog added successfully');
        }
    }catch(err){
      console.log(err);
    }
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create New Blog Post</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Title Field */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
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
                message: "Title must be at least 5 characters"
              }
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Author Name*
          </label>
          <input
            type="text"
            id="author"
            {...register("author", { required: "Author name is required" })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category*
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
          )}
        </div>

        {/* Featured Image Upload */}
        <div className="mb-4">
          <label
            htmlFor="featuredImage"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Featured Image
          </label>
          <input
            type="file"
            id="featuredImage"
            accept="image/*"
            {...register("featuredImage")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Content Field */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Post Content*
          </label>
          <textarea
            id="content"
            {...register("content", { 
              required: "Content is required",       
            })}
            rows="10"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your post content here..."
          ></textarea>
          {errors.content && (
            <p className="text-red-500 text-xs mt-1">{errors.content.message}</p>
          )}
        </div>

        {/* Tags Field */}
        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            {...register("tags")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., react, javascript, web-development"
          />
        </div>

        {/* Submit Button */}
        <div className="flex space-x-4">
          
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150"
          >
            Publish Post
          </button>
        </div>
      </Form>
    </div>
  );
};

export default BlogForm;