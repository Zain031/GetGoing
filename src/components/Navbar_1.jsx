import React from "react";
import image_1 from "../../src/assets/Beranda/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Navbar_1 = () => {
    const location = useLocation();
    return (
        <div className="animate-slideInUp">
            <div className="flex justify-evenly items-center pt-[20px] pb-[30px] font-poppins px-[260px] gap-40">
                <div className="flex items-center gap-2 ">
                    <img
                        src={image_1}
                        alt="Logo Get Going"
                        className="w-[200px]"
                    />
                    <div className="flex items-center w-[448px] h-[41px] shadow-[0_0_15px_5px_rgba(255,0,0,0.5)] rounded-full">
                        <input
                            className="w-full px-4 py-2 text-sm text-gray-700 bg-white rounded-l-full focus:outline-none"
                            type="text"
                            placeholder="Cari negara, kota atau guide"
                        />
                        <BsArrowRightCircleFill className="text-red-700 text-4xl mr-1 cursor-pointer" />
                    </div>
                </div>
                <div className="flex items-center gap-5 text-sm text-red-600">
                    <Link to="/">
                        <p
                            className={`${
                                location.pathname === "/" && "font-bold"
                            } whitespace-nowrap    text-red-600`}
                        >
                            Beranda
                        </p>
                    </Link>

                    <Link to="/service-kami">
                        <p
                            className={` ${
                                location.pathname === "/service-kami" &&
                                "font-bold"
                            } whitespace-nowrap`}
                        >
                            Servis Kami
                        </p>
                    </Link>

                    <p
                        className={` ${
                            location.pathname === "/blog" && "font-bold"
                        } whitespace-nowrap`}
                    >
                        Blog
                    </p>
                    <p className="text-black font-bold tracking-widest">
                        Login
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar_1;







// import React from "react";
// import image_1 from "../../src/assets/Beranda/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png";
// import { BsArrowRightCircleFill } from "react-icons/bs";
// import { Link, useLocation } from "react-router-dom";

// const Navbar_1 = () => {
//     const location = useLocation();
//     return (
//         <div className="bg-white shadow-md">
//             <div className="flex flex-col md:flex-row justify-between items-center p-4 md:px-10 lg:px-20 xl:px-[260px] gap-4 font-poppins">
//                 <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
//                     <img
//                         src={image_1}
//                         alt="Logo Get Going"
//                         className="w-[150px] sm:w-[180px] md:w-[200px]"
//                     />
//                     <div className="flex items-center w-full sm:w-[280px] md:w-[448px] h-[41px] shadow-lg rounded-full">
//                         <input
//                             className="w-full px-4 py-2 text-sm text-gray-700 bg-white rounded-l-full focus:outline-none"
//                             type="text"
//                             placeholder="Cari negara, kota atau guide"
//                         />
//                         <BsArrowRightCircleFill className="text-red-700 text-2xl sm:text-3xl md:text-4xl mr-2 cursor-pointer" />
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-4 md:gap-5 text-xs sm:text-sm text-red-600">
//                     <Link to="/">
//                         <p
//                             className={`${
//                                 location.pathname === "/" && "font-bold"
//                             } whitespace-nowrap`}
//                         >
//                             Beranda
//                         </p>
//                     </Link>
//                     <Link to="/service-kami">
//                         <p
//                             className={`${
//                                 location.pathname === "/service-kami" &&
//                                 "font-bold"
//                             } whitespace-nowrap`}
//                         >
//                             Servis Kami
//                         </p>
//                     </Link>
//                     <Link to="/blog">
//                         <p
//                             className={`${
//                                 location.pathname === "/blog" && "font-bold"
//                             } whitespace-nowrap`}
//                         >
//                             Blog
//                         </p>
//                     </Link>
//                     <p className="text-black font-bold tracking-widest whitespace-nowrap">
//                         Login
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar_1;
