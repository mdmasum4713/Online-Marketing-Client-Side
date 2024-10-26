import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 1, title: "Wireless Earbuds", img: "https://i.ibb.co.com/RgBsYP3/home-1-cate3.jpg", count: "+10" },
    { id: 2, title: "Portable Speaker", img: "https://i.postimg.cc/W3GYJrgB/home1-pro-12.jpg", count: "+18" },
    { id: 3, title: "Air Conditioner", img: "https://i.postimg.cc/nL7067RX/home-1-cate1.jpg", count: "+25" },
    { id: 4, title: "EV Charging Plug", img: "https://i.postimg.cc/tTj2yTw2/home-1-cate2.jpg", count: "+25" },
    { id: 5, title: "DVD", img: "https://i.postimg.cc/gJ8Qq1FB/home1-pro-10.jpg", count: "+5" },
  ];

  const visibleSlides = 3; // Number of visible images at a time

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + visibleSlides >= categories.length ? 0 : prev + visibleSlides));
  };


    return (
      <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg relative">
      {/* Left Side: Text and Button */}
      <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Favorites Item</h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-4">Explore popular categories</p>
        <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded hover:bg-yellow-500 transition duration-200">
          Browse Collection
        </button>
      </div>

      {/* Right Side: Horizontal Slider */}
      <div className="lg:w-2/3 flex items-center relative overflow-hidden">
        <div className="flex space-x-6 transition-transform duration-300"
             style={{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }}>
          {categories.map((category) => (
            <div key={category.id} className="relative flex-shrink-0 flex flex-col items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 -ml-2 sm:-ml-4"> {/* Adjust width and margin */}
              {/* Circular Badge on Top-Right Corner */}
              <div className="absolute top-0 right-0 bg-yellow-500 text-black text-sm font-bold rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                {category.count}
              </div>

              {/* Image and Category Title */}
              <img
                src={category.img}
                alt={category.title}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mb-2 md:mb-4 border-2 border-yellow-400 object-cover"
              />
              <p className="text-sm sm:text-lg font-semibold">{category.title}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          className="absolute right-0 bg-white text-gray-600 hover:text-gray-900 p-2 md:p-3 rounded-full shadow-lg focus:outline-none transform translate-x-1/2"
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>
    </div>
    
  );
};

export default Slider;