import React from 'react';
import main from '../assets/Banner Image.png'
import newyr from '../assets/New Year Photo.png';

const MainContain = () => {
  return (
    <div className="md:mx-28 lg:mx-28 m-11 relative">
      <div className="relative mt-6  ">

        <div className='relative   '>
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

          <img
            className="rounded-xl"
            style={{ width: "100%" }}
            src={main}
            alt=""
          />
        </div>
        <div className=''>

        <div className="overlay absolute mt-14 sm:mt-36 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
          <p className="text-xl md:text-3xl lg:text-5xl dark:text-white mb-11 block">
            Happy New Year
          </p>
          <p className="text-xl mb-9 sm:text-7xl font-extrabold dark:text-white max-w-3xl">
            New Year Party Celebration
          </p>
        </div>
      </div>
      </div>

      <div className="my-20 w-full flex items-center flex-col">
        <p className="text-4xl md:text-7xl font-bold text-red-600 mb-[-8]">65% OFF</p>
        <div className="group-45-Hn4 w-full flex items-center flex-col">
          <div className="group-10-FD6 text-center">
            <p className="text-xl md:text-2xl lg:text-2xl font-medium text-red-500 mt-12 opacity-110">
              OUR HOLIDAY DEALS ARE BETTER
            </p>
            <p className="text-2xl md:text-5xl lg:text-5xl text-black font-bold mt-12 opacity-110">
              ALL CATEGORIES
            </p>
          </div>
        </div>
        <img
          src={newyr}
          className='mt-10'
          alt=""
        />
      </div>
    </div>
  );
};

export default MainContain;
