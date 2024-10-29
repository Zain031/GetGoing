import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar_2 from "./Navbar_2";
import image_1 from "../../assets/Beranda/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
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

    const navList = [
        {
            name: "Beranda",
            link: "/",
        },
        {
            name: "Service Kami",
            link: "/service-kami",
        },
        {
            name: "Blog",
            link: "/blog",
        },
    ];

    return (
        <>
            <div
                className={`${
                    location.pathname === "/login" ? "hidden" : ""
                } absolute top-0 left-0 right-0 z-50 `}
            >
                <div id="navbar_1">
                    <div className="flex justify-evenly items-center pt-[20px] mb-[30px] font-poppins px-[260px] gap-40">
                        <div className="flex items-center gap-2 ">
                            <img
                                src={image_1}
                                alt="Logo Get Going"
                                className="w-[200px]"
                            />
                            <div className="flex items-center w-[448px] h-[41px] shadow-[0_0_15px_5px_rgba(255,0,0,0.5)] rounded-full backdrop-blur-lg bg-white bg-opacity-50">
                                <input
                                    className={`w-full px-4 py-2 text-sm text-gray-800 bg-transparent ${
                                        location.pathname === "/blog"
                                            ? "opacity-20"
                                            : ""
                                    } rounded-l-full focus:outline-none`}
                                    type="text"
                                    placeholder="Cari negara, kota atau guide"
                                />
                                <BsArrowRightCircleFill className="text-red-700 text-4xl mr-1 cursor-pointer" />
                            </div>
                        </div>

                        <div className="flex items-center gap-5 text-sm text-red-600">
                            {navList.map((item, index) => (
                                <Link key={index} to={item.link}>
                                    <p
                                        className={`${
                                            location.pathname === item.link &&
                                            "font-bold"
                                        } whitespace-nowrap    text-red-600`}
                                    >
                                        {item.name}
                                    </p>
                                </Link>
                            ))}
                            <Link to={"/login"}>
                                <p className="text-black font-bold tracking-widest">
                                    Login
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                {showNavbar2 && <Navbar_2 />}
            </div>
        </>
    );
};

export default Navbar;
