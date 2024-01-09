import React from 'react';
import main from '../assets/rectangle-14-bg.png';

const MainContain = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div className="relative mt-6">
          <img
            className="w-full h-screen rounded-xl"
            src={main}
            alt=""
          />
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-8 block">
              Happy New Year
            </p>
            <p className="text-5xl md:text-7xl lg:text-7xl font-extrabold text-white max-w-3xl ">
              New Year Party Celebration
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 w-full flex items-center flex-col">
        <p className="text-4xl md:text-9xl font-bold text-red-500 mb-[-8]">65% OFF</p>
        <div className="group-45-Hn4 w-full flex items-center flex-col">
          <div className="group-10-FD6 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-red-500 mt-12">
              OUR HOLIDAY DEALS ARE BETTER
            </p>
            <p className="text-5xl md:text-7xl lg:text-8xl text-black font-bold mt-12">
              ALL CATEGORIES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContain;
