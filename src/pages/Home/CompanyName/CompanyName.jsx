import { useState } from "react";

const CompanyName = () => {
  const companies = ['Acer', 'Samsung', 'Lenovo', 'Sony', 'Asus', 'Logitech', 'Dell', 'HP', 'Apple', 'Microsoft'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;

  const nextCompanies = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % companies.length);
  };

  const prevCompanies = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + companies.length) % companies.length);
  };

  const displayedCompanies = companies.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="bg-blue-900 text-blue-300 text-center mt-40 my-10 p-6 relative">
      <div className="flex justify-between items-center">
        {/* Left Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow-lg focus:outline-none"
          onClick={prevCompanies}
        >
          &lt; {/* Previous Button */}
        </button>

        {/* Company Display */}
        <div className="flex flex-grow justify-between items-center mx-4">
          {displayedCompanies.map((company, index) => (
            <span key={index} className="text-2xl font-bold flex-1 text-center mx-2 hover:text-white">
              {company}
            </span>
          ))}
        </div>

        {/* Right Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-3 rounded-full shadow-lg focus:outline-none"
          onClick={nextCompanies}
        >
          &gt; {/* Next Button */}
        </button>
      </div>
    </div>
  );
};

export default CompanyName;
