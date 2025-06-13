
import React from 'react';
import { Button } from '@/components/ui/button';

const promotions = [
  {
    title: "Sale!",
    subtitle: "LOVE INSPIRES",
    buttonText: "MORE INFO",
    color: "text-red-600",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"
  },
  {
    title: "Pendant!",
    subtitle: "CLASSIC HITS", 
    buttonText: "MORE INFO",
    color: "text-luxury-black",
    image: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=400&h=300&fit=crop"
  },
  {
    title: "Discover!",
    subtitle: "NEW ARRIVAL",
    buttonText: "MORE INFO", 
    color: "text-luxury-black",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=300&fit=crop"
  }
];

const PromotionalSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Background Image */}
              <div className="aspect-[4/3] relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-white/80 group-hover:bg-white/70 transition-colors duration-300"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h3 className={`text-4xl font-luxury font-bold mb-2 ${promo.color}`}>
                  {promo.title}
                </h3>
                <p className="text-sm font-medium text-luxury-black mb-6 tracking-widest">
                  {promo.subtitle}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-luxury-black hover:text-luxury-gold border-b border-luxury-black hover:border-luxury-gold transition-colors font-medium text-sm tracking-wide"
                >
                  {promo.buttonText}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center luxury-gradient rounded-2xl py-16 px-8">
          <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-black mb-4">
            Discover The Collection
          </h2>
          <p className="text-luxury-gray max-w-2xl mx-auto mb-8 leading-relaxed">
            Proin ullamcorper pretium orci donec nec scelerisque leo nam massa dolor 
            imperdiet nec consequata congue idsem.
          </p>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
