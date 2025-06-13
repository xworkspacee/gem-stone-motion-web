
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen luxury-gradient flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-cream/80 to-luxury-beige/60"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-luxury-gold"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-luxury-brown"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-luxury-gold"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-luxury font-bold text-luxury-black mb-6 leading-tight">
            Timeless
            <span className="block text-gradient">Elegance</span>
            Redefined
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-luxury-gray mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our exquisite collection of handcrafted jewelry pieces, where modern sophistication meets timeless beauty.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-luxury-black hover:bg-luxury-brown text-white px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105"
            >
              EXPLORE COLLECTION
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
            >
              DISCOVER NEW ARRIVALS
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
