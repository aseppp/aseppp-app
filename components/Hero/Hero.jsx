import React from 'react';

const Hero = () => {
  return (
    <div className='md:mt-[60px] '>
      <h1 className='name text-white lg:leading-[154px] text-[40px] md:text-[92px] lg:text-[128px]'>
        Hi I’m Asep
        <span className='hand ml-3 text-2xl md:text-[50px] lg:text-[77px]'>
          👋
        </span>
      </h1>

      <h1 className='heading1 text-white text-[1.4rem] md:leading-[72px] lg:leading-[77px] md:text-[44px] lg:text-[64px] lg:mt-[0] lg:w-[1261px]'>
        Developing Scalable and Interactive web apps
      </h1>

      <h1 className='paragraph text-[#ffff] text-xs mt-8 leading-[1.25rem] md:text-[18px] md:mt-[25px] md:leading-[2rem] lg:leading-[45px] lg:text-[25px] lg:mt-[50px] lg:w-[1224px]'>
        As a fullstack web developer, my expertise is creating effective and
        fast backend services and responsive, interactive and user friendly
        frontend interface. Spesifically, I have knowledge of Node Js and React
        Js, which allow me to create high quality web apps.
      </h1>
    </div>
  );
};

export default Hero;
