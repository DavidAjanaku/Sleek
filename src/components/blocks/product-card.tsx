import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Inter } from 'next/font/google';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  hoverImageUrl?: string; // Optional hover image
  discount?: number;
  isLiked?: boolean;
  onLike?: (id: string) => void;
  onAddToCart?: (id: string) => void;
}
const inter = Inter({ subsets: ["latin"], display: "swap" });


const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  hoverImageUrl,
  discount,
  isLiked = false,
  onLike,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onLike?.(id);
  };

  const handleCardClick = () => {
    onAddToCart?.(id);
  };

  return (
    <div 
      className="bg-[#F4F9FE] rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300  "
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
   
      <div className="relative h-80 ">
      
        <img
          src={isHovered && hoverImageUrl ? hoverImageUrl : imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-all duration-300"
        />

       
       {discount && (
  <div
    className={`${inter.className} absolute top-4 right-4 bg-[#72ACF8] text-white text-sm font-light px-4 py-1 rounded z-10`}
  >
    -{discount}%
  </div>
)}


        
        <button
          onClick={handleLikeClick}
          className="absolute top-4 left-4 w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
        >
          <Heart
            className={`w-4 h-4 ${
              isLiked ? 'text-red-500 fill-red-500' : 'text-white'
            } transition-colors`}
          />
        </button>
      </div>

     
      <div className="p-6 text-center">
        <h3 className="text-black pt-7 font-bold text-[16px] uppercase tracking-wide mb-2">
          {name}
        </h3>
       <p className={`${inter.className} text-gray-600 text-sm pb-3 font-light`}>
  ${price.toFixed(2)}
</p>

      </div>
    </div>
  );
};

export default ProductCard;