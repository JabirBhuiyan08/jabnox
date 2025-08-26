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
    <div className="text-center p-5 text-gray-900">
      {/* Header */}
      <div className="text-6xl sm:text-8xl flex justify-center mb-4 text-purple-600 animate-pulse">
        <FcCustomerSupport />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Apply New Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {services.map((service) => (
          <div
            key={service._id}
            className="relative bg-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-gray-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            {isAdmin && (
              <button
                className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow hover:bg-red-700 transition"
                onClick={() => handleServiceDelete.mutate(service._id)}
              >
                Delete
              </button>
            )}

            {/* Badge */}
            {service.badge && (
              <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                {service.badge}
              </span>
            )}

            {/* Service Content */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-indigo-700">
                {service.name}
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                {service.BasicPrice && (
                  <div className="relative p-4 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
                    <p className="text-base sm:text-lg font-semibold text-blue-600 mb-1">
                      Basic
                    </p>
                    <p className="text-gray-700 font-bold text-xl sm:text-2xl">
                      ${service.BasicPrice}
                    </p>
                    <p className="text-gray-500 mt-1 text-xs sm:text-sm">
                      Perfect for individuals
                    </p>
                  </div>
                )}

                {service.StandardPrice && (
                  <div className="relative p-4 rounded-2xl border-2 border-yellow-400 bg-gradient-to-t from-yellow-50 via-white to-yellow-50 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
                    <span className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow">
                      Most Popular
                    </span>
                    <p className="text-base sm:text-lg font-semibold text-yellow-600 mb-1 flex items-center gap-1">
                      Standard <span className="text-yellow-500">⭐</span>
                    </p>
                    <p className="text-gray-700 font-bold text-xl sm:text-2xl">
                      ${service.StandardPrice}
                    </p>
                    <p className="text-gray-500 mt-1 text-xs sm:text-sm">
                      Best for small teams
                    </p>
                  </div>
                )}

                {service.PremiumPrice && (
                  <div className="relative p-4 rounded-2xl border-2 border-purple-400 bg-gradient-to-t from-purple-100 via-white to-purple-100 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
                    <p className="text-base sm:text-lg font-semibold text-purple-700 mb-1 flex items-center gap-1">
                      Premium <span>🚀</span>
                    </p>
                    <p className="text-gray-700 font-bold text-xl sm:text-2xl">
                      ${service.PremiumPrice}
                    </p>
                    <p className="text-gray-500 mt-1 text-xs sm:text-sm">
                      Ideal for enterprises
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl px-4 py-3 font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition transform hover:-translate-y-1"
                onClick={() => applyNewService(service)}
              >
                Apply Now
              </button>

              <button
                className="w-full border-2 border-purple-500 text-purple-600 rounded-2xl px-4 py-3 font-semibold hover:bg-purple-50 transition transform hover:-translate-y-1"
                onClick={() => viewDetails(service)}
              >
                View Details
              </button>

              <button className="w-full bg-green-500 text-white rounded-2xl px-4 py-3 flex items-center justify-center gap-2 font-semibold hover:bg-green-600 transition transform hover:-translate-y-1">
                <FaWhatsapp /> WhatsApp
              </button>

              <button className="w-full bg-gray-700 text-white rounded-2xl px-4 py-3 flex items-center justify-center gap-2 font-semibold hover:bg-gray-800 transition transform hover:-translate-y-1">
                <FaEnvelope /> Email
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyNewService;
