import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../hooks/axiosSecure";



const DashboardReviews = () => {
  const axiosSecure = useAxiosSecure();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const datas = useLoaderData();


  useEffect(() => {
   if(datas){
    setReviews(datas);
    setLoading(false);
   }
  }, [datas]);

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
  });
    if (!confirmDelete) return;

   const response = await axiosSecure.delete(`/reviews/${id}`);
   console.log(id)
   if (response.status === 200) {
        Swal.fire({
            title:'Review Delete Successfully'
        })
        setReviews(reviews.filter((review) => review._id !== id));
      } else {
        alert("Failed to delete person");
      }
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {reviews.slice().reverse().map((review) => (
            <div
              key={review._id}
              className="p-6 rounded-2xl shadow-md border bg-white transition-transform hover:scale-[1.1]"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.title}
                  <br />
                 
                </h3>
                <span className="text-sm font-medium text-yellow-500">
                  ⭐ {review.rating}/5
                </span>
              </div>
              <p className="text-gray-600 italic mb-3">"{review.review}"</p>

              <div className="text-sm text-gray-500 border-t pt-3">
                <p>
                  <span className="font-medium text-gray-700">Author:</span>{" "}
                  {review.author}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Role:</span>{" "}
                  {review.role}
                </p>
              </div>
              <button className="btn bg-violet-700 text-white mt-5" onClick={() => handleDelete(review._id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default DashboardReviews;
