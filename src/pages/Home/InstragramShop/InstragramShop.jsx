import { useState } from "react";


const images = [
    'https://i.postimg.cc/NfzYdq2d/insta-6.jpg',
    'https://i.ibb.co.com/nbv3k9R/insta-2.jpg',
    'https://i.postimg.cc/j5bRyHnK/home1-pro-14.jpg',
    'https://i.ibb.co.com/x1Kf5Qv/insta-7.jpg',
    'https://i.postimg.cc/Y0XkcTnq/insta-3.jpg',
    'https://i.postimg.cc/8kYn31wf/insta-1.jpg',
];


const InstragramShop = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handleImageClick = () => {
        const newIndex = (startIndex + 1) % (images.length - 4);
        setStartIndex(newIndex);
    };

    const displayedImages = images.slice(startIndex, startIndex + 5);

    return (
        <div className="max-w-full mx-auto p-0">
            <div className=" text-white text-center p-4 my-4 mt-8">
                <h1 className="text-2xl text-blue-600 font-bold">Our Instagram Shop</h1>
                <h2 className="text-black  text-3xl mt-2 inline-block p-2">Follow on Instagram</h2>
            </div>
            <div className="flex justify-between space-x-1">
                {displayedImages.map((image, index) => (
                    <div
                        key={index}
                        className="flex-none w-[19%] mb-2 relative" // Make parent div relative
                    >
                        <div
                            className="w-full h-auto cursor-pointer rounded-lg overflow-hidden" // Added overflow-hidden
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                paddingBottom: '100%', // Maintain aspect ratio
                            }}
                            onClick={handleImageClick}
                        >
                            {/* Inline Instagram SVG Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="absolute inset-0 m-auto w-1/4 h-1/4 opacity-0 transition-opacity duration-300 hover:opacity-100"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.9a4.1 4.1 0 1 1-8.2 0 4.1 4.1 0 0 1 8.2 0z"></path>
                                <path d="M17.5 6.5h0a1.2 1.2 0 0 1 1.2 1.2v1.2a1.2 1.2 0 0 1-1.2 1.2h-1.2a1.2 1.2 0 0 1-1.2-1.2V7.7a1.2 1.2 0 0 1 1.2-1.2z"></path>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstragramShop;