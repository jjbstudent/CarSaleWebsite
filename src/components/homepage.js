import React from 'react';
import { Link } from 'react-router-dom'; // Add this import

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">
          Affordable Cars
        </h1>
        <p className="text-xl text-gray-700 mb-8 italic">
          Where Quality Meets Affordability!
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <Link to="/cars-for-sale">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-200 font-semibold text-lg"
              aria-label="Buy a product"
            >
              🚗 Buy
            </button>
          </Link>
          <button
            className="bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition transform duration-200 font-semibold text-lg"
            aria-label="Sell a product"
          >
            💸 Sell
          </button>
        </div>
        <div className="text-gray-400 text-sm">
          Trusted by thousands of happy customers!
        </div>
      </div>
    </div>
  );
};

export default Homepage;

