import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(user?.email){
        return children;
    }
    if(loading){
        return <div className='py-10 flex justify-center items-center'><span className='loading loading-ring loading-lg'></span></div>
    }
    return <Navigate to={'/login'} replace/>
};

export default PrivateRoute;