import React from 'react';
import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

const TechStack = () => {
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    gsap.utils.toArray('section').forEach((section, index) => {
      const w = section.querySelector('.wrapper');

      const [x, xEnd] =
        index % 2
          ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];

      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 150,
            // pin: '.pinTitile',
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className='pinTitile overflow-x-hidden '>
        <section className='section1'>
          <div className='wrapper text uppercase whitespace-nowrap'>
            <h1 className='text-scroll1'>
              Tech Stack and Technologies Tech Stack and Technologies Tech Stack
              and Technologies Tech Stack and Technologies
            </h1>
          </div>
        </section>

        <section className='section2'>
          <div className='wrapper text uppercase whitespace-nowrap'>
            <h1 className='text-scroll2'>
              Tech Stack and Technologies Tech Stack and Technologies Tech Stack
              and Technologies Tech Stack and Technologies
            </h1>
          </div>
        </section>

        <section className='section1'>
          <div className='wrapper text uppercase whitespace-nowrap'>
            <h1 className='text-scroll1'>
              Tech Stack and Technologies Tech Stack and Technologies Tech Stack
              and Technologies Tech Stack and Technologies
            </h1>
          </div>
        </section>

        <section className='section2'>
          <div className='wrapper text uppercase whitespace-nowrap'>
            <h1 className='text-scroll2'>
              Tech Stack and Technologies Tech Stack and Technologies Tech Stack
              and Technologies Tech Stack and Technologies
            </h1>
          </div>
        </section>

        <section className='section1'>
          <div className='wrapper text uppercase whitespace-nowrap'>
            <h1 className='text-scroll1'>
              Tech Stack and Technologies Tech Stack and Technologies Tech Stack
              and Technologies Tech Stack and Technologies
            </h1>
          </div>
        </section>

        <section className='section2'>
          <div className='wrapper text uppercase whitespace-nowrap'>
            <h1 className='text-scroll2'>
              Tech Stack and Technologies Tech Stack and Technologies Tech Stack
              and Technologies Tech Stack and Technologies
            </h1>
          </div>
        </section>
      </div>

      <div className='skills mt-20 lg:mt-40 md:mt-20 flex'>
        <div className='lg:w-[800px] m-auto grid place-items-center grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5 lg:gap-10 '>
          <div className='box1 bg-[#303030] p-4 rounded-lg drop-shadow-md cursor-pointer ease-in-out hover:scale-110 hover:rotate-[5deg] duration-200'>
            <Image src={'/logo/chakra.png'} width={100} height={100} alt='' />
          </div>
          <div className='box2 bg-[#303030] p-4 rounded-lg drop-shadow-md  cursor-pointer ease-in-out hover:scale-110 duration-200 hover:rotate-[5deg]'>
            <Image src={'/logo/git.png'} width={100} height={100} alt='' />
          </div>
          <div className='box2 bg-[#303030] p-4 rounded-lg drop-shadow-md  cursor-pointer ease-in-out hover:scale-110 duration-200 hover:rotate-[5deg]'>
            <Image src={'/logo/github.png'} width={100} height={100} alt='' />
          </div>
          <div className='box3 bg-[#303030] p-4 rounded-lg drop-shadow-md  cursor-pointer ease-in-out hover:scale-110 duration-200 hover:rotate-[5deg]'>
            <Image src={'/logo/gitlab.png'} width={100} height={100} alt='' />
          </div>
          <div className='box4 bg-[#303030] p-4 rounded-lg drop-shadow-md  cursor-pointer ease-in-out hover:scale-110 duration-200 hover:rotate-[5deg]'>
            <Image src={'/logo/js.png'} width={100} height={100} alt='' />
          </div>
          <div className='box6 bg-[#303030] p-4 rounded-lg drop-shadow-md  cursor-pointer ease-in-out hover:scale-110 duration-200 hover:rotate-[5deg]'>
            <Image src={'/logo/nextjs.png'} width={100} height={100} alt='' />
          </div>
          <div className='box7 bg-[#303030] p-4 rounded-lg drop-shadow-md  cursor-pointer ease-in-out hover:scale-110 duration-200 hover:rotate-[5deg]'>
            <Image src={'/logo/nodejs.png'} width={100} height={100} alt='' />
          </div>
          <div className='box8 bg-[#303030] p-4 rounded-lg drop-shadow-md  cursor-pointer ease-in-out hover:scale-110 duration-200 hover:rotate-[5deg]'>
            <Image src={'/logo/react.png'} width={100} height={100} alt='' />
          </div>
          <div className='box9 bg-[#303030] p-4 rounded-lg drop-shadow-md  cursor-pointer ease-in-out hover:scale-110 duration-200 hover:rotate-[5deg]'>
            <Image src={'/logo/redux.png'} width={100} height={100} alt='' />
          </div>
          <div className='box10 bg-[#303030] p-4 rounded-lg drop-shadow-md  cursor-pointer ease-in-out hover:scale-110 duration-200 hover:rotate-[5deg]'>
            <Image src={'/logo/tailwind.png'} width={100} height={100} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
