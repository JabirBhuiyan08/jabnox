import { useForm } from "react-hook-form";

const ApplyForm = ({ service, onSubmit, email }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: email,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 max-w-4xl mx-auto p-8 rounded-xl shadow-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-purple-200"
    >
      {/* Plan Selection */}
      <h3 className="font-bold text-indigo-700 text-xl mb-4 text-center">
        💎 Choose Your Plan
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {service.BasicPrice && (
          <label className="cursor-pointer flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1">
            <input
              type="radio"
              value={service.BasicPrice}
              {...register("plan")}
              defaultChecked
              className="mb-3"
            />
            <span className="font-semibold text-sm text-gray-700">Basic</span>
            <span className="text-indigo-600 font-bold text-2xl mt-1">
              ${service.BasicPrice}
            </span>
          </label>
        )}
        {service.StandardPrice && (
          <label className="cursor-pointer flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1">
            <input
              type="radio"
              value={service.StandardPrice}
              {...register("plan")}
              className="mb-3"
            />
            <span className="font-semibold text-sm text-gray-700">
              Standard ⭐
            </span>
            <span className="text-purple-600 font-bold text-2xl mt-1">
              ${service.StandardPrice}
            </span>
          </label>
        )}
        {service.PremiumPrice && (
          <label className="cursor-pointer flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1">
            <input
              type="radio"
              value={service.PremiumPrice}
              {...register("plan")}
              className="mb-3"
            />
            <span className="font-semibold text-sm text-gray-700">Premium 🚀</span>
            <span className="text-pink-600 font-bold text-2xl mt-1">
              ${service.PremiumPrice}
            </span>
          </label>
        )}
      </div>

      {/* User Details */}
      <h3 className="font-bold text-indigo-700 text-xl mt-6 mb-3 text-center">
        📝 Your Details
      </h3>
      <div className="flex flex-col gap-4">
        <input
          {...register("name", { required: true })}
          placeholder="Your Name"
          className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm hover:shadow-md transition bg-white"
        />
        <input
          {...register("email", { required: true })}
          defaultValue={email}
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm hover:shadow-md transition bg-white"
        />
        <textarea
          {...register("note")}
          placeholder="Extra Notes..."
          className="border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none shadow-sm hover:shadow-md transition bg-white"
          rows={5}
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition shadow-lg hover:shadow-xl"
      >
        Submit Application
      </button>
    </form>
  );
};

export default ApplyForm;
