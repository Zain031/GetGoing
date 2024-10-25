import React from "react";
import Navbar_1 from "../components/Beranda/Navbar_1";
import Sweeper from "../components/Beranda/Sweeper";
import SedangPopuler from "../components/Beranda/SedangPopuler";
import PrivateTrip from "../components/Beranda/PrivateTrip";
import KotaPopuler from "../components/Beranda/KotaPopuler";
import Footer from "../components/Footer";

const Beranda = () => {
    return (
        <>
            <div class="justify-center h-screen ">
                 <Navbar_1 />
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
