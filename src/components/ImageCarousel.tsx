
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface ImageCarouselItem {
  img: string;
  alt?: string;
  shopLink: string;
  buttonText?: string;
}

interface ImageCarouselProps {
  items: ImageCarouselItem[];
  withCTA?: boolean;
  className?: string;
  imgHeight?: string; // e.g. "h-56"
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  items,
  withCTA = false,
  className = "",
  imgHeight = "h-56",
}) => (
  <Carousel
    opts={{ align: "center", loop: true }}
    className={`relative w-full ${className}`}
  >
    <CarouselContent>
      {items.map((item, idx) => (
        <CarouselItem
          key={idx}
          className="px-2 flex flex-col items-center group"
        >
          <div
            className={`overflow-hidden rounded-xl shadow-lg w-full md:w-64 ${imgHeight} bg-gray-100 flex items-center justify-center`}
            style={{ minWidth: 220, maxWidth: 280 }}
          >
            <img
              src={item.img}
              alt={item.alt || `Gemstone ${idx + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {withCTA && (
            <Button
              asChild
              className="mt-4 bg-luxury-gold text-white hover:bg-luxury-brown px-4 py-2 font-medium transition"
              size="sm"
            >
              <a href={item.shopLink}>{item.buttonText || "Shop Now"}</a>
            </Button>
          )}
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-0 md:-left-6" />
    <CarouselNext className="right-0 md:-right-6" />
  </Carousel>
);

export default ImageCarousel;
