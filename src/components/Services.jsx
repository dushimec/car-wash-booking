import React from 'react';

const services = [
  { name: 'Basic Wash', description: 'Quick and efficient wash', price: '$10' },
  { name: 'Deluxe Wash', description: 'Includes waxing and interior cleaning', price: '$25' },
  { name: 'Premium Wash', description: 'Full service wash', price: '$40' },
];

const Services = () => {
  return (
    <section id="services" className="h-screen py-20 bg-[#d4f0da]">
      <div className="container mx-auto text-center mt-24 ">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
          {services.map(service => (
            <div key={service.name} className="p-6 bg-[#97d1a4] shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-sm sm:text-base mb-4">{service.description}</p>
              <p className="text-lg sm:text-xl font-bold mb-4">{service.price}</p>
              <button className="bg-gradient-to-r from-[#134e5e] to-[#71b280] text-white px-4 py-2 rounded hover:opacity-90 text-sm sm:text-base md:text-lg">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
