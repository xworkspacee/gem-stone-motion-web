
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoHero from '@/components/VideoHero';
import ProductGrid from '@/components/ProductGrid';
import MotionGallery from '@/components/MotionGallery';
import CollectionShowcase from '@/components/CollectionShowcase';
import BrandStory from '@/components/BrandStory';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import PromotionalSection from '@/components/PromotionalSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <VideoHero />
      <ProductGrid />
      <MotionGallery />
      <CollectionShowcase />
      <BrandStory />
      <TestimonialsCarousel />
      <PromotionalSection />
      <Footer />
    </div>
  );
};

export default Index;
