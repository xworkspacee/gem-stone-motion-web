
import React from 'react';

const VideoHero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-luxury-black to-luxury-brown">
      {/* Animated Gemstone Background */}
      <div className="absolute inset-0">
        {/* Pearl - floating slowly */}
        <div className="absolute top-1/4 left-1/6 w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-xl animate-float-slow opacity-80"></div>
        
        {/* Ruby - spinning and floating */}
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 transform rotate-45 animate-float-medium opacity-70 shadow-2xl"></div>
        
        {/* Agate - oval shape floating */}
        <div className="absolute bottom-1/3 left-1/3 w-20 h-14 rounded-full bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500 animate-float-fast opacity-60 shadow-xl"></div>
        
        {/* Alexandrite - color changing effect */}
        <div className="absolute top-1/2 left-1/2 w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-green-500 animate-pulse-slow transform -translate-x-1/2 -translate-y-1/2 shadow-2xl"></div>
        
        {/* Amber - warm golden glow */}
        <div className="absolute bottom-1/4 right-1/6 w-18 h-18 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 animate-float-medium opacity-75 shadow-xl"></div>
        
        {/* Additional floating gemstones for more motion */}
        <div className="absolute top-1/6 right-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 animate-float-slow opacity-50"></div>
        <div className="absolute bottom-1/6 left-1/4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 transform rotate-12 animate-float-fast opacity-60"></div>
        <div className="absolute top-3/4 right-1/5 w-12 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 animate-float-medium opacity-65"></div>
      </div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-black/30 to-luxury-black/50"></div>

      {/* Floating Motion Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-32 h-32 rounded-full bg-luxury-gold/10 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-luxury-cream/15 animate-spin-reverse"></div>
        <div className="absolute top-2/3 right-1/4 w-16 h-16 rounded-full bg-luxury-gold/20 animate-float-fast"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 tracking-widest opacity-80">SCROLL</span>
          <div className="w-0.5 h-8 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
