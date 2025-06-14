
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import MotionGallery from '@/components/MotionGallery';
import CollectionShowcase from '@/components/CollectionShowcase';
import BrandStory from '@/components/BrandStory';
import FullScreenImage from '@/components/FullScreenImage';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import PromotionalSection from '@/components/PromotionalSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid />
      <MotionGallery />
      <CollectionShowcase />
      <BrandStory />
      <FullScreenImage />
      <TestimonialsCarousel />
      <PromotionalSection />
      <Footer />
    </div>
  );
};

export default Index;
