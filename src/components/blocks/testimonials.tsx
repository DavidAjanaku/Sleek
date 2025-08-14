import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

interface TestimonialProps {
  quote?: string;
  author?: string;
  title?: string;
}

const inter = Inter({ subsets: ["latin"], display: "swap" });

const Testimonial: React.FC<TestimonialProps> = ({
  quote = "I'VE TRIED TOO MANY SCALP CREAMS THAT OVERDO IT. THIS ONE ACTUALLY WORKS.",
  author = "Christianus Durotoye",
  title = "Founder Sleek Enterprise"
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="flex justify-center mb-8">
          <div className="relative w-20 h-20">
            <Image
              src="/assets/square1.png"
              alt="Quote decoration"
              width={75}
              height={75}
              className="absolute top-2 left-2 transform rotate-12"
            />
            <Image
              src="/assets/square2.png"
              alt="Quote decoration"
              width={80}
              height={80}
              className="absolute -top-3 -left-9"
            />
          </div>
        </div>
        
 
        <blockquote className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-12 max-w-5xl mx-auto">
          "{quote}"
        </blockquote>
        
    
        <div className="space-y-2">
       <p className={`${inter.className} text-lg font-semibold text-gray-900`}>
  {author}
</p>
<p className={`${inter.className} text-gray-600 text-sm font-light`}>
  {title}
</p>

          
        
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;