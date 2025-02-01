import { Header } from "@/sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
import ProductShowcase from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <LogoTicker/>
      <ProductShowcase/>
      <Testimonials/>
      <Footer/>
      {/*
      <Hero/>
      
      
      
      <Pricing/>
      
      <CallToAction/>
       */}
    </>
  )
  
  
}
