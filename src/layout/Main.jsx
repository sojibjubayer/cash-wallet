import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";



const Main = () => {
    return (
        <div className="lg:w-[98%] mx-auto ">
            <Navbar />
            <Outlet />
         
        </div>
    );
};

export default Main;