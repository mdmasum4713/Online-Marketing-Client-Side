
const TrendingProducts = () => {
  
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      img: "https://i.postimg.cc/gJ8Qq1FB/home1-pro-10.jpg",
      price: "$21.00",
      originalPrice: "$25.00",
      discount: "20%",
    },
    {
      id: 2,
      title: "Waterproof Wireless Mouse",
      img: "https://i.postimg.cc/qqGFWn7s/home-1-cate5.jpg",
      price: "$18.00",
      originalPrice: "$24.00",
      discount: "14%",
    },
    {
      id: 3,
      title: "Pen Drives",
      img: "https://i.postimg.cc/bY04GXRZ/home-1-cate4.jpg",
      price: "$10.00",
      originalPrice: "$15.00",
      discount: "22%",
    },
    {
      id: 4,
      title: "Waterproof Watch",
      img: "https://i.postimg.cc/dVffMJJx/home1-pro-16.jpg",
      price: "$32.00",
      originalPrice: "$38.00",
      discount: "30%",
    },
  ];

  return (
    <div className="container mx-auto p-4">
    {/* Header Section */}
    <header className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-2">Trending Products</h2>
      <p className="text-lg text-gray-600">Explore our popular products on sale!</p>
    </header>

    {/* Card Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <img src={product.img} alt={product.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            {/* Product Title */}
            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>

            {/* Price and Discount */}
            <div className="flex justify-center items-center mb-2">
              <p className="text-gray-500 line-through">{product.originalPrice}</p>
              <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full ml-2">{product.discount}</span>
            </div>
            <p className="text-xl font-bold text-yellow-500">{product.price}</p>

            {/* Divider */}
            <hr className="my-2 border-gray-300" />

            {/* Star Rating and Sale Text */}
            <div className="flex items-center justify-between mb-2">
              {/* Star Rating */}
              <div className="flex text-purple-600">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 15l-5.878 3.09 1.12-6.5L.242 7.91l6.514-.943L10 1l2.244 5.967 6.514.943-4.998 3.68 1.12 6.5L10 15z" />
                  </svg>
                ))}
              </div>

              {/* Sale Text */}
              <span className="text-white bg-green-600 font-bold text-lg ml-2">Sale</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default TrendingProducts;
