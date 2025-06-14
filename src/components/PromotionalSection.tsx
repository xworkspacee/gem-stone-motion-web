
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    name: "Ilona Earrings in Gold",
    price: "$168.00",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop",
    colors: ["silver", "gold"],
    category: "earrings"
  },
  {
    id: 2,
    name: "Adelaide Hoops in Sterling Silver", 
    price: "$115.00",
    image: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=400&h=500&fit=crop",
    colors: ["silver", "gold"],
    category: "earrings"
  },
  {
    id: 3,
    name: "Classic Square Earrings",
    price: "$145.00",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=500&fit=crop",
    colors: ["silver"],
    badge: "BEST SELLER",
    category: "earrings"
  },
  {
    id: 4,
    name: "Golden Chain Necklace",
    price: "$210.00", 
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop",
    colors: ["gold"],
    category: "necklaces"
  }
];

const PromotionalSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 rounded-lg mb-4">
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded z-10">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <Link 
                  to={`/product/${product.id}`}
                  className="block hover:text-luxury-gold transition-colors"
                >
                  <h3 className="font-medium text-luxury-black text-sm">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-luxury-black font-medium text-sm">
                  {product.price}
                </p>
                
                {/* Color Options */}
                <div className="flex gap-2 mt-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-4 h-4 rounded-full border-2 border-gray-300 ${
                        color === 'gold' 
                          ? 'bg-yellow-400' 
                          : 'bg-gray-300'
                      }`}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hero Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="aspect-[16/9] lg:aspect-[21/9] relative">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop"
              alt="The Essentials Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-2xl px-4">
                <h2 className="text-3xl md:text-5xl font-luxury font-bold mb-4">
                  THE ESSENTIALS COLLECTION
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Recycled gold, AAA-grade gemstones, and ethically sourced diamonds
                </p>
                <Button 
                  asChild
                  className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-sm font-medium tracking-wide"
                >
                  <Link to="/collections/rings">
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
