import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <div className="text-center text-2xl">
        <h3 className="text-[#30B6EC]">Loading...</h3>
        <span className="loading loading-ring loading-lg"></span>
        <h3>Log in please</h3>
        </div>
    }

    if(user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;