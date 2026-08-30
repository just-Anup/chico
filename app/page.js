"use client";


import Hero from "../app/components/hero";
import Services from "../app/components/Services";
import Work from "../app/components/Work";
import Testimonials from "../app/components/Testimonials";
import About from "../app/components/About";
import FAQ from "../app/components/FAQ";



export default function Home() {
  return (
    <main className="page-wrapper">

      <Hero />

      <Services />

      <Work />

      <Testimonials />

      <About />

      <FAQ />

    </main>
  );
}
