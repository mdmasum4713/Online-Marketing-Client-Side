
const Cart = () => {
    return (
<div className="p-8">
  {/* Banners Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    
    {/* Banner 1 */}
    <div className="relative group">
      <img
        src="https://i.postimg.cc/7ZLv8B0f/home-banner-3.jpg"
        alt="Wireless Devices"
        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
        <h1 className="text-3xl font-bold transition-transform duration-300 transform -translate-x-10 group-hover:translate-x-0">
          160% Off
        </h1>
        <p className="text-lg transition-transform duration-300 transform -translate-x-10 group-hover:translate-x-0 delay-150">
          Wireless Devices
        </p>
        <button className="btn bg-yellow-400 text-black mt-4 flex items-center justify-center">
          <span className="mr-2 transition-transform duration-300 transform scale-100 group-hover:scale-110 text-black">🛒</span>
          <span className="transition-transform duration-300">Shop Now</span>
        </button>
      </div>
    </div>

    {/* Banner 2 */}
    <div className="relative group">
      <img
        src="https://i.ibb.co/z8GgbSx/home3-slider.jpg"
        alt="Music Players"
        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
        <h1 className="text-3xl font-bold transition-transform duration-300 transform -translate-x-10 group-hover:translate-x-0">
          45% Off
        </h1>
        <p className="text-lg transition-transform duration-300 transform -translate-x-10 group-hover:translate-x-0 delay-150">
          A Music Players
        </p>
        <button className="btn bg-yellow-400 text-black mt-4 flex items-center justify-center">
          <span className="mr-2 transition-transform duration-300 transform scale-100 group-hover:scale-110 text-black">🛒</span>
          <span className="transition-transform duration-300">Shop Now</span>
        </button>
      </div>
    </div>

    {/* Banner 3 */}
    <div className="relative group">
      <img
        src="https://i.ibb.co/ZKRK66V/home2-slider.jpg"
        alt="Android Watch"
        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
        <h1 className="text-3xl font-bold transition-transform duration-300 transform -translate-x-10 group-hover:translate-x-0">
          20% Off
        </h1>
        <p className="text-lg transition-transform duration-300 transform -translate-x-10 group-hover:translate-x-0 delay-150">
          Android Watch T6
        </p>
        <button className="btn bg-yellow-400 text-black mt-4 flex items-center justify-center">
          <span className="mr-2 transition-transform duration-300 transform scale-100 group-hover:scale-110 text-black">🛒</span>
          <span className="transition-transform duration-300">Shop Now</span>
        </button>
      </div>
    </div>
  </div>

  {/* Services Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
    {/* Service 1 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center group">
      <div className="text-3xl mb-4 transition-transform duration-300 transform group-hover:scale-110">🌍</div> {/* Example icon */}
      <h2 className="text-xl font-semibold transition-transform duration-300 transform -translate-y-10 group-hover:translate-y-0">Worldwide Shipping</h2>
      <p className="text-gray-600 mt-2 text-center transition-transform duration-300 transform -translate-y-10 group-hover:translate-y-0 delay-150">
        The generated is there was!
      </p>
    </div>

    {/* Service 2 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center group">
      <div className="text-3xl mb-4 transition-transform duration-300 transform group-hover:scale-110">🔒</div> {/* Example icon */}
      <h2 className="text-xl font-semibold transition-transform duration-300 transform -translate-y-10 group-hover:translate-y-0">Secure Payment</h2>
      <p className="text-gray-600 mt-2 text-center transition-transform duration-300 transform -translate-y-10 group-hover:translate-y-0 delay-150">
        The generated is there was!
      </p>
    </div>

    {/* Service 3 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center group">
      <div className="text-3xl mb-4 transition-transform duration-300 transform group-hover:scale-110">🔄</div> {/* Example icon */}
      <h2 className="text-xl font-semibold transition-transform duration-300 transform -translate-y-10 group-hover:translate-y-0">Return Method</h2>
      <p className="text-gray-600 mt-2 text-center transition-transform duration-300 transform -translate-y-10 group-hover:translate-y-0 delay-150">
        The generated is there was!
      </p>
    </div>

    {/* Service 4 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center group">
      <div className="text-3xl mb-4 transition-transform duration-300 transform group-hover:scale-110">📦</div> {/* Example icon */}
      <h2 className="text-xl font-semibold transition-transform duration-300 transform -translate-y-10 group-hover:translate-y-0">Quick Delivery</h2>
      <p className="text-gray-600 mt-2 text-center transition-transform duration-300 transform -translate-y-10 group-hover:translate-y-0 delay-150">
        The generated is there was!
      </p>
    </div>
  </div>
</div>

      
      
    );
};

export default Cart;