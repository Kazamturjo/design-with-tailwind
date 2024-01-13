import React from 'react';
import img4 from '../assets/rectangle-4.png';
import img5 from '../assets/rectangle-5.png';
import img7 from '../assets/rectangle-7.png';
import img8 from '../assets/rectangle-8.png';
import img9 from '../assets/rectangle-6.png';
import img10 from '../assets/rectangle-3.png';

const GiftsComponent = () => {
  return (
    <div className="md:mx-28 lg:mx-28 mx-6">
      <div className=" ">
        <div className="">
          <p className="text-2xl text-red-500 font-bold mt-16">THE BEST GIFTS</p>
          <p className="font-bold text-6xl  mt-4 py-8">Our Awesome Portfolio</p>
          <p className="font-serif text-3xl  py-11 font-light">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod.
          </p>
        </div>
       <div className=' md:px-16 lg:px-16 rounded-xl'>
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-16 gap-y-16 w-full ">
          {[
            { src: img10, alt: 'Image 1' },
            { src: img4, alt: 'Image 2' },
            { src: img5, alt: 'Image 3' },
            { src: img9, alt: 'Image 4' },
            { src: img7, alt: 'Image 5' },
            { src: img8, alt: 'Image 6' },
          ].map((image, index) => (
            <div key={index} className="w-full ">
              <div className="bg-white shadow-md rounded-md h-full">
                <img className="w-full h-full object-cover rounded-xl" src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
};

export default GiftsComponent;
