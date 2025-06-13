
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: "THE ESSENTIALS COLLECTION",
    description: "Our signature pieces designed to be worn everyday with subtle details in contemporary shapes.",
    buttonText: "SHOP CLASSICS",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop"
  },
  {
    title: "MODERN STATEMENT",
    description: "Timeless and wearable earrings with a modern twist that add a touch of style to any outfit.",
    buttonText: "SHOP EARRINGS",
    image: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=400&h=600&fit=crop"
  },
  {
    title: "MADE-TO-ORDER JEWELERY",
    description: "Handmade pieces that are carefully crafted to ensure that you'll love for a lifetime.",
    buttonText: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=600&fit=crop"
  }
];

const CollectionShowcase = () => {
  return (
    <section className="py-16 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4]">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-luxury font-bold text-luxury-black mb-3 group-hover:text-luxury-gold transition-colors">
                  {collection.title}
                </h3>
                <p className="text-luxury-gray mb-6 leading-relaxed">
                  {collection.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="group/btn hover:text-luxury-gold p-0 h-auto font-medium text-sm tracking-wide"
                >
                  {collection.buttonText}
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;
