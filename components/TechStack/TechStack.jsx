import React from 'react';
import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
            scrub: 50,
          },
        }
      );
    });
  }, []);

  return (
    <div className='overflow-x-hidden '>
      <section className='section1'>
        <div className='wrapper text uppercase whitespace-nowrap'>
          <h1 className='text-scroll1'>
            Tech Stack and Technologies Tech Stack and Technologies
          </h1>
        </div>
      </section>

      <section className='section2'>
        <div className='wrapper text uppercase whitespace-nowrap'>
          <h1 className='text-scroll2'>
            Tech Stack and Technologies Tech Stack and Technologies
          </h1>
        </div>
      </section>

      <section className='section1'>
        <div className='wrapper text uppercase whitespace-nowrap'>
          <h1 className='text-scroll1'>
            Tech Stack and Technologies Tech Stack and Technologies
          </h1>
        </div>
      </section>

      <section className='section2'>
        <div className='wrapper text uppercase whitespace-nowrap'>
          <h1 className='text-scroll2'>
            Tech Stack and Technologies Tech Stack and Technologies
          </h1>
        </div>
      </section>

      <section className='section1'>
        <div className='wrapper text uppercase whitespace-nowrap'>
          <h1 className='text-scroll1'>
            Tech Stack and Technologies Tech Stack and Technologies
          </h1>
        </div>
      </section>

      <section className='section2'>
        <div className='wrapper text uppercase whitespace-nowrap'>
          <h1 className='text-scroll2'>
            Tech Stack and Technologies Tech Stack and Technologies
          </h1>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
