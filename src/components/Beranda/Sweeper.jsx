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
        <>
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
                    <div className="px-[260px] flex gap-[120px] font-poppins">
                        <div className="w-[600px] h-[350px] overflow-hidden rounded-2xl relative">
                            <img
                                className="w-full h-full object-cover"
                                src={image_2}
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 rounded-2xl"></div>
                        </div>
                        <div className="pb-[75px] pt-[65px] text-center text-sm text-slate-500">
                            <p>
                                EKSPLOR DAN NIKMATI MUDAH LIBURAN KE <br />
                                LUAR NEGRI DENGAN
                            </p>
                            <p className="text-slate-800 font-extrabold text-2xl mt-2">
                                APLIKASI GET GOING
                            </p>
                            <br /> DAPAT DI DOWNLOAD DI
                            <div className="flex gap-[75px] mt-3">
                                <img
                                    className="w-[191px]"
                                    src={image_3}
                                    alt=""
                                />
                                <img
                                    className="w-[191px]"
                                    src={image_4}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-[260px] flex gap-[140px]">
                        <div className="w-[600px] h-[350px] overflow-hidden rounded-2xl relative">
                            <img
                                className="w-full h-full object-cover"
                                src={image_1}
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 rounded-2xl"></div>
                        </div>
                        <div className="mb-[35px]">
                            <div className="my-12 transition-transform duration-200 hover:-translate-y-2 flex gap-8">
                                <div>
                                    <img
                                        src={image_5}
                                        alt=""
                                        className="w-12"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-slate-900">
                                        Trip Planner
                                    </h3>
                                    <p className="font-bold text-sm bg-slate-50 p-1 max-h-max rounded-xl">
                                        Susun Rute Perjalanan Sendiri
                                    </p>
                                </div>
                            </div>
                            <div className="my-12 transition-transform duration-200 hover:-translate-y-2 flex gap-8">
                                <div>
                                    <img
                                        src={image_6}
                                        alt=""
                                        className="w-12"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-slate-900">
                                        Guide
                                    </h3>
                                    <p className="font-bold text-sm bg-slate-50 p-1 max-h-max rounded-xl">
                                        Tour Guide Berbahasa Indonesia
                                    </p>
                                </div>
                            </div>
                            <div className="mt-12 transition-transform duration-200 hover:-translate-y-2 flex gap-8">
                                <div className="rounded-full">
                                    <img
                                        src={image_7}
                                        alt=""
                                        className="w-12"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl text-slate-900">
                                        Info
                                    </h3>
                                    <p className="font-bold text-sm bg-slate-50 p-1 max-h-max rounded-xl">
                                        Info Penting Di Luar Negri
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
