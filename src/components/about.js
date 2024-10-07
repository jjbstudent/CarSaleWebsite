import React from 'react'

const about = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 md:mx-10 lg:mx-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-8">
        Hello! My name is <strong>Jermaine</strong>, and I'm thrilled to welcome you to Affordable Cars, where we believe that everyone deserves the chance to own a reliable vehicle without breaking the bank.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        As a passionate web developer, I created this car sales website as a practice project for my portfolio, showcasing my skills in front-end development, user experience design, and responsive web design. This project reflects my commitment to creating user-friendly digital experiences that connect buyers with the cars they love.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-600 mb-8">
        At Affordable Cars, our mission is simple: to provide an extensive selection of quality vehicles at unbeatable prices. We understand that purchasing a car is a significant investment, and we're here to make the process as seamless and enjoyable as possible.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-lg text-gray-600 mb-8">
        <li><strong>Affordable Options:</strong> We prioritize affordability without sacrificing quality. Our inventory features a wide range of cars to suit every budget.</li>
        <li><strong>Transparency:</strong> We believe in honest and open communication. You can trust that our listings are accurate, with no hidden fees.</li>
        <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our top priority. We're committed to helping you find the perfect car for your needs.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us on This Journey</h2>
      <p className="text-lg text-gray-600 mb-8">
        I invite you to explore our website and discover the exciting options available. Whether you're looking to buy your first car or upgrade to a new model, we’re here to assist you every step of the way.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Thank you for visiting Affordable Cars, and I look forward to helping you find your next vehicle!
      </p>      
    </div>
  );
};

export default about;
