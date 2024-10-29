import React, { useState } from "react";
import image_1 from "../../assets/Servis Kami/whatsapp-button.png";

const FormKonsultasi = () => {
    const [selectedService, setSelectedService] = useState("PILIH SERVICE");

    const services = [
        { title: "Private Trip", description: "Dengan transportasi umum" },
        { title: "Private Trip", description: "Full dengan MOBIL PRIBADI" },
        {
            title: "Jasa Local Guide",
            description: "Setiap kota beda local guide",
        },
        {
            title: "Land Arrangement",
            description: "Untuk grup besar minimal 15 orang",
        },
    ];

    const handleSelectService = (service) => {
        setSelectedService(`${service.title} `);
    };

    return (
        <div className="mx-auto w-[640px] bg-[#cc0001] rounded-xl h-[652px] font-poppins ml-24 ">
            <h1 className="pt-4 pl-4 text-white font-extrabold text-3xl ml-[20px]">
                Konsultasikan dengan kami
            </h1>
            <p className="pt-1 pl-4 text-md font-light text-white ml-[20px]">
                Tim kami siap untuk membantu perjalananmu!
            </p>

            <form method="POST" className="mt-[30px] mb-[30px]">
                <div className="flex gap-[20px] mx-[25px]">
                    <div className="w-full sm:w-1/2">
                        <label
                            htmlFor="fName"
                            className="mb-3 block text-base text-white font-extralight"
                        >
                            Nama Depan
                        </label>
                        <input
                            type="text"
                            name="fName"
                            id="fName"
                            placeholder="John"
                            className="rounded-md w-[280px] h-[38px] border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <label
                            htmlFor="lName"
                            className="mb-3 block text-base text-white font-extralight"
                        >
                            Nama Belakang
                        </label>
                        <input
                            type="text"
                            name="lName"
                            id="lName"
                            placeholder="Doe"
                            className="rounded-md w-[280px] h-[38px] border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>

                <div className="flex gap-[20px] mx-[25px]">
                    <div className="w-full sm:w-1/2">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-base text-white font-extralight"
                        >
                            Alamat Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="my@email.com"
                            className="rounded-md w-[280px] h-[38px] border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <label
                            htmlFor="phone"
                            className="mb-3 block text-base text-white font-extralight"
                        >
                            Nomor Telepon
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="+62123456789"
                            className="rounded-md w-[280px] h-[38px] border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                </div>

                <div className="mb-[26px]   mx-[25px] mt-2">
                    <label
                        htmlFor="service"
                        className="mb-3 block text-base text-white font-extralight w-full"
                    >
                        Service
                    </label>
                    <div className="dropdown dropdown-bottom w-full ">
                        <div
                            tabIndex={0}
                            role="button"
                            className="w-full  bg-white font-bold text-black border border-[#e0e0e0] h-[38px] px-4 py-2 rounded-md"
                        >
                            {selectedService}
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-white rounded-box z-[1] w-full p-2 shadow-md mt-2"
                        >
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        onClick={() =>
                                            handleSelectService(service)
                                        }
                                        className="block px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                        <p className="font-bold text-base ">
                                            {service.title}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {service.description}
                                        </p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-[26px] mx-[25px]">
                    <label
                        htmlFor="details"
                        className="mb-3 block text-base text-white font-extralight"
                    >
                        Detail
                    </label>
                    <textarea
                        id="details"
                        name="details"
                        placeholder="Enter details here"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 h-[114px] text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>

                <div className="flex justify-center gap-[29px]">
                    <button className="flex items-center gap-2 rounded-3xl bg-[#38c738] py-2 px-[59px] text-white font-semibold text-sm hover:bg-green-600 outline-none">
                        <img
                            src={image_1}
                            alt="WhatsApp icon"
                            className="w-[30px]"
                        />
                        Chat Via WA
                    </button>
                    <button className="rounded-3xl bg-white py-2 px-[59px] text-[#cc0001] font-semibold text-sm outline-none">
                        Gratis Konsultasi
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormKonsultasi;
