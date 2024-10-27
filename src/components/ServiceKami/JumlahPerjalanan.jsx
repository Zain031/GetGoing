import React from "react";

const JumlahPerjalanan = () => {
    return (
        <div className="flex flex-col items-center text-center p-10 font-poppins  w-max ml-12   mt-10 ">
            <div className="flex items-center gap-8">
                <div>
                    <p className="text-red-600 text-4xl ">280+</p>
                    <p className="text-gray-500 mt-4">Perjalanan</p>
                </div>
                <div className="h-24 border-l-2 border-gray-300"></div>
                <div>
                    <p className="text-red-600 text-4xl ">1180+</p>
                    <p className="text-gray-500 mt-4">Wisatawan</p>
                </div>
            </div>
            <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-900 mt-5">
                    Private Trip Telah Kami Organisir
                </h2>
                <p className="text-gray-500 mt-3 ">
                    Setiap petualangan memiliki ceritanya sendiri, dan kami
                    terus berkomitmen untuk <br /> merencanakan perjalanan
                    berikutnya yang akan menjadi kisah tak terlupakan dalam{" "}
                    <br /> perjalanan hidupmu.
                </p>
            </div>
        </div>
    );
};

export default JumlahPerjalanan;
