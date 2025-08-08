import React from 'react';
import UseAdmin from '../hooks/UseAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] =UseAdmin();
    const {user, loading} = useAuth();

    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className='progress w-56'></progress>
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;