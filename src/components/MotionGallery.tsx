
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Updated gallery items with new images
const galleryItems = [
  {
    id: 1,
    image: "/lovable-uploads/516514c2-9d0e-4617-b961-e5d1cd1d6d3c.png", // Jewelry and pearls
    title: "Precious Gemstone",
    subtitle: "Exquisite Jewelry Collection",
    category: "precious-gemstone",
  },
  {
    id: 2,
    image: "/lovable-uploads/86bf29e2-54f4-47e1-9461-9599bdef5c97.png", // Sparkling gem spheres
    title: "Gemstones",
    subtitle: "Vibrant & Colorful Gems",
    category: "gemstones",
  },
  {
    id: 3,
    image: "/lovable-uploads/3c5f87fb-994d-4340-833c-654ff770db03.png", // Gemstones on green silk
    title: "Birth Stones",
    subtitle: "Find Your Unique Birthstone",
    category: "birth-stones",
  },
];

const MotionGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="py-20 bg-luxury-cream relative overflow-hidden">
      {/* Background Motion Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-luxury-gold/5 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-luxury-beige/10 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-luxury-black mb-6 animate-fade-in">
            PRECIOUS GEMSTONE, <span className="text-luxury-gold">GEMSTONES</span>, <span className="text-luxury-brown">BIRTH STONES</span>
          </h2>
          <p className="text-lg text-luxury-gray max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Dive into a world of exquisite gemstones, sparkling jewelry, and meaningful birthstones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <Link
              key={item.id}
              to={`/collections/${item.category}`}
              className="group cursor-pointer animate-scale-in block"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-white shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredItem === item.id ? 'scale-110 rotate-2' : 'scale-100'
                  }`}
                />
                
                {/* Floating overlay elements */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-luxury-gold/20 animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-luxury-cream/30 animate-bounce"></div>
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-luxury font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotionGallery;
