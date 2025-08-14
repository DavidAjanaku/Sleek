"use client";
import { Inter } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import Header from "@/components/layout/header";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
  });

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Navigate to specific slide
  const goToSlide = (index: number) => {
  setCurrentSlide(index);
};

  // Calculate background color based on current slide
  const getBackgroundColor = () => {
    const colors = [
        '#F4F9FE',
      '#FFFFFF', 
      '#72ACF8'
    ];
    
    return colors[currentSlide];
  };

  return (
    <div className="relative min-h-screen">
      {/* Sticky Header */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 px-5 pt-4 transition-transform duration-300 ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>

      {/* Hero Section */}
      <div 
        className="min-h-screen transition-colors duration-500 relative"
        style={{ backgroundColor: getBackgroundColor() }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32">
          <div className="flex items-center justify-between min-h-[calc(100vh-8rem)]">
            {/* Left Content */}
            <div className="flex-1 max-w-4xl">
              {/* Main Headline */}
              <h1 className="md:text-8xl  text-5xl  font-staatliches  font-light text-black leading-[0.9] tracking-wide mb-8">
                PREMIUM SCALP
                <br />
                CARE DESIGNED FOR
                <br />
                BOLD, CLEAN LOOKS
              </h1>

              {/* Description */}
            <p className={`${inter.className} text-lg md:text-xl text-[#777777] leading-relaxed max-w-2xl mb-12 font-normal`}
              >
                Whether you&apos;re bald by choice or by nature, SLEEK is made for 
                you,clean ingredients, clean design, and a smooth finish every time.
              </p>

              {/* CTA Button */}
              <button className="bg-[#E1B64C] hover:bg-[#d4a332] text-black font-semibold text-2xl px-14 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider">
                ORDER NOW
              </button>
            </div>

            {/* Right Navigation Arrow */}
            <div className="hidden lg:flex items-center justify-end pr-8">
              <button 
                className="w-10 h-10 bg-gray-700/30 hover:bg-gray-400/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                onClick={nextSlide}
                style={{ 
                  transform: `translateY(${scrollY * 0.05}px)` 
                }}
              >
                <svg 
                  className="w-8 h-8 text-white group-hover:text-gray-800 transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center pb-16">
            <div className="flex space-x-3">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}