import React from "react";
import image_1 from "../assets/Beranda/MockupApp.png";
import image_2 from "../assets/Beranda/AppStore.svg";
import image_3 from "../assets/Beranda/GooglePlay.svg";

const Footer = () => {


    return (
        <>
            <div className="flex  font-poppins flex-col md:flex-row justify-center bg-[#cc0001] px-6 md:px-20 lg:px-[282px] py-10 md:py-[50px] gap-10 md:gap-[177px] text-white">
                <div className="flex flex-col items-start">
                    <p className="font-bold text-md mb-3">INFORMASI KONTAK</p>
                    <p>
                        BSD Green Office Park 1, 6th Floor, BSD City, Tangerang,
                        Banten 15345
                    </p>
                    <p>24/7 - Online</p>
                    <p>lets@getgoing.co.id</p>
                    <p>@getgoing.co.id</p>
                    <p>@getgoing.co.id</p>
                </div>

                <div className="flex justify-center">
                    <img
                        className="w-full md:w-[400px] lg:w-[800px]"
                        src={image_1}
                        alt="App Mockup"
                    />
                </div>

                <div className="flex flex-col items-start">
                    <p className="font-bold text-md mb-3">DOWNLOAD DI</p>
                    <img className="w-32 mb-2" src={image_2} alt="App Store" />
                    <img className="w-32" src={image_3} alt="Google Play" />
                </div>

                <div className="flex flex-col items-start">
                    <p className="font-bold text-md mb-3">LAINNYA</p>
                    <p>Syarat dan Ketentuan</p>
                    <p>Kebijakan Privasi</p>
                    <p>Dokumentasi</p>
                    <p>Penghargaan</p>
                    <p>Login</p>
                    <p>Press</p>
                    <p>F.A.Q</p>
                </div>
            </div>
            <div className="h-[75px] px-6 md:px-20 lg:px-[282px] flex items-center bg-black">
                <p className="text-white text-center md:text-left">
                    Copyright © 2024 - PT. Gue Eksplorasi Terus. All rights
                    reserved.
                </p>
            </div>
        </>
    );
};

export default Footer;
