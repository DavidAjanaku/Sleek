"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Heart, ShoppingBag, User, Menu, X, Plus } from 'lucide-react';
import { Staatliches } from 'next/font/google';
import { Inter } from "next/font/google";

// Create Staatliches font instance for this component
const staatliches = Staatliches({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  return (
 <header
      className={`${inter.className} bg-[#031D40] text-white rounded-xl`}
    >      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-white hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Shop Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="flex items-center space-x-1 font-light text-lg text-white hover:text-gray-300 transition-colors"
                >
                  <span>Shop</span>
                  <Plus className="h-4 w-4 text-[#E1B64C]" />
                </button>
                {isShopOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <Link href="/shop/categories" className="block px-4 py-2 text-slate-900 hover:bg-gray-100">
                      All Categories
                    </Link>
                    <Link href="/shop/new" className="block px-4 py-2 text-slate-900 hover:bg-gray-100">
                      New Arrivals
                    </Link>
                    <Link href="/shop/sale" className="block px-4 py-2 text-slate-900 hover:bg-gray-100">
                      Sale
                    </Link>
                  </div>
                )}
              </div>

              {/* Collection Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                  className="flex items-center space-x-1 font-light text-lg text-white hover:text-gray-300 transition-colors"
                >
                  <span>Collection</span>
                  <Plus className="h-4 w-4 text-[#E1B64C]" />
                </button>
                {isCollectionOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <Link href="/collection/summer" className="block px-4 py-2 text-slate-900 hover:bg-gray-100">
                      Summer 2024
                    </Link>
                    <Link href="/collection/winter" className="block px-4 py-2 text-slate-900 hover:bg-gray-100">
                      Winter 2024
                    </Link>
                    <Link href="/collection/limited" className="block px-4 py-2 text-slate-900 hover:bg-gray-100">
                      Limited Edition
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className="text-white font-light text-lg hover:text-gray-300 transition-colors"
              >
                About
              </Link>
              
              <Link 
                href="/blog" 
                className="text-white font-light  text-lg hover:text-gray-300 transition-colors"
              >
                Blog
              </Link>
              
              <Link 
                href="/contact" 
                className="text-white font-light text-lg hover:text-gray-300 transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold text-[#E1B64C] tracking-wider ${staatliches.className}`}>
              SLEEK
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* French Flag */}
            <div className="w-6 h-4 flex  overflow-hidden">
              <div className="w-2 bg-blue-600"></div>
              <div className="w-2 bg-white"></div>
              <div className="w-2 bg-red-600"></div>
            </div>

            {/* Account */}
            <button className="p-2 rounded-md text-white hover:bg-slate-800 transition-colors">
              <User className="h-5 w-5" />
            </button>

            {/* Search */}
            <button className="p-2 rounded-md text-white hover:bg-slate-800 transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <button className="p-2 rounded-md text-white hover:bg-slate-800 transition-colors">
              <Heart className="h-5 w-5" />
            </button>

            {/* Cart */}
            <button className="p-2 rounded-md text-white hover:bg-slate-800 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/shop" 
                className="text-white hover:text-gray-300 font-light text-lg  transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/collection" 
                className="text-white hover:text-gray-300 transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-gray-300 transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:text-gray-300 transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-gray-300 transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;