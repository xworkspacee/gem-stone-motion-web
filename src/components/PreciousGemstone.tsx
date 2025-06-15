
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
  {
    name: "Blue Sapphire",
    description: "Said to bring wisdom and royal favor.",
    image: "/lovable-uploads/c0134365-141e-44ba-93b3-e7d8caa2d406.png",
  },
  {
    name: "Yellow Sapphire",
    description: "A stone for wealth and marital bliss.",
    image: "/lovable-uploads/d0b86aec-db2f-4e0b-9c2c-3f9a7db3d7e2.png",
  },
  {
    name: "Pearl",
    description: "Known for peace, purity, and healing.",
    image: "/lovable-uploads/bc6e6219-e538-402f-a024-3bba7157f996.png",
  },
  {
    name: "Hessonite",
    description: "Embraced for clarity and success.",
    image: "/lovable-uploads/eaafb7d1-fd58-41dc-bb01-3b88c614af4e.png",
  },
  {
    name: "Cat's Eye",
    description: "Mystical gem for protection and luck.",
    image: "/lovable-uploads/978e25f2-58c2-4106-93d5-2a3c5b1c36fa.png",
  },
  {
    name: "Coral",
    description: "Gives courage and overcomes fears.",
    image: "/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png",
  },
  {
    name: "White Sapphire",
    description: "Represents wisdom and strength.",
    image: "/lovable-uploads/49d79595-891a-4510-8305-e6f990cd4935.png",
  },
  {
    name: "Red Coral",
    description: "Stone of vitality and determination.",
    image: "/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png",
  },
  {
    name: "Tourmaline",
    description: "For creativity and self-confidence.",
    image: "/lovable-uploads/1fc5d0d7-e87a-44c0-a603-76e2e3b39784.png",
  },
  {
    name: "Amethyst",
    description: "Known for calmness and clarity.",
    image: "/lovable-uploads/65b169ad-f2d5-49b7-ac91-3e830903ec39.png",
  },
];

// Group gemstones in chunks of 4 for each carousel page
const groupByFour = (arr: typeof gemstones) => {
  const grouped = [];
  for (let i = 0; i < arr.length; i += 4) {
    grouped.push(arr.slice(i, i + 4));
  }
  return grouped;
};
const gemstoneChunks = groupByFour(gemstones);

const PreciousGemstone = () => (
  <section className="py-14 bg-gradient-to-b from-luxury-cream/80 to-white relative">
    <div className="container mx-auto px-2">
      <h2
        className="text-4xl md:text-5xl text-center font-luxury font-bold mb-12"
        style={{
          background:
            "linear-gradient(90deg, #ffb455 0%, #fa7268 40%, #df4be0 100%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundClip: "text"
        }}
      >
        Precious Gemstone
      </h2>
      <div className="relative max-w-6xl mx-auto">
        <Carousel
          opts={{ align: "center", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {gemstoneChunks.map((chunk, chunkIdx) => (
              <CarouselItem
                key={chunkIdx}
                className="flex flex-row justify-center gap-6 px-2"
              >
                {chunk.map((gem, idx) => (
                  <div
                    key={gem.name}
                    className="flex-1 min-w-[220px] max-w-[310px] bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center py-7 px-4 mx-2 animate-fade-in"
                  >
                    <div className="rounded-full border-4 border-yellow-300 p-1 bg-white shadow-lg mb-3 hover:scale-105 transition-transform duration-200">
                      <img
                        src={gem.image}
                        alt={gem.name}
                        className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-luxury-black mb-2 text-center">
                      {gem.name}
                    </h3>
                    <p className="text-gray-500 text-center text-base">{gem.description}</p>
                  </div>
                ))}
                {/* If last group has <4 items, fill space with invisible cards for alignment */}
                {chunk.length < 4 &&
                  Array.from({ length: 4 - chunk.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="flex-1 mx-2"></div>
                  ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-yellow-300 text-black hover:bg-yellow-400 shadow-lg ring-2 ring-yellow-200" />
          <CarouselNext className="right-0 bg-yellow-300 text-black hover:bg-yellow-400 shadow-lg ring-2 ring-yellow-200" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default PreciousGemstone;

