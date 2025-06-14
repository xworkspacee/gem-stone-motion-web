
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
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://ik.imagekit.io/cn0lbrbin/Untitled%20video%20-%20Made%20with%20Clipchamp.mp4?updatedAt=1749900056126" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Background Pattern - now over video */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-1/4 left-1/4 w-16 md:w-32 h-16 md:h-32 rounded-full bg-luxury-gold"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 md:w-24 h-12 md:h-24 rounded-full bg-luxury-brown"></div>
        <div className="absolute top-1/2 right-1/3 w-8 md:w-16 h-8 md:h-16 rounded-full bg-luxury-gold"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
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
