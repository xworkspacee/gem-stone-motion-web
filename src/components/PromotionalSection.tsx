
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PromotionalGemCarousel from './PromotionalGemCarousel';

const PromotionalSection = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Interactive Carousel for Featured Gems */}
        <PromotionalGemCarousel />

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
