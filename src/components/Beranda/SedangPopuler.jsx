import React from "react";
import image_1 from "../../assets/Beranda/avatar_PHOTO-2018-09-23-16-32-02.jpg";
import image_2 from "../../assets/Beranda/bergabungFormImage_E5E046B0-9750-458D-BDCF-C9FE6EF2A763.JPG";
import image_3 from "../../assets/Beranda/bergabungFormImage_IMG_1904.jpeg";
import image_4 from "../../assets/Beranda/bergabungFormImage_WhatsApp Image 2023-05-08 at 10.54.49.jpg";
import image_5 from "../../assets/Beranda/sky.png";

const SedangPopuler = () => {
    const data = [
        {
            image: image_5,
            name: "Nuel",
            place: "Munich, Belanda",
        },
        {
            image: image_2,
            name: "Agus",
            place: "Paris, Prancis",
        },
        {
            image: image_3,
            name: "Stela",
            place: "Roma, Italia",
        },
        {
            image: image_4,
            name: "Januar",
            place: "Zurich, Swiss",
        },
        {
            image: image_1,
            name: "Gio",
            place: "Amsterdam, Jerman",
        },
    ];

    return (
        <div className="px-[260px] pb-20">
            <h2
                style={{ fontFamily: "Poppins", fontSize: "32px" }}
                className="my-4 font-bold"
            >
                Sedang <span className="text-[#c11313]"> Populer</span>
            </h2>
            <div className="flex gap-[53px]">
                {data.map((item, index) => (
                    <div key={index}>
                        <div className="w-[205px] h-[205px] overflow-hidden rounded-2xl flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-2 relative">
                            <img
                                className="w-[205px] h-[205px] object-cover rounded-2xl"
                                src={item.image}
                                alt={item.name}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 rounded-2xl"></div>
                        </div>
                        <div className="pt-2">
                            <h4 className="text-slate-700 font-bold font-poppins">
                                {item.name}
                            </h4>
                            <p className="text-slate-700 font-light">
                                {item.place}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SedangPopuler;
