import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><a href="#">Product 1</a></li>
            <li><a href="#">Product 2</a></li>
            <li><a href="#">Product 3</a></li>
            <li><a href="#">Product 4</a></li>
          </ul>
        </div>
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Connect</h3>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-500"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-500"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-500"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-500"><FaLinkedin /></a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Subscribe</h3>
          <p className="mb-4">Subscribe to our newsletter for updates and special offers.</p>
          <div className="flex items-center space-x-2">
            <input type="email" placeholder="Your email" className="border p-2" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
