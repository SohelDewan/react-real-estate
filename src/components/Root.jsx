import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
        <Navbar />
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Root;