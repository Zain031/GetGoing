import React from "react";
import image_1 from "../../assets/Servis Kami/1711339750IMG_2218.JPG";
import image_2 from "../../assets/Servis Kami/1711346976IMG_7373-min.JPG";
import image_3 from "../../assets/Servis Kami/1711346982IMG_5234_(1).jpg";
import image_4 from "../../assets/Servis Kami/1711347014IMG_3548.jpg";
import image_5 from "../../assets/Servis Kami/171134041220240103_115420-min.jpg";
import image_6 from "../../assets/Servis Kami/171134681320230625_135741.jpg";

const cardData = [
    {
        id: 1,
        image: image_1,
        title: "Fall - Aghnest",
        year: "2023",
    },
    {
        id: 2,
        image: image_2,
        title: "Spring - Rizky",
        year: "2023",
    },
    {
        id: 3,
        image: image_3,
        title: "Summer - Meta",
        year: "2023",
    },
    {
        id: 4,
        image: image_4,
        title: "Winter - Permadi",
        year: "2023",
    },
    {
        id: 5,
        image: image_5,
        title: "Summer - LOP",
        year: "2023",
    },
    {
        id: 6,
        image: image_6,
        title: "Spring- Vincent",
        year: "2023",
    },
];

export default function PrivateTripCard() {
    return (
        <div className=" w-max font-poppins mt-[195px]   ">
            <div className="grid grid-cols-3 gap-3  ">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="w-[290px] h-[330px] bg-white shadow-xl rounded-lg overflow-hidden p-3 transition-transform duration-300 hover:-translate-y-2 "
                    >
                        <div className="h-2/3 bg-blue-400">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="h-1/3 p-4 flex flex-col justify-center items-center text-center ">
                            <h3 className="text-md font-bold">{card.title}</h3>
                            <p className="text-gray-500 text-sm mt-1">{card.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
