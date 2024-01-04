'use client'
import Head from 'next/head';
import Hero from './components/Hero';
import PopularItems from './components/PopularItems';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isAbsolute, setIsAbsolute] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const halfScreenHeight = 10;
      const isScrolledHalfScreen = window.scrollY >= halfScreenHeight;
      setIsAbsolute(!isScrolledHalfScreen);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen justify-center">
      <Head>
        <title>Souvlaki palace - The best food in Town</title>
      </Head>
      <div className={`${isAbsolute ? 'absolute' : ''} top-0 w-full`}>
        <Hero />
        <PopularItems />
      </div>
    </main>
  )
}
