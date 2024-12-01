import Image from "next/image";
import Navbar from "./fonts/components/Navbar";
import Hero from "./fonts/components/Hero";
import Features from "./fonts/components/Features";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <div className="px-[20px] lg:container lg:px-20 mx-auto">

   <Features />
   </div>
   </>
  );
}
