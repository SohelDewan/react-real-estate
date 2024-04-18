import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Link, Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading) {
        return <div className="text-center h-[50vh]">
        <span className="loading loading-ring loading-lg"></span>
        <h3 className="text-[#30B6EC]  text-2xl">Loading...</h3>
        <Link to='/login'>
        <button className="btn bg-[#30B6EC] text-white mt-5">Click to Login</button>
        </Link>
        </div>
    }

    if(user) {
        return children;
    }
    
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;