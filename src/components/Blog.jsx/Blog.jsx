import React, { useState, useEffect } from "react";
import { IoMdTime } from "react-icons/io";

export default function Blog() {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/src/Data/data.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                console.log(data);
                setCards(data);
                setIsLoading(false);
            } catch (err) {
                setError("Error fetching data. Please try again later.");
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="container mx-auto md:px-[120px] sm:px-6  py-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="rounded-lg shadow-xl overflow-hidden flex flex-col h-[633px] transition-transform duration-300 hover:-translate-y-2 "
                    >
                        <div className=" sm:h-56  bg-blue-400 relative md:h-2/3 h-2/3">
                            <div className="absolute inset-0 flex items-center justify-center text-white ">
                                <img src={card.image} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="p-4 flex-grow flex flex-col justify-between sm:h-1/3 md:h-1/3">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {card.title}
                                </h2>
                                <p className="text-gray-600  flex gap-2 ">
                                    <IoMdTime className="mt-1" />
                                    {card.date}
                                </p>
                            </div>
                            <p className="text-gray-700 mt-auto">
                                Lanjutkan Membaca
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
