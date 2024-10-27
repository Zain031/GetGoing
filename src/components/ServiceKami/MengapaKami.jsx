import React from "react";
import {
    FaMapMarkerAlt,
    FaNetworkWired,
    FaRegCalendarAlt,
} from "react-icons/fa";

const MengapaKami = () => {
    return (
        <section className="pt-16 bg-white font-poppins px-[210px]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Mengapa <span className="text-red-600">Kami</span>
                </h2>
                <p className="text-gray-400 mb-12 ">
                    Kami berdedikasi untuk memberikan pengalaman perjalanan yang
                    tak terlupakan
                </p>
                <div className="grid gap-5 sm:grid-cols-3">
                    <div className="flex p-6 gap-6 ">
                        <div className="w-12 h-12 flex items-top justify-center bg-blue-100 rounded-md p-3 ">
                            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                        </div>

                        <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800">
                                Lokal
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Semua local guide, driver serta team <br /> kami
                                tinggal di Eropa, sehingga Kamu <br /> akan
                                mendapatkan pengetahuan dan pengalaman layaknya
                                orang lokal.
                            </p>
                        </div>
                    </div>

                    <div className="flex p-6 gap-6">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 p-3">
                            <FaNetworkWired className="text-blue-500 text-2xl" />
                        </div>

                        <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-800">
                                Terhubung
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Kamu akan selalu terhubung dengan GetGoing
                                dimanapun dan kapanpun, dari sebelum berangkat,
                                saat di Eropa hingga Kamu pulang sampai depan
                                pintu rumah.
                            </p>
                        </div>
                    </div>

                    <div className="flex p-6 gap-6">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-100  p-3">
                            <FaRegCalendarAlt className="text-blue-500 text-2xl" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-lg font-bold text-gray-800">
                                Fleksibel
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Tentukan kemana, kapan, dan kegiatan apa yang
                                ingin dilakukan sesuka hati. Karena
                                fleksibilitas adalah bagian dari cara menikmati
                                liburan-Mu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MengapaKami;
