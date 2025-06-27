import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import NavMobile from "../components/organisms/NavMobile";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { Outlet } from "react-router-dom";

export default function Layout() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <NavMobile />
            <Footer />


        </>
    )
}