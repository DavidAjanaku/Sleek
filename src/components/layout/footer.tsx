import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"], display: "swap" });

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#031D40] text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
          <div className="space-y-6">
            <h2 className="text-[#E1B64C] text-2xl font-bold tracking-wide">
              ABOUT SLEEK
            </h2>
           <div className={inter.className}>
  <p className="text-gray-300 text-sm pb-10 leading-relaxed">
    Combining nature and science, we create skincare
    that nurtures your scalp and respects the planet.
    Bold, confident scalp starts here.
  </p>
</div>

            
           
            <div className="flex space-x-4 pt-4">
              <button className="hover:opacity-80 transition-opacity duration-200">
                <Image 
                  src="/assets/whatsapp.png" 
                  alt="WhatsApp" 
                  width={18} 
                  height={18}
                />
              </button>
              <button className="hover:opacity-80 transition-opacity duration-200">
                <Image 
                  src="/assets/instagram.png" 
                  alt="Instagram" 
                  width={18} 
                  height={18}
                />
              </button>
              <button className="hover:opacity-80 transition-opacity duration-200">
                <Image 
                  src="/assets/x.png" 
                  alt="X (Twitter)" 
                  width={18} 
                  height={18}
                />
              </button>
            </div>
            
          
            <div className="flex items-center space-x-4 ">
              <Image 
                src="/assets/googlePay.png" 
                alt="Google Pay" 
                width={50} 
                height={24}
              />
              <Image 
                src="/assets/visa.png" 
                alt="Visa" 
                width={50} 
                height={24}
              />
              <Image 
                src="/assets/applePay.png" 
                alt="Apple Pay" 
                width={50} 
                height={24}
              />
              <Image 
                src="/assets/stripe.png" 
                alt="Stripe" 
                width={50} 
                height={24}
              />
            </div>
          </div>

        
          <div className="space-y-6">
            <h2 className="text-[#E1B64C] text-2xl font-bold tracking-wide">
              PAGES
            </h2>
         <nav className={`${inter.className} space-y-3 text-sm`}>
  <Link href="/" className="block text-gray-300 hover:text-white transition-colors duration-200">
    Home
  </Link>
  <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
    About
  </Link>
  <Link href="/shop" className="block text-gray-300 hover:text-white transition-colors duration-200">
    Shop
  </Link>
  <Link href="/collection" className="block text-gray-300 hover:text-white transition-colors duration-200">
    Collection
  </Link>
  <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors duration-200">
    Blog
  </Link>
  <Link href="/404" className="block text-gray-300 hover:text-white transition-colors duration-200">
    404
  </Link>
</nav>

          </div>

          {/* Categories & Account Section */}
          <div className="space-y-6">
            <h2 className="text-[#E1B64C] text-2xl font-bold tracking-wide">
              CATEGORIES
            </h2>
          <nav className={`${inter.className} space-y-3 text-sm`}>
  <Link href="/products" className="block text-gray-300 hover:text-white transition-colors duration-200">
    All Products
  </Link>
  <Link href="/cream" className="block text-gray-300 hover:text-white transition-colors duration-200">
    Cream
  </Link>
  <Link href="/serum" className="block text-gray-300 hover:text-white transition-colors duration-200">
    Serum
  </Link>
  <Link href="/spray" className="block text-gray-300 hover:text-white transition-colors duration-200">
    Spray
  </Link>
</nav>


            <h2 className="text-[#E1B64C] text-2xl font-bold tracking-wide pt-6">
              ACCOUNT
            </h2>
          <nav className={`${inter.className} space-y-3 text-sm`}>
  <Link href="/favourite" className="block text-gray-300 hover:text-white transition-colors duration-200">
    Favourite
  </Link>
  <Link href="/my-account" className="block text-gray-300 hover:text-white transition-colors duration-200">
    My Account
  </Link>
</nav>

          </div>

          {/* Support Section */}
          <div className="space-y-6">
            <h2 className="text-[#E1B64C] text-2xl font-bold tracking-wide">
              SUPPORT
            </h2>
         <nav className={`${inter.className} space-y-3 text-sm`}>
  <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
    Contact
  </Link>
  <Link href="/faqs" className="block text-gray-300 hover:text-white transition-colors duration-200">
    FAQs
  </Link>
  <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors duration-200">
    Terms & Conditions
  </Link>
</nav>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;