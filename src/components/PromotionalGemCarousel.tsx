
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    name: "Hessonite (Gomed)",
    price: "₹ 15,000.00",
    image: "/lovable-uploads/eaafb7d1-fd58-41dc-bb01-3b88c614af4e.png",
    colors: ["#EB9907", "#C07F4B"],
    shopUrl: "/product/1",
  },
  {
    id: 2,
    name: "White Sapphire",
    price: "₹ 22,000.00",
    image: "/lovable-uploads/49d79595-891a-4510-8305-e6f990cd4935.png",
    colors: ["#D1F0F9", "#E3EDEE"],
    shopUrl: "/product/2",
  },
  {
    id: 3,
    name: "Red Coral (Pavalam)",
    price: "₹ 8,500.00",
    image: "/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png",
    colors: ["#822DBE"],
    shopUrl: "/product/3",
  },
  {
    id: 4,
    name: "Alexandrite",
    price: "₹ 85,000.00",
    image: "/lovable-uploads/ff11579b-0a0a-4cf9-a85e-bde390762c26.png",
    colors: ["#D14B9C"],
    shopUrl: "/product/4",
  },
];

const PromotionalGemCarousel = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-5xl mx-auto mb-8 md:mb-16">
      <Carousel opts={{ align: "center", loop: true }}>
        <CarouselContent>
          {featuredProducts.map((p) => (
            <CarouselItem
              key={p.id}
              className="basis-3/4 md:basis-1/2 lg:basis-1/3 px-2"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in group flex flex-col items-center py-4 px-2 md:px-4 cursor-pointer">
                <div
                  className="relative overflow-hidden aspect-[4/5] bg-gray-100 rounded-lg mb-3 md:mb-4 w-full"
                  style={{ maxWidth: 240 }}
                  onClick={() => navigate(p.shopUrl)}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center w-full px-2">
                  <h3 className="font-medium text-md md:text-lg text-luxury-black group-hover:text-luxury-gold mb-1 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-luxury-black font-semibold text-sm md:text-base">
                    {p.price}
                  </p>
                  <div className="flex gap-2 justify-center mt-2 mb-3">
                    {p.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ background: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <Button
                    className="w-full bg-luxury-gold text-white hover:bg-luxury-brown font-semibold mt-2"
                    size="sm"
                    onClick={() => navigate(p.shopUrl)}
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:-left-7" />
        <CarouselNext className="right-0 md:-right-7" />
      </Carousel>
    </div>
  );
};

export default PromotionalGemCarousel;
