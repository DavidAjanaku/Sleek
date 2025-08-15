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
       <div className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12 lg:py-16 my-8 md:my-12 lg:my-16 h-96 sm:h-80 md:h-96 lg:h-2/3'>
        <img
          src="/assets/Frame.png"
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
      <Testimonial/>
      {/* Updated serum image section with bigger mobile size */}
      <div className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12 lg:py-16 my-8 md:my-12 lg:my-16 h-96 sm:h-80 md:h-96 lg:h-2/3'>
        <img
          src="/assets/serum.png"
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
      <Footer/>
    </div>
  );
}