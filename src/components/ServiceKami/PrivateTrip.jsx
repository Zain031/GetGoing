import React from "react";
import image_1 from "../../assets/Beranda/person-pin-gradient.png";
import image_2 from "../../assets/Beranda/star-gradient.png";
import image_3 from "../../assets/Beranda/support-gradient.png";
import image_4 from "../../assets/Beranda/commute-gradient.png";
import image_5 from "../../assets/Beranda/check-circle.png";
import { useLocation } from "react-router-dom";

const PrivateTrip = () => {
    const location = useLocation();
    const data = [
        {
            image: image_3,
            title: "Konsultasi Gratis",
            description: "Curhatin aja semuanya!",
        },
        {
            image: image_1,
            title: "Local Guide",
            description: "Biar ada teman!",
        },
        {
            image: image_4,
            title: "Transportasi",
            description: "Bebas pilih transportasi apa",
        },
        {
            image: image_2,
            title: " Lengkapi Pokoknya",
            description: "Hotel, Asuransi, Visa, Wifi dll",
        },
    ];

    return (
        <div className="pl-[260px] font-poppins  ">
            <div className="flex justify-center  gap-20">
                <div>
                    <p className="  text-red-600 text-4xl">PRIVATE TRIP</p>
                    <p className="font-extrabold text-4xl mt-4">
                        BERANGKAT
                        <span className="text-[#cc0001]"> Kapan Saja</span>
                        <p className="mt-3">Semaumu</p>
                    </p>
                    <div className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto p-4 text-slate-500 mt-[40px]">
                        <div className="flex bg-slate-100 pr-24 pl-4 py-4 rounded-lg ">
                            <img
                                className="w-5 h-5 mr-3 mt-5"
                                src={image_5}
                                alt=""
                            />
                            <p>
                                Tentukan tanggal <br /> keberangkatan <br />
                                sesukamu
                            </p>
                        </div>
                        <div className="flex bg-slate-100 pr-24 pl-4 py-4 rounded-lg ">
                            <img
                                className="w-5 h-5 mr-3 mt-5"
                                src={image_5}
                                alt=""
                            />
                            <p>
                                Tidak ada kuota <br />
                                minimum,jadi pasti <br />
                                berangkat
                            </p>
                        </div>
                        <div className="flex bg-slate-100 pr-24 pl-4 py-4 rounded-lg ">
                            <img
                                className="w-5 h-5 mr-3 mt-5"
                                src={image_5}
                                alt=""
                            />
                            <p>
                                Fleksibel,bebas <br />
                                tetukan destinasi dan <br /> aktivitas
                                perjalanan
                            </p>
                        </div>
                        <div className="flex bg-slate-100 pr-24 pl-4 py-4 rounded-lg ">
                            <img
                                className="w-5 h-5 mr-3 mt-5"
                                src={image_5}
                                alt=""
                            />
                            <p>
                                Liburan jadi lebih <br />
                                exclusive untuk kamu <br />
                                dan keluarga
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateTrip;
