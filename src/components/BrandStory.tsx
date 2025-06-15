
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const BrandStory = () => {
  const [activeSection, setActiveSection] = useState(0);

  const storyPoints = [
    {
      title: "Heritage",
      content: "Founded on principles of exceptional craftsmanship and timeless design",
      image: "/lovable-uploads/b7f01832-c5f5-4d3a-9321-cfdf20dd4c4e.png"
    },
    {
      title: "Craftsmanship", 
      content: "Each piece is meticulously handcrafted by master artisans using premium materials",
      image: "/lovable-uploads/8cf6a4eb-9895-4876-bed0-76b29aa927c2.png"
    },
    {
      title: "Innovation",
      content: "Blending traditional techniques with contemporary design for the modern woman",
      image: "/lovable-uploads/2ee13459-5a26-4cc5-89a9-de0a1171aa84.png"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-luxury-gold animate-spin-very-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-luxury-beige animate-spin-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-luxury font-bold text-luxury-black mb-6">
                Our Story Lives in
                <span className="block text-luxury-gold">Every Piece</span>
              </h2>
              <p className="text-lg text-luxury-gray leading-relaxed">
                Delivering a vision of modern elegance through clean designs, exquisite craftsmanship, 
                and unique styles that celebrate the beauty of the contemporary woman.
              </p>
            </div>

            {/* Interactive story points with images */}
            <div className="space-y-4">
              {storyPoints.map((point, index) => (
                <div
                  key={index}
                  className={`flex items-center p-6 rounded-lg cursor-pointer transition-all duration-500 animate-scale-in ${
                    activeSection === index 
                      ? 'bg-luxury-cream shadow-lg transform scale-105' 
                      : 'bg-transparent hover:bg-luxury-cream/50'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => setActiveSection(index)}
                >
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-14 h-14 rounded-lg object-cover mr-4 border-2 border-luxury-gold/50 shadow"
                  />
                  <div>
                    <h3 className="text-xl font-luxury font-bold text-luxury-black mb-1">
                      {point.title}
                    </h3>
                    <p className="text-luxury-gray">{point.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="bg-luxury-black hover:bg-luxury-brown text-white px-8 py-3 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              DISCOVER OUR HERITAGE
            </Button>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-2xl">
              <img
                src={storyPoints[activeSection].image}
                alt={storyPoints[activeSection].title}
                className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
              />
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-luxury-gold/20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-luxury-cream/30 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;

