import useAxiosSecure from "./axiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();


    const {data: isAdmin, isLoading, isPending: isAdminLoading} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data)
            return res.data?.admin;
        }
        
    })
    return [isAdmin, isLoading, isAdminLoading];
};

export default useAdmin;