import { FcCustomerSupport } from "react-icons/fc";
import { FaStar, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ApplyNewService = () => {
  const axiosPublic = useAxiosPublic();

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await axiosPublic.get("/service");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const applyNewService = (service) => {
    Swal.fire({
      title: `Apply for ${service.name}`,
      html: `
      <div style="font-family: 'Segoe UI', sans-serif; color:#111;">

  <!-- Plan Selection -->
  <h3 style="font-weight:700; font-size:1.2rem; margin-bottom:15px; text-align:center; color:#2563eb;">
    💎 Choose Your Plan
  </h3>
  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin-bottom:25px;">

  <label style="padding:15px; border:2px solid #e5e7eb; border-radius:14px; cursor:pointer; transition:0.3s; display:flex; flex-direction:column; align-items:center; gap:6px;">
    <input type="radio" name="plan" value="${service.BasicPrice}" checked style="margin-bottom:6px;" />
    <div style="font-size:1rem; font-weight:600; color:#2563eb;">Basic</div>
    <div style="font-size:1.1rem; font-weight:700;">${service.BasicPrice}</div>
  </label>

  <label style="padding:15px; border:2px solid #e5e7eb; border-radius:14px; cursor:pointer; transition:0.3s; display:flex; flex-direction:column; align-items:center; gap:6px;">
    <input type="radio" name="plan" value="${service.StandardPrice}" style="margin-bottom:6px;" />
    <div style="font-size:1rem; font-weight:600; color:#2563eb;">Standard ⭐</div>
    <div style="font-size:1.1rem; font-weight:700;">${service.StandardPrice}</div>
  </label>

  <label style="padding:15px; border:2px solid #e5e7eb; border-radius:14px; cursor:pointer; transition:0.3s; display:flex; flex-direction:column; align-items:center; gap:6px;">
    <input type="radio" name="plan" value="${service.PremiumPrice}" style="margin-bottom:6px;" />
    <div style="font-size:1rem; font-weight:600; color:#2563eb;">Premium 🚀</div>
    <div style="font-size:1.1rem; font-weight:700;">${service.PremiumPrice}</div>
  </label>

</div>


  <!-- User Details -->
  <h3 style="font-weight:700; font-size:1.1rem; margin-bottom:12px; text-align:center; color:#2563eb;">
    📝 Your Details
  </h3>
  <div style="display:flex; flex-direction:column; gap:12px;">
    <input id="swal-name" class="swal2-input" placeholder="Your Name"
           style="border-radius:10px; border:1px solid #cbd5e1; padding:12px; font-size:0.95rem; box-shadow:inset 0 1px 3px rgba(0,0,0,0.05);" />
    <input id="swal-email" type="email" class="swal2-input" placeholder="Your Email"
           style="border-radius:10px; border:1px solid #cbd5e1; padding:12px; font-size:0.95rem; box-shadow:inset 0 1px 3px rgba(0,0,0,0.05);" />
    <textarea id="swal-note" class="swal2-textarea" placeholder="Extra Notes..."
              style="border-radius:10px; border:1px solid #cbd5e1; padding:12px; font-size:0.95rem; min-height:90px; box-shadow:inset 0 1px 3px rgba(0,0,0,0.05);"></textarea>
  </div>
</div>


    `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Submit Application",
      preConfirm: () => {
        const selectedPlan = document.querySelector(
          "input[name='plan']:checked"
        )?.value;
        const name = document.getElementById("swal-name")?.value;
        const email = document.getElementById("swal-email")?.value;
        const note = document.getElementById("swal-note")?.value;

        if (!name || !email) {
          Swal.showValidationMessage("Please fill out Name and Email!");
          return false;
        }

        return { selectedPlan, name, email, note };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted 🎉",
          html: `
          <p><strong>Service:</strong> ${service.name}</p>
          <p><strong>Plan:</strong> ${result.value.selectedPlan}</p>
          <p><strong>Name:</strong> ${result.value.name}</p>
          <p><strong>Email:</strong> ${result.value.email}</p>
          <p><strong>Note:</strong> ${result.value.note || "N/A"}</p>
        `,
        });

        // 👉 Here you can send `result.value` to your backend via Axios/Fetch
      }
    });
  };

  // view Details

  const viewDetails = (service) => {
    Swal.fire({
      title: "Details",
      html: `
      <p><strong>Service:</strong> ${service.name}</p>
      
    `,
      confirmButtonText: "Close",
    });
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
