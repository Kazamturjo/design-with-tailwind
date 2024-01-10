import React, { useState } from 'react';
import img61 from '../assets/group-61.png'

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
    <div className="bg-gradient-to-r from-purple-100 to-red-100 py-16 m-4 rounded-xl ">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates and news delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center relative">
            <img src={img61} className='w-11 py-4 m-4'/>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleInputChange}
              className="w-full sm:w-2/3 px-4 py-2 mb-4 sm:mb-0 sm:mr-2 rounded-md border border-gray-300 focus:outline-none"
              required
              
            />
            <button
              type="submit"
              className="w-full sm:w-1/3 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
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
