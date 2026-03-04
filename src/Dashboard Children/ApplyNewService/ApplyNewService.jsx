import { FcCustomerSupport } from "react-icons/fc";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/axiosSecure";
import useAdmin from "../../hooks/useAdmin";
import { createRoot } from "react-dom/client";
import ApplyForm from "./ApplyForm";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner";

const ApplyNewService = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isAdmin] = useAdmin();

  // Fetch services
  const { data: services = [], isLoading } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await axiosPublic.get("/service");
      return res.data;
    },
  });

  // Delete service (Admin only)
  const handleServiceDelete = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/service/${id}`);
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
        handleServiceDelete.mutate(id);  // 🔥 Only delete after confirm
      }
    });
  };

  // Apply service
  const applyMutation = useMutation({
    mutationFn: async (applicationData) => {
      const res = await axiosPublic.post("/apply", applicationData);
      return res.data;
    },
    onSuccess: (responseData, variables) => {
      Swal.fire({
        icon: "success",
        title: "Application Submitted 🎉",
        html: `
          <div style="text-align:left">
            <p><b>Service:</b> ${variables.serviceName}</p>
            <p><b>Plan:</b> ${variables.plan}</p>
            <p><b>Name:</b> ${variables.name}</p>
            <p><b>Email:</b> ${variables.email}</p>
            <p><b>Note:</b> ${variables.note}</p>
          </div>
        `,
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      });
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const applyNewService = (service) => {
    Swal.fire({
      title: `Apply for ${service.name}`,
      html: `<div id="react-swal-form"></div>`,
      showConfirmButton: false,
      didOpen: () => {
        const container = document.getElementById("react-swal-form");
        const root = createRoot(container);
        root.render(
          <ApplyForm
            key={service._id}
            email={user.email}
            service={service}
            onSubmit={(data) => {
              const applicationData = {
                serviceName: service.name,
                plan: data.plan,
                name: data.name,
                email: data.email,
                note: data.note,
              };
              applyMutation.mutate(applicationData);
            }}
          />
        );
      },
    });
  };

  const viewDetails = (service) => {
    Swal.fire({
      title: service.name,
      html: `
        <p><strong>Basic:</strong> ${service.BasicPrice}</p>
        <p><strong>Standard:</strong> ${service.StandardPrice}</p>
        <p><strong>Premium:</strong> ${service.PremiumPrice}</p>
        <p><strong>Details:</strong> ${service.details}</p>
      `,
      icon: "question",
    });
  };

  return (
    <div className="text-center p-4 sm:p-5 md:p-6 text-gray-900">
      {/* Header */}
      <div className="text-5xl sm:text-6xl md:text-7xl flex justify-center mb-3 sm:mb-4 md:mb-5 text-purple-600 animate-pulse">
        <FcCustomerSupport />
      </div>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Apply New Services
      </h1>

      {/* Services Grid */}
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
  <div className="w-full space-y-3 sm:space-y-4 md:space-y-5">
    {services.map((service) => (
      <div
        key={service._id}
        className="relative w-full bg-white rounded-xl sm:rounded-2xl border border-gray-200/20 shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
      >
        {/* Admin Delete */}
        {isAdmin && (
          <button
            className="absolute top-1 left-1 sm:top-2 sm:left-2 z-10
             bg-red-600 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 
             rounded-md text-[10px] sm:text-xs font-bold shadow 
             hover:bg-red-700 transition"
            onClick={() => handleDeleteClick(service._id)}
          >
            Delete
          </button>
        )}

        {/* Badge */}
        {service.badge && (
          <span className="absolute top-1 right-1 sm:top-2 sm:right-2 z-10 bg-gradient-to-r from-pink-500 to-red-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[10px] sm:text-xs font-bold shadow-lg animate-pulse">
            {service.badge}
          </span>
        )}

        {/* Main Content Container */}
        <div className="p-3 sm:p-4 md:p-5">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-indigo-700">
              {service.name}
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-2">
            {service.description}
          </p>

          {/* Pricing Cards - Horizontal Scroll on Mobile, Grid on Larger */}
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-2 pb-2 sm:pb-0 mb-3 sm:mb-4 -mx-1 px-1 sm:mx-0 sm:px-0 scrollbar-hide">
            {service.BasicPrice && (
              <div className="flex-shrink-0 w-36 sm:w-auto p-2 sm:p-3 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow transition">
                <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-0.5">
                  Basic
                </p>
                <p className="text-gray-700 font-bold text-sm sm:text-base">
                  ${service.BasicPrice}
                </p>
                <p className="text-gray-500 mt-0.5 text-[10px] sm:text-xs truncate">
                  For individuals
                </p>
              </div>
            )}

            {service.StandardPrice && (
              <div className="flex-shrink-0 w-36 sm:w-auto p-2 sm:p-3 rounded-lg border-2 border-yellow-400 bg-gradient-to-t from-yellow-50 via-white to-yellow-50 shadow-sm hover:shadow relative">
                <span className="absolute -top-1 -right-1 sm:top-0 sm:right-0 bg-yellow-500 text-white px-1 py-0.5 rounded-sm text-[8px] sm:text-[10px] font-bold">
                  Popular
                </span>
                <p className="text-xs sm:text-sm font-semibold text-yellow-600 mb-0.5 flex items-center gap-0.5">
                  Standard <span className="text-yellow-500 text-[10px]">⭐</span>
                </p>
                <p className="text-gray-700 font-bold text-sm sm:text-base">
                  ${service.StandardPrice}
                </p>
                <p className="text-gray-500 mt-0.5 text-[10px] sm:text-xs truncate">
                  For small teams
                </p>
              </div>
            )}

            {service.PremiumPrice && (
              <div className="flex-shrink-0 w-36 sm:w-auto p-2 sm:p-3 rounded-lg border-2 border-purple-400 bg-gradient-to-t from-purple-100 via-white to-purple-100 shadow-sm hover:shadow">
                <p className="text-xs sm:text-sm font-semibold text-purple-700 mb-0.5 flex items-center gap-0.5">
                  Premium <span className="text-[10px]">🚀</span>
                </p>
                <p className="text-gray-700 font-bold text-sm sm:text-base">
                  ${service.PremiumPrice}
                </p>
                <p className="text-gray-500 mt-0.5 text-[10px] sm:text-xs truncate">
                  For enterprises
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons - Compact Grid */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {/* Apply Now Button */}
            <button
              className="col-span-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-lg px-1.5 py-1.5 sm:px-2 sm:py-2 text-[10px] sm:text-xs font-medium shadow hover:from-purple-500 hover:to-blue-500 transition-all duration-300 truncate"
              onClick={() => applyNewService(service)}
            >
              🚀 Apply
            </button>

            {/* View Details Button */}
            <button
              className="col-span-1 border border-indigo-400 text-indigo-700 rounded-lg px-1.5 py-1.5 sm:px-2 sm:py-2 text-[10px] sm:text-xs font-medium bg-white shadow-sm hover:bg-indigo-50 transition-all duration-300 truncate"
              onClick={() => viewDetails(service)}
            >
              🔍 Details
            </button>

            {/* WhatsApp Button */}
            <Link to={`https://wa.me/+8801749424565`} className="col-span-1">
              <button className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg px-1.5 py-1.5 sm:px-2 sm:py-2 flex items-center justify-center gap-0.5 text-[10px] sm:text-xs font-medium shadow hover:from-green-600 hover:to-green-400 transition-all duration-300 truncate">
                <FaWhatsapp className="text-[10px] sm:text-xs" /> 
                <span className="truncate">WhatsApp</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default ApplyNewService;