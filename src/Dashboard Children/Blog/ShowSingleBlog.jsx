import { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';

const ShowSingleBlog = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const data = useLoaderData();

    useEffect(() => {
        try {
            if (data) {
                setBlog(data);
                setLoading(false);
            } else {
                setError("No blog data found");
                setLoading(false);
            }
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }, [data]);

    if (loading) return (
        <div className="max-w-4xl mx-auto p-6 text-center">
            <div className="animate-pulse space-y-4">
                <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
                <div className="h-64 bg-gray-200 rounded"></div>
            </div>
        </div>
    );

    if (error) return (
        <div className="max-w-4xl mx-auto p-6 text-center text-red-500">
            Error: {error}
            <Link to="/blogs" className="block mt-4 text-blue-600 hover:underline">
                ← Back to all blogs
            </Link>
        </div>
    );

    if (!blog) return (
        <div className="max-w-4xl mx-auto p-6 text-center">
            Blog not found
            <Link to="/blogs" className="block mt-4 text-blue-600 hover:underline">
                ← Back to all blogs
            </Link>
        </div>
    );

    return (
        <article className="max-w-4xl mx-auto p-6">
            {/* Blog Header */}
            <header className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                        <FaUser className="mr-2" /> {blog.author}
                    </span>
                    <span className="text-white text-sm flex items-center">
                        <FaCalendarAlt className="mr-2" /> {new Date().toLocaleDateString()}
                    </span>
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
                
                {blog.tags && (
                    <div className="flex items-center mb-6">
                        <FaTags className="text-white mr-2" />
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.split(' ').map((tag, index) => (
                                <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Featured Image */}
            {blog.featuredImage && Object.keys(blog.featuredImage).length > 0 ? (
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                    <img 
                        src={blog.featuredImage.url} 
                        alt={blog.title}
                        className="w-full h-auto object-cover"
                    />
                </div>
            ) : (
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-100 h-64 flex items-center justify-center">
                    <span className="text-gray-500">No featured image</span>
                </div>
            )}

            {/* Blog Content */}
            <div className="prose max-w-none lg:prose-lg">
                {blog.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-white leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* Back Button */}
            <div className="mt-12">
                <Link 
                    to="/blogs" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to all blogs
                </Link>
            </div>
        </article>
    );
};

export default ShowSingleBlog;