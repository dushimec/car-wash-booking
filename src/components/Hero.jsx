import React from 'react';
import img from '../assets/image2.webp';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-50 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Keep Your Car Sparkling Clean
        </h1>
        <button className="bg-white text-[#134e5e] px-4 py-2 rounded hover:bg-[#71b280] text-sm sm:text-base md:text-lg lg:text-xl">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
