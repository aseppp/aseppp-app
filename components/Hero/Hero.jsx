import React from 'react';

const Hero = () => {
  return (
    <div className='md:mx-60 lg:mt-[80px]'>
      <div className='flex items-center gap-3'>
        <h1 className='name lg:text-[128px] text-white lg:w-[704px]'>
          Hi I’m Asep
        </h1>

        <p className='md:text-[70px]'>👋</p>
      </div>

      <h1 className='heading1 lg:text-[64px] text-white lg:mt-[0] lg:w-[1261px]'>
        Developing Scalable and Interactive web apps
      </h1>

      <h1 className='paragraph text-[#535353] md:text-[25px] md:mt-[50px] md:w-[1224px]'>
        As a fullstack web developer, my expertise is creating effective and
        fast backend services and responsive, interactive and user friendly
        frontend interface. Spesifically, I have knowledge of Node Js and React
        Js, which allow me to create high quality web apps.
      </h1>
    </div>
  );
};

export default Hero;
