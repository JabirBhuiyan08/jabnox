import React from 'react';
import useAxiosSecure from '../../hooks/axiosSecure';

import { useQuery } from '@tanstack/react-query';
import { FcPortraitMode } from 'react-icons/fc';

const OrderPage = () => {
      const axiosSecure = useAxiosSecure();

  const { data: apply = [], isLoading } = useQuery({
    queryKey: ["apply"],
    queryFn: async () => {
      const res = await axiosSecure.get('/apply');
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="animate-pulse text-lg font-semibold text-gray-600">
          Loading pending applications...
        </p>
      </div>
    );
  }


    return (
         <div className="max-w-4xl mx-auto px-6 py-10">
              {/* Header Section */}
              <div className="flex flex-col items-center mb-10 ">
                <div className="text-8xl">
                  <FcPortraitMode />
                </div>
                <h1 className="text-4xl font-bold mt-4 text-white text-center">
                  Pending Applications
                </h1>
                <p className="text-gray-500 mt-2 text-center">
                  Review the status of your submitted service applications
                </p>
              </div>
        
              {/* Applications List */}
              {apply.length === 0 ? (
                <p className="text-center text-gray-500">
                  You don’t have any pending applications 🎉
                </p>
              ) : (
                <div className="space-y-5">
                  {apply.map((e) => (
                    <div
                      key={e._id}
                      className="flex flex-col md:flex-row justify-between items-center 
                                 bg-white shadow-md border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
                    >
                      {/* Left Section */}
                      <div className="flex-1 w-full">
                        <h2 className="text-xl font-semibold text-gray-800">
                          {e.serviceName}
                        </h2>
                        <p className="text-gray-600">Requested by: {e.name}</p>
                        <p className="text-gray-600">Plan: <span className="font-medium">{e.plan}</span></p>
                        {e.note && (
                          <p className="text-sm text-gray-500 mt-1">
                            Note: {e.note}
                          </p>
                        )}
                      </div>
        
                      {/* Status Badge */}
                      <div className="mt-4 md:mt-0">
                        <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-700 border border-yellow-300">
                          Pending
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
    );
};

export default OrderPage;