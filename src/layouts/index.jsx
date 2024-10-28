import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";

const BaseLayout = () => {
    return (
        <>
            <section className="flex justify-center w-screen ">
                <main className="w-full  bg-slate-200">
                    <Navbar />
                    <Outlet />
                    <Footer />
                </main>
            </section>
        </>
    );
};

export default BaseLayout;
