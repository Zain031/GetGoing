import React, { useState } from "react";
import image_1 from "../assets/Servis Kami/ig.png";
import image_2 from "../assets/Servis Kami/whatsapp-button.png";

const HubungiKami = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div
                id="open"
                onClick={handleClick}
                className="absolute bottom-4 right-4 w-max h-max bg-slate-400 rounded-md p-4 cursor-pointer"
            >
                I
            </div>

            {isOpen && (
                <div
                    id="openComponent"
                    className="absolute bottom-4 right-4 flex justify-center items-center w-[385px] h-[92px] bg-slate-100 rounded-md gap-4 font-poppins shadow-lg"
                >
                    <div>
                        <h1 className="font-extrabold text-red-700">
                            Hubungi kami
                        </h1>
                        <p>Melalui IG atau WA</p>
                    </div>
                    <div className="flex gap-2">
                        <img src={image_1} alt="Instagram" className="w-[40px]" />
                        <img src={image_2} alt="WhatsApp" className="w-[40px]" />
                    </div>
                    <button
                        onClick={handleClick}
                        className="ml-4 font-bold text-red-700 cursor-pointer"
                    >
                        x
                    </button>
                </div>
            )}
        </div>
    );
};

export default HubungiKami;
