"use client";
// import Navbar from '@/components/Navbar';
import Header from "@/components/Header";
import About from "@/components/About";
import AI from "../components/Ai.jsx"
import Testimonials from "@/components/Testimonials";
import Credits from "@/components/Credits";
import { WavyBackground } from "@/components/ui/wavy-background";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      {/* <WavyBackground className=""> */}
        {/* <Navbar /> */}
        <Header />
        <h1 className="text-center text-6xl">About</h1>
        <About />
        <AI />
        
        <h1 className="text-center text-6xl">Testimonials</h1>
        <Testimonials />
        <h1 className="text-center text-6xl mt-8">Credits</h1>
        <Credits />
        <Footer />
      {/* </WavyBackground> */}
    </main>
  );
}
