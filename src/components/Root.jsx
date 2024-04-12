import { Outlet } from "react-router-dom";
// import Home from "./Home";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div>
        <Navbar />
        {/* <Home></Home> */}
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;