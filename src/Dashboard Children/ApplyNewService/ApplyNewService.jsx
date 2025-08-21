import { FcCustomerSupport } from "react-icons/fc";

const ApplyNewService = () => {
  return (
    <div className="text-center">
      <div className="text-8xl flex justify-center">
        <FcCustomerSupport />
      </div>
      <h1 className="text-3xl font-bold mb-10">Apply New Services</h1>
      <div className="flex bg-amber-50 justify-between p-2 rounded-2xl mt-5">
        <div>
          <input
            type="text"
            className="lg:w-150 input input-bordered rounded-2xl text-black"
            placeholder="Website Edit"
          />
        </div>
        <div>
          <button className="btn btn-primary rounded-2xl lg:text-xl text-sm">
            Apply Service
          </button>
        </div>
      </div>
      <div className="flex bg-amber-50 justify-between p-2 rounded-2xl mt-5">
        <div>
          <input
            type="text"
            className="lg:w-150 input input-bordered rounded-2xl text-black"
            placeholder="SEO Service"
          />
        </div>
        <div>
          <button className="btn btn-primary rounded-2xl lg:text-xl text-sm">
            Apply Service
          </button>
        </div>
      </div>
      <div className="flex bg-amber-50 justify-between p-2 rounded-2xl mt-5">
        <div>
          <input
            type="text"
            className="lg:w-150 input input-bordered rounded-2xl text-black"
            placeholder="Wordpress Service"
          />
        </div>
        <div>
          <button className="btn btn-primary rounded-2xl lg:text-xl text-sm">
            Apply Service
          </button>
        </div>
      </div>
      <div className="flex bg-amber-50 justify-between p-2 rounded-2xl mt-5">
        <div>
          <input
            type="text"
            className="lg:w-150 input input-bordered rounded-2xl text-black"
            placeholder="Boost Campaign"
          />
        </div>
        <div>
          <button className="btn btn-primary rounded-2xl lg:text-xl text-sm">
            Apply Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyNewService;
