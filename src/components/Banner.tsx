
import React from 'react';
import { Link } from 'react-router-dom';

interface BannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-genial-darkgray">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-gray-200 mb-8">{subtitle}</p>
          <Link 
            to={buttonLink} 
            className="inline-block bg-genial-red text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
