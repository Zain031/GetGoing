import React from "react";
import image_1 from "../../assets/Beranda/cityImages_Bern-City(1).png";
import image_2 from "../../assets/Beranda/cityImages_Gallery 1.png";
import image_3 from "../../assets/Beranda/cityImages_Untitled design (19)-min.png";
import image_4 from "../../assets/Beranda/cityImages_Untitled design (21)-min (1).png";
import image_5 from "../../assets/Beranda/cityImages_Untitled design (22)-min.png";

const KotaPopuler = () => {
    const data = [
        {
            image: image_1,
            city: "Paris",
            country: "Prancis",
        },
        {
            image: image_2,
            city: "Bern",
            country: "Swiss",
        },
        {
            image: image_3,
            city: "Amsterdam",
            country: "Belanda",
        },
        {
            image: image_4,
            city: "London",
            country: "Inggris",
        },
        {
            image: image_5,
            city: "Roma",
            country: "Italia",
        },
    ];

    return (
        <div className="px-[260px] my-[120px] py-20 ">
            <h2
                style={{ fontFamily: "Poppins", fontSize: "32px" }}
                className="my-4 font-bold"
            >
                Kota <span className="text-[#c11313]">Populer</span>
            </h2>
            <div className="flex gap-[25px]">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="w-[236px] h-[349px] relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-2"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={item.image}
                            alt={item.city}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                        <div className="absolute inset-0 flex flex-col mt-64 ml-4  text-white">
                            <p className="font-extrabold text-3xl">
                                {item.city}
                            </p>
                            <p className="text-md mt-4">{item.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KotaPopuler;
