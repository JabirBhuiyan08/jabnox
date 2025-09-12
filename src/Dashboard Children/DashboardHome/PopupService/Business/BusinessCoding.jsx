import React, { useState } from "react";
import { Link } from "react-router-dom";

const BusinessCoding = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="min-h-screen bg-white/10 border border-white/10">
      {/* Header */}
      <header className="bg-gradient-to-r from-violet-500 to-pink-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Business Coding Solutions
          </h1>
          <p className="text-xl opacity-90">
            Professional web development using modern technologies
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white/10 border border-white/10 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <button
              className={`px-6 py-4 font-medium ${
                activeTab === "services"
                  ? "text-blue-200 border-b-2 border-blue-600"
                  : "text-gray-100 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab("services")}
            >
              Services
            </button>
            <button
              className={`px-6 py-4 font-medium ${
                activeTab === "tech"
                  ? "text-blue-200 border-b-2 border-blue-600"
                  : "text-gray-100 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab("tech")}
            >
              Technologies
            </button>
            <button
              className={`px-6 py-4 font-medium ${
                activeTab === "pricing"
                  ? "text-blue-200 border-b-2 border-blue-600"
                  : "text-gray-100 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab("pricing")}
            >
              Pricing
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Services Tab */}
        {activeTab === "services" && (
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">
              Our Development Services
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="bg-white/10 border border-white/10 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
                <p className="text-gray-200">
                  Custom web applications built with modern frameworks and
                  responsive design principles.
                </p>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-200 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Dashboard Systems
                </h3>
                <p className="text-gray-200">
                  Interactive dashboards with data visualization, user
                  management, and analytics.
                </p>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-200 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  E-commerce Solutions
                </h3>
                <p className="text-gray-200">
                  Online stores with secure payment processing and inventory
                  management.
                </p>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-200 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">API Development</h3>
                <p className="text-gray-200">
                  RESTful APIs and backend services to power your applications.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Technologies Tab */}
        {activeTab === "tech" && (
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
              {/* MERN Stack */}
              <div className="bg-white/10 rounded-lg shadow-md p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-200">
                  MERN Stack
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">
                  MongoDB, Express.js, React, and Node.js for full-stack
                  JavaScript development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Express.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>

              {/* Firebase */}
              <div className="bg-white/10 rounded-lg shadow-md p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-orange-200">
                  Firebase
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">
                  Authentication, real-time databases, and cloud functions for
                  scalable applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    Auth
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    Firestore
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    Hosting
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    Functions
                  </span>
                </div>
              </div>

              {/* Vercel */}
              <div className="bg-white/10 rounded-lg shadow-md p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-200">
                  Vercel
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">
                  Seamless deployment and hosting with optimal performance and
                  scalability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                    Deployment
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                    Hosting
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                    CI/CD
                  </span>
                </div>
              </div>

              {/* Additional Technologies */}
              <div className="bg-white/10 rounded-lg shadow-md p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-purple-200">
                  Additional Technologies
                </h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">
                  Redux, Material-UI, Bootstrap, JWT, and other modern libraries
                  and frameworks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Redux
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Material-UI
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Bootstrap
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    JWT
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Tab */}
        {activeTab === "pricing" && (
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">
              Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/*10-40  */}
              <div className="bg-white/10 rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">
                  Basic Page
                </h3>
                <div className="text-3xl font-bold text-red-400 mb-4">
                  $10-40
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Basic Functionality
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Contact Form
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    1-2 Day Delivery
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
              {/* 200-300 */}
              <div className="bg-white/10 rounded-lg shadow-lg p-6 border-2 border-blue-600 transform scale-105">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">
                  Dashboard
                </h3>
                <div className="text-3xl font-bold text-red-400 mb-4">
                  $200-300
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Admin Panel
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Data Visualization
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    User Authentication
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Database Integration
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    5-7 Day Delivery
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
              {/* Custom Project */}
              <div className="bg-white/10 rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">
                  Custom Project
                </h3>
                <div className="text-3xl font-bold text-red-400 mb-4">
                  Custom Quote
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Full-stack Application
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Advanced Features
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Third-party Integrations
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ongoing Maintenance
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/10 text-grey-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-6">
            Contact us for custom project estimates and consultations
          </p>
          <Link to={"https://wa.me/8801749424565?text=I%20want%20to%20Know%20More%20about%20the%20Business%20Website%20(Coding)%20Service"} target="_blank">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BusinessCoding;
