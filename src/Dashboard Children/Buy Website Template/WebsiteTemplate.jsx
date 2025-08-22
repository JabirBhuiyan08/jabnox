import logo from "../../assets/LogoDesign/logo1.jpg";

const WebsiteTemplate = () => {
  return (
    <div className="px-5 py-10 min-h-screen text-black">
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
              A sleek and professional template suitable for your business or portfolio.
            </p>

            {/* Pricing & Features */}
            <div className="mb-4">
              <p className="text-xl font-bold mb-1">$99</p>
              <ul className="text-gray-700 text-sm list-disc list-inside">
                <li>Free Domain for 1 Year</li>
                <li>Live Setup Included</li>
                <li>Responsive Design</li>
                <li>1 Year Support</li>
              </ul>
            </div>

            {/* Action Buttons */}
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

        {/* Duplicate Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300">
          <img src={logo} alt="Template" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-2">Creative Template</h2>
            <p className="text-gray-600 mb-4">
              Perfect for creatives, bloggers, and artists looking for a fresh style.
            </p>

            <div className="mb-4">
              <p className="text-xl font-bold mb-1">$129</p>
              <ul className="text-gray-700 text-sm list-disc list-inside">
                <li>Free Domain for 1 Year</li>
                <li>Live Setup Included</li>
                <li>SEO Optimized</li>
                <li>Priority Support</li>
              </ul>
            </div>

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

        {/* Another Template Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300">
          <img src={logo} alt="Template" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-2">Business Template</h2>
            <p className="text-gray-600 mb-4">
              A template tailored for startups and corporate websites.
            </p>

            <div className="mb-4">
              <p className="text-xl font-bold mb-1">$149</p>
              <ul className="text-gray-700 text-sm list-disc list-inside">
                <li>Free Domain for 1 Year</li>
                <li>Live Setup Included</li>
                <li>Custom Branding</li>
                <li>1 Year Support</li>
              </ul>
            </div>

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
