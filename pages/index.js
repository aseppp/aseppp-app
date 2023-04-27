import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Terminal from '@/components/Terminal/Terminal';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Asep Saepudin | Fullstack Web Developer</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='lg:h-[80vh] px-7 md:mx-16 md:mt-[40px] lg:mt-[80px]'>
        <Hero />
      </div>

      <div className='px-7 lg:my-[300px] md:mx-16 md:mt-[40px] lg:mt-[80px] h-[90vh]'>
        <Terminal />
      </div>

      <div className='px-7 mt-10 md:mx-16 md:mt-[40px] lg:mt-[80px]'>
        <Footer />
      </div>
    </>
  );
}
