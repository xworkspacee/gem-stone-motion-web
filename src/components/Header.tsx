import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { cartCount } = useCart();

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

  const colorCategories = [
    {
      title: "WARM COLORS",
      items: ["RED COLLECTION", "ORANGE COLLECTION", "YELLOW COLLECTION", "PINK COLLECTION", "GOLD COLLECTION", "ROSE GOLD", "COPPER COLLECTION"]
    },
    {
      title: "COOL COLORS", 
      items: ["BLUE COLLECTION", "GREEN COLLECTION", "PURPLE COLLECTION", "SILVER COLLECTION", "WHITE COLLECTION", "BLACK COLLECTION", "GREY COLLECTION"]
    }
  ];

  const newInCategories = [
    {
      title: "LATEST ARRIVALS",
      items: ["SPRING COLLECTION", "SUMMER TRENDS", "FESTIVE SPECIAL", "BRIDAL COLLECTION", "CASUAL WEAR", "OFFICE WEAR", "EVENING WEAR"]
    },
    {
      title: "TRENDING NOW", 
      items: ["BESTSELLERS", "CELEBRITY CHOICE", "EDITOR'S PICK", "FLASH SALE", "LIMITED EDITION", "EXCLUSIVE DESIGNS", "PRE-ORDER"]
    }
  ];

  const handleItemClick = (item: string) => {
    // Navigate to product page - you can customize this logic
    const productId = Math.floor(Math.random() * 10) + 1;
    navigate(`/product/${productId}`);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

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
            <h1 className="text-2xl md:text-3xl font-luxury font-bold text-luxury-black tracking-wide cursor-pointer" onClick={() => navigate('/')}>
              GEM STONE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mx-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium hover:text-luxury-gold transition-colors bg-transparent">
                    NEW IN
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[500px] p-6 bg-white shadow-xl border border-luxury-beige/20">
                    <div className="grid grid-cols-2 gap-8">
                      {newInCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className="font-semibold text-luxury-black text-sm tracking-wide">
                            {category.title}
                          </h3>
                          <ul className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <button 
                                  onClick={() => handleItemClick(item)}
                                  className="text-sm text-gray-600 hover:text-luxury-gold transition-colors block py-1 text-left w-full"
                                >
                                  {item}
                                </button>
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
                                <button 
                                  onClick={() => handleItemClick(item)}
                                  className="text-sm text-gray-600 hover:text-luxury-gold transition-colors block py-1 text-left w-full"
                                >
                                  {item}
                                </button>
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

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium hover:text-luxury-gold transition-colors bg-transparent">
                    SHOP BY COLOR
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[500px] p-6 bg-white shadow-xl border border-luxury-beige/20">
                    <div className="grid grid-cols-2 gap-8">
                      {colorCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className="font-semibold text-luxury-black text-sm tracking-wide">
                            {category.title}
                          </h3>
                          <ul className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <button 
                                  onClick={() => handleItemClick(item)}
                                  className="text-sm text-gray-600 hover:text-luxury-gold transition-colors block py-1 text-left w-full"
                                >
                                  {item}
                                </button>
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
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hover:text-luxury-gold">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-luxury-gold">
              <Heart size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-luxury-gold relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-luxury-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            
            {/* User Authentication */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hover:text-luxury-gold">
                    <User size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:text-luxury-gold"
                onClick={() => navigate('/auth')}
              >
                <User size={20} />
                <span className="ml-1 hidden sm:inline">Sign In</span>
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-luxury-beige/30 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleItemClick("NEW IN")} className="text-sm font-medium hover:text-luxury-gold transition-colors text-left">NEW IN</button>
              <button onClick={() => handleItemClick("ALL COLLECTION")} className="text-sm font-medium hover:text-luxury-gold transition-colors text-left">ALL COLLECTION</button>
              <button onClick={() => handleItemClick("SHOP BY COLOR")} className="text-sm font-medium hover:text-luxury-gold transition-colors text-left">SHOP BY COLOR</button>
              {!user && (
                <button onClick={() => navigate('/auth')} className="text-sm font-medium hover:text-luxury-gold transition-colors text-left">SIGN IN</button>
              )}
              {user && (
                <button onClick={handleSignOut} className="text-sm font-medium hover:text-luxury-gold transition-colors text-left">SIGN OUT</button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
