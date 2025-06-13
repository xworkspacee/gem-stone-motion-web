
import React from 'react';
import { Button } from '@/components/ui/button';

const VideoHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
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
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fabf212b2dcb4c4b437e212ef2a5050&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-luxury-black/30"></div>
      </div>

      {/* Floating Motion Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-luxury-gold/10 animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-luxury-cream/20 animate-float-medium"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-luxury-gold/15 animate-float-fast"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-luxury font-bold mb-6 animate-fade-in">
              Crafted with
              <span className="block text-luxury-gold">Passion</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Each piece tells a story of timeless elegance and modern sophistication
            </p>
            <Button 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black px-12 py-4 text-lg font-medium tracking-wide animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              DISCOVER THE MAGIC
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 tracking-widest opacity-80">SCROLL</span>
          <div className="w-0.5 h-8 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
