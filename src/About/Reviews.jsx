import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../Components/LoadingSpinner";

const Reviews = () => {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic
      .get("reviews")
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch reviews:", err);
        setLoading(false);
      });
  }, [axiosPublic]);

  if (loading) return <LoadingSpinner></LoadingSpinner>
  return (
    <>
      <Helmet>
        <title>Client Reviews | JABNOX</title>
        <meta name="description" content="Read reviews from JABNOX clients. Our web development company is rated as one of the best web development companies. Hire our freelance web developers for your projects." />
        <meta name="keywords" content="web application development company, custom web application development company, best web development company, web app development company, custom web development company, need freelance web developer, web developer freelance" />
      </Helmet>
      <div>
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="p-6 rounded-2xl shadow-md border bg-white transition-transform hover:scale-[1.1]"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.title}
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
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available</p>
      )}
      </div>
    </>
  );
};

export default Reviews;
