import React, { useEffect, useState } from "react";
import image_1 from "../../assets/Beranda/logo.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar_2 = () => {
    const [rotateLogo, setRotateLogo] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setRotateLogo(true);
        const timer = setTimeout(() => setRotateLogo(false), 1000);

        setTimeout(() => setShowNavbar(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const navList = [
        {
            name: "Beranda",
            link: "/",
        },
        {
            name: "Servis Kami",
            link: "/service-kami",
        },
        {
            name: "Blog",
            link: "/blog",
        },
    ];

    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 inline-flex justify-between items-center pt-5 pb-6 font-poppins px-8 gap-[423px]
                bg-white/40 backdrop-blur-lg rounded-full shadow-md z-50 transition-transform duration-300 ${
                    showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="flex items-center gap-6">
                <img
                    src={image_1}
                    alt="Logo Get Going"
                    className={`w-[40px] ${
                        rotateLogo ? "animate-sweep3D" : ""
                    }`}
                />

                <div className="flex items-center w-[448px] h-[41px] shadow-[0_0_15px_5px_rgba(255,0,0,0.5)] rounded-full bg-white">
                    <input
                        className="w-full px-4 py-2 text-sm text-gray-700 bg-white rounded-l-full focus:outline-none"
                        type="text"
                        placeholder="Cari negara, kota atau guide"
                    />
                    <BsArrowRightCircleFill className="text-red-700 text-4xl mr-1 cursor-pointer" />
                </div>
            </div>

            <div className="flex items-center gap-5 text-sm text-red-600">
                {navList.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <p
                            className={`${
                                location.pathname === item.link && "font-bold"
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
    );
};

export default Navbar_2;
