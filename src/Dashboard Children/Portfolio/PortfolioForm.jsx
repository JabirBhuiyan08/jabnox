import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const PortfolioForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const formData = {...data };
    const response = await axiosPublic.post('/portfolios', formData);
    if (response.data.insertedId) {
      alert("Portfolio added successfully");
    }
    else {
      alert("Failed to add portfolio");
    }
    
    reset();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="text-2xl font-bold mb-4">Portfolio Form</h1>
          <p className="mb-4">Add your portfolio details.</p>
          <div>
            <label className="block mb-2">1. Portfolio Name</label>
            <input
              {...register("portfolioName")}
              type="text"
              name="portfolioName"
              placeholder="Enter portfolio name"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label className="block mb-2">2. Description</label>
            <input
              {...register("portfolioDescription")}
              type="text"
              name="portfolioDescription"
              placeholder="Portfolio Description"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label className="block mb-2">3. Upload Portfolio Image</label>
            <input
              {...register("portfolioImage")}
              type="file"
              name="portfolioImage"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label className="block mb-2">
              4. Portfolio Link (Website, GitHub, etc.)
            </label>
            <input
              {...register("portfolioLink")}
              type="text"
              name="portfolioLink"
              placeholder="Portfolio Link"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label className="block mb-2">5. Portfolio Owner Name</label>
            <input
              {...register("portfolioOwnerName")}
              type="text"
              name="portfolioOwnerName"
              placeholder="Owner Name"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label className="block mb-2">6. Technologies Used</label>
            <input
              {...register("technologiesUsed")}
              type="text"
              name="technologiesUsed"
              placeholder="Technologies Used"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label className="block mb-2">
              7. Project Category (e.g., Web App, Mobile App, Design, etc.)
            </label>
            <input
              {...register("projectCategory")}
              type="text"
              name="projectCategory"
              placeholder="Project Category"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label className="block mb-2">8. Completion Date</label>
            <input
              {...register("completionDate")}
              type="text"
              name="completionDate"
              placeholder="Completion Date"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label className="block mb-2">9. Client Name (Optional)</label>
            <input
              {...register("portfolioClientName")}
              type="text"
              name="portfolioClientName"
              placeholder="Client Name (Optional)"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label className="block mb-2">
              10. Additional Notes (Optional)
            </label>
            <input
              {...register("portfolioNotes")}
              type="text"
              name="portfolioNotes"
              placeholder="Additional Notes"
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">
              Submit Portfolio
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PortfolioForm;
