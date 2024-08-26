import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-[#134e5e] text-white py-8">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Social Media</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <p>Phone: (123) 456-7890</p>
            <p>Email: support@carwash.com</p>
            <p>Address: 123 Car Wash St, Clean City</p>
          </div>
        </div>
        <p className="mt-8">&copy; 2024 Car Wash Booking. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
