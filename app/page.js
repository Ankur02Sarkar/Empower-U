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
      <About />
      <Testimonials />
      <Credits />
    </main>
  )
}
