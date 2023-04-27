import Header from './Header/Header';
import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';

export default function Layout({ children }) {
  useIsomorphicLayoutEffect(() => {
    gsap.from('.name', {
      duration: 1.5,
      ease: 'sine.out',
      y: 100,
      opacity: 0,
    });

    gsap.from('.heading1', {
      duration: 2,
      ease: 'sine.out',
      y: 100,
      opacity: -10,
    });

    gsap.from('.paragraph', { duration: 2, ease: 'ease.in', opacity: -0 });
    gsap.from('.status', { duration: 1.5, ease: 'sine.out', x: 300 });
    gsap.from('.social', { duration: 1.5, ease: 'sine.out', y: -300 });
    gsap.from('.profile', { duration: 1.5, ease: 'sine.out', x: -300 });
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
