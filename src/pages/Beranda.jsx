import React, { useEffect, useState } from "react";
import Sweeper from "../components/Beranda/Sweeper";
import SedangPopuler from "../components/Beranda/SedangPopuler";
import PrivateTrip from "../components/Beranda/PrivateTrip";
import KotaPopuler from "../components/Beranda/KotaPopuler";
import Footer from "../components/Footer";
import Navbar_1 from "../components/Navbar_1";
import Navbar_2 from "../components/Navbar_2";
import Blog_2 from "../components/Blog.jsx/Blog_2";

const Beranda = () => {
    const [showNavbar2, setShowNavbar2] = useState(false);

    useEffect(() => {

        window.scrollTo({ top: 0, behavior: "smooth" });

        const handleScroll = () => {
            const navbar1Height =
                document.getElementById("navbar_1")?.offsetHeight || 0;
            const scrollPosition = window.scrollY;

            setShowNavbar2(scrollPosition > navbar1Height);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="justify-center h-screen">
                <div id="navbar_1">
                    <Navbar_1 />
                </div>
                {showNavbar2 && <Navbar_2 />}
                <Sweeper />
                <SedangPopuler />
                <PrivateTrip />
                <KotaPopuler />
                <Blog_2 />
                <Footer />
            </div>
        </>
    );
};

export default Beranda;
