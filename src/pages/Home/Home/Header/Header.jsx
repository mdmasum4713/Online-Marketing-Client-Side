import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Header = () => {
    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <a className="btn btn-ghost gap-0 text-xl"><p className="font-bold">envato</p><span className="font-normal text-gray-300">market</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end">
                    <a className="btn bg-success h-2">Buy now</a>
                </div>
            </div>
            {/* header 2 start */}
       
                <div className="my-4">
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        {/* Email */}
        <h1 className="text-center lg:text-left">Email: Electondemo@gmail.com</h1>

        {/* Free Shipping Information */}
        <h1 className="text-center">
          Free worldwide & Free return for above UK{" "}
          <span className="text-blue-600 animate-pulse font-bold">Shop now!</span>
        </h1>

        {/* Social Media Links */}
        <div className="flex justify-center lg:justify-end gap-4">
          <h1 className="flex items-center gap-2">
            <FaFacebookF /> 90K Followers
          </h1>
          <h1 className="flex items-center gap-2">
            <CiInstagram /> 60K Followers
          </h1>
        </div>
      </div>
    </div>
            {/* header 2 end */}
            {/* header 3 start */}
      
                <header className="flex flex-col lg:flex-row justify-between items-center p-4 bg-gray-300 shadow-md space-y-4 lg:space-y-0">
      {/* Logo */}
      <img
        src="https://i.ibb.co/nsmcR5q/logo.png"
        alt="Logo"
        className="w-32 lg:w-40"
      />

      {/* Search Bar */}
      <div className="w-full lg:w-auto mx-4 flex justify-center lg:flex-1">
        <fieldset className="w-full lg:w-auto space-y-1">
          <div className="flex items-center rounded-lg">
            <input
              type="text"
              placeholder="Find our search"
              className="input w-full md:w-80 lg:w-96 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:ring-inset"
            />
            <button className="flex items-center justify-center h-12 w-12 bg-blue-800 rounded-r">
              <FaSearch className="text-white" />
            </button>
          </div>
        </fieldset>
      </div>

      {/* Hotline Number */}
      <div className="text-center lg:text-left text-sm mr-4">
        
        <p>Hotline number</p>
        <p> +2600 0500 2600</p>
      </div>

      {/* Account Links */}
      <div className="text-center lg:text-right   text-sm">
        <a href="#" className="link link-hover block lg:inline mr-2">My Account</a> <br />
        <a href="#" className="link link-hover block lg:inline">Login & Register</a>
      </div>
    </header>
            {/* header 3 end */}
        </div>
    );
};

export default Header;