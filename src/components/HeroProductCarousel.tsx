import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Ruby (Manik)",
    price: "₹ 45,000.00",
    image: "/lovable-uploads/c4afd5c3-8b2c-420c-9382-7b1a9a77cdd2.png",
  },
  {
    id: 2,
    name: "Yellow Sapphire (Pushparag)",
    price: "₹ 28,000.00",
    image: "/lovable-uploads/d0b86aec-db2f-4e0b-9c2c-3f9a7db3d7e2.png",
  },
  {
    id: 3,
    name: "Tanzanite",
    price: "₹ 32,000.00",
    image: "/lovable-uploads/c0134365-141e-44ba-93b3-e7d8caa2d406.png",
  },
  {
    id: 4,
    name: "Blue Sapphire (Neelam)",
    price: "₹ 38,000.00",
    image: "/lovable-uploads/5367151c-4388-4003-995a-aa12aa0db1a0.png",
  },
  {
    id: 5,
    name: "Emerald (Panna)",
    price: "₹ 40,000.00",
    image: "/lovable-uploads/65bf9dca-98e5-4c5f-9443-ca563ef405ba.png",
  },
  {
    id: 6,
    name: "Pearl (Moti)",
    price: "₹ 10,500.00",
    image: "/lovable-uploads/bc6e6219-e538-402f-a024-3bba7157f996.png",
  },
  {
    id: 7,
    name: "Hessonite (Gomed)",
    price: "₹ 13,500.00",
    image: "/lovable-uploads/eaafb7d1-fd58-41dc-bb01-3b88c614af4e.png",
  },
  {
    id: 8,
    name: "Cat's Eye (Lehsunia)",
    price: "₹ 18,200.00",
    image: "/lovable-uploads/978e25f2-58c2-4106-93d5-2a3c5b1c36fa.png",
  },
  {
    id: 9,
    name: "Coral (Moonga)",
    price: "₹ 13,000.00",
    image: "/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png",
  },
  {
    id: 10,
    name: "Alexandrite",
    price: "₹ 85,000.00",
    image: "/lovable-uploads/ff11579b-0a0a-4cf9-a85e-bde390762c26.png",
  },
  {
    id: 11,
    name: "White Sapphire",
    price: "₹ 22,000.00",
    image: "/lovable-uploads/49d79595-891a-4510-8305-e6f990cd4935.png",
  },
  {
    id: 12,
    name: "Red Coral (Pavalam)",
    price: "₹ 8,500.00",
    image: "/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png",
  },
  {
    id: 13,
    name: "Tourmaline",
    price: "₹ 24,500.00",
    image: "/lovable-uploads/1fc5d0d7-e87a-44c0-a603-76e2e3b39784.png",
  },
  {
    id: 14,
    name: "Amethyst",
    price: "₹ 6,900.00",
    image: "/lovable-uploads/65b169ad-f2d5-49b7-ac91-3e830903ec39.png",
  },
  {
    id: 15,
    name: "Natural Diamond",
    price: "₹ 1,25,000.00",
    image: "/lovable-uploads/5367151c-4388-4003-995a-aa12aa0db1a0.png",
  },
];

const HeroProductCarousel = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      {/* Rename section as Birth Gemstone */}
      <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-black text-center mb-8">
        Birth Gemstone
      </h2>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="relative w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-10/12 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-4 flex"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 flex flex-col items-center p-3 animate-fade-in w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                  style={{ maxWidth: 320 }}
                />
                <h3 className="font-semibold text-xl text-luxury-black mb-2 text-center">
                  {product.name}
                </h3>
                <span className="text-luxury-gold text-lg font-bold mb-2 text-center">
                  {product.price}
                </span>
                <Button
                  className="w-full bg-luxury-gold text-white hover:bg-luxury-brown mt-auto text-base py-2"
                >
                  Shop Now
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:-left-6 bg-yellow-300 text-black hover:bg-yellow-400" />
        <CarouselNext className="right-0 md:-right-6 bg-yellow-300 text-black hover:bg-yellow-400" />
      </Carousel>
    </div>
  </section>
);

export default HeroProductCarousel;
