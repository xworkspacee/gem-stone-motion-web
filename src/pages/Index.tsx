
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CollectionShowcase from '@/components/CollectionShowcase';
import PromotionalSection from '@/components/PromotionalSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid />
      <CollectionShowcase />
      <PromotionalSection />
      <Footer />
    </div>
  );
};

export default Index;
