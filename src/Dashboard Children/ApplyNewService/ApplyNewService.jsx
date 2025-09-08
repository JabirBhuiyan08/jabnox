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
        queryClient.invalidateQueries(["service"]);
      }
    },
  });

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
    return <div>Loading...</div>;
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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {services.map((service) => (
          <div
            key={service._id}
            className="relative w-full md:w-150 flex flex-col items-center justify-center bg-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-gray-200/20 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
          >
            {/* Admin Delete */}
            {isAdmin && (
              <button
                className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 rounded-full text-xs font-bold shadow hover:bg-red-700 transition"
                onClick={() => handleServiceDelete.mutate(service._id)}
              >
                Delete
              </button>
            )}

            {/* Badge */}
            {service.badge && (
              <span className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                {service.badge}
              </span>
            )}

            {/* Service Content */}
            <div className="mb-4 sm:mb-5 md:w-120 md:mb-6 flex flex-col items-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-700">
                {service.name}
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm md:text-base">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="grid gap-3 sm:gap-4 items-center md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-120 mt-3 sm:mt-4 md:mt-5">
                {service.BasicPrice && (
                  <div className="relative w-full p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer">
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-blue-600 mb-1">
                      Basic
                    </p>
                    <p className="text-gray-700 font-bold text-lg sm:text-xl md:text-2xl">
                      ${service.BasicPrice}
                    </p>
                    <p className="text-gray-500 mt-1 text-xs sm:text-sm md:text-sm">
                      Perfect for individuals
                    </p>
                  </div>
                )}

                {service.StandardPrice && (
                  <div className="relative p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border-2 border-yellow-400 bg-gradient-to-t from-yellow-50 via-white to-yellow-50 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer">
                    <span className="absolute top-1 right-1 sm:top-1 sm:right-1 md:top-2 md:right-2 bg-yellow-500 text-white px-1 py-0.5 sm:px-2 sm:py-1 md:px-2 md:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow">
                      Most Popular
                    </span>
                    <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-5 font-semibold text-yellow-600 mb-1 flex items-center gap-1">
                      Standard <span className="text-yellow-500">⭐</span>
                    </p>
                    <p className="text-gray-700 font-bold text-lg sm:text-xl md:text-2xl">
                      ${service.StandardPrice}
                    </p>
                    <p className="text-gray-500 mt-1 text-xs sm:text-sm md:text-sm">
                      Best for small teams
                    </p>
                  </div>
                )}

                {service.PremiumPrice && (
                  <div className="relative p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border-2 border-purple-400 bg-gradient-to-t from-purple-100 via-white to-purple-100 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer">
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-purple-700 mb-1 flex items-center gap-1">
                      Premium <span>🚀</span>
                    </p>
                    <p className="text-gray-700 font-bold text-lg sm:text-xl md:text-2xl">
                      ${service.PremiumPrice}
                    </p>
                    <p className="text-gray-500 mt-1 text-xs sm:text-sm md:text-sm">
                      Ideal for enterprises
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {/* Apply Now Button */}
              <button
                className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-4 md:py-3 font-bold shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] backdrop-blur-md text-xs sm:text-sm md:text-sm"
                onClick={() => applyNewService(service)}
              >
                🚀 Apply Now
              </button>

              {/* View Details Button */}
              <button
                className="w-full border-2 border-indigo-400 text-black rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-4 md:py-3 font-bold bg-white shadow-md backdrop-blur-md hover:bg-white/20 hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] text-xs sm:text-sm md:text-sm"
                onClick={() => viewDetails(service)}
              >
                🔍 View Details
              </button>

              {/* WhatsApp Button */}
              <Link to={`https://wa.me/+8801749424565`}>
                <button className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-4 md:py-3 flex items-center justify-center gap-1 sm:gap-2 font-bold shadow-lg hover:from-green-600 hover:to-green-400 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] text-xs sm:text-sm md:text-sm">
                  <FaWhatsapp className="animate-pulse text-xs sm:text-sm md:text-sm" /> 
                  <div>
                  <span className="hidden sm:inline">Chat on</span> WhatsApp
                  </div>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyNewService;