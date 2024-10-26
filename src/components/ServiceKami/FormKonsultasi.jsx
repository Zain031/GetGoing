import React from "react";
import image_1 from "../../assets/Servis Kami/whatsapp-button.png";

const FormKonsultasi = () => {
    return (
        <div className="mx-auto w-[640px] bg-[#cc0001] rounded-xl h-[652px] font-poppins ">
            <h1 className="ml-[14px] pt-4 pl-4 text-white font-extrabold text-3xl">
                Konsultasikan dengan kami
            </h1>
            <p className="ml-[14px] pt-1  text-md font-light pl-4 text-white">
                {" "}
                Tim kami siap untuk membantu perjalananmu!
            </p>
            <form action="" method="POST" className="mt-[30px] mb-[30px]  ">
                <div className="flex gap-[20px] mx-[25px]">
                    <div className="w-full  sm:w-1/2 ">
                        <div className="mb-5">
                            <label
                                htmlFor="fName"
                                className="mb-3 block text-base  text-white font-extralight"
                            >
                                Nama Depan
                            </label>
                            <input
                                type="text"
                                name="fName"
                                id="fName"
                                placeholder="First Name"
                                className="rounded-md w-[280px] h-[38px] border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label
                                htmlFor="lName"
                                className="mb-3 block text-base  text-white font-extralight "
                            >
                                Nama Belakang
                            </label>
                            <input
                                type="text"
                                name="lName"
                                id="lName"
                                placeholder="Last Name"
                                className="rounded-md w-[280px] border h-[38px] border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex  ml-[14px] ">
                    <div className="w-full px-3 sm:w-1/2 ">
                        <div className="mb-5">
                            <label
                                htmlFor="fName"
                                className="mb-3 block text-base  text-white font-extralight"
                            >
                                Alamat Email
                            </label>
                            <input
                                type="text"
                                name="fName"
                                id="fName"
                                placeholder="First Name"
                                className="rounded-md w-[280px] h-[38px] border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5 ">
                            <label
                                htmlFor="lName"
                                className="mb-3 block text-base  text-white font-extralight"
                            >
                                Nomor Telephone
                            </label>
                            <input
                                type="text"
                                name="lName"
                                id="lName"
                                placeholder="Last Name"
                                className="rounded-md  w-[280px] border h-[38px] border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-[26px] ">
                    <label
                        htmlFor="date"
                        className="mb-3 block ml-[30px]  text-base  text-white font-extralight"
                    >
                        service
                    </label>
                    <select className="select ml-[26px] w-[590px] border border-[#e0e0e0] bg-white h-[38px] ">
                        <option disabled selected className="font-extrabold">
                            PILIH SERVICE
                        </option>
                        <option>
                            <h1 className="font-bold text-3xl">Private Trip</h1>
                            <br />
                            <p>Dengan transportasi umum</p>
                        </option>
                        <option>
                            <h1 className="font-bold text-3xl">Private Trip</h1>
                            <br />
                            <p>Full dengan MOBIL PRIBADI</p>
                        </option>
                        <option>
                            <h1 className="font-bold text-3xl">Jasa local guide</h1>
                            <br />
                            <p>Setiap kota beda local guide</p>
                        </option>
                        <option>
                            <h1 className="font-bold text-3xl">Land arrangement</h1>
                            <br />
                            <p>Untuk grup besar minimal 15 orang</p>
                        </option>
                    </select>
                </div>

                <div className="mb-[26px] mx-3 ">
                    <label
                        htmlFor="date"
                        className="mb-3 block ml-[14px]  text-base  text-white font-extralight"
                    >
                        service
                    </label>
                    <textarea
                        name="date"
                        id="date"
                        placeholder="Enter date here"
                        className="w-[590px] rounded-md ml-[14px]  border border-[#e0e0e0] bg-white py-3 px-3 h-[114px] text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>

                <div className="flex justify-center gap-[29px]">
                    <button className=" rounded-3xl bg-[#38c738] py-2 text-center  text-sm font-semibold gap-2 hover:bg-green-600 text-white outline-none px-[59px] flex items-center ">
                        <img src={image_1} alt="" className="w-[30px]" />
                        <p className="">Chat Via WA</p>
                    </button>
                    <button className=" rounded-3xl text-[#cc0001]  bg-white py-2  text-center  font-semibold text-sm  outline-none px-[59px]">
                        Gratis Konsultasi
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormKonsultasi;
