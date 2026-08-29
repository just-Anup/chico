"use client";


import Hero from "../app/components/hero";
import Services from "../app/components/Services";
import Work from "../app/components/Work";
import About from "../app/components/About";



export default function Home() {
  return (
    <main className="page-wrapper">

     

      <Hero />

      <Services />

      <Work />

      <About />

      

    </main>
  );
}