import React from "react";

const Blog = () => {
    const cards = [
        { title: "Card 1", description: "Description for Card 1" },
        { title: "Card 2", description: "Description for Card 2" },
        { title: "Card 3", description: "Description for Card 3" },
        { title: "Card 4", description: "Description for Card 4" },
        { title: "Card 5", description: "Description for Card 5" },
        { title: "Card 6", description: "Description for Card 6" },
    ];

    return (
        <div className="container mx-auto px-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="rounded-lg shadow-md overflow-hidden bg-red-300 h-[604px] "
                    >
                        <div className="h-2/3 bg-blue-400">
                            <img src="" alt="" />
                        </div>


                        <div className="h-1/3 p-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {card.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {card.description}
                        </p>
                        <p className="text-gray-700 mb-4">
                            Lanjutkan Membaca 
                        </p>
                        </div>







                    </div>



                ))}
            </div>
        </div>
    );
};

export default Blog;
