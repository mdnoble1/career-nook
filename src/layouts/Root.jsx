import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Root = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;