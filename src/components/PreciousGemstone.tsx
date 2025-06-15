
import React from "react";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {gemstones.map((gem, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-90 rounded-xl shadow-xl hover:shadow-2xl p-7 flex flex-col items-center transition-all duration-200 animate-fade-in"
          >
            <img
              src={gem.image}
              alt={gem.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-300 shadow mb-4 hover-scale"
            />
            <h3 className="text-lg font-semibold mb-2 text-luxury-black text-center">
              {gem.name}
            </h3>
            <p className="text-gray-500 text-center">{gem.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PreciousGemstone;
