"use client";
// import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Credits from '@/components/Credits';
import { HomeIcon, MessageCircleIcon, UserIcon } from 'lucide-react';
import { FloatingNav } from '@/components/ui/floating-navbar';

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <UserIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: (
      <MessageCircleIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export default function Home() {
  return (
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      {/* <Navbar /> */}
      <FloatingNav navItems={navItems} />
      <Header />
      <h1 className='text-center text-6xl'>About</h1>
      <About />
      <h1 className='text-center text-6xl'>Testimonials</h1>
      <Testimonials />
      <h1 className='text-center text-6xl mt-8'>Credits</h1>
      <Credits />
    </main>
  )
}
