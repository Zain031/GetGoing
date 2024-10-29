import React, { useState, useEffect } from "react";
import { IoMdTime } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from "../Footer";

export default function Blog() {
    const [cards, setCards] = useState([]);
    const [firstCard, setFirstCard] = useState(null);
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
                const randomCards = getRandomCards(data);
                setCards(randomCards);
                console.log(randomCards[0]);

                setFirstCard(randomCards[0]);
                setIsLoading(false);
            } catch (err) {
                setError("Error fetching data. Please try again later.");
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    const getRandomCards = (data) => {
        const shuffledCards = data.slice();
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [
                shuffledCards[j],
                shuffledCards[i],
            ];
        }
        return shuffledCards;
    };

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
        <>
            <div className="w-screen h-[504px] overflow-hidden flex flex-col justify-center items-center font-poppins">
                {firstCard && (
                    <div className="relative w-full h-full">
                        <img
                            key={firstCard.id}
                            src={firstCard.image}
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 flex flex-col justify-center items-center w-[631px] h-[247px] bg-white text-black text-center px-4 ml-[273px] rounded-xl mt-[127px]">
                            <h2 className="text-3xl font-bold mb-2 text-left pl-6 ">
                                {firstCard.title}
                            </h2>
                            <p className="text-sm font-bold tracking-widest text-red-500 mt-5 text-left w-full pl-6 flex gap-2">
                                {" "}
                                LANJUTKAN MEMBACA{" "}
                                <FaLongArrowAltRight className="mt-1" />
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="container mx-auto md:px-[120px] sm:px-6 mt-24 pb-28  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="rounded-lg shadow-xl overflow-hidden flex flex-col h-[633px] transition-transform duration-300 hover:-translate-y-2 pb-6"
                        >
                            <div className="sm:h-56 bg-blue-400 relative md:h-2/3 h-2/3">
                                <div className="absolute inset-0 flex items-center justify-center text-white ">
                                    <img
                                        src={card.image}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="p-4 flex-grow flex flex-col justify-between sm:h-1/3 md:h-1/3">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                        {card.title}
                                    </h2>
                                    <p className="text-gray-400 flex gap-2">
                                        <IoMdTime className="mt-1" />
                                        {card.date}
                                    </p>
                                </div>
                                <p className="text-sm font-bold tracking-widest text-red-500 text-left w-full  flex gap-2">
                                    LANJUTKAN MEMBACA{" "}
                                    <FaLongArrowAltRight className="mt-1" />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
