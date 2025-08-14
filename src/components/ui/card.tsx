import { Inter } from 'next/font/google';
import { title } from 'process';
import React from 'react';

interface CardProps {
    description?: string;
    iconSrc?: string;
    iconAlt?: string;
    title?: string;
}

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

const Card: React.FC<CardProps> = ({
    description = "",
    iconSrc = "/leaf-icon.png",
    iconAlt = "Natural leaf icon",
    title = "Natural"
}) => {
    return (
        <div className={`bg-[#031D40] rounded-xl p-8 text-center max-w-md mx-auto `}>

            <div className="mb-3">
                <img
                    src={iconSrc}
                    alt={iconAlt}
                    className="w-12 h-12 mx-auto"
                />
            </div>


            <h2 className="text-white text-2xl font-bold uppercase tracking-wider mb-3">
                {title}
            </h2>


            <p className={`${inter.className} text-gray-300 text-[16px] leading-relaxed`}>
                {description}      </p>
        </div>
    );
};

export default Card;