import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { MdDelete } from "react-icons/md";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const loader = useLoaderData();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        setBlogs(loader);
    }, [loader]);

    const handleBlogDelete = async(id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this blog? This action cannot be undone."
        );
        if (!confirmDelete) return;
        try{
            const res =  await axiosPublic.delete(`/blogs/${id}`)
            if(res.status === 200){
                setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
            }
        }catch(err){
        if (err.response) {
            console.log(err.response.data);
        } else {
            console.log(err.message);
        }
        }
    }
    if (blogs.length === 0) {
        return (
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    No <span className="text-blue-600">Blog</span> Posts Found
                </h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                Latest <span className="text-blue-600">Blog</span> Posts
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div 
                        key={blog._id} 
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group relative"
                    >
                        {/* Blog Image */}
                        <div className="h-48 overflow-hidden relative">
                            <img 
                                src={blog.image || 'https://source.unsplash.com/random/600x400?blog'} 
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Blog Content */}
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    {blog.category || 'General'}
                                </span>
                                <span className="text-gray-500 text-sm ml-3">
                                    {new Date(blog.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            
                            <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                                <Link to={`/blogs/${blog._id}`} className="hover:underline decoration-blue-600 decoration-2 underline-offset-4">
                                    {blog.title}
                                </Link>
                            </h2>
                            
                            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                {blog.summary || blog.content.substring(0, 150) + '...'}
                            </p>
                            
                            <div className="flex items-center justify-between border-t pt-4">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-2 border border-gray-200">
                                        <img 
                                            src={blog.authorAvatar || 'https://i.pravatar.cc/150?img=3'} 
                                            alt={blog.author}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium">{blog.author || 'Anonymous'}</span>
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                    <button 
                                        onClick={() => handleBlogDelete(blog._id)}
                                        className="text-red-500 hover:text-red-700 p-1.5 rounded-full hover:bg-red-50 transition-colors"
                                        aria-label="Delete blog"
                                    >
                                        <MdDelete className="w-5 h-5" />
                                    </button>
                                    <Link 
                                        target='_blank'
                                        to={`/blogs/${blog._id}`}
                                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors"
                                    >
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;