import React from "react";
import image_1 from "../../assets/Beranda/avatar_PHOTO-2018-09-23-16-32-02.jpg";
import image_2 from "../../assets/Beranda/bergabungFormImage_E5E046B0-9750-458D-BDCF-C9FE6EF2A763.JPG";
import image_3 from "../../assets/Beranda/bergabungFormImage_IMG_1904.jpeg";

const SedangPopuler = () => {
    const data = [
        {
            image: image_1,
            descreiption: "Nuel",
            time: "Munich, Belanda",
        },
        {
            image: image_2,
            descreiption: "Agus",
            time: "Paris, Prancis",
        },
        {
            image: image_3,
            descreiption: "Stela",
            time: "Roma, Italia",
        },
    ];

    return (
        <div className="px-[260px] my-[120px] py-20 ">
            <h2
                style={{ fontFamily: "Poppins", fontSize: "32px" }}
                className="my-4  font-extrabold"
            >
                Baca Juga
            </h2>
            <div className="flex gap-[53px]  ">
                {data.map((item, index) => (
                    <div>
                        <div className="w-[410px] h-[630px]overflow-hidden rounded-2xl flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-2  ">
                            <img
                                className="w-[410px] h-[408px] object-cover rounded-2xl"
                                src={item.image}
                                alt={item.name}
                            />
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
