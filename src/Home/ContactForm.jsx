import useAxiosPublic from "../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const contactData = { ...data, read: true };
    try {
      const res = await axiosPublic.post("/contact", contactData);
      if (res.data.insertedId) {
        alert("Message sent successfully");
        reset();
      }
    } catch (err) {
      console.log("Failed", err);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-4 ">
        Send us a message
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-6 rounded-2xl shadow-lg space-y-5 text-white"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium  mb-1"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1"
          >
            Message:
          </label>
          <textarea
            id="message"
            rows="4"
            {...register("message")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
