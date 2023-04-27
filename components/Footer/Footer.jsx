import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='lg:mb-20'>
        <h1 className='info text-[#ffffff] text-2xl md:text-[35px] lg:text-[96px] lg:leading-[115px]'>
          Intrested ?{' '}
        </h1>
        <h1 className='info text-[#ffffff] text-2xl md:text-[35px] md:mt-5 lg:text-[96px] lg:leading-[115px]'>
          Let’s Get In Touch !{' '}
        </h1>

        <Link href={'mailto:aseppp.saepudiin@gmail.com'}>
          <p className='text-md text-[#43ff88] mt-5 lg:text-2xl'>
            asepp.saepudiin@gmail.com
          </p>
        </Link>

        <div className='flex items-center divide-[#ffffff] divide-x-[2px] mt-10'>
          <Link href={'#'}>
            <p className='mr-3 text-[#535353] lg:text-xl hover:text-[#43ff88]'>
              Instagram
            </p>
          </Link>

          <Link href={'#'}>
            <p className='mx-3 text-[#535353] lg:text-xl hover:text-[#43ff88]'>
              Linkedin
            </p>
          </Link>

          <Link href={'#'}>
            <p className='ml-3 text-[#535353] lg:text-xl hover:text-[#43ff88]'>
              Github
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
