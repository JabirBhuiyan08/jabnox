import useAxiosSecure from "./axiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";


const UseAdmin = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();


    const {data: isAdmin, isLoading} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data)
            return res.data?.admin;
        }
        
    })
    return [isAdmin, isLoading];
};

export default UseAdmin;