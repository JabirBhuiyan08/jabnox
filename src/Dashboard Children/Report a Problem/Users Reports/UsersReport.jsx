import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { FaDeleteLeft } from 'react-icons/fa6';
import useAxiosSecure from '../../../hooks/axiosSecure';

const UsersReport = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

  const { data: report = [], isLoading } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await axiosPublic.get("/report");
      return res.data;
    },
  });

  const mutationDelete = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/report/${id}`);
      return res.data;
    }
    , onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['report'] });
     
    }
  })

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
        <div className="mt-10 max-w-4xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Submitted Reports
      </h2>
      {report.length === 0 && <p className='text-center text-gray-600'>No reports found.</p>}
      {report.slice().reverse().map((e) => (
        <div
          key={e._id}
          className="border p-5 rounded-xl shadow-sm bg-white hover:shadow-md transition"
        >
          
          <div className='flex justify-between'>
          <p className="mb-1 text-gray-700">
            <strong>Email:</strong> {e.email}
          </p>
          <button onClick={() => mutationDelete.mutate(e._id)} className='text-red-600 cursor-pointer text-4xl'><FaDeleteLeft/></button>
          </div>
          <p className="text-gray-700">
            <strong>Message:</strong> {e.message}
          </p>
          {e.image && (
            <img
              src={e.image}
              alt="Report"
              className="mt-3 rounded-lg shadow w-1/2"
            />
          )}
        </div>
      ))}
    </div>
    );
};

export default UsersReport;