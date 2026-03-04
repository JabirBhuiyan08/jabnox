import useAxiosSecure from '../../hooks/axiosSecure';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FcPortraitMode } from 'react-icons/fc';
import Swal from 'sweetalert2';

const OrderPage = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: apply = [], isLoading } = useQuery({
    queryKey: ["apply"],
    queryFn: async () => {
      const res = await axiosSecure.get('/apply');
      return res.data;
    },
  });

 const handleDelete = useMutation({
  mutationFn: async (id) => {
    const res = await axiosSecure.delete(`/apply/${id}`);
    return res.data;
  },
  onSuccess: (data) => {
    if (data.deletedCount > 0) {
      queryClient.invalidateQueries(["apply"]);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  },
});

const handleDeleteClick = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      handleDelete.mutate(id);  // 🔥 Only delete after confirm
    }
  });
};

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
      <div className="flex flex-col items-center mb-10">
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
          You don't have any pending applications 🎉
        </p>
      ) : (
        <div className="space-y-5">
          {apply.slice().reverse().map((e) => (
            <div
              key={e._id}
              className="flex flex-col md:flex-row justify-between items-start
                         bg-white/10 shadow-md border border-gray-200/20 rounded-xl p-6 hover:shadow-lg transition gap-4"
            >
              <button className='bg-red-500 p-2 rounded-2xl h' onClick={() => handleDeleteClick(e._id)}>Delete</button>
              {/* Left Section */}
              <div className="flex-1 w-full space-y-1">

                {/* Product name — uses productName from POST, falls back to serviceName */}
                <h2 className="text-xl font-semibold text-gray-200">
                  {e.productName || e.serviceName}
                </h2>

                {/* Applicant name — uses applicantName from POST, falls back to name */}
                <p className="text-gray-200">
                  Requested by:{" "}
                  <span className="font-medium">{e.applicantName || e.name}</span>
                </p>

                {/* Plan — uses selectedPlan from POST, falls back to plan */}
                <p className="text-gray-200">
                  Plan:{" "}
                  <span className="font-medium">{e.selectedPlan || e.plan}</span>
                </p>

                {/* Email */}
                {e.applicantEmail && (
                  <p className="text-gray-300 text-sm">
                    Email:{" "}
                    <a
                      href={`mailto:${e.applicantEmail}`}
                      className="text-cyan-400 hover:underline"
                    >
                      {e.applicantEmail}
                    </a>
                  </p>
                )}

               

                {/* Phone */}
                {e.applicantPhone && (
                  <p className="text-gray-300 text-sm">
                    Phone: <span className="font-medium">{e.applicantPhone}</span>
                  </p>
                )}

                {/* Company */}
                {e.company && (
                  <p className="text-gray-300 text-sm">
                    Company: <span className="font-medium">{e.company}</span>
                  </p>
                )}

                {/* Message — uses message from POST, falls back to note */}
                {(e.message || e.note) && (
                  <p className="text-sm text-gray-400 mt-1 border-t border-white/10 pt-2">
                    Message: {e.message || e.note}
                  </p>
                )}

                {/* Submitted date */}
                {e.submittedAt && (
                  <p className="text-xs text-gray-500 pt-1">
                    Submitted:{" "}
                    {new Date(e.submittedAt).toLocaleString("en-BD", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                )}
              </div>

              {/* Status Badge */}
              <div className="md:mt-0 shrink-0">
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