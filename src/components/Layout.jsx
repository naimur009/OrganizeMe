import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = () => {
    return (
        <>
          <Navbar/>
            <Outlet/>
        </>
    );
};

export default Layout;