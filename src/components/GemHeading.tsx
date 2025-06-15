
import React from "react";
import ImageCarousel from "./ImageCarousel";

const gemItems = [
  {
    img: "/lovable-uploads/5367151c-4388-4003-995a-aa12aa0db1a0.png",
    alt: "Blue Gem",
    shopLink: "/collections/blue-gemstones",
    buttonText: "Shop Now",
  },
  {
    img: "/lovable-uploads/65b169ad-f2d5-49b7-ac91-3e830903ec39.png",
    alt: "Golden Gem",
    shopLink: "/collections/gold-gemstones",
    buttonText: "Shop Now",
  },
  {
    img: "/lovable-uploads/1fc5d0d7-e87a-44c0-a603-76e2e3b39784.png",
    alt: "Birthstone",
    shopLink: "/collections/birthstones",
    buttonText: "Shop Now",
  },
];

const GemHeading = () => (
  <section className="py-10 md:py-16 bg-white">
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1 className="text-center text-3xl md:text-5xl font-luxury font-bold text-luxury-black mb-6 tracking-tight">
        PRECIOUS GEMSTONE,{" "}
        <span className="text-luxury-gold">GEMSTONES</span>
        ,{" "}
        <span className="text-luxury-brown">BIRTH STONES</span>
      </h1>
      <div className="w-full max-w-3xl">
        <ImageCarousel items={gemItems} withCTA imgHeight="h-48 md:h-56" />
      </div>
    </div>
  </section>
);

export default GemHeading;
