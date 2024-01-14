import React from 'react';
import main from '../assets/rectangle-14-bg.png';
import newyr from '../assets/New Year Photo.png';

const MainContain = () => {
  return (
    <div className="md:mx-28 lg:mx-28 m-11">
      <div className="  ">
        <div className="relative mt-6 flex justify-center  opacity-110">
          <img
            className="rounded-xl"
            style={{ width: "1600px", height: "600px", justifyContent: "center" }}
            src={main}
            alt=""
          />
          <div className=" absolute mt-14 sm:mt-36 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-xl font-light md:text-3xl lg:text-5xl text-white opacity-110 mb-11 block">
              Happy New Year
            </p>
            <p className="text-3xl sm:text-7xl font-extrabold text-white opacity-110 max-w-3xl">
              New Year Party Celebration
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 w-full flex items-center flex-col">
        <p className="text-4xl md:text-8xl font-bold text-red-500 mb-[-8]">65% OFF</p>
        <div className="group-45-Hn4 w-full flex items-center flex-col">
          <div className="group-10-FD6 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-red-500 mt-12 opacity-110">
              OUR HOLIDAY DEALS ARE BETTER
            </p>
            <p className="text-2xl md:text-5xl lg:text-6xl text-black font-bold mt-12 opacity-110">
              ALL CATEGORIES
            </p>
          </div>
        </div>
        <img
          src={newyr}
          className='mt-10 '
          alt=""
        />
      </div>
    </div>
  );
};

export default MainContain;
