
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    name: "Hessonite (Gomed)",
    price: "₹ 15,000.00",
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=500&fit=crop"
    ],
    colors: ["orange", "brown"],
    category: "precious"
  },
  {
    id: 2,
    name: "White Sapphire", 
    price: "₹ 22,000.00",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=500&fit=crop"
    ],
    colors: ["white", "clear"],
    category: "precious"
  },
  {
    id: 3,
    name: "Red Coral (Pavalam)",
    price: "₹ 8,500.00",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop"
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
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=500&fit=crop"
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
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 rounded-lg mb-3 md:mb-4">
                {product.badge && (
                  <span className="absolute top-2 md:top-3 left-2 md:left-3 bg-black text-white text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded z-10">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-1 md:space-y-2">
                <h3 className="font-medium text-luxury-black text-xs md:text-sm group-hover:text-luxury-gold transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-luxury-black font-medium text-xs md:text-sm">
                  {product.price}
                </p>
                
                {/* Color Options */}
                <div className="flex gap-1 md:gap-2 mt-2 md:mt-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-300 ${
                        color === 'orange' ? 'bg-orange-400' :
                        color === 'brown' ? 'bg-amber-600' :
                        color === 'white' || color === 'clear' ? 'bg-white' :
                        color === 'red' ? 'bg-red-500' :
                        color === 'purple' ? 'bg-purple-500' :
                        'bg-gray-300'
                      }`}
                      title={color}
                      onClick={(e) => e.stopPropagation()}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hero Section */}
        <div className="relative rounded-lg md:rounded-2xl overflow-hidden">
          <div className="aspect-[16/12] md:aspect-[16/9] lg:aspect-[21/9] relative">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop"
              alt="The Gemstone Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-luxury font-bold mb-3 md:mb-4">
                  SEMI-PRECIOUS GEMSTONES
                </h2>
                <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90">
                  Agate, Amethyst, Aquamarine, Carnelian, Blue Topaz, and more beautiful stones
                </p>
                <Button 
                  asChild
                  className="bg-white text-black hover:bg-gray-100 px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm font-medium tracking-wide"
                >
                  <Link to="/collections/semi-precious">
                    EXPLORE COLLECTION
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
