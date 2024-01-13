import React, { useState } from 'react';
import img61 from '../assets/group-61.png';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here (e.g., sending the email to a backend).
    console.log(`Email submitted: ${email}`);
    // Reset the email input after submission
    setEmail('');
  };
 
  return (
    <div className="bg-gradient-to-r from-purple-100 to-red-100 py-16 m-4 rounded-xl md:mx-28 lg:mx-28 mx-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col justify-center items-center ">
          <div className="flex  items-center justify-center">
            <img src={img61} className="w-20 py-4 m-4" alt="Newsletter Image" />
          </div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
          Dolor sit amet consectetur. Consequat eget consectetur maecenas sed molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod.           </p>
          <form onSubmit={handleSubmit} className="flex  w-2/3 flex-col justify-center sm:flex-row items-center ">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleInputChange}
              className="w-64 sm:w-2/4  justify-center px-4 py-2 mb-4 sm:mb-0 sm:mr-2 rounded-md border border-gray-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className=" w-24 sm:w-1/4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-900 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
