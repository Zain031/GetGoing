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
                speed={1000}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="px-[260px] my-[120px] flex gap-[140px]">
                        <div className="w-[600px] h-[350px] overflow-hidden rounded-2xl">
                            <img
                                className="w-full h-full object-cover"
                                src={image_2}
                                alt=""
                            />
                        </div>
                        <div className="pb-[75px] pt-[65px] text-center">
                            EKSPLOR DAN NIKMATI MUDAH LIBURAN KE <br /> LUAR
                            NEGRI DENGAN <br />
                            <span className="fornt-extrabold text-3xl">
                                Apliaksi GetGoing
                            </span>
                            <br /> DAPAT DI DOWNLOAD DI
                            <div className="flex gap-[75px]">
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
                    <div className="px-[260px] my-[120px] flex gap-[140px]">
                        <div className="w-[600px] h-[350px] overflow-hidden rounded-2xl">
                            <img
                                className="w-full h-full object-cover"
                                src={image_1}
                                alt=""
                            />
                        </div>
                        <div className="mb-[35px]">
                            <div class="my-10">
                                <h3>Trip Planner</h3>
                                <p>Susun Rute Perjalanan Sendiri</p>
                            </div>
                            <div class="my-10">
                                <h3>Guide</h3>
                                <p>Tour Guide Berbahasa Indonesia</p>
                            </div>
                            <div class="my-10">
                                <h3>Info</h3>
                                <p>Info Penting Di Luar Negri</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
