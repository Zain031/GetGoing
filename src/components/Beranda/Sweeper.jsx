import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import image_1 from "../../assets/Beranda/1689692183775IMG_1600.JPG";
import image_2 from "../../assets/Beranda/1689692364277swiss .JPG";

export default function Sweeper() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
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
                    <div className="text-2xl">
                        <div className="w-[600px] h-[350px] overflow-hidden rounded-2xl">
                            <img
                                className="w-full h-full object-cover"
                                src={image_2}
                                alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-2xl">
                        <div className="w-[600px] h-[350px] overflow-hidden rounded-2xl">
                            <img
                                className="w-full h-full object-cover"
                                src={image_1}
                                alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
