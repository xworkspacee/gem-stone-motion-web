
import React, { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "New York",
    text: "The craftsmanship is absolutely extraordinary. Each piece feels like a work of art that I get to wear.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Maria Rodriguez",
    location: "Los Angeles", 
    text: "I've never received so many compliments on jewelry before. The attention to detail is incredible.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emma Thompson",
    location: "London",
    text: "Timeless elegance meets modern sophistication. These pieces have become my daily essentials.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
  }
];

const gemstoneShowcase = [
  {
    name: "Hessonite (Gomed)",
    img: "/lovable-uploads/d4842095-bac1-4e6e-9c1f-9b7a7bda986d.png",
  },
  {
    name: "White Sapphire",
    img: "/lovable-uploads/873ba493-33ff-4751-b861-c646753f28c9.png",
  },
  {
    name: "Red Coral (Pavalam)",
    img: "/lovable-uploads/8a581a1b-1a18-4783-b463-dfbc926b5ba9.png",
  },
  {
    name: "Alexandrite",
    img: "/lovable-uploads/d4c516cf-eb74-4516-9d08-3bbcfaa76de7.png",
  },
];

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-cream to-luxury-beige relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-luxury-gold/10 animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full bg-luxury-brown/10 animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-luxury-gold/5 animate-float-fast"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-luxury-black mb-6 animate-fade-in">
            Stories from Our Community
          </h2>
          {/* New: Gemstone showcase row */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {gemstoneShowcase.map((gem) => (
              <div key={gem.name} className="flex flex-col items-center w-36">
                <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center mb-2 border-2 border-luxury-gold/30">
                  <img
                    src={gem.img}
                    alt={gem.name}
                    className="object-contain w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-xs md:text-sm font-medium text-luxury-gold/90 text-center">
                  {gem.name}
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-luxury-gray max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hear what our customers say about their Gem Stone experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative animate-scale-in">
                    {/* Quote decoration */}
                    <div className="absolute top-4 left-4 text-6xl text-luxury-gold/20 font-luxury">"</div>
                    
                    <div className="text-center relative z-10">
                      {/* Avatar with motion */}
                      <div className="relative inline-block mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto shadow-lg hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -inset-2 rounded-full border-2 border-luxury-gold/30 animate-ping"></div>
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-luxury-gold animate-scale-in"
                            style={{ animationDelay: `${i * 0.1}s` }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <blockquote className="text-xl md:text-2xl text-luxury-black font-light leading-relaxed mb-6 italic">
                        {testimonial.text}
                      </blockquote>

                      {/* Name and location */}
                      <div className="text-luxury-gray">
                        <p className="font-medium text-lg">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white" />
            <CarouselNext className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

