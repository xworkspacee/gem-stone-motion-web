
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FullScreenImage from '@/components/FullScreenImage';
import ProductGrid from '@/components/ProductGrid';
import CollectionShowcase from '@/components/CollectionShowcase';
import BrandStory from '@/components/BrandStory';
import ProductCarousel from '@/components/ProductCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import GemstoneVideoGrid from '@/components/GemstoneVideoGrid';
// Removed PromotionalSection import
import Footer from '@/components/Footer';
import HeroProductCarousel from '@/components/HeroProductCarousel';
import PreciousGemstone from '@/components/PreciousGemstone';
import GemstoneShowcaseRow from '@/components/GemstoneShowcaseRow';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FullScreenImage />
      {/* Add Precious Gemstone above Birth Gemstone */}
      <PreciousGemstone />
      {/* Birth Gemstone section (renamed HeroProductCarousel) */}
      <HeroProductCarousel />
      {/* Move Gemstone Showcases row here BETWEEN Birth Gemstone and Our Products */}
      <GemstoneShowcaseRow />
      {/* Our Products Carousel */}
      <ProductCarousel />
      <BrandStory />
      <CollectionShowcase />
      <TestimonialsCarousel />
      <GemstoneVideoGrid />
      {/* PromotionalSection removed */}
      <Footer />
    </div>
  );
};

export default Index;

