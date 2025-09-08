import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/axiosSecure";
import { FaWhatsapp } from "react-icons/fa6";
import useAdmin from "../../hooks/useAdmin";
import { Link } from "react-router-dom";

const WebsiteTemplate = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  const {
    data: templatedata = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tamplatedata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/template");
      return res.data;
    },
  });

  const mutationDelete = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/template/${id}`);
      return res.data;
    },
    onSuccess: () => {
      refetch();
    },
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="animate-pulse text-lg font-semibold text-gray-600">
          Loading templates...
        </p>
      </div>
    );
  }

  return (
    <div className="px-5 py-10 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        Choose Your Website Template
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Template Card */}
        {templatedata
          .slice()
          .reverse()
          .map((t) => (
            <div
              key={t._id}
              className="bg-white/10 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={t.image}
                alt="Template"
                className="w-full h-56 object-cover"
              />
              {isAdmin && (
                <button
                  onClick={() => mutationDelete.mutate(t._id)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 rounded"
                >
                  Delete
                </button>
              )}

              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2">
                  {t.templateName}
                </h2>
                <p className="text-gray-200 mb-4">{t.description}</p>

                {/* Pricing & Features */}
                <div className="mb-4">
                  <p className="text-xl font-bold mb-1">${t.templatePrice}</p>
                  <ul className="text-gray-200 text-sm list-disc list-inside">
                    {t.additionalServices
                      .slice()
                      .reverse()
                      .map((service, index) => (
                        <li key={index}>{service.additionalServices}</li>
                      ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col justify-between gap-2">
                  <a
                    href="https://dbnet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary hover:transform hover:scale-105 w-full py-2 rounded-xl"
                  >
                    Preview
                  </a>

                  <button
                    className="btn bg-green-600 hover:bg-green-500 
              hover:transform hover:scale-105 w-full py-2 rounded-xl"
                  >
                    <FaWhatsapp /> Whats App
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WebsiteTemplate;
