'use client'
import Head from 'next/head';
import Hero from './components/Hero';
import PopularItems from './components/PopularItems';
import Footer from './components/Footer';

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen justify-center">
      <Head>
        <title>Souvlaki palace - The best food in Town</title>
      </Head>
      <div className='w-full'>
        <Hero />
        <PopularItems />
        <Footer />
      </div>
    </main>
  )
}
