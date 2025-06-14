
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-luxury-beige to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-16 md:w-32 h-16 md:h-32 rounded-full bg-luxury-gold"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 md:w-24 h-12 md:h-24 rounded-full bg-luxury-brown"></div>
        <div className="absolute top-1/2 right-1/3 w-8 md:w-16 h-8 md:h-16 rounded-full bg-luxury-gold"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-luxury font-bold text-luxury-black mb-6 leading-tight">
            Precious
            <span className="block text-gradient">Gemstones</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite collection of authentic gemstones including Blue Sapphire, Emerald, Ruby, and rare precious stones from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-luxury-black text-white rounded-full hover:bg-luxury-brown transition-colors duration-300 font-medium">
              Explore Gemstones
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-luxury-black text-luxury-black rounded-full hover:bg-luxury-black hover:text-white transition-colors duration-300 font-medium">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
