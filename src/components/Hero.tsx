
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full Screen Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          minWidth: '100%',
          minHeight: '100%',
        }}
        onLoadedData={(e) => {
          const video = e.currentTarget;
          video.play().catch(console.error);
        }}
      >
        {/* Updated video link for Precious gemstone */}
        <source src="https://ik.imagekit.io/m90cfq7gx/0615.mp4?updatedAt=1750008603963" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Background Pattern - now over video */}
      <div className="absolute inset-0 opacity-10 z-20">
        <div className="absolute top-1/4 left-1/4 w-16 md:w-32 h-16 md:h-32 rounded-full bg-luxury-gold"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 md:w-24 h-12 md:h-24 rounded-full bg-luxury-brown"></div>
        <div className="absolute top-1/2 right-1/3 w-8 md:w-16 h-8 md:h-16 rounded-full bg-luxury-gold"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-luxury font-bold text-white mb-6 leading-tight">
            Precious
            <span className="block text-gradient">Gemstones</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

