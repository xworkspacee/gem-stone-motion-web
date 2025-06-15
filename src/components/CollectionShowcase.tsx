
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const collections = [
  {
    title: "PREMIUM GEMSTONES",
    description: "Our signature pieces designed to be worn everyday with subtle details in contemporary shapes.",
    buttonText: "SHOP CLASSICS",
    image: "/lovable-uploads/da6d5dd5-5f16-437f-b1af-6639dd3595f0.png",
    route: "/collections/rings"
  },
  {
    title: "SEMI-PRECIOUS GEMSTONES",
    description: "Timeless and wearable earrings with a modern twist that add a touch of style to any outfit.",
    buttonText: "SHOP EARRINGS",
    image: "/lovable-uploads/96d5f28d-3342-4223-bbf9-452d427ec01b.png",
    route: "/collections/earrings"
  },
  {
    title: "PRECIOUS GEMSTONES",
    description: "Handmade pieces that are carefully crafted to ensure that you'll love for a lifetime.",
    buttonText: "SHOP NOW",
    image: "/lovable-uploads/23f1d609-28f0-47fa-81fc-b39969cae178.png",
    route: "/collections/necklaces"
  }
];

const CollectionShowcase = () => {
  return (
    <section className="py-16 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link 
              key={index} 
              to={collection.route}
              className="group cursor-pointer animate-fade-in block" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;

