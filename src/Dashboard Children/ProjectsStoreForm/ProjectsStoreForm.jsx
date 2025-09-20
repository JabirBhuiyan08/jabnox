import React from 'react';
import { useForm } from 'react-hook-form';

const ProjectsStoreForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    alert('Project information submitted successfully!');
    reset();
  };

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 
    'France', 'Japan', 'India', 'Brazil', 'South Africa', 'Other'
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto  overflow-hidden">
        <div className=" p-6 text-white">
          <h2 className="text-2xl font-bold">Project Store Information</h2>
          <p className="text-blue-100 mt-1">Please provide details about your project</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6 bg-white/10  rounded-xl shadow-lg">
          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              {...register("companyName", { required: "Company name is required" })}
              className={`block w-full px-4 py-3 rounded-lg border ${errors.companyName ? 'border-red-500 focus:ring-red-500' : 'border--300 focus:ring-blue-500'} focus:outline-none focus:ring-2`}
              placeholder="Enter company name"
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
            )}
          </div>

          {/* Website Address */}
          <div>
            <label htmlFor="websiteAddress" className="block text-sm font-medium mb-1">
              Website Address <span className="text-red-500">*</span>
            </label>
            <input
              id="websiteAddress"
              type="url"
              {...register("websiteAddress", { 
                required: "Website address is required",
                pattern: {
                  value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: "Please enter a valid URL (e.g., https://example.com)"
                }
              })}
              className={`block w-full px-4 py-3 rounded-lg border ${errors.websiteAddress ? 'border-red-500 focus:ring-red-500' : 'border--300 focus:ring-blue-500'} focus:outline-none focus:ring-2`}
              placeholder="https://example.com"
            />
            {errors.websiteAddress && (
              <p className="mt-1 text-sm text-red-600">{errors.websiteAddress.message}</p>
            )}
          </div>

          {/* Project Licence No */}
          <div>
            <label htmlFor="projectLicenceNo" className="block text-sm font-medium mb-1">
              Project Licence No <span className="text-red-500">*</span>
            </label>
            <input
              id="projectLicenceNo"
              type="text"
              {...register("projectLicenceNo", { 
                required: "Project licence number is required",
                minLength: {
                  value: 5,
                  message: "Licence number must be at least 5 characters"
                }
              })}
              className={`block w-full px-4 py-3 rounded-lg border ${errors.projectLicenceNo ? 'border-red-500 focus:ring-red-500' : 'border--300 focus:ring-blue-500'} focus:outline-none focus:ring-2`}
              placeholder="Enter licence number"
            />
            {errors.projectLicenceNo && (
              <p className="mt-1 text-sm text-red-600">{errors.projectLicenceNo.message}</p>
            )}
          </div>

          {/* Project Owner Name */}
          <div>
            <label htmlFor="projectOwnerName" className="block text-sm font-medium mb-1">
              Project Owner Name <span className="text-red-500">*</span>
            </label>
            <input
              id="projectOwnerName"
              type="text"
              {...register("projectOwnerName", { 
                required: "Project owner name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name should contain only letters and spaces"
                }
              })}
              className={`block w-full px-4 py-3 rounded-lg border ${errors.projectOwnerName ? 'border-red-500 focus:ring-red-500' : 'border--300 focus:ring-blue-500'} focus:outline-none focus:ring-2`}
              placeholder="Enter owner's full name"
            />
            {errors.projectOwnerName && (
              <p className="mt-1 text-sm text-red-600">{errors.projectOwnerName.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              {...register("country", { required: "Please select a country" })}
              className={`block w-full px-4 py-3 rounded-lg border ${errors.country ? 'border-red-500 focus:ring-red-500' : 'border--300 focus:ring-blue-500'} focus:outline-none focus:ring-2`}
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
            )}
          </div>

          {/* Website Details */}
          <div>
            <label htmlFor="websiteDetails" className="block text-sm font-medium mb-1">
              Website Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="websiteDetails"
              rows="4"
              {...register("websiteDetails", { 
                required: "Website details are required",
                minLength: {
                  value: 20,
                  message: "Please provide at least 20 characters"
                }
              })}
              className={`block w-full px-4 py-3 rounded-lg border ${errors.websiteDetails ? 'border-red-500 focus:ring-red-500' : 'border--300 focus:ring-blue-500'} focus:outline-none focus:ring-2`}
              placeholder="Describe the website purpose, features, and other relevant details..."
            ></textarea>
            {errors.websiteDetails && (
              <p className="mt-1 text-sm text-red-600">{errors.websiteDetails.message}</p>
            )}
          </div>

          {/* Form Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md"
            >
              Submit Project
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="flex-1 bg-gradient-to-r from--500 to--700 text-white py-3 px-6 rounded-lg font-medium hover:from--600 hover:to--800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--500 shadow-md"
            >
              Reset Form
            </button>
          </div>
        </form>
        
        <div className="bg--50 px-6 py-4 border-t border--200">
          <p className="text-xs text--500">
            By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">terms of service</a> and <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsStoreForm;