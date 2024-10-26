import React from "react";
import image_2 from "../../assets/Servis Kami/1711269274Pandu.jpg";
import image_3 from "../../assets/Servis Kami/1711269307Anin.JPG";
import image_1 from "../../assets/Servis Kami/1711268840Munir.jpg";
import image_5 from "../../assets/Servis Kami/1711269395Ringgo.jpg";
import image_4 from "../../assets/Servis Kami/1711269356Clarisa.JPG";
import image_6 from "../../assets/Servis Kami/1711269425Suhendra.jpg";

const founders_1 = [
    {
        name: "Munir",
        position: "CEO - 10 Tahun Di Jerman",
        imageUrl: image_1,
    },
    {
        name: "Joanita",
        position: "COO - 7 Tahun Di Jerman",
        imageUrl: image_3,
    },
    {
        name: "Dr. Suhendra",
        position: "Komisaris - 20 Tahun Di Jerman",
        imageUrl: image_6,
    },
];

const founders_2 = [
    {
        name: "Pandu",
        position: "Partnership - 10 Tahun Di Jerman",
        imageUrl: image_2,
    },
    {
        name: "Anindhia",
        position: "Finance - 9 Tahun Di Jerman",
        imageUrl: image_3,
    },
    {
        name: "Iga",
        position: "VP Sales - 8 Tahun Di Jerman",
        imageUrl: image_4,
    },
    {
        name: "Clarisa",
        position: "CTO - 9 Tahun Di Jerman",
        imageUrl: image_5,
    },
    {
        name: "Ringgo",
        position: "Brand Director - Aktor",
        imageUrl: image_5,
    },
];

const FounderSection = () => {
    return (
        <div className="px-[260px]  py-10 font-poppins ">
            <div className="flex gap-[19px]">
                {founders_1.map((item, index) => (
                    <div
                        key={index}
                        className="w-[236px] h-[349px] relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-2"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={item.imageUrl}
                            alt={item.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                        <div className="absolute inset-0 flex flex-col mt-64 ml-4  text-white">
                            <p className="font-extrabold text-3xl">
                                {item.name}
                            </p>
                            <p className="text-md mt-2">{item.position}</p>
                        </div>
                    </div>
                ))}
                <div className="">
                    <h2 className="text-3xl font-bold">
                        <span className="text-red-600">Founder</span> Kami
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Kami adalah mahasiswa dan alumni dari universitas dari
                        Jerman <br /> yang ingin memberikan pengalaman berlibur
                        lokal selayaknya <br /> orang yang tinggal di Eropa
                        seperti kami.
                    </p>
                </div>
            </div>

            <div className="flex gap-[19px] mt-4">
                {founders_2.map((item, index) => (
                    <div
                        key={index}
                        className="w-[236px] h-[349px] relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-2"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={item.imageUrl}
                            alt={item.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                        <div className="absolute inset-0 flex flex-col mt-64 ml-4  text-white">
                            <p className="font-extrabold text-3xl">
                                {item.name}
                            </p>
                            <p className="text-md mt-2">{item.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FounderSection;
