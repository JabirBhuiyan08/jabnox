import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Popup = () => {
  return (
    <div>
      {/* Services Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-10 md:gap-5  justify-center items-center md:items-start md:grid-cols-2 lg:grid-cols-3 max-w-5xl ">
          {/* Business Website Card */}
          <div
            className="flex flex-col justify-center items-center 
            w-60 text-center relative p-0.5 rounded-xl 
            bg-gradient-to-b from-violet-500 to-pink-500 group tracking-wide
      shadow-md shadow-violet-900/30
      transition-all duration-300
      hover:scale-105 hover:shadow-xl hover:shadow-pink-700/50 hover:border-pink-600
      active:scale-95"
          >
            <div className=" w-56 h-40 rounded-xl p-2">
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-xl font-bold text-white mb-3"
              >
                Business Website
              </motion.h3>
              <p className="text-[#F5EFE6] mb-4">
                Professional website for your business with modern design and
                functionality.
              </p>
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-48 px-6 py-3 rounded-lg bg-gradient-to-b from-pink-400 to-pink-600 
          text-white font-semibold transition-all duration-300
          hover:from-pink-400 hover:to-pink-500 hover:shadow-lg hover:shadow-violet-500/30"
                onClick={() =>
                  document.getElementById("business_modal").showModal()
                }
              >
                Order Now
              </motion.button>
            </div>
          </div>

          {/* Personal Website Card */}
          <div
            className="flex flex-col justify-center items-center w-60 text-center relative p-0.5 rounded-xl bg-gradient-to-b from-blue-500 to-cyan-800 group tracking-wide
      shadow-md shadow-violet-900/30
      transition-all duration-300
      hover:scale-105 hover:shadow-xl hover:shadow-blue-700/50 hover:border-blue-600
      active:scale-95"
          >
            <div className=" w-56 h-40 rounded-xl p-2">
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-xl font-bold text-white mb-3"
              >
                Personal Website
              </motion.h3>
              <p className="text-[#F5EFE6] mb-4">
                Create a stunning personal portfolio to showcase your work and
                skills.
              </p>
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-48 px-6 py-3 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 
          text-white font-semibold transition-all duration-300
          hover:from-blue-400 hover:to-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
                onClick={() =>
                  document.getElementById("personal_modal").showModal()
                }
              >
                <Link to={"/dashboard/website-template"}>Order Now</Link>
              </motion.button>
            </div>
          </div>

          {/* SEO Card */}
          <div
            className="flex flex-col justify-center items-center w-60 text-center relative p-0.5 rounded-xl bg-gradient-to-b from-green-400 to-emerald-800 group tracking-wide
      shadow-md shadow-violet-900/30
      transition-all duration-300
      hover:scale-105 hover:shadow-xl hover:shadow-green-700/50 hover:border-green-400
      active:scale-95"
          >
            <div className=" w-56 h-40 rounded-xl p-2">
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-xl font-bold text-white mb-3"
              >
                SEO Services
              </motion.h3>
              <p className="text-[#F5EFE6] mb-4">
                Boost your website's visibility with our expert SEO optimization
                services.
              </p>
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-48 px-6 py-3 rounded-lg bg-gradient-to-b from-green-400 to-green-600 
          text-white font-semibold transition-all duration-300
          hover:from-green-400 hover:to-green-500 hover:shadow-lg hover:shadow-green-500/30"
                onClick={() => document.getElementById("seo_modal").showModal()}
              >
                Order Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* Business Website Modal */}
      <dialog id="business_modal" className="modal">
        <div className="modal-box bg-gray-900 text-white border-2 border-violet-600 max-w-4xl">
          <h3 className="font-bold text-2xl mb-6 text-center bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            Business Website Solutions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* WordPress Option */}
            <div className="bg-gray-800 p-6 rounded-2xl border border-violet-500/30 hover:border-violet-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-violet-900 p-3 rounded-xl mr-4">
                  <span className="text-2xl">🖥️</span>
                </div>
                <h4 className="text-xl font-bold text-violet-300">WordPress</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Perfect for businesses that need a professional website quickly
                with easy content management.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">✓</span>
                  <span>Pre-designed professional templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">✓</span>
                  <span>Easy-to-use content management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">✓</span>
                  <span>E-commerce ready with WooCommerce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">✓</span>
                  <span>Fast deployment (1 Week - 2 Weeks)</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to={"/dashboard/business-wordpress"}>
                  <button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white px-6 py-2 rounded-lg font-medium transition-all">
                    Choose WordPress - $30-50/page
                  </button>
                </Link>
              </div>
            </div>

            {/* Coding Option */}
            <div className="bg-gray-800 p-6 rounded-2xl border border-violet-500/30 hover:border-violet-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-violet-900 p-3 rounded-xl mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="text-xl font-bold text-violet-300">
                  Custom Coded (MERN)
                </h4>
              </div>
              <p className="text-gray-300 mb-4">
                For businesses needing unique functionality and completely
                custom design.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">✓</span>
                  <span>Fully custom design and functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">✓</span>
                  <span>MERN stack development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">✓</span>
                  <span>Scalable architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">✓</span>
                  <span>Complete ownership of code</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to={"/dashboard/business-coding"}>
                  <button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white px-6 py-2 rounded-lg font-medium transition-all">
                    Choose Custom Code - $60-80/page
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                Close
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Personal Website Modal */}
      <dialog id="personal_modal" className="modal">
        <div className="modal-box bg-gray-900 text-white border-2 border-blue-500 max-w-4xl">
          <h3 className="font-bold text-2xl mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Personal Website Solutions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* WordPress Option */}
            <div className="bg-gray-800 p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-blue-900 p-3 rounded-xl mr-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h4 className="text-xl font-bold text-blue-300">
                  WordPress Portfolio
                </h4>
              </div>
              <p className="text-gray-300 mb-4">
                Ideal for creators who want an easy-to-manage portfolio with
                blog functionality.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Portfolio-focused templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Built-in blog functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Gallery and project showcases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Quick setup (2-3 days)</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to={"/dashboard/personal-wordpress"}>
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-2 rounded-lg font-medium transition-all">
                    Choose WordPress - $10-20/page
                  </button>
                </Link>
              </div>
            </div>

            {/* Coding Option */}
            <div className="bg-gray-800 p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-blue-900 p-3 rounded-xl mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-bold text-blue-300">
                  Custom Portfolio
                </h4>
              </div>
              <p className="text-gray-300 mb-4">
                For professionals who want a unique, standout portfolio with
                custom interactions.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Completely unique design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Interactive elements and animations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Optimized for performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Full control over every detail</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to={"/dashboard/personal-coding"}>
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-2 rounded-lg font-medium transition-all">
                    Choose Custom Code - $20-30/page
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                Close
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* SEO Modal */}
      <dialog id="seo_modal" className="modal">
        <div className="modal-box bg-gray-900 text-white border-2 border-green-500 max-w-2xl">
          <h3 className="font-bold text-2xl mb-6 text-center bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            SEO Services
          </h3>

          <div className="bg-gray-800 p-6 rounded-2xl border border-green-500/30 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-900 p-3 rounded-xl mr-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="text-xl font-bold text-green-300">
                Search Engine Optimization
              </h4>
            </div>
            <p className="text-gray-300 mb-4">
              Boost your website's visibility and ranking on search engines with
              our comprehensive SEO services.
            </p>
            <ul className="text-gray-400 mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Keyword research and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>On-page SEO technical audit</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Content strategy development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Performance and speed optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Monthly ranking reports and analytics</span>
              </li>
            </ul>
            <div className="bg-green-950/30 p-4 rounded-lg mb-4">
              <p className="text-green-300 text-center">
                Starting at $150/month or $500 one-time comprehensive audit
              </p>
            </div>
            <div className="text-center">
              <Link to={"/dashboard/seo-service"}>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-2 rounded-lg font-medium transition-all">
                  Get SEO Services
                </button>
              </Link>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                Close
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Popup;
