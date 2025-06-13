
import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const collectionCategories = [
    {
      title: "ALL DRESSES",
      items: ["PARTY DRESS", "MAXI DRESS", "SHORT & SASSY", "BODYCON DRESS", "SLIT DRESS", "BLACK DRESS", "SHIRT DRESS", "CO-ORDS"]
    },
    {
      title: "PARTY WEAR", 
      items: ["PARTY CO-ORDS", "BLACK PARTY DRESS", "SHORT & SASSY", "LONG DRESS", "OFF SHOULDER", "ONE SHOULDER", "BODYCON DRESS", "SLIT DRESS"]
    }
  ];

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
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium hover:text-luxury-gold transition-colors bg-transparent">
                    ALL COLLECTION
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[500px] p-6 bg-white shadow-xl border border-luxury-beige/20">
                    <div className="grid grid-cols-2 gap-8">
                      {collectionCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className="font-semibold text-luxury-black text-sm tracking-wide">
                            {category.title}
                          </h3>
                          <ul className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a 
                                  href="#" 
                                  className="text-sm text-gray-600 hover:text-luxury-gold transition-colors block py-1"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="relative group">
              <a href="#" className="text-sm font-medium hover:text-luxury-gold transition-colors flex items-center">
                SHOP BY COLOR
                <ChevronDown className="ml-1 w-3 h-3" />
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
