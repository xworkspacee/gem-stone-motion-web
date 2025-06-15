
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const gemstones = [
  {
    name: "Natural Diamond",
    description: "A symbol of luxury, strength, and purity.",
    image: "/lovable-uploads/5367151c-4388-4003-995a-aa12aa0db1a0.png",
  },
  {
    name: "Alexandrite",
    description: "Renowned for its rare color-changing property.",
    image: "/lovable-uploads/ff11579b-0a0a-4cf9-a85e-bde390762c26.png",
  },
  {
    name: "Emerald",
    description: "Famed for its radiant green and mystical healing.",
    image: "/lovable-uploads/65bf9dca-98e5-4c5f-9443-ca563ef405ba.png",
  },
  {
    name: "Ruby",
    description: "A gem of passion, prosperity, and courage.",
    image: "/lovable-uploads/c4afd5c3-8b2c-420c-9382-7b1a9a77cdd2.png",
  },
];

const PreciousGemstone = () => (
  <section className="py-14 bg-gradient-to-b from-luxury-cream/80 to-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl text-center font-luxury font-bold text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-400 bg-clip-text text-transparent mb-10 animate-fade-in">
        Precious Gemstone
      </h2>
      <div className="relative flex items-center justify-center">
        <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-2xl">
          <CarouselContent>
            {gemstones.map((gem, idx) => (
              <CarouselItem
                key={idx}
                className="flex flex-col items-center p-7"
              >
                <div className="bg-white bg-opacity-90 rounded-xl shadow-xl hover:shadow-2xl flex flex-col items-center animate-fade-in transition-all duration-300">
                  <img
                    src={gem.image}
                    alt={gem.name}
                    className="w-40 h-40 object-cover rounded-full border-4 border-yellow-300 shadow mb-4 hover-scale animate-scale-in"
                  />
                  <h3 className="text-lg font-semibold mb-2 text-luxury-black text-center">
                    {gem.name}
                  </h3>
                  <p className="text-gray-500 text-center">{gem.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-yellow-300 text-black hover:bg-yellow-400" />
          <CarouselNext className="right-0 bg-yellow-300 text-black hover:bg-yellow-400" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default PreciousGemstone;
