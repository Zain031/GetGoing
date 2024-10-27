import React, { useEffect, useState } from "react";
import Sweeper from "../components/Beranda/Sweeper";
import SedangPopuler from "../components/Beranda/SedangPopuler";
import PrivateTrip from "../components/ServiceKami/PrivateTrip";
import KotaPopuler from "../components/Beranda/KotaPopuler";
import Footer from "../components/Footer";
import Navbar_1 from "../components/Navbar_1";
import Navbar_2 from "../components/Navbar_2";
import PrivateTripCard from "../components/ServiceKami/PrivateTripCard";
import FormKonsultasi from "../components/ServiceKami/FormKonsultasi";
import JumlahPerjalanan from "../components/ServiceKami/JumlahPerjalanan";
import MengapaKami from "../components/ServiceKami/MengapaKami";
import Peta from "../components/ServiceKami/Peta";
import Liburan from "../components/ServiceKami/Liburan";
import Founder from "../components/ServiceKami/Founder";

const ServiceKami = () => {
    const [showNavbar2, setShowNavbar2] = useState(false);

    useEffect(() => {
        // Scroll to the top of the page when the component first mounts
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
                <div className="flex w-max mt-[104px]">
                    <div className="w-1/2 ">
                        <PrivateTrip />
                        <PrivateTripCard />
                    </div>

                    <div className="mt-20" >
                        <FormKonsultasi />
                        <JumlahPerjalanan />
                    </div>
                </div>
                <MengapaKami />
                <Peta />
                <Liburan />
                <Founder />

                <Footer />
            </div>
        </>
    );
};

export default ServiceKami;
