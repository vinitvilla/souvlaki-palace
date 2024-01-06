'use client'
import Head from 'next/head';
import Hero from './components/Hero';
import PopularItems from './components/PopularItems';

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen justify-center">
      <Head>
        <title>Souvlaki palace - The best food in Town</title>
      </Head>
      <div className='w-full'>
        <Hero />
        <PopularItems />
      </div>
    </main>
  )
}
