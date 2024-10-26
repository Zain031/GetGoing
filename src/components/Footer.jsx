import React from "react";
import image_1 from "../assets/Beranda/MockupApp.png";
import image_2 from "../assets/Beranda/AppStore.svg";
import image_3 from "../assets/Beranda/GooglePlay.svg";

const Footer = () => {
    return (
        <div className=" justify-center w-screen font-poppins ">
            <div className="flex justify-center  bg-[#cc0001] px-[282px] py-[50px]  h-[345px]  gap-[177px] text-white ">
                <div>
                    <p className="font-bold text-md mb-3">INFORMASI KONTAK</p>
                    <p>
                        BSD Green Office Park 1,6th
                        Floor,BSDCity,Tangerang,Banten 15345
                    </p>
                    <p>24/7-Online</p>
                    <p>lets@getgoing.co.id</p>
                    <p>@getgoing.co.id</p>
                    <p>@getgoing.co.id</p>
                </div>
                <div>
                    <img className="w-[800px]" src={image_1} alt="" />
                </div>
                <div>
                    <p className="font-bold text-md mb-3">DOWNLOAD DI</p>
                    <img src={image_2} alt="" />
                    <img src={image_3} alt="" />
                </div>
                <div>
                    <p className="font-bold text-md mb-3">LAINNYA</p>
                    <p>Syarat dan ketentuan</p>
                    <p>Kebijakan Privasi</p>
                    <p>Dokumentasi</p>
                    <p>Penghargaan</p>
                    <p>Login</p>
                    <p>Press</p>
                    <p>F.A.Q</p>
                </div>
            </div>
            <div className="h-[75px] px-[282px] flex justify-start bg-black items-center">
                <p className="text-white">
                    Copyright © 2024-PT.Gue Eksplorasi Terus.All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
