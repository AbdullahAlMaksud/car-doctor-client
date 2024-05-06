import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation()
    // console.log(location.pathname)

    if(user?.email){
        return children;
    }
    if(loading){
        return <div className='py-10 flex justify-center items-center'><span className='loading loading-ring loading-lg'></span></div>
    }
    return <Navigate state={location.pathname} to='/login' replace/>
};

export default PrivateRoute;