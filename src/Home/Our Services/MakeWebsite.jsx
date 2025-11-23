import { Link } from "react-router-dom";


const MakeWebsite = () => {
    return (
        <Link className="flex flex-col justify-center items-center">
            <img
            className="w-32 rounded-4xl"
            src='https://cdn.iplocation.net/assets/images/pages/featured/Create-a-Website.jpg' alt="" />
            <p>Make a website</p>
        </Link>
    );
};

export default MakeWebsite;