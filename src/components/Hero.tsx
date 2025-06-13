
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://ik.imagekit.io/cn0lbrbin/0613.mp4?updatedAt=1749784621964"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-luxury-black/20"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-luxury-gold"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-luxury-brown"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-luxury-gold"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
