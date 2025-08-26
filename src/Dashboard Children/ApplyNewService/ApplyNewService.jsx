import { FcCustomerSupport } from "react-icons/fc";
import { FaStar, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/axiosSecure";
import useAdmin from "../../hooks/useAdmin";
import { createRoot } from "react-dom/client";
import ApplyForm from "./ApplyForm";

const ApplyNewService = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isAdmin] = useAdmin();

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await axiosPublic.get("/service");
      return res.data;
    },
  });

  const handleServiceDelete = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/service/${id}`);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.deletedCount > 0) {
        queryClient.invalidateQueries(["services"]);
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const applyNewService = (service) => {
    Swal.fire({
      title: `Apply for ${service.name}`,
      html: `<div id="react-swal-form"></div>`, // placeholder
      showConfirmButton: false, // React form handles submit
      didOpen: () => {
        const container = document.getElementById("react-swal-form");
        const root = createRoot(container);

        root.render(
          <ApplyForm
            service={service}
            onSubmit={(data) => {
              Swal.fire({
                icon: "success",
                title: "Application Submitted 🎉",
                html: `
                <p><strong>Service:</strong> ${service.name}</p>
                <p><strong>Plan:</strong> ${data.plan}</p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Note:</strong> ${data.note || "N/A"}</p>
              `,
              });
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
    })
  };

  return (
    <div className="text-center p-5 text-black">
      {/* Header */}
      <div className="text-8xl flex justify-center mb-4">
        <FcCustomerSupport />
      </div>
      <h1 className="text-4xl font-extrabold mb-10 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
        Apply New Services
      </h1>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between border hover:scale-105 transform transition duration-300"
          >
            {isAdmin && (
              <button
                className="btn bg-violet-700 text-white mt-5"
                onClick={() => handleServiceDelete.mutate(service._id)}
              >
                Delete
              </button>
            )}

            {/* Badge */}
            <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
              {service.badge}
            </span>

            {/* Content */}
            <div>
              <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Pricing */}
              <div className="grid gap-3 text-left">
                {/* Basic Plan */}
                {service.BasicPrice && (
                  <div className="border rounded-xl p-3 bg-white hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
                    <p className="text-lg font-semibold text-blue-600">Basic</p>
                    <p className="text-gray-700">${service.BasicPrice}</p>
                  </div>
                )}

                {/* Standard Plan */}
                {service.StandardPrice && (
                  <div className="border rounded-xl p-3 bg-blue-50 border-blue-500 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
                    <p className="text-lg font-semibold text-blue-600 flex items-center gap-1">
                      Standard <span className="text-yellow-500">⭐</span>
                    </p>
                    <p className="text-gray-700 font-bold">
                      ${service.StandardPrice}
                    </p>
                    <span className="text-xs text-blue-500 font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Premium Plan */}
                {service.PremiumPrice && (
                  <div className="border rounded-xl p-3 bg-blue-100 border-blue-600 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
                    <p className="text-lg font-semibold text-blue-700 flex items-center gap-1">
                      Premium <span>🚀</span>
                    </p>
                    <p className="text-gray-700 font-bold">
                      ${service.PremiumPrice}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3 justify-between">
              <button
                className="btn btn-primary rounded-2xl text-sm w-full sm:w-auto"
                onClick={() => applyNewService(service)}
              >
                Apply Now
              </button>
              <button
                className="btn btn-outline rounded-2xl text-sm w-full sm:w-auto"
                onClick={() => viewDetails(service)}
              >
                View Details
              </button>
              <button className="btn bg-green-500 text-white rounded-2xl text-sm flex items-center gap-2 w-full sm:w-auto">
                <FaWhatsapp /> WhatsApp
              </button>
              <button className="btn bg-gray-700 text-white rounded-2xl text-sm flex items-center gap-2 w-full sm:w-auto">
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
