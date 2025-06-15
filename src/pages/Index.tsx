
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
import PromotionalSection from '@/components/PromotionalSection';
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
      {/* Add Gemstone Showcases row here above Our Products */}
      <GemstoneShowcaseRow />
      {/* Add Precious Gemstone above Birth Gemstone */}
      <PreciousGemstone />
      {/* Birth Gemstone section (renamed HeroProductCarousel) */}
      <HeroProductCarousel />
      {/* Our Products Carousel */}
      <ProductCarousel />
      <BrandStory />
      <CollectionShowcase />
      <TestimonialsCarousel />
      <GemstoneVideoGrid />
      <PromotionalSection />
      <Footer />
    </div>
  );
};
export default Index;
