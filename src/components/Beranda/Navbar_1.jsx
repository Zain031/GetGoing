import React from "react";
import image_1 from "../../assets/Beranda/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Navbar_1 = () => {
    return (
        <>
            <div className="flex justify-between items-center  py-[30px] font-poppins px-[260px]">
                <div className="flex items-center gap-2 ">
                    <img
                        src={image_1}
                        alt="Logo Get Going"
                        className="w-[200px]"
                    />

                    <div className="flex items-center w-[448px] h-[41px] shadow-[0_0_15px_5px_rgba(255,0,0,0.5)] rounded-full">
                        <input
                            className="w-full px-4 py-2 text-sm text-gray-700 bg-white rounded-l-full focus:outline-none "
                            type="text"
                            placeholder="Cari negara, kota atau guide"
                        />
                        <BsArrowRightCircleFill className="text-red-700 text-4xl mr-1 cursor-pointer" />
                    </div>
                </div>

                <div className="flex items-center gap-5 text-sm text-red-600">
                    <p className="font-bold text-red-600">Beranda</p>
                    <p>Servis Kami</p>
                    <p>Blog</p>
                    <p className="text-black font-bold tracking-widest">Login</p>

                </div>
            </div>
        </>
    );
};

export default Navbar_1;
