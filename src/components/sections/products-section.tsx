import React, { useState } from 'react';
import ProductCard from '../blocks/product-card';
import { Inter } from 'next/font/google';


const categories = [
  { id: 'smooth-serum', name: 'Smooth Serum', active: true },
  { id: 'protective-spray', name: 'Protective Spray', active: false },
  { id: 'scalp-cream', name: 'Scalp Cream', active: false },
];

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
  });

// Example product data
const products = [
  {
    id: '1',
    name: 'WOODSY SERUM',
    price: 14.00,
    imageUrl: '/assets/shop.png',
    hoverImageUrl: '/assets/bottle.webp', 
    discount: 13,
  },
  {
    id: '2',
    name: 'WOODSY SERUM',
    price: 14.00,
    imageUrl: '/assets/shop.png',
        hoverImageUrl: '/assets/bottle.webp', 

    discount: 13,
  },
  {
    id: '3',
    name: 'WOODSY SERUM',
    price: 14.00,
    imageUrl: '/assets/shop.png',
        hoverImageUrl: '/assets/bottle.webp', 

    discount: 13,
  },
];

const ProductGrid: React.FC = () => {
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState('smooth-serum');

  const handleLike = (productId: string) => {
    const newLikedProducts = new Set(likedProducts);
    if (newLikedProducts.has(productId)) {
      newLikedProducts.delete(productId);
    } else {
      newLikedProducts.add(productId);
    }
    setLikedProducts(newLikedProducts);
  };

  const handleAddToCart = (productId: string) => {
    console.log(`Added product ${productId} to cart`);
    // Add your cart logic here
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className=" min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-28">
          <h1 className="text-[64px] font-black text-black mb-3 leading-tight">
            THE ESSENTIALS YOU NEED FOR<br />
            SIMPLE, EFFECTIVE CARE
          </h1>
<p className={`${inter.className} text-[#777777] text-lg font-light mx-auto`}>
            Each product is designed to keep your head looking clean and feeling fresh, all day, every day.
          </p>
        </div>

<div className="flex justify-center  mb-16">
  <div className="flex bg-white rounded-xl p-1 border-gray-100 gap-2">
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => handleCategoryChange(category.id)}
        className={`${inter.className} px-5 py-3 cursor-pointer rounded-lg text-sm font-light transition-all duration-300 ${
          activeCategory === category.id
            ? 'bg-slate-800 text-white shadow-sm'
            : 'text-gray-700 hover:text-gray-900'
        }`}
        style={activeCategory !== category.id ? { backgroundColor: '#F4F9FE' } : {}}
      >
        {category.name}
      </button>
    ))}
  </div>
</div>



        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
          <ProductCard
  key={product.id}
  id={product.id}
  name={product.name}
  price={product.price}
  imageUrl={product.imageUrl}
  hoverImageUrl={product.hoverImageUrl}
  discount={product.discount}
  isLiked={likedProducts.has(product.id)}
  onLike={handleLike}
  onAddToCart={handleAddToCart}
/>
          ))}
        </div>

      <div className="text-center">
  <button
    className={`${inter.className} text-black font-light border-b border-black hover:border-gray-600 hover:text-gray-600 transition-colors duration-200 text-[16px]`}
  >
    Shop collection
  </button>
</div>

      </div>
    </div>
  );
};

export default ProductGrid;