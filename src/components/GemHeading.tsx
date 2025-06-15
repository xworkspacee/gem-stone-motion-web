
import React from "react";

const images = [
  "/lovable-uploads/5367151c-4388-4003-995a-aa12aa0db1a0.png",
  "/lovable-uploads/65b169ad-f2d5-49b7-ac91-3e830903ec39.png",
  "/lovable-uploads/1fc5d0d7-e87a-44c0-a603-76e2e3b39784.png"
];

const GemHeading = () => (
  <section className="py-10 md:py-16 bg-white">
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1 className="text-center text-3xl md:text-5xl font-luxury font-bold text-luxury-black mb-6 tracking-tight">
        PRECIOUS GEMSTONE, <span className="text-luxury-gold">GEMSTONES</span>, <span className="text-luxury-brown">BIRTH STONES</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
        {images.map((img, i) => (
          <div
            key={img}
            className="overflow-hidden rounded-lg shadow-lg w-full md:w-64 h-48 md:h-56 bg-gray-100"
            style={{ flex: '0 1 220px', maxWidth: 280 }}
          >
            <img
              src={img}
              alt={`Gem visual ${i + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GemHeading;
