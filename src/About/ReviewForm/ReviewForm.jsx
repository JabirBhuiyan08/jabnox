import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    // upload to server
    const onSubmit = async (data)=>{
        const reviewData = {...data, rating}; 
        // setUploading(true);
         try{
            const res = await axiosPublic.post('/reviews', reviewData);
            if(res.data.insertedId){
                alert('Review submitted successfully');
                reset();
                setRating(5);
            }
            }
            catch (err){
                console.log("Failed",err);
            }

         }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-gray-800 text-white p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-semibold mb-6 text-center">Review Our Work</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block text-sm mb-1" htmlFor="name">Full Name</label>
                        <input {...register('author')}
                            type="text"
                            id="author"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1" htmlFor="name">Your Designation / Role</label>
                        <input {...register('role')}
                            type="role"
                            id="author"
                            placeholder="Finance Manager"
                            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1" htmlFor="email">Email Address</label>
                        <input {...register('email')}
                            type="email"
                            id="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1" htmlFor="phone">Phone Number</label>
                        <input {...register('phone')}
                            type="tel"
                            id="phone"
                            placeholder="123-456-7890"
                            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1" htmlFor="title">Review Title</label>
                        <input {...register('title')}
                            type="text"
                            id="title"
                            placeholder="Excellent Design Quality!"
                            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1" htmlFor="message">Your Review</label>
                        <textarea {...register('review')}
                            id="review"
                            rows="4"
                            placeholder="Share your experience..."
                            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm mb-2">Rate Our Work</label>
                        <div className="flex space-x-2">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <label key={starValue}>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={starValue}
                                            className="hidden"
                                            onClick={() => setRating(starValue)}
                                        />
                                        <FaStar
                                            size={28}
                                            className={`cursor-pointer transition-colors ${
                                                starValue <= (hover || rating)
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-500'
                                            }`}
                                            onMouseEnter={() => setHover(starValue)}
                                            onMouseLeave={() => setHover(5)}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition-all"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
