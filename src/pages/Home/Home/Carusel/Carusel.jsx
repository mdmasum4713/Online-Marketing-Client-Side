
const Carusel = () => {
  return (
    <div className="relative">
    <div className="carousel w-full">
      {/* Carousel Item 1 */}
      <div id="item1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/ZxGDnmz/home1-slider.jpg"  // Corrected URL
          className="w-full h-[500px] object-cover"   // Fixed height and object-cover
          alt="Wireless Handset"
        />
        <div className="absolute left-8 top-1/4 sm:left-12 md:left-16 lg:left-36 xl:left-48">
          <h1 className="text-yellow-300 border-2 border-dashed border-white p-2">
            Get up to discount 80% off
          </h1>
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold">
            WIRELESS 
          </h1>
          <p className="text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
            <span className="text-yellow-400 font-semibold underline">100% trusted</span> electronics gadget
          </p>
          <button className="btn mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 bg-yellow-400 btn-ghost">
            ONLINE COLLECTION
          </button>
        </div>
      </div>
  
      {/* Carousel Item 2 */}
      <div id="item2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/z8GgbSx/home3-slider.jpg"
          className="w-full h-[500px] object-cover"  // Fixed height and object-cover
          alt="Wireless Smart Watch"
        />
        <div className="absolute left-8 top-1/4 sm:left-12 md:left-16 lg:left-36 xl:left-48">
          <h1 className="text-yellow-300 border-2 border-dashed border-white p-2">
            Get up to discount 80% off
          </h1>
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold">
            WIRELESS SMART WATCH
          </h1>
          <p className="text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
            <span className="text-yellow-400 font-semibold underline">100% trusted</span> electronics gadget
          </p>
          <button className="btn mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 bg-yellow-400 btn-ghost">
            ONLINE COLLECTION
          </button>
        </div>
      </div>
  
      {/* Carousel Item 3 */}
      <div id="item3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/ZKRK66V/home2-slider.jpg"
          className="w-full h-[500px] object-cover"  // Fixed height and object-cover
          alt="Wireless Handset"
        />
        <div className="absolute left-8 top-1/4 sm:left-12 md:left-16 lg:left-36 xl:left-48">
          <h1 className="text-yellow-300 border-2 border-dashed border-white p-2">
            Get up to discount 80% off
          </h1>
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold">
            WIRELESS HANDSET
          </h1>
          <p className="text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
            <span className="text-yellow-400 font-semibold underline">100% trusted</span> electronics gadget
          </p>
          <button className="btn mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 bg-yellow-400 btn-ghost">
            ONLINE COLLECTION
          </button>
        </div>
      </div>
    </div>
  
    {/* Carousel Navigation */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      <a href="#item1" className="btn btn-xs bg-yellow-400 text-black">1</a>
      <a href="#item2" className="btn btn-xs bg-yellow-400 text-black">2</a>
      <a href="#item3" className="btn btn-xs bg-yellow-400 text-black">3</a>
    </div>
  </div>
  


  );
};

export default Carusel;