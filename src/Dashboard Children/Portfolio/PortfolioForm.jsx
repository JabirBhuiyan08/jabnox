import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const PortfolioForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const formData = { ...data };
    const response = await axiosPublic.post("/portfolios", formData);
    if (response.data.insertedId) {
      alert("Portfolio added successfully");
    } else {
      alert("Failed to add portfolio");
    }

    reset();
  };
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 text-black">
  <Form onSubmit={handleSubmit(onSubmit)}>
    {/* Header */}
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Portfolio Form</h1>
      <p className="text-gray-500 mt-2">Add your portfolio details below.</p>
    </div>

    <div className="space-y-6">
      {/* Portfolio Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Portfolio Name
        </label>
        <input
          {...register("portfolioName")}
          type="text"
          placeholder="Enter portfolio name"
          className="w-full input input-bordered text-black"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          {...register("portfolioDescription")}
          placeholder="Brief description of the project"
          rows="3"
          className="w-full textarea textarea-bordered text-black"
        />
      </div>

      {/* Portfolio Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Portfolio Image
        </label>
        <input
          {...register("portfolioImage")}
          type="file"
          className="block w-full text-sm text-black 
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-violet-700 file:text-white
                     hover:file:bg-violet-800
                     cursor-pointer bg-transparent border border-gray-300 rounded-md"
        />
      </div>

      {/* Portfolio Link */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Portfolio Link (Website, GitHub, etc.)
        </label>
        <input
          {...register("portfolioLink")}
          type="url"
          placeholder="https://example.com"
          className="w-full input input-bordered text-black"
        />
      </div>

      {/* Owner Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Owner Name
        </label>
        <input
          {...register("portfolioOwnerName")}
          type="text"
          placeholder="Owner name"
          className="w-full input input-bordered text-black"
        />
      </div>

      {/* Technologies Used */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Technologies Used
        </label>
        <input
          {...register("technologiesUsed")}
          type="text"
          placeholder="React, Node.js, Tailwind, etc."
          className="w-full input input-bordered text-black"
        />
      </div>

      {/* Project Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Category
        </label>
        <select
          {...register("projectCategory")}
          className="w-full select select-bordered text-black"
        >
          <option value="">Select a category</option>
          <option value="web">Web App</option>
          <option value="mobile">Mobile App</option>
          <option value="design">Design</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Completion Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Completion Date
        </label>
        <input
          {...register("completionDate")}
          type="date"
          className="w-full input input-bordered text-black"
        />
      </div>

      {/* Client Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Client Name (Optional)
        </label>
        <input
          {...register("portfolioClientName")}
          type="text"
          placeholder="Client name"
          className="w-full input input-bordered text-black"
        />
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes (Optional)
        </label>
        <textarea
          {...register("portfolioNotes")}
          placeholder="Any extra information about this project"
          rows="3"
          className="w-full textarea textarea-bordered text-black"
        />
      </div>
    </div>

    {/* Submit Button */}
    <div className="mt-8 flex justify-end">
      <button
        type="submit"
        className="btn btn-primary px-8 py-2 font-semibold"
      >
        Submit Portfolio
      </button>
    </div>
  </Form>
</div>

  );
};

export default PortfolioForm;
