import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-[#134e5e] to-[#71b280] text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Car Wash Booking</div>
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <span className="inline-block transform rotate-45">&#10005;</span>
          ) : (
            <span className="inline-block">&#9776;</span>
          )}
        </button>
        <nav
          className={`lg:flex absolute lg:relative top-0 right-0 lg:right-auto lg:top-auto lg:w-auto w-full lg:h-auto h-full bg-gradient-to-r from-[#134e5e] to-[#71b280] text-white ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <div className="lg:hidden flex justify-end p-4">
            <button
              className="text-2xl focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="inline-block transform rotate-45">&#10005;</span>
            </button>
          </div>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-sm w-full h-full items-center justify-center lg:justify-start">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="booking"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </li>
            <li>
              <Link
                to="footer"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
