import React from "react";
import image_1 from "../../assets/Servis Kami/map-image.png";
import image_2 from "../../assets/Servis Kami/mapp.png";

const Peta = () => {
    return (
        <div className="relative flex  justify-center font-poppins gap-10 mt-32">

            {/* <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 w-full h-[300px]"
                style={{ backgroundImage: `url(${image_2})` }}
            ></div> */}


            <div className="relative flex gap-10">
                <div>
                    <img src={image_1} alt="" className="w-[600px]" />
                </div>
                <div className=" bg-opacity-80 p-6 rounded-lg">
                    <h1 className="text-2xl font-extrabold mb-2">
                        Tempat Dimana Perjalanan Anda Menjadi Lebih <br /> Dari
                        Sekedar Destinasi
                    </h1>
                    <p className="text-gray-400">
                        Salju, menara Eiffel atau kincir angin di Belanda mungkin
                        merupakan salah <br /> satu tujuan utama turis-turis
                        berdatangan ke tanah Eropa. Namun, <br /> sebenarnya Eropa
                        menawarkan lebih dari sekedar salju. Cahaya aurora di <br />
                        utara Eropa, bangunan-bangunan bersejarah berbaur dengan
                        hiruk pikuk <br /> kota besar di barat, kota-kota tua di
                        timur dan keindahan alam di daerah <br /> selatan merupakan
                        hal lain yang tidak boleh terlewatkan saat berada di sini.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Peta;
