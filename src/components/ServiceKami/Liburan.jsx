import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

import image_1 from "../../assets/Servis Kami/1711270623swiper-photo-1.png";
import image_2 from "../../assets/Servis Kami/1711339750IMG_2218.JPG";
import image_3 from "../../assets/Servis Kami/171134041220240103_115420-min.jpg";
import image_4 from "../../assets/Servis Kami/1711346982IMG_5234_(1).jpg";
import image_5 from "../../assets/Servis Kami/1711340541IMG-20231028-WA0016.jpg";
import image_6 from "../../assets/Servis Kami/1711345182Image_20221216_083832_695 (2).jpeg";
import image_7 from "../../assets/Servis Kami/1711346320167869b4-8b1a-421e-8e49-3491c4d0540b.jpg";

import image_8 from "../../assets/Servis Kami/17113463206288db11-2770-4c75-ad7c-54023ccd9eef (1).JPG";
export default function App() {
    const [swiperRef, setSwiperRef] = useState(null);

    const data = [
        { image: image_2 },
        { image: image_1 },
        { image: image_5 },
        { image: image_4 },
        { image: image_3 },
        { image: image_6 },
        { image: image_7 },
        { image: image_8 },
    ];

    return (
        <>
            <div className="container mx-auto flex font-poppins justify-center ">
                <div className="w-[519px]  p-6  mr-16">
                    <h2 className="text-3xl font-extrabold text-black mb-2">
                        Liburan
                    </h2>
                    <h3 className="text-xl  text-red-600 mb-4">
                        Bersama Kami, GetGoing
                    </h3>
                    <p className="text-gray-400 mb-6 ">
                        GetGoing akan membantu Anda menciptakan perjalanan yang
                        sesuai dengan kebutuhan dan keinginan Anda. Anggota kami
                        yang tersebar di lebih dari 15 negara di Eropa adalah
                        jembatan budaya yang akan mempermudah kami untuk
                        mengakomodasi keperluan-keperluan liburan Anda di
                        destinasi wisata tujuan.
                    </p>
                    <button className="bg-red-600 text-white font-semibold py-2 px-12 rounded-full hover:bg-red-700 transition-colors duration-300">
                        HUBUNGI KAMI
                    </button>
                </div>

                <div className="flex justify-center gap-10 mb-4  items-start ">
                    <button
                        id="swiper-button-prev"
                        className="text-lg font-bold"
                    >
                        <BsArrowLeftCircle className="text-4xl text-slate-600 hover:text-red-600" />
                    </button>
                    <button
                        id="swiper-button-next"
                        className="text-lg font-bold"
                    >
                        <BsArrowRightCircle className="text-4xl text-slate-600 hover:text-red-600" />
                    </button>
                </div>

                <div className="w-[519px] mx-auto  py-5 ">
                    <Swiper
                        modules={[Virtual, Navigation, Pagination]}
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={120}
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={{
                            nextEl: "#swiper-button-next",
                            prevEl: "#swiper-button-prev",
                        }}
                        virtual
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index} virtualIndex={index}>
                                <div className="w-[188px] h-[349px] relative overflow-hidden rounded-2xl ">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item.image}
                                        alt={item.city}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/40"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
