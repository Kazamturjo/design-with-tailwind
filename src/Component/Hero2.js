import React from 'react';
import main from '../assets/group-70.png';

const MainContain = () => {
  return (
    <main className=' w-full'>
        <section className="bg-gradient-to-r from-black to-red-100 md:mx-28 lg:mx-28 mx-6 rounded-xl ">
      <div
    //   style={{ width: "1600px", height: "700px" }}
        className="grid w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 box-border rounded-md overflow-hidden"
      >
        <div className="lg:col-span-7 lg:rounded-lg lg:overflow-hidden ">
          <h1 className="max-w-2xl mb-4 text-2xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none dark:text-white m-4">
            Welcome to midnight party
          </h1>
          {/* <p className="max-w-2xl mb-6 py-6 font-light text-white md:mb-8 md:text-lg lg:text-xl">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod.
          </p> */}
<h5 className='text-white  py-6 m-4 md:whitespace-normal md:mb-8 lg:text-lg xl:text-xl '>
        Dolor sit amet consectetur. Consequat eget consectetur maecenas sed molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod.   
        </h5>
          
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 mr-3 text-xl font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Join now
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns=""></svg>
          </a>
        </div>
        <div className="lg:col-span-5 lg:flex lg:justify-center">
          <img
                      

            src={main}
            alt="mockup"
            className="w-[319px] h-auto  sm:max-w-[50%] max-h-[250px] lg:max-h-[464px] lg:max-w-[319px] lg:rounded-lg lg:overflow-hidden"
             />
          
        </div>
      </div>
    </section>
    </main>
  );
};

export default MainContain;
