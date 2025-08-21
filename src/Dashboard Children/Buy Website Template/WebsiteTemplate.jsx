import logo from "../../assets/LogoDesign/logo1.jpg";

const WebsiteTemplate = () => {
  return (
    <div className="px-5 py-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Choose Your Website Template
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Template Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300">
          <img src={logo} alt="Template" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-2">Modern Template</h2>
            <p className="text-gray-600 mb-4">
              A sleek and professional template suitable for your business or
              portfolio.
            </p>

            <div className="flex flex-col justify-between gap-2">
              <button className="btn btn-secondary w-full py-2 rounded-xl">
                Preview
              </button>
              <button className="btn btn-primary w-full py-2 rounded-xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300">
          <img src={logo} alt="Template" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-2">Modern Template</h2>
            <p className="text-gray-600 mb-4">
              A sleek and professional template suitable for your business or
              portfolio.
            </p>

            <div className="flex flex-col justify-between gap-2">
              <button className="btn btn-secondary w-full py-2 rounded-xl">
                Preview
              </button>
              <button className="btn btn-primary w-full py-2 rounded-xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300">
          <img src={logo} alt="Template" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-2">Modern Template</h2>
            <p className="text-gray-600 mb-4">
              A sleek and professional template suitable for your business or
              portfolio.
            </p>

            <div className="flex flex-col justify-between gap-2">
              <button className="btn btn-secondary w-full py-2 rounded-xl">
                Preview
              </button>
              <button className="btn btn-primary w-full py-2 rounded-xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteTemplate;
