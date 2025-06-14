
import React from 'react';

const VideoHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-luxury-black to-luxury-brown">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center center'
          }}
        >
          <source src="https://ik.imagekit.io/cn0lbrbin/Untitled%20video%20-%20Made%20with%20Clipchamp.mp4?updatedAt=1749900056126" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
