
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/axiosSecure";
import { useMutation } from "@tanstack/react-query";

const NoteForm = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();


  const axiosSecure = useAxiosSecure();

  const mutation = useMutation({
    mutationFn:  (data) => axiosSecure.post('/notes', data),
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
    <div>
      <h2>Sent a Note to User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 5,
                message: "Title must be at least 5 characters",
              },
            })}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 5,
                message: "Email must be at least 5 characters",
              },
            })}
          ></input>
        </div>
        <div>
          <label htmlFor="text">Text Area</label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="text"
            {...register("text", {
              required: "Text is required",
              minLength: {
                value: 5,
                message: "Text must be at least 5 characters",
              },
            })}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
