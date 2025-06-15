import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  colors?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Blue Sapphire (Neelam)",
    price: "₹ 25,000.00",
    images: [
      "/lovable-uploads/c0134365-141e-44ba-93b3-e7d8caa2d406.png"
    ],
    isNew: true,
    colors: ["blue", "sapphire"]
  },
  {
    id: 2,
    name: "ALEXANDRITE CAT'S EYE",
    price: "₹ 1,599.00",
    images: [
      "/lovable-uploads/978e25f2-58c2-4106-93d5-2a3c5b1c36fa.png",
      "/lovable-uploads/fa8d197b-fba0-4d4c-934b-1659bcf9c0dc.png"
    ],
    colors: ["green", "purple", "alexandrite"]
  },
  {
    id: 3,
    name: "Ruby (Manik)",
    price: "₹ 45,000.00",
    images: [
      "/lovable-uploads/c4afd5c3-8b2c-420c-9382-7b1a9a77cdd2.png"
    ],
    colors: ["red", "ruby"]
  },
  {
    id: 4,
    name: "Yellow Sapphire (Pushparag)",
    price: "₹ 28,000.00",
    images: [
      "/lovable-uploads/d0b86aec-db2f-4e0b-9c2c-3f9a7db3d7e2.png"
    ],
    colors: ["yellow", "gold"]
  },
  {
    id: 5,
    name: "Tanzanite",
    price: "₹ 32,000.00",
    images: [
      "/lovable-uploads/87fb0b6d-47da-4930-98e3-595e02bd1160.png"
    ],
    colors: ["blue"]
  },
  {
    id: 6,
    name: "Pearl (Muthu)",
    price: "₹ 12,000.00",
    images: [
      "/lovable-uploads/bc6e6219-e538-402f-a024-3bba7157f996.png"
    ],
    isNew: true,
    colors: ["white", "cream"]
  }
];

const ProductGrid = () => {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-black mb-4">
            PRECIOUS GEMSTONES
          </h2>
          <p className="text-luxury-gray max-w-md mx-auto">
            Authentic gemstones for your spiritual and astrological needs
          </p>
          <div className="flex justify-center items-center mt-6 space-x-8">
            <button className="text-sm font-medium text-luxury-black border-b-2 border-luxury-gold pb-1">
              PRECIOUS STONES
            </button>
            <button className="text-sm font-medium text-luxury-gray hover:text-luxury-black transition-colors">
              SEMI-PRECIOUS
            </button>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer animate-scale-in" onClick={() => handleProductClick(product)}>
                    <div className="relative overflow-hidden bg-luxury-cream rounded-lg mb-4 aspect-square">
                      {/* Badges */}
                      {product.isNew && (
                        <div className="absolute top-3 left-3 bg-luxury-gold text-white text-xs font-medium px-2 py-1 rounded z-10">
                          NEW
                        </div>
                      )}
                      {product.isBestSeller && (
                        <div className="absolute top-3 left-3 bg-luxury-black text-white text-xs font-medium px-2 py-1 rounded z-10">
                          BEST SELLER
                        </div>
                      )}

                      {/* Product Image */}
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          className="bg-white/90 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log('Added to wishlist:', product.name);
                          }}
                        >
                          <Heart size={16} />
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-luxury-black hover:bg-luxury-brown"
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log('Added to cart:', product.name);
                          }}
                        >
                          <ShoppingBag size={16} />
                        </Button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="text-center">
                      <h3 className="font-medium text-luxury-black mb-2 group-hover:text-luxury-gold transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-luxury-black font-medium">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-luxury-gray line-through text-sm">{product.originalPrice}</span>
                        )}
                      </div>

                      {/* Color Options */}
                      {product.colors && (
                        <div className="flex justify-center space-x-2">
                          {product.colors.map((color) => (
                            <div
                              key={color}
                              className={`w-4 h-4 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform ${
                                color === 'gold' || color === 'yellow' ? 'bg-luxury-gold' : 
                                color === 'blue' ? 'bg-blue-500' :
                                color === 'green' || color === 'emerald' ? 'bg-green-500' :
                                color === 'red' || color === 'ruby' ? 'bg-red-500' :
                                color === 'white' || color === 'cream' ? 'bg-white' :
                                'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
