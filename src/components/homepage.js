import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Affordable Cars</h1>
        <p className="text-lg text-gray-600 mb-8">
        "Where Quality Meets Affordability!"
        </p>
        <div className="flex justify-center space-x-4"> {/* Flex container for buttons */}
          <button 
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 transition duration-300" 
            aria-label="Buy a product"
          >
            Buy
          </button>
          <button 
            className="bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition duration-300" 
            aria-label="Sell a product"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

