import React, { useEffect, useState } from "react";
import Sweeper from "../components/Beranda/Sweeper";
import SedangPopuler from "../components/Beranda/SedangPopuler";
import PrivateTrip from "../components/ServiceKami/PrivateTrip";
import KotaPopuler from "../components/Beranda/KotaPopuler";
import Footer from "../components/Footer";
import PrivateTripCard from "../components/ServiceKami/PrivateTripCard";
import FormKonsultasi from "../components/ServiceKami/FormKonsultasi";
import JumlahPerjalanan from "../components/ServiceKami/JumlahPerjalanan";
import MengapaKami from "../components/ServiceKami/MengapaKami";
import Peta from "../components/ServiceKami/Peta";
import Liburan from "../components/ServiceKami/Liburan";
import Founder from "../components/ServiceKami/Founder";

const ServiceKami = () => {
    return (
        <>
            <div className="justify-center h-screen mt-44">
                <div className="flex w-max mt-[104px]">
                    <div className="w-1/2 ">
                        <PrivateTrip />
                        <PrivateTripCard />
                    </div>

                    <div className="mt-20">
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
