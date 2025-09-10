const popup = () => {
  return (
    <div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Business Website Card */}
        <div className="relative p-0.5 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 group">
          <div className="bg-gray-800 rounded-xl p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-3">
              Business Website
            </h3>
            <p className="text-gray-400 mb-4">
              Professional website for your business with modern design and
              functionality.
            </p>
            <button
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 
                       text-white font-semibold transition-all duration-300
                       hover:from-violet-500 hover:to-pink-500 hover:shadow-lg hover:shadow-violet-500/30"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Personal Website Card */}
        <div className="relative p-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 group">
          <div className="bg-gray-800 rounded-xl p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-3">
              Personal Website
            </h3>
            <p className="text-gray-400 mb-4">
              Create a stunning personal portfolio to showcase your work and
              skills.
            </p>
            <button
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 
                       text-white font-semibold transition-all duration-300
                       hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-blue-500/30"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* SEO Card */}
        <div className="relative p-0.5 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 group">
          <div className="bg-gray-800 rounded-xl p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-3">SEO Services</h3>
            <p className="text-gray-400 mb-4">
              Boost your website's visibility with our expert SEO optimization
              services.
            </p>
            <button
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 
                       text-white font-semibold transition-all duration-300
                       hover:from-green-400 hover:to-emerald-400 hover:shadow-lg hover:shadow-green-500/30"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* Business Website Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gray-800 text-white border border-violet-500">
          <div className="flex flex-row gap-2">
            <div className="border p-4 rounded-3xl border-violet-500">
              <h3 className="font-bold rounded-3xl text-lg text-violet-400">
                Business Website
              </h3>
              <p className="py-4">
                Our business website service provides you with a professional
                online presence tailored to your brand. Features include
                responsive design, CMS integration, and e-commerce capabilities.
              </p>
              <button className= "hover:bg-violet-600 bg-violet-500 px-4 py-2 rounded-lg">Wordpress</button>
            </div>
            <div className="border p-4 rounded-3xl border-violet-500">
              <h3 className="font-bold text-lg text-violet-400">
                Business Website
              </h3>
              <p className="py-4">
                Our business website service provides you with a professional
                online presence tailored to your brand. Features include
                responsive design, CMS integration, and e-commerce capabilities.
              </p>
              <button className="hover:bg-violet-600 bg-violet-500 px-4 py-2 rounded-lg">Coding</button>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="px-4 py-2 bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors">
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
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-gray-800 text-white border border-violet-500">
          <div className="flex flex-row gap-2">
            <div className="border p-4 rounded-3xl border-violet-500">
              <h3 className="font-bold rounded-3xl text-lg text-violet-400">
                Business Website
              </h3>
              <p className="py-4">
                Our business website service provides you with a professional
                online presence tailored to your brand. Features include
                responsive design, CMS integration, and e-commerce capabilities.
              </p>
              <button className= "hover:bg-violet-600 bg-violet-500 px-4 py-2 rounded-lg">Wordpress</button>
            </div>
            <div className="border p-4 rounded-3xl border-violet-500">
              <h3 className="font-bold text-lg text-violet-400">
                Business Website
              </h3>
              <p className="py-4">
                Our business website service provides you with a professional
                online presence tailored to your brand. Features include
                responsive design, CMS integration, and e-commerce capabilities.
              </p>
              <button className="hover:bg-violet-600 bg-violet-500 px-4 py-2 rounded-lg">Coding</button>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="px-4 py-2 bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors">
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
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-gray-800 text-white border border-violet-500">
          <div className="flex flex-row gap-2">
            <div className="border p-4 rounded-3xl border-violet-500">
              <h3 className="font-bold rounded-3xl text-lg text-violet-400">
                Business Website
              </h3>
              <p className="py-4">
                Our business website service provides you with a professional
                online presence tailored to your brand. Features include
                responsive design, CMS integration, and e-commerce capabilities.
              </p>
              <button className= "hover:bg-violet-600 bg-violet-500 px-4 py-2 rounded-lg">Wordpress</button>
            </div>
            <div className="border p-4 rounded-3xl border-violet-500">
              <h3 className="font-bold text-lg text-violet-400">
                Business Website
              </h3>
              <p className="py-4">
                Our business website service provides you with a professional
                online presence tailored to your brand. Features include
                responsive design, CMS integration, and e-commerce capabilities.
              </p>
              <button className="hover:bg-violet-600 bg-violet-500 px-4 py-2 rounded-lg">Coding</button>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="px-4 py-2 bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors">
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

export default popup;
