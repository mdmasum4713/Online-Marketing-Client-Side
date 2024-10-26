import { useState } from "react";

const reviews = [
    {
        id: 1,
        title: "1300+ Customer reviews",
        subtitle: "Our customers love",
        name: "Karen Onnabit",
        role: "Store Customer",
        comment: "If you are going to use a passage of text, you need to be sure there isn't anything embarrassing hidden in the middle of the text. Our generator pulls from a dictionary of over 2000 words.",
        image: "https://i.ibb.co.com/3s74FZW/test-2.jpg",
    },
    {
        id: 2,
        title: "1300+ Customer reviews",
        subtitle: "Our customers love",
        name: "Lynne Gwistic",
        role: "Store Customer",
        comment: "It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of passages.",
        image: "https://i.ibb.co.com/wRjGL8M/test-3.jpg",
    },
    {
        id: 3,
        title: "1300+ Customer reviews",
        subtitle: "Our customers love",
        name: "John Doe",
        role: "Store Customer",
        comment: "The platform has revolutionized the way I manage my tasks. It’s intuitive, responsive, and makes life so much easier!",
        image: "https://i.ibb.co.com/wRjGL8M/test-3.jpg",
    },
    {
        id: 4,
        title: "1300+ Customer reviews",
        subtitle: "Our customers love",
        name: "Jane Smith",
        role: "Store Customer",
        comment: "A fantastic service! I've recommended it to so many people because it genuinely enhances productivity.",
        image: "https://i.ibb.co.com/wRjGL8M/test-3.jpg",
    },
];

const Customer = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 2) % reviews.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 2 + reviews.length) % reviews.length);
    };

    const currentReviews = reviews.slice(startIndex, startIndex + 2);

    return (
        <div className="p-6">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 fade-in">1300+ Customer reviews</h1>
                <p className="text-gray-600 fade-in">Our customers love</p>
            </div>

            {/* Button Container with Prev and Next buttons */}
            <div className="flex justify-between mb-4">
                <button onClick={handlePrev} className="text-yellow-500 hover:text-yellow-600 mb-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <button onClick={handleNext} className="text-yellow-500 hover:text-yellow-600 mb-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentReviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-lg p-6 text-center flex flex-col items-center fade-in">
                        <img
                            src={review.image}
                            alt={review.name}
                            className="w-16 h-16 rounded-full border border-gray-200 mb-4"
                        />

                        <div className="flex justify-center items-center mb-2">
                            <div className="flex space-x-1 mr-2">
                                {Array(5)
                                    .fill()
                                    .map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={i < 4 ? "blue" : "currentColor"}
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5"
                                        >
                                            <path d="M12 .587l3.668 7.568L24 9.435l-6 5.834L19.332 24 12 19.928 4.668 24l1.332-8.731L0 9.435l8.332-1.28L12 .587z" />
                                        </svg>
                                    ))}
                            </div>
                            <span className="text-gray-500 text-sm"> / 01 Comment</span>
                        </div>

                        <p className="text-gray-600 text-center mt-4">{review.comment}</p>
                        <div className="mt-4 flex flex-col items-center">
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="blue"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 mr-1"
                                >
                                    <path d="M12 2a10 10 0 00-10 10c0 4.15 2.564 7.749 6.293 9.069.41.141.557-.177.557-.393 0-.197-.007-.858-.012-1.557-2.293.496-2.777-1.061-2.777-1.061-.375-.956-.916-1.21-.916-1.21-.748-.511.057-.5.057-.5.83.058 1.27.854 1.27.854.736 1.26 1.932.895 2.4.685.075-.533.288-.895.525-1.1-2.22-.252-4.56-1.11-4.56-4.943 0-1.091.39-1.986 1.029-2.687-.103-.253-.446-1.272.1-2.65 0 0 .84-.27 2.75 1.022A9.565 9.565 0 0112 5.55a9.57 9.57 0 012.51.335c1.91-1.293 2.75-1.022 2.75-1.022.546 1.378.203 2.397.1 2.65.639.701 1.029 1.596 1.029 2.687 0 3.844-2.34 4.688-4.56 4.943.295.252.557.749.557 1.509 0 1.088-.008 1.964-.012 2.228.0.217.145.538.558.446A10 10 0 0022 12a10 10 0 00-10-10z" />
                                </svg>
                                <p className="text-gray-800 font-semibold">{review.name}</p>
                            </div>
                            <p className="text-gray-500 text-sm mt-1">{review.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Customer;
