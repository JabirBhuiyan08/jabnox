import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import useImageUpload from "../../hooks/useImageUpload";

const PortfolioForm = () => {
  const { register, handleSubmit, reset, setValue, formState: { isSubmitting } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const axiosPublic = useAxiosPublic();

  const { uploadImage, error } = useImageUpload();

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  const onSubmit = async (data) => {
    try {
      let imageUrl = "";
      
      // Upload image only if a file was selected
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
        if (!imageUrl) {
          alert("Failed to upload image");
          return;
        }
      }
      
      // Prepare form data with image URL
      const formData = { 
        ...data,
        portfolioImage: imageUrl
      };
      
      // Submit the form
      const response = await axiosPublic.post("/portfolios", formData);
      
      if (response.data.insertedId) {
        alert("Portfolio added successfully");
        reset();
        setImagePreview(null);
        setSelectedFile(null);
      } else {
        alert("Failed to add portfolio");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("An error occurred while submitting the form");
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // Create preview
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white/10 shadow-lg rounded-xl p-8 text-white">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-200">Portfolio Form</h1>
          <p className="text-gray-200 mt-2">Add your portfolio details below.</p>
        </div>

        <div className="space-y-6">
          {/* Portfolio Name */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Portfolio Name
            </label>
            <input
              {...register("portfolioName", { required: true })}
              type="text"
              placeholder="Enter portfolio name"
              className="w-full input input-bordered text-gray-200 bg-white/10 border border-gray-200/20"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Description
            </label>
            <textarea
              {...register("portfolioDescription", { required: true })}
              placeholder="Brief description of the project"
              rows="3"
              className="w-full textarea textarea-bordered text-gray-200 bg-white/10 border border-gray-200/20"
              required
            />
          </div>

          {/* Portfolio Image */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Upload Portfolio Image
            </label>
            <input
              onChange={onFileChange}
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-200 
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:text-sm file:font-semibold
                         file:bg-violet-700 file:text-white
                         hover:file:bg-violet-800
                         cursor-pointer bg-transparent border border-gray-200/20 rounded-md"
            />
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-200 mb-2">Image Preview:</p>
                <img src={imagePreview} alt="Preview" className="w-40 h-40 object-cover rounded-md" />
              </div>
            )}
          </div>

          {/* Portfolio Link */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2 ">
              Portfolio Link (Website, GitHub, etc.)
            </label>
            <input
              {...register("portfolioLink", { required: true })}
              type="url"
              placeholder="https://example.com"
              className="w-full input input-bordered text-gray-200 bg-white/10 border border-gray-200/20"
              required
            />
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Owner Name
            </label>
            <input
              {...register("portfolioOwnerName", { required: true })}
              type="text"
              placeholder="Owner name"
              className="w-full input input-bordered text-gray-200 bg-white/10 border border-gray-200/20"
              required
            />
          </div>

          {/* Technologies Used */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Technologies Used
            </label>
            <input
              {...register("technologiesUsed", { required: true })}
              type="text"
              placeholder="React, Node.js, Tailwind, etc."
              className="w-full input input-bordered text-gray-200 bg-white/10 border border-gray-200/20"
              required
            />
          </div>

          {/* Project Category */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Project Category
            </label>
            <select
              {...register("projectCategory", { required: true })}
              className="w-full select select-bordered text-gray-200 bg-white/10 border border-gray-200/20"
              required
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
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Completion Date
            </label>
            <input
              {...register("completionDate", { required: true })}
              type="date"
              className="w-full input input-bordered text-gray-200 bg-white/10 border border-gray-200/20"
              required
            />
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Client Name (Optional)
            </label>
            <input
              {...register("portfolioClientName")}
              type="text"
              placeholder="Client name"
              className="w-full input input-bordered text-gray-200 bg-white/10 border border-gray-200/20"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              {...register("portfolioNotes")}
              placeholder="Any extra information about this project"
              rows="3"
              className="w-full textarea textarea-bordered text-gray-200 bg-white/10 border border-gray-200/20"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary px-8 py-2 font-semibold disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Portfolio"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default PortfolioForm;