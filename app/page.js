"use client";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Credits from '@/components/Credits';

export default function Home() {
  return (
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      <Navbar />
      <Header />
      <h1 className='text-center text-6xl'>About</h1>
      <About />
      <h1 className='text-center text-6xl'>Testimonials</h1>
      <Testimonials/>
      <h1 className='text-center text-6xl'>Credits</h1>
      <Credits />
    </main>
  )
}
