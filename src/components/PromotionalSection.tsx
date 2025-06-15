import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    name: "Hessonite (Gomed)",
    price: "₹ 15,000.00",
    images: [
      "/lovable-uploads/eaafb7d1-fd58-41dc-bb01-3b88c614af4e.png", // new
      "/lovable-uploads/eaafb7d1-fd58-41dc-bb01-3b88c614af4e.png", // use same for all images for now
      "/lovable-uploads/eaafb7d1-fd58-41dc-bb01-3b88c614af4e.png"
    ],
    colors: ["orange", "brown"],
    category: "precious"
  },
  {
    id: 2,
    name: "White Sapphire", 
    price: "₹ 22,000.00",
    images: [
      "/lovable-uploads/49d79595-891a-4510-8305-e6f990cd4935.png", // new
      "/lovable-uploads/49d79595-891a-4510-8305-e6f990cd4935.png",
      "/lovable-uploads/49d79595-891a-4510-8305-e6f990cd4935.png"
    ],
    colors: ["white", "clear"],
    category: "precious"
  },
  {
    id: 3,
    name: "Red Coral (Pavalam)",
    price: "₹ 8,500.00",
    images: [
      "/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png", // new
      "/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png",
      "/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png"
    ],
    colors: ["red"],
    badge: "BEST SELLER",
    category: "organic"
  },
  {
    id: 4,
    name: "Alexandrite",
    price: "₹ 85,000.00", 
    images: [
      "/lovable-uploads/ff11579b-0a0a-4cf9-a85e-bde390762c26.png", // new
      "/lovable-uploads/ff11579b-0a0a-4cf9-a85e-bde390762c26.png",
      "/lovable-uploads/ff11579b-0a0a-4cf9-a85e-bde390762c26.png"
    ],
    colors: ["purple"],
    category: "rare"
  }
];

const PromotionalSection = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
          {/* Custom rendering based on screenshot */}
          {/* Hessonite */}
          <div
            className="group relative cursor-pointer"
            onClick={() => handleProductClick(1)}
          >
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 rounded-lg mb-3 md:mb-4">
              <img
                src="/lovable-uploads/eaafb7d1-fd58-41dc-bb01-3b88c614af4e.png"
                alt="Hessonite (Gomed)"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 md:space-y-2">
              <h3 className="font-medium text-xs md:text-sm group-hover:text-luxury-gold transition-colors line-clamp-2" style={{ color: "#D4AF37" }}>
                Hessonite (Gomed)
              </h3>
              <p className="text-luxury-black font-medium text-xs md:text-sm">
                ₹ 15,000.00
              </p>
              {/* Orange and brown color dots */}
              <div className="flex gap-1 md:gap-2 mt-2 md:mt-3">
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-300" style={{ background: "#EB9907" }} title="Orange"></span>
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-300" style={{ background: "#C07F4B" }} title="Brown"></span>
              </div>
            </div>
          </div>
          {/* White Sapphire */}
          <div
            className="group relative cursor-pointer"
            onClick={() => handleProductClick(2)}
          >
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 rounded-lg mb-3 md:mb-4">
              <img
                src="/lovable-uploads/49d79595-891a-4510-8305-e6f990cd4935.png"
                alt="White Sapphire"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 md:space-y-2">
              <h3 className="font-medium text-xs md:text-sm group-hover:text-luxury-gold transition-colors line-clamp-2 text-luxury-black">
                White Sapphire
              </h3>
              <p className="text-luxury-black font-medium text-xs md:text-sm">
                ₹ 22,000.00
              </p>
              {/* Light blue color dots */}
              <div className="flex gap-1 md:gap-2 mt-2 md:mt-3">
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-300" style={{ background: "#D1F0F9" }} title="Light Blue"></span>
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-300" style={{ background: "#E3EDEE" }} title="Pale Blue"></span>
              </div>
            </div>
          </div>
          {/* Red Coral (But this is a purple amethyst in your screenshot) */}
          <div
            className="group relative cursor-pointer"
            onClick={() => handleProductClick(3)}
          >
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 rounded-lg mb-3 md:mb-4">
              <img
                src="/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png"
                alt="Red Coral (Pavalam)"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 md:space-y-2">
              <h3 className="font-medium text-xs md:text-sm group-hover:text-luxury-gold transition-colors line-clamp-2 text-luxury-black">
                Red Coral (Pavalam)
              </h3>
              <p className="text-luxury-black font-medium text-xs md:text-sm">
                ₹ 8,500.00
              </p>
              {/* Purple color dot (matches screenshot, even though actual coral is red) */}
              <div className="flex gap-1 md:gap-2 mt-2 md:mt-3">
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-300" style={{ background: "#822DBE" }} title="Purple"></span>
              </div>
            </div>
          </div>
          {/* Alexandrite */}
          <div
            className="group relative cursor-pointer"
            onClick={() => handleProductClick(4)}
          >
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 rounded-lg mb-3 md:mb-4">
              <img
                src="/lovable-uploads/ff11579b-0a0a-4cf9-a85e-bde390762c26.png"
                alt="Alexandrite"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 md:space-y-2">
              <h3 className="font-medium text-xs md:text-sm group-hover:text-luxury-gold transition-colors line-clamp-2 text-luxury-black">
                Alexandrite
              </h3>
              <p className="text-luxury-black font-medium text-xs md:text-sm">
                ₹ 85,000.00
              </p>
              {/* Magenta color dot */}
              <div className="flex gap-1 md:gap-2 mt-2 md:mt-3">
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-300" style={{ background: "#D14B9C" }} title="Magenta"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Section - replaced image for "semi-precious gemstones" */}
        <div className="relative rounded-lg md:rounded-2xl overflow-hidden mb-8 md:mb-12">
          <img
            src="/lovable-uploads/42e4060c-0892-4535-a03b-283cc37d067d.png"
            alt="Featured Gold Earrings"
            className="w-full object-cover"
            style={{ maxHeight: 500, width: '100%' }}
          />
        </div>
        {/* "Semi-Precious Gemstones" Heading and Call to Action */}
        <div className="relative rounded-lg md:rounded-2xl overflow-hidden">
          <div className="aspect-[16/12] md:aspect-[16/9] lg:aspect-[21/9] relative hidden">
            {/* Old background image and overlay (now hidden/deleted) */}
          </div>
          <div className="flex items-center justify-center text-center text-white p-4">
            <div className="max-w-2xl w-full">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-luxury font-bold mb-3 md:mb-4 text-black">
                SEMI-PRECIOUS GEMSTONES
              </h2>
              <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 text-black">
                Agate, Amethyst, Aquamarine, Carnelian, Blue Topaz, and more beautiful stones
              </p>
              <Button 
                asChild
                className="bg-white text-black hover:bg-gray-100 px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm font-medium tracking-wide border border-black"
              >
                <Link to="/collections/semi-precious">
                  EXPLORE COLLECTION
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
