import React from 'react';
import girl from '../assets/rectangle-1.png';
import discount from '../assets/Group 44.png';
import line from '../assets/Rectangle 2.png';
import gift from '../assets/Group 75.png';

const MainCss = () => {
  return (
    <div className='md:mx-28 lg:mx-28 mx-6 leading-6'>
      <div>
        <p className="text-xl text-center">WHAT IS FUNCTIONAL</p>
        <h1 className="text-5xl py-5 text-center font-bold font-serif">
          <span className="text-red-500">Holidays</span> Sale 50%
        </h1>
        <p className="font-serif text-xl py-3 m-3 text-center">
          Dolor sit amet consectetur. Consequat eget consectetur maecenas sed{' '}
          <br />
          molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
          euismod. Eleifend nunc purus quam id <br /> fermentum amet amet sit
          consectetur.
        </p>
      </div>
      <div className="md:flex lg:flex">
        <div className="md:w-1/2 relative">
          <div className='md:absolute lg:absolute top-32 left-7 w-2/3'>
            <img src={gift} alt="gift" className="w-full" />
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="md:absolute lg:absolute left-40 top-24 w-[250px]">
            <img src={discount} alt="" className="w-full" />
          </div>
          <div className='md:w-2/3 md:ml-[280px] lg:w-2/3 lg:ml-[280px]'>
            <img src={girl} alt="girl" className="rounded-xl w-full" />
          </div>
        </div>
      </div>
      <div className="">
        <img src={line} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default MainCss;
