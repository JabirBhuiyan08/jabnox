import { useForm } from "react-hook-form";

const ApplyForm = ({ service, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 text-left"
    >
      {/* Plan Selection */}
      <h3 className="font-bold text-blue-600">💎 Choose Your Plan</h3>
      <div className="grid grid-cols-3 gap-3">
        {service.BasicPrice && (
          <label className="border p-3 rounded cursor-pointer">
            <input type="radio" value={service.BasicPrice} {...register("plan")} defaultChecked />
            Basic – ${service.BasicPrice}
          </label>
        )}
        {service.StandardPrice && (
          <label className="border p-3 rounded cursor-pointer">
            <input type="radio" value={service.StandardPrice} {...register("plan")} />
            Standard ⭐ – ${service.StandardPrice}
          </label>
        )}
        {service.PremiumPrice && (
          <label className="border p-3 rounded cursor-pointer">
            <input type="radio" value={service.PremiumPrice} {...register("plan")} />
            Premium 🚀 – ${service.PremiumPrice}
          </label>
        )}
      </div>

      {/* User Details */}
      <h3 className="font-bold text-blue-600 mt-3">📝 Your Details</h3>
      <input {...register("name", { required: true })} placeholder="Your Name" className="border p-2 rounded" />
      <input {...register("email", { required: true })} type="email" placeholder="Your Email" className="border p-2 rounded" />
      <textarea {...register("note")} placeholder="Extra Notes..." className="border p-2 rounded" />

      <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-3">
        Submit Application
      </button>
    </form>
  );
};

export default ApplyForm;
