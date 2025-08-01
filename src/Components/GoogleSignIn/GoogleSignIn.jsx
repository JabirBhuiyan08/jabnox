import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const GoogleSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigation =  useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        googleSignIn().then(result => {
            console.log(result.user.email);
            const user = {
                email: result.user?.email,
                name: result.user?.displayName,
                
            }
            
            if (user) {
              navigation("/dashboard/projects");
            }
            console.log(user);
            Swal.fire({
                title: "User login successfully",
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
            });

            axiosPublic.post('/users', user)
            .then(res=>{
                console.log(res.data);

            })
        });
    }
    return (
        <div className="flex justify-center items-center">
            <button onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-xl shadow hover:shadow-md hover:bg-yellow-100 transition duration-200 font-semibold"
            >
                <FaGoogle className="text-red-500 text-lg" />
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleSignIn;
