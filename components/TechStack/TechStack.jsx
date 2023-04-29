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

      <div className='skills lg:h-screen flex items-center'>
        <div className='w-full flex lg:items-center lg:justify-evenly '>
          <div>
            <Image
              src='/profile_picture.jpeg'
              width={500}
              height={500}
              alt=''
            />
          </div>

          {/* <div className='flex lg:justify-end'> */}
          <div className='lg:w-96 place-items-center lg:grid lg:grid-cols-2 lg:gap-10 '>
            <div className='box1'>
              <Image src={'/logo/chakra.png'} width={100} height={100} alt='' />
            </div>
            <div className='box2'>
              <Image src={'/logo/git.png'} width={100} height={100} alt='' />
            </div>
            <div className='box2'>
              <Image src={'/logo/github.png'} width={100} height={100} alt='' />
            </div>
            <div className='box3'>
              <Image src={'/logo/gitlab.png'} width={100} height={100} alt='' />
            </div>
            <div className='box4'>
              <Image src={'/logo/js.png'} width={100} height={100} alt='' />
            </div>
            <div className='box6'>
              <Image src={'/logo/nextjs.png'} width={100} height={100} alt='' />
            </div>
            <div className='box7'>
              <Image src={'/logo/nodejs.png'} width={100} height={100} alt='' />
            </div>
            <div className='box8'>
              <Image src={'/logo/react.png'} width={100} height={100} alt='' />
            </div>
            <div className='box9'>
              <Image src={'/logo/redux.png'} width={100} height={100} alt='' />
            </div>
            <div className='box10'>
              <Image
                src={'/logo/tailwind.png'}
                width={100}
                height={100}
                alt=''
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default TechStack;
