import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";

const BaseLayout = () => {
    return (
        <>
            <Navbar />
            {/* <section className="flex justify-center h-screen">
                <main className="w-[1280px] flex justify-center items-top bg-red-300">
                    <section className="flex justify-center flex-row items-top ">
                        <main className="flex flex-col gap-8  items-top"> */}
            <Outlet />
            {/* </main>
                    </section>
                </main>
            </section> */}
        </>
    );
};

export default BaseLayout;
