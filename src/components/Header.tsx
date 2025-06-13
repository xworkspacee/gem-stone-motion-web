
import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-white/95 backdrop-blur-sm border-b border-luxury-beige/30 sticky top-0 z-50">
      {/* Promotional Banner */}
      <div className="bg-luxury-black text-white text-center py-2 text-sm">
        <span className="text-gradient font-medium">#YesWeCanIndia - SS25 CAPSULE EDIT</span>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>

          {/* Logo */}
          <div className="flex-1 md:flex-none">
            <h1 className="text-2xl md:text-3xl font-luxury font-bold text-luxury-black tracking-wide">
              GEM STONE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mx-8">
            <a href="#" className="text-sm font-medium hover:text-luxury-gold transition-colors">NEW IN</a>
            <div className="relative group">
              <a href="#" className="text-sm font-medium hover:text-luxury-gold transition-colors flex items-center">
                ALL COLLECTION
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-sm font-medium hover:text-luxury-gold transition-colors flex items-center">
                SHOP BY COLOR
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hover:text-luxury-gold">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-luxury-gold">
              <Heart size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-luxury-gold">
              <ShoppingBag size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-luxury-beige/30 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium hover:text-luxury-gold transition-colors">NEW IN</a>
              <a href="#" className="text-sm font-medium hover:text-luxury-gold transition-colors">ALL COLLECTION</a>
              <a href="#" className="text-sm font-medium hover:text-luxury-gold transition-colors">SHOP BY COLOR</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
