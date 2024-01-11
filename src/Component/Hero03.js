import React from 'react';

const Hero03 = () => {
  return (
    <div className='bg-red-100 mt-11 text-center m-11 rounded-xl md:h-96 p-11 leading-6 font-serif	'>
      <div className='font-lg text-4xl md:text-6xl'>
        <p className='mb-8'>
          <span className='text-red-500 font-bold '>Place:</span> New Park Hotel
        </p>
      </div>
      <div className='font-lg text-4xl md:text-6xl '>
        <p className='mb-8'>
          <span className='text-red-500 font-bold'>Date:</span> 31 December Night 2023
        </p>
      </div>
      <div className='font-lg text-4xl md:text-6xl'>
        <p className='mb-4'>
          <span className='text-red-500 font-bold'>Time:</span> Evening 7.30 Pm To 12.30 Am
        </p>
      </div>
      <div className="w-48 frame-1-d6U bg-red-500 text-white px-4 py-2  rounded-md cursor-pointer hover:bg-red-800 transition mt-4 md:mt-8 lg:mt-12 xl:mt-16 m-auto">
        Join Now
      </div>
    </div>
  );
};

export default Hero03;
