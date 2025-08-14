"use client";
import Testimonial from '@/components/blocks/testimonials';
import Footer from '@/components/layout/footer';
import FeaturesSection from '@/components/sections/features-section';
import HeroSection from '@/components/sections/hero-section';
import ProductGrid from '@/components/sections/products-section';
import TestimonialsSection from '@/components/sections/testimonials-section';



export default function Home() {
 

  return (
    <div className="">
     <HeroSection/>
     <FeaturesSection/>
     <ProductGrid/>
     <div className='px-20 h-2/3'>
       <img
          src="/assets/frame.png"
          className="w-full h-full object-cover transition-all duration-300"
        />
     </div>
     <Testimonial/>
     <div className='px-20 h-2/3'>
       <img
          src="/assets/serum.png"
          className="w-full h-full object-cover transition-all duration-300"
        />
     </div>
     <Footer/>
    </div>
  );
}