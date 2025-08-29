import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/axiosSecure";

const UploadService = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const mutation = useMutation({
    mutationFn: (data) => axiosSecure.post("/service", data),
    onSuccess: (res) => {
      if (res.data.insertedId) {
        alert("Service added successfully");
        reset();
      }
    },
  });

  const onSubmit = async (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Upload Service</h1>
        <p className="text-gray-500 mt-2">
          Fill out the details below to add a new service
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter service name"
            className="w-full input input-bordered text-black"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Enter a short description"
            className="w-full textarea textarea-bordered text-black"
            rows="3"
          />
        </div>

        {/* Badge */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Badge
          </label>
          <input
            {...register("badge")}
            type="text"
            placeholder="Ex: Free, Basic, Standard, Premium"
            className="w-full input input-bordered text-black"
          />
        </div>

        {/* Pricing */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Basic Price
              </label>
              <input
                {...register("BasicPrice")}
                type="number"
                placeholder="$0"
                className="w-full input input-bordered text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Standard Price
              </label>
              <input
                {...register("StandardPrice")}
                type="number"
                placeholder="$0"
                className="w-full input input-bordered text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Premium Price
              </label>
              <input
                {...register("PremiumPrice")}
                type="number"
                placeholder="$0"
                className="w-full input input-bordered text-black"
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Extra Details (for View Details page)
          </label>
          <textarea
            {...register("details")}
            placeholder="Ex: Free Domain, Free Hosting, Free SSL, Live Support, Live Website"
            className="w-full textarea textarea-bordered text-black"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-10">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadService;
