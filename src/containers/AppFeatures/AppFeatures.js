import React from 'react';
import App from "../../assets/appfeatures/App.png";

const ImageWithText = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-auto bg-customBackground relative">
      <div className="relative flex flex-col items-center md:block">
        
        {/* 1. Div en haut de l'image */}
        <div className="order-1 text-center md:mt-8">
          <div className="text-white mb-4 md:mb-0">
            <h3 className="text-xl font-bold">FULL FREE CHAT</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* 3. Image centrale (width responsive) */}
        <img
          src={App}
          alt="Image centrale"
          className="w-full max-w-[372px] h-auto order-2 block mx-auto rounded-lg shadow-lg mb-4 md:mb-8"
        />

        {/* 5. Div en bas de l'image */}
        <div className="order-3 text-center md:mb-8">
          <div className="text-white">
            <h3 className="text-xl font-bold">24/7 SUPPORT BY REAL PEOPLE</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* 2. Divs à droite de l'image (haut droite et bas droite) */}
        <div className="order-4 md:absolute top-[20%] right-0 transform md:translate-x-full md:-translate-y-1/2 text-center md:text-right">
          <div className="text-white mb-4 md:mb-0">
            <h3 className="text-xl font-bold">ISO & ANDROID VERSION</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="order-5 md:absolute bottom-[20%] right-0 transform md:translate-x-full md:translate-y-1/2 text-center md:text-right">
          <div className="text-white mb-4 md:mb-0">
            <h3 className="text-xl font-bold">RETINA READY GRAPHICS</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* 4. Divs à gauche de l'image (haut gauche et bas gauche) */}
        <div className="order-6 md:absolute top-[20%] left-0 transform md:-translate-x-full md:-translate-y-1/2 text-center md:text-left">
          <div className="text-white mb-4 md:mb-0">
            <h3 className="text-xl font-bold">UNLIMITER FEATURES</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="order-7 md:absolute bottom-[20%] left-0 transform md:-translate-x-full md:translate-y-1/2 text-center md:text-left">
          <div className="text-white mb-4 md:mb-0">
            <h3 className="text-xl font-bold">AWSOME UI DESIGN</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
