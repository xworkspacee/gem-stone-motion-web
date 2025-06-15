import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FullScreenImage from '@/components/FullScreenImage';
import ProductGrid from '@/components/ProductGrid';
// import MotionGallery from '@/components/MotionGallery';      // <-- REMOVED
import CollectionShowcase from '@/components/CollectionShowcase';
import BrandStory from '@/components/BrandStory';
import ProductCarousel from '@/components/ProductCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import GemstoneVideoGrid from '@/components/GemstoneVideoGrid';
import PromotionalSection from '@/components/PromotionalSection';
import Footer from '@/components/Footer';
import HeroProductCarousel from '@/components/HeroProductCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FullScreenImage />
      {/* Removed <GemHeading /> and replaced with new carousel */}
      <HeroProductCarousel />
      <ProductGrid />
      {/* <MotionGallery />  <-- REMOVED! */}
      <CollectionShowcase />
      <BrandStory />
      <ProductCarousel />
      <TestimonialsCarousel />
      <GemstoneVideoGrid />
      <PromotionalSection />
      <Footer />
    </div>
  );
};
export default Index;
