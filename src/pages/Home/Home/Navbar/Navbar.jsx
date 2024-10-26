import { useState } from "react";

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div>
                   
        <nav className="bg-yellow-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Menu for Mobile */}
        <button className="text-white lg:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links - Hidden on mobile and shown on larger screens */}
        <div className="lg:flex space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-yellow-500 lg:bg-transparent">
          <div className="relative">
            {/* Trending Category with Dropdown */}
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-black font-semibold p-2"
            >
                            {/* New SVG Icon Next to Trending Category */}
                            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <span>Trending Category</span>
              {/* Dropdown Icon */}
              <svg
                className="w-4 h-4 text-black ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-10 bg-white text-black shadow-lg rounded-md mt-2">
                <a href="#" className="block px-4 py-2 hover:bg-yellow-500">Smartwatch</a>
                <a href="#" className="block px-4 py-2 hover:bg-yellow-500">Mobile Phones</a>
                <a href="#" className="block px-4 py-2 hover:bg-yellow-500">Laptops</a>
              </div>
            )}
          </div>

          <a href="#" className="block lg:inline-block font-semibold text-black p-2">Home</a>
          <a href="#" className="block lg:inline-block font-semibold text-black p-2">Product</a>
          <a href="#" className="block lg:inline-block font-semibold text-black p-2">Shop</a>
          <a href="#" className="block lg:inline-block font-semibold text-black p-2">Blogs</a>
          <a href="#" className="block lg:inline-block font-semibold text-black p-2">Contact Us</a>
          <a href="#" className="block lg:inline-block font-semibold text-black p-2">Pages</a>
          <a href="#" className="block lg:inline-block font-semibold text-black p-2">Buy Electron</a>
        </div>

        {/* My Cart */}
        <div className="flex items-center bg-black  space-x-2">
          <a href="#" className="text-white hidden lg:inline-block">My Cart</a>
          <div className=" text-yellow-300 border rounded-full w-6 h-6 flex items-center justify-center">
            03
          </div>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;