import React, { useEffect, useState } from "react";
import Navbar_2 from "../components/Beranda/Navbar_2";
import Sweeper from "../components/Beranda/Sweeper";
import SedangPopuler from "../components/Beranda/SedangPopuler";
import PrivateTrip from "../components/Beranda/PrivateTrip";
import KotaPopuler from "../components/Beranda/KotaPopuler";
import Footer from "../components/Footer";
import Navbar_1 from "../components/Beranda/Navbar_1";

const Beranda = () => {
    const [showNavbar2, setShowNavbar2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar1Height = document.getElementById("navbar_1")?.offsetHeight || 0;
            const scrollPosition = window.scrollY;

            // Navbar_2 muncul ketika Navbar_1 sudah di-scroll ke atas
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
                {showNavbar2 && <Navbar_2 />} {/* Hanya tampilkan Navbar_2 ketika showNavbar2 adalah true */}
                <Sweeper />
                <SedangPopuler />
                <PrivateTrip />
                <KotaPopuler />
                <Footer />
            </div>
        </>
    );
};

export default Beranda;
