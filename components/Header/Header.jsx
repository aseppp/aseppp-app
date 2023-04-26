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
      <div className='flex items-center justify-between md:mt-28 md:mx-60'>
        <div className='flex items-center sm:gap-10'>
          <Image
            width={100}
            height={100}
            src='/profile.png'
            alt='profile'
            className='w-[60px] h-[58px] sm:w-[93px] sm:h-[91px]'
          />

          <div className='flex items-center gap-3'>
            {socialMenu.map((item, key) => (
              <div key={key}>
                <Link href={item.path}>
                  <h1 className='hover:text-[#43ff88] text-white'>
                    {item.icon}
                  </h1>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-3 '>
          <hr className='w-[50px] ' />
          <h1 className='info text-white '>Available For Work</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
