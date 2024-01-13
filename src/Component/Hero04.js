import React from 'react';
import main from '../assets/group-96.png';
import main61 from '../assets/ellipse-1-bg.png';

const Hero04 = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6 md:mx-28 lg:mx-28 mx-6 py-11 sm:py-11'>
      <div className='md:col-span-2 lg:col-span-1'>
        <h3 className='text-red-500 font-bold text-xl'>NEW BEST OFFER</h3>
        <h1 className='text-5xl py-5 font-bold'>Coming Soon</h1>
        <p className='text-sm md:text-base'>
          Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
          molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
          euismod.
        </p>
      </div>
      <div className="w-full md:w-64 h-64   rounded-full overflow-hidden mx-auto ring-offset-[14px]  ring-8 ring-red-500 ">
        <img
          className="w-full h-full  object-cover rounded-full ring-red-500"
          src={main61}
          alt="Ellipse Background"
        />
      </div>
      <div className=''>
        <h1 className='text-4xl font-bold text-red-500 '>2024</h1>
        <p className='text-sm md:text-base'>Dolor sit amet consectetur. Consequat eget consectetur maecenas sed.</p>
        <img src={main} className='w-full md:w-48 mt-4'/>
      </div>
    </div>
  );
};

export default Hero04;
