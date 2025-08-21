import { useFieldArray, useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ProjectsForm = () => {
  const { register, handleSubmit, reset, watch, control } = useForm({
    defaultValues: {
      costs: [{ category: "", date: "", amount: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "costs",
  });

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log("Form submitted", data);
    const res = await axiosPublic.post("/projects", data);
    if (res.data.insertedId) {
      console.log("Project added successfully", res.data);
      alert("Project added successfully");
    } else {
      console.log("Failed to add project", res.data);
      alert("Failed to add project");
    }
    // Here you would typically send data to your backend
    reset();
  };

  // For conditional rendering based on hasWebsite value
  const hasWebsite = watch("hasWebsite");

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-xl shadow-lg">
  <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">OWNERS PROJECT UPLOAD</h1>

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-black">
    {/* Basic Information */}
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Basic Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="companyname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Name*
          </label>
          <input
            type="text"
            {...register("companyname", { required: true })}
            id="companyname"
            className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
          />
        </div>
        
        <div>
          <label
            htmlFor="weblicence"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Web Licence no*
          </label>
          <input
            type="text"
            {...register("weblicence", { required: true })}
            id="weblicence"
            className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
          />
        </div>
        
        <div>
          <label
            htmlFor="ownerName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Project Owner Name*
          </label>
          <input
            type="text"
            {...register("ownerName", { required: true })}
            id="ownerName"
            className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
          />
        </div>
        
        <div>
          <label
            htmlFor="countryName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country Name*
          </label>
          <input
            type="text"
            {...register("countryName", { required: true })}
            id="countryName"
            className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
          />
        </div>
        
        <div>
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email*
          </label>
          <input
            type="email"
            {...register("Email", { required: true })}
            id="Email"
            className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
          />
        </div>
        
        <div>
          <label
            htmlFor="EmailPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email's Password*
          </label>
          <input
            type="password"
            {...register("EmailPassword", { required: true })}
            id="EmailPassword"
            className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
          />
        </div>
        
        <div>
          <label
            htmlFor="wpUsername"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            WP User Name*
          </label>
          <input
            type="type"
            {...register("wpUsername", { required: true })}
            id="wpUsername"
            className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
          />
        </div>
        
        <div>
          <label
            htmlFor="wpPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            WP Password*
          </label>
          <input
            type="password"
            {...register("wpPassword", { required: true })}
            id="wpPassword"
            className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="shortDescription"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Short Description*
        </label>
        <textarea
          {...register("shortDescription", { required: true })}
          id="shortDescription"
          rows="3"
          className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          required
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="projectDescription"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Detailed Description
        </label>
        <textarea
          {...register("projectDescription")}
          id="projectDescription"
          rows="4"
          className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        ></textarea>
      </div>

      {/* Cost Area */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <label className="block text-sm font-medium text-gray-700 mb-3">Cost Area</label>
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="flex flex-col md:flex-row gap-4 mb-4 pb-4 border-b border-gray-100 last:border-0"
          >
            {/* Category */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Category
              </label>
              <input
                type="text"
                {...register(`costs.${index}.category`)}
                className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Date */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Date of the Cost
              </label>
              <input
                type="date"
                {...register(`costs.${index}.date`)}
                className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Amount */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Amount
              </label>
              <input
                type="number"
                {...register(`costs.${index}.amount`)}
                className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Remove Button */}
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500 hover:text-red-700 self-end md:self-center mt-2 md:mt-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}

        {/* Add Button */}
        <button
          type="button"
          onClick={() => append({ category: "", date: "", amount: "" })}
          className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Cost
        </button>
      </div>

      {/* Project Progress */}
      <div>
        <label
          htmlFor="projectPorgress"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Project Progress (%)
        </label>
        <div className="relative w-full">
          <input
            type="number"
            {...register("projectPorgress")}
            id="projectPorgress"
            min="0"
            max="100"
            className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
            %
          </div>
        </div>
      </div>
    </div>

    {/* Website Information */}
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Website Information
      </h2>

      <div className="flex items-center">
        <input
          type="checkbox"
          {...register("hasWebsite")}
          id="hasWebsite"
          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor="hasWebsite"
          className="ml-3 block text-sm text-gray-700"
        >
          This project has a website
        </label>
      </div>

      {hasWebsite && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label
              htmlFor="websiteUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Website URL
            </label>
            <input
              type="url"
              {...register("websiteUrl")}
              id="websiteUrl"
              placeholder="https://example.com"
              className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="domainExpiry"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Domain Expiry Date
            </label>
            <input
              type="date"
              {...register("domainExpiry")}
              id="domainExpiry"
              className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
        </div>
      )}
    </div>

    {/* File Uploads */}
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Documents & Images
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="projectImage"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Project Image
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 5MB)</p>
              </div>
              <input 
                type="file" 
                {...register("projectImage")}
                id="projectImage" 
                accept="image/*" 
                className="hidden" 
              />
            </label>
          </div>
        </div>

        <div>
          <label
            htmlFor="certificate"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Certificate/Proof Document
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PDF, DOC, JPG, or PNG (MAX. 5MB)</p>
              </div>
              <input 
                type="file" 
                {...register("certificate")}
                id="certificate" 
                accept=".pdf,.doc,.docx,.jpg,.png" 
                className="hidden" 
              />
            </label>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Information */}
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Additional Information
      </h2>

      <div>
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Tags
        </label>
        <input
          type="text"
          {...register("tags")}
          id="tags"
          placeholder="comma separated tags (e.g., ecommerce, blog, portfolio)"
          className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Notes
        </label>
        <textarea
          {...register("notes")}
          id="notes"
          rows="3"
          className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          placeholder="Any additional notes about the project..."
        ></textarea>
      </div>
    </div>

    <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
      <button
        type="button"
        onClick={() => reset()}
        className="px-6 py-2.5 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
      >
        Reset
      </button>
      <button
        type="submit"
        className="px-6 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
      >
        Submit Project
      </button>
    </div>
  </form>
</div>
  );
};

export default ProjectsForm;
