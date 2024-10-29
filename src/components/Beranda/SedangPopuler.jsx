import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image_1 from "../../assets/Beranda/avatar_PHOTO-2018-09-23-16-32-02.jpg";
import image_2 from "../../assets/Beranda/bergabungFormImage_E5E046B0-9750-458D-BDCF-C9FE6EF2A763.JPG";
import image_3 from "../../assets/Beranda/bergabungFormImage_IMG_1904.jpeg";
import image_4 from "../../assets/Beranda/bergabungFormImage_WhatsApp Image 2023-05-08 at 10.54.49.jpg";
import image_5 from "../../assets/Beranda/sky.png";

const Test = () => {
    const data = [
        { image: image_5, name: "Nuel", place: "Munich, Belanda" },
        { image: image_2, name: "Agus", place: "Paris, Prancis" },
        { image: image_3, name: "Stela", place: "Roma, Italia" },
        { image: image_4, name: "Januar", place: "Zurich, Swiss" },
        { image: image_1, name: "Gio", place: "Amsterdam, Jerman" },
        { image: image_1, name: "Gio", place: "Amsterdam, Jerman" },
        { image: image_1, name: "Gio", place: "Amsterdam, Jerman" },
    ];

    return (
        <div className="px-4 sm:px-10 lg:px-[260px] pb-10 lg:pb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl my-4 font-bold font-poppins mb-7">
                Sedang <span className="text-[#c11313]">Populer</span>
            </h2>

            <Swiper
                slidesPerView={5} 
                spaceBetween={10}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
                aria-label="Popular places slider"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center">
                            <div className="w-[150px] h-[150px] sm:w-[180px] mx-4 sm:h-[180px] lg:w-[205px] lg:h-[205px] overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-2 relative">
                                <img
                                    className="w-full h-full object-cover rounded-2xl"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 rounded-2xl"></div>
                            </div>
                            <div className="pt-2 text-center">
                                <h4 className="text-slate-700 font-bold font-poppins">
                                    {item.name}
                                </h4>
                                <p className="text-slate-700 font-light">
                                    {item.place}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Test;
