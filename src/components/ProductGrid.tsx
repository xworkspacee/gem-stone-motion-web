
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  colors?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Miro Signet Ring in Sterling Silver",
    price: "$168.00",
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=500&h=600&fit=crop",
    isNew: true,
    colors: ["silver", "gold"]
  },
  {
    id: 2,
    name: "Emerald Grande Ring in Sterling Silver", 
    price: "$115.00",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=600&fit=crop",
    colors: ["silver", "gold"]
  },
  {
    id: 3,
    name: "Sonder Ring in Gold",
    price: "$198.00",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=600&fit=crop",
    colors: ["gold", "silver"]
  },
  {
    id: 4,
    name: "Ophidian Signet Ring in Gold",
    price: "$225.00",
    image: "https://images.unsplash.com/photo-1622866389730-f5c3e2c8af75?w=500&h=600&fit=crop",
    colors: ["gold"]
  },
  {
    id: 5,
    name: "Ilona Earrings in Gold",
    price: "$168.00",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop",
    colors: ["gold", "silver"]
  },
  {
    id: 6,
    name: "Adelaide Hoops in Sterling Silver",
    price: "$115.00",
    image: "https://images.unsplash.com/photo-1633810543702-7b8d29b3d1ce?w=500&h=600&fit=crop",
    isNew: true,
    colors: ["silver", "gold"]
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-black mb-4">
            EXCEPTIONAL PIECES
          </h2>
          <p className="text-luxury-gray max-w-md mx-auto">
            Soon-to-be staples in your rotation
          </p>
          <div className="flex justify-center items-center mt-6 space-x-8">
            <button className="text-sm font-medium text-luxury-black border-b-2 border-luxury-gold pb-1">
              RINGS
            </button>
            <button className="text-sm font-medium text-luxury-gray hover:text-luxury-black transition-colors">
              EARRINGS
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer animate-scale-in">
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
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart size={16} />
                  </Button>
                  <Button size="sm" className="bg-luxury-black hover:bg-luxury-brown">
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
                          color === 'gold' ? 'bg-luxury-gold' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Button variant="outline" size="sm" className="w-10 h-10 rounded-full">
            ←
          </Button>
          <Button variant="outline" size="sm" className="w-10 h-10 rounded-full">
            →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
