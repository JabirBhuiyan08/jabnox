import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const ReviewsCarousel = () => {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // This now refers to group index

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

  const reviewsPerPage = 3;
  const totalSlides = Math.ceil(reviews.length / reviewsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const currentReviews = reviews.slice(
    currentIndex * reviewsPerPage,
    currentIndex * reviewsPerPage + reviewsPerPage
  );

  if (loading)
    return (
      <div className="text-center py-10 text-blue-600 font-semibold">
        Loading reviews...
      </div>
    );

  return (
    <div className="w-full mt-10 flex flex-col items-center relative">
      {reviews.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl p-6">
            {currentReviews.map((review) => (
              <div
                key={review._id}
                className="p-6 w-full bg-gradient-to-br from-white to-blue-200 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                {/* Title and rating */}
                <div className="mb-4">
                  <h3 className="text-xl font-extrabold text-blue-800 mb-1">
                    {review.title}
                  </h3>
                  <span className="text-sm font-semibold text-yellow-500">
                    ⭐ {review.rating}/5
                  </span>
                </div>

                {/* Review text */}
                <p className="text-gray-700 italic text-sm leading-relaxed mb-5">
                  “{review.review}”
                </p>

                {/* Divider */}
                <div className="border-t border-gray-300 pt-4 text-sm text-gray-600">
                  <p>
                    <span className="font-medium text-gray-900">Author:</span>{" "}
                    {review.author}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Role:</span>{" "}
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between w-full max-w-6xl mt-4 px-4">
            <button
              onClick={prevSlide}
              className="btn btn-circle bg-blue-100 hover:bg-blue-300 text-blue-700 shadow"
              style={{ width: "3rem", height: "3rem" }}
              aria-label="Previous Slide"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-circle bg-blue-100 hover:bg-blue-300 text-blue-700 shadow"
              style={{ width: "3rem", height: "3rem" }}
              aria-label="Next Slide"
            >
              ❯
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500">No reviews available</p>
      )}
    </div>
  );
};

export default ReviewsCarousel;
