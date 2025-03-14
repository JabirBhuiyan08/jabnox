import React from 'react';

const SecondHeader = () => {
    // Star rating component
    const renderStars = (rating) => {
        return (
            <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, index) => (
                    <span 
                        key={index}
                        className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center text-center font-bold p-4 md:p-6 gap-4 md:gap-8">
            {/* Visitor Card */}
            <div className="group flex flex-col items-center border border-cyan-100 bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full md:w-56">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-sm md:text-base text-gray-600 font-semibold mb-1">Total Visitors</span>
                <span className="text-2xl md:text-3xl text-cyan-600 font-bold">2,900</span>
                <span className="text-xs text-gray-400 mt-1">+12% from last month</span>
            </div>

            {/* Customer Card */}
            <div className="group flex flex-col items-center border border-cyan-100 bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full md:w-56">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm md:text-base text-gray-600 font-semibold mb-1">Served Customers</span>
                <span className="text-2xl md:text-3xl text-cyan-600 font-bold">1,769</span>
                <span className="text-xs text-gray-400 mt-1">+23% from last month</span>
            </div>

            {/* Review Card */}
            <div className="group flex flex-col items-center border border-cyan-100 bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full md:w-56">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-sm md:text-base text-gray-600 font-semibold mb-1">Service Rating</span>
                {renderStars(4)}
                <span className="text-xs text-gray-400 mt-1">Based on 284 reviews</span>
            </div>
        </div>
    );
};

export default SecondHeader;