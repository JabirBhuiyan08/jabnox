import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/axiosSecure";
import { useMutation } from "@tanstack/react-query";

const NoteForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const mutation = useMutation({
    mutationFn: (data) => axiosSecure.post('/notes', data),
    onSuccess:(res)=>{
        if (res.data.insertedId) {
            alert("Note sent successfully");
            reset();
        }
    },
    onError: (error) => {
      console.error("Error sending note:", error);
      alert("Failed to send note. Please try again.");
    }
  })

  const onSubmit = async(data) =>{
    mutation.mutate(data);
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-6 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        Send a Note to User
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
            Title
          </label>
          <input
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
            type="text"
            id="title"
            placeholder="Enter note title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 5,
                message: "Title must be at least 5 characters",
              },
            })}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-400">{errors.title.message}</p>
          )}
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
            type="email"
            id="email"
            placeholder="user@example.com"
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 5,
                message: "Email must be at least 5 characters",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
        
        {/* Text Area Field */}
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors resize-none min-h-[120px]"
            id="text"
            placeholder="Write your message here..."
            {...register("text", {
              required: "Text is required",
              minLength: {
                value: 5,
                message: "Text must be at least 5 characters",
              },
            })}
          />
          {errors.text && (
            <p className="mt-1 text-sm text-red-400">{errors.text.message}</p>
          )}
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? 'Sending...' : 'Send Note'}
        </button>
      </form>
      
      {/* Success Message (optional) */}
      {mutation.isSuccess && (
        <div className="mt-4 p-3 bg-green-900/30 border border-green-600/50 rounded-lg text-green-400 text-center">
          Note sent successfully!
        </div>
      )}
    </div>
  );
};

export default NoteForm;