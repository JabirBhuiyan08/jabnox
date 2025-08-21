import { FcPortraitMode } from "react-icons/fc";

const PendingApplication = () => {
    return (
        <div>
            <div className="text-8xl flex justify-center">
                <FcPortraitMode />
            </div>
            <p className="text-3xl font-bold flex justify-center">Panding Application</p>
            <div className="flex bg-blue-400 justify-between p-5 rounded-full mt-5 items-center">
            <div>SEO Service</div>
            <p>Your service is under review</p>
            <p className="text-sm bg-blue-200 rounded-full font-bold p-2 text-red-400">Pending</p>
            </div>
            <div className="flex bg-blue-400 justify-between p-5 rounded-full mt-5 items-center">
            <div>SEO Service</div>
            <p>Your service is under review</p>
            <p className="text-sm bg-blue-200 rounded-full font-bold p-2 text-red-400">Pending</p>
            </div>
            <div className="flex bg-blue-400 justify-between p-5 rounded-full mt-5 items-center">
            <div>SEO Service</div>
            <p>Your service is under review</p>
            <p className="text-sm bg-blue-200 rounded-full font-bold p-2 text-red-400">Pending</p>
            </div>
            <div className="flex bg-blue-400 justify-between p-5 rounded-full mt-5 items-center">
            <div>SEO Service</div>
            <p>Your service is under review</p>
            <p className="text-sm bg-blue-200 rounded-full font-bold p-2 text-green-600">Accepted</p>
            </div>
        </div>
    );
};

export default PendingApplication;