import React from 'react';
import img1 from '../assets/group-79.png'
const Hero05 = () => {
  return (
    <div className="m-4 text-center">
      <div className="py-6">
        <p className="text-xl">WHAT IS FUNCTIONAL</p>
        <h1 className="text-5xl py-5">
          <span className=" text-red-500">Holidays</span>Sale 50%
        </h1>
        <p className=" font-serif text-xl py-3 m-3">
          Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
          molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
          euismod. Eleifend nunc purus quam id fermentum amet amet sit
          consectetur.
        </p>
      </div>
      <div className='rounded-xl m-4'>
        <img src={img1}/>
      </div>
    </div>
  );
};

export default Hero05;
