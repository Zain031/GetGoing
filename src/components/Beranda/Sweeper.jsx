import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import image_1 from "../../assets/Beranda/1689692183775IMG_1600.JPG";
import image_2 from "../../assets/Beranda/1689692364277swiss .JPG";
import image_3 from "../../assets/Beranda/AppStore.svg";
import image_4 from "../../assets/Beranda/GooglePlay.svg";
import image_5 from "../../assets/Beranda/Screenshot from 2024-10-26 07-05-09.png";
import image_6 from "../../assets/Beranda/Screenshot from 2024-10-26 07-05-50.png";
import image_7 from "../../assets/Beranda/Screenshot from 2024-10-26 07-06-00.png";

export default function Sweeper() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            speed={950}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="px-4 sm:px-10 md:px-16 lg:px-32 xl:px-[260px] flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[120px] font-poppins">
                    <div className="w-full md:w-[600px] h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-2xl relative">
                        <img
                            className="w-full h-full object-cover"
                            src={image_2}
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 rounded-2xl"></div>
                    </div>
                    <div className="text-center text-sm text-slate-500">
                        <p>
                            EKSPLOR DAN NIKMATI MUDAH LIBURAN KE <br />
                            LUAR NEGRI DENGAN
                        </p>
                        <p className="text-slate-800 font-extrabold text-xl sm:text-2xl mt-2">
                            APLIKASI GET GOING
                        </p>
                        <p className="mt-4">DAPAT DI DOWNLOAD DI</p>
                        <div className="flex justify-center gap-4 sm:gap-8 md:gap-[75px] mt-3">
                            <img
                                className="w-[150px] sm:w-[191px]"
                                src={image_3}
                                alt="App Store"
                            />
                            <img
                                className="w-[150px] sm:w-[191px]"
                                src={image_4}
                                alt="Google Play"
                            />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="px-4 sm:px-10 md:px-16 lg:px-32 xl:px-[260px] flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[140px]">
                    <div className="w-full md:w-[600px] h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-2xl relative">
                        <img
                            className="w-full h-full object-cover"
                            src={image_1}
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 rounded-2xl"></div>
                    </div>
                    <div className="mb-8 md:mb-[35px]">
                        {[{ src: image_5, title: "Trip Planner", text: "Susun Rute Perjalanan Sendiri" },
                          { src: image_6, title: "Guide", text: "Tour Guide Berbahasa Indonesia" },
                          { src: image_7, title: "Info", text: "Info Penting Di Luar Negri" }]
                          .map((item, index) => (
                            <div key={index} className="my-6 md:my-12 transition-transform duration-200 hover:-translate-y-2 flex gap-4 sm:gap-6 md:gap-8">
                                <div>
                                    <img src={item.src} alt={item.title} className="w-10 sm:w-12" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg sm:text-xl text-slate-900">{item.title}</h3>
                                    <p className="font-bold text-xs sm:text-sm bg-slate-50 p-1 rounded-xl">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
