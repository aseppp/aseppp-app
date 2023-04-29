import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';

const socialMenu = [
  {
    path: '#',
    icon: <AiOutlineInstagram size={'28px'} />,
  },
  {
    path: '#',
    icon: <AiFillLinkedin size={'28px'} />,
  },
  {
    path: '#',
    icon: <AiOutlineGithub size={'28px'} />,
  },
];

const Header = () => {
  return (
    <>
      <div className='overflow-hidden flex justify-between px-7 mt-28 md:mx-16 md:mt-40 md:flex md:justify-between lg:flex lg:items-center lg:justify-between lg:mt-28'>
        <div className='flex items-center md:gap-10'>
          <Image
            width={100}
            height={100}
            src='/profile.png'
            alt='profile'
            className='profile w-[60px] h-[58px] md:w-[83px] md:h-[81px]'
          />

          <div className='social hidden md:flex lg:flex items-center md:gap-3'>
            {socialMenu.map((item, key) => (
              <div key={key}>
                <Link href={item.path}>
                  <h1 className='hover:text-[#2c9284] text-[#ffffff]'>
                    {item.icon}
                  </h1>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className='status flex items-center gap-3 '>
          <hr className='w-[50px] border-[#ffffff] ' />
          <h1 className='info text-[#ffffff] text-sm lg:text-lg '>
            Available For Work
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
