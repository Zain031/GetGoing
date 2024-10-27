

// import React from "react";
// import image_1 from "../../assets/Beranda/cityImages_Bern-City(1).png";
// import image_2 from "../../assets/Beranda/cityImages_Gallery 1.png";
// import image_3 from "../../assets/Beranda/cityImages_Untitled design (19)-min.png";
// import image_4 from "../../assets/Beranda/tripPlanner_1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg";
// import image_5 from "../../assets/Beranda/cityImages_Untitled design (22)-min.png";

// const KotaPopuler = () => {
//     const data = [
//         { image: image_2, city: "Paris", country: "Prancis" },
//         { image: image_1, city: "Bern", country: "Swiss" },
//         { image: image_5, city: "Amsterdam", country: "Belanda" },
//         { image: image_4, city: "London", country: "Inggris" },
//         { image: image_3, city: "Roma", country: "Italia" },
//     ];

//     return (
//         <div className=" sm:px-8   py-10 md:px-[260px]">
//             <h2
//                 style={{ fontFamily: "Poppins" }}
//                 className="text-2xl sm:text-3xl lg:text-4xl my-4 font-bold"
//             >
//                 Kota <span className="text-[#c11313]">Populer</span>
//             </h2>
//             <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//                 {data.map((item, index) => (
//                     <div
//                         key={index}
//                         className="relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-2 w-full aspect-[2/3]"
//                     >
//                         <img
//                             className="w-full h-full object-cover"
//                             src={item.image}
//                             alt={item.city}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
//                         <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//                             <p className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl">
//                                 {item.city}
//                             </p>
//                             <p className="text-sm sm:text-md mt-2">
//                                 {item.country}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default KotaPopuler;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import image_1 from "../../assets/Beranda/cityImages_Bern-City(1).png";
import image_2 from "../../assets/Beranda/cityImages_Gallery 1.png";
import image_3 from "../../assets/Beranda/cityImages_Untitled design (19)-min.png";
import image_4 from "../../assets/Beranda/tripPlanner_1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg";
import image_5 from "../../assets/Beranda/cityImages_Untitled design (22)-min.png";

const KotaPopuler = () => {
    const data = [
        { image: image_2, city: "Paris", country: "Prancis" },
        { image: image_1, city: "Bern", country: "Swiss" },
        { image: image_5, city: "Amsterdam", country: "Belanda" },
        { image: image_4, city: "London", country: "Inggris" },
        { image: image_3, city: "Roma", country: "Italia" },
        { image: image_3, city: "Roma", country: "Italia" },
        { image: image_3, city: "Roma", country: "Italia" },
        { image: image_3, city: "Roma", country: "Italia" },

    ];

    return (
        <div className="sm:px-8 py-10 md:px-[260px]">
            <h2
                style={{ fontFamily: "Poppins" }}
                className="text-2xl sm:text-3xl lg:text-4xl my-4 font-bold"
            >
                Kota <span className="text-[#c11313]">Populer</span>
            </h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-2 w-full aspect-[2/3]"
                        >
                            <img
                                className="w-full h-full object-cover"
                                src={item.image}
                                alt={item.city}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                <p className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                                    {item.city}
                                </p>
                                <p className="text-sm sm:text-md mt-2">
                                    {item.country}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default KotaPopuler;
