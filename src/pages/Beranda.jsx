import React, { useEffect, useState } from "react";
import Sweeper from "../components/Beranda/Sweeper";
import SedangPopuler from "../components/Beranda/SedangPopuler";
import PrivateTrip from "../components/Beranda/PrivateTrip";
import KotaPopuler from "../components/Beranda/KotaPopuler";
import Footer from "../components/Footer";

import Blog_2 from "../components/Blog.jsx/Blog_2";

const Beranda = () => {
    return (
        <>
            <div className="justify-center h-screen">
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
