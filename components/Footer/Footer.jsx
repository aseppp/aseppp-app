import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='w-full h-[80vh]  flex flex-col-reverse gap-5 md:flex-row md:gap-5 md:items-center md:justify-between lg:justify-between lg:items-center'>
        <div className='lg:mb-20'>
          <h1 className='info text-[#ffffff] text-2xl md:text-[35px] lg:text-[128px] lg:leading-[115px]'>
            Intrested ?{' '}
          </h1>
          <h1 className='info text-[#ffffff] text-2xl md:text-[35px] md:mt-5 lg:text-[128px] lg:leading-[115px]'>
            Let’s Get In Touch !{' '}
          </h1>

          <Link href={'mailto:aseppp.saepudiin@gmail.com'}>
            <p className='text-md text-[#2c9284] mt-5 lg:text-2xl'>
              asepp.saepudiin@gmail.com
            </p>
          </Link>

          <div className='flex items-center divide-[#ffffff] divide-x-[2px] mt-10'>
            <Link href={'#'}>
              <p className='mr-3 text-[#535353] lg:text-xl hover:text-[#2c9284]'>
                Instagram
              </p>
            </Link>

            <Link href={'#'}>
              <p className='mx-3 text-[#535353] lg:text-xl hover:text-[#2c9284]'>
                Linkedin
              </p>
            </Link>

            <Link href={'#'}>
              <p className='ml-3 text-[#535353] lg:text-xl hover:text-[#2c9284]'>
                Github
              </p>
            </Link>
          </div>
        </div>

        <div>
          {/* <Image
            src='/profile_picture.jpeg'
            width={500}
            height={500}
            alt=''
            className='rounded-lg lg:w-96'
          /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
