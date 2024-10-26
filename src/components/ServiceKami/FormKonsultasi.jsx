import React from "react";

const FormKonsultasi = () => {
    return (
        <div className="mx-auto w-[640px] bg-[#cc0001] rounded-xl h-[652px] font-poppins">
            <h1 className="ml-[14px] pt-4 pl-4 text-white font-extrabold text-3xl">Konsultasikan dengan kami</h1>
            <p className="ml-[14px] pt-1  text-md font-light pl-4 text-white"> Tim kami siap untuk membantu perjalananmu!</p>
            <form action="" method="POST" className="mt-[30px]  ">
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
                <div className="mb-5 px-3 ml-[14px]">
                    <label
                        htmlFor="guest"
                        className="mb-3 block text-base text-white font-extralight"
                    >
                        How many guests are you bringing?
                    </label>
                    <input
                        type="number"
                        name="guest"
                        id="guest"
                        placeholder="5"
                        min="0"
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>

                <div className="mb-[26px] mx-3 ">
                    <label
                        htmlFor="date"
                        className="mb-3 block ml-[14px]  text-base  text-white font-extralight"
                    >
                        Date
                    </label>
                    <textarea
                        name="date"
                        id="date"
                        placeholder="Enter date here"
                        className="w-[600px] rounded-md ml-[14px]  border border-[#e0e0e0] bg-white py-3 px-3 h-[114px] text-base  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>

                <div className="flex justify-center gap-[29px]">
                    <button className="hover:shadow-form rounded-3xl bg-[#6A64F1] py-3text-center text-base font-semibold text-white outline-none px-[59px] ">
                        Submit
                    </button>
                    <button className="hover:shadow-form rounded-3xl bg-[#6A64F1] py-3  text-center text-base font-semibold text-white outline-none px-[59px]">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormKonsultasi;
