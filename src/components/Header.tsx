import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, User, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
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

  // Check if current user is admin - updated to match your email
  const isAdmin = user?.email === 'vanshichoudhary40@gmail.com';

  const collectionCategories = [
    {
      title: "PRECIOUS GEMSTONES",
      items: [
        {
          name: "BLUE SAPPHIRE (NEELAM)",
          route: "/collections/blue-sapphire",
          // From your uploaded blue gem image
          image: "/lovable-uploads/85ba3cfe-0163-46c4-a711-1bd9d1821414.png"
        },
        {
          name: "CATS EYE (VAIDURYAM)",
          route: "/collections/cats-eye",
          image: "https://gemstonedictionarynp.com/wp-content/uploads/2021/01/cats-eye-800x800-1.jpg"
        },
        {
          name: "EMERALD (MARAGADHAM)",
          route: "/collections/emerald",
          image: "/lovable-uploads/a1e75b6a-5fce-4c2d-b162-35756ef29598.png"
        },
        {
          name: "RUBY (MANIK)",
          route: "/collections/ruby",
          image: "/lovable-uploads/8f2f1506-de28-4f4d-a711-1bd9d1821414.png"
        },
        {
          name: "YELLOW SAPPHIRE (PUSHPARAG)",
          route: "/collections/yellow-sapphire",
          image: "/lovable-uploads/6d9e3e01-303f-4a24-9f5b-84756a3b1371.png"
        },
        {
          name: "PEARL (MUTHU)",
          route: "/collections/pearl",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop"
        },
        {
          name: "RED CORAL (PAVALAM)",
          route: "/collections/red-coral",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600"
        },
        {
          name: "HESSONITE (GOMED)",
          route: "/collections/hessonite",
          image: "/lovable-uploads/ede2277d-e387-4e3a-aec5-b2fce2270211.png"
        }
      ]
    },
    {
      title: "PREMIUM GEMSTONES", 
      items: [
        {
          name: "ALEXANDRITE",
          route: "/collections/alexandrite",
          image: "https://www.gia.edu/images/alexandrite-gallery-1.jpg"
        },
        {
          name: "BURMESE RUBY",
          route: "/collections/burmese-ruby",
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop"
        },
        {
          name: "PADPARADSCHA SAPPHIRE",
          route: "/collections/padparadscha",
          image: "https://www.gia.edu/images/padparadscha-970x600.jpg"
        },
        {
          name: "TANZANITE",
          route: "/collections/tanzanite",
          image: "/lovable-uploads/e7b771fd-5cfc-4623-822b-c7dfd20b82ae.png"
        },
        {
          name: "GREEN SAPPHIRE",
          route: "/collections/green-sapphire",
          image: "/lovable-uploads/a1e75b6a-5fce-4c2d-b162-35756ef29598.png"
        },
        {
          name: "STAR RUBY",
          route: "/collections/star-ruby",
          image: "https://starruby.in/image/cache/catalog/Ruby/red-star-ruby-gemstone-1.10-carat-1-800x800.jpg"
        },
        {
          name: "NAVRATNA",
          route: "/collections/navratna",
          image: "https://assets.gemselect.com/product/navaratna-gemstone/navaratna-gemstone.jpg"
        },
        {
          name: "KESHI PEARL",
          route: "/collections/keshi-pearl",
          image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400"
        }
      ]
    }
  ];

  const colorCategories = [
    {
      title: "BLUE GEMSTONES",
      items: [
        { name: "BLUE SAPPHIRE", route: "/collections/blue-sapphire", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&fit=crop" },
        { name: "AQUAMARINE", route: "/collections/aquamarine", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&h=400&fit=crop" },
        { name: "BLUE TOPAZ", route: "/collections/blue-topaz", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&fit=crop" },
        { name: "TANZANITE", route: "/collections/tanzanite", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&fit=crop" },
        { name: "SAPPHIRE", route: "/collections/sapphire", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&fit=crop" }
      ]
    },
    {
      title: "RED & PINK GEMSTONES", 
      items: [
        { name: "RUBY", route: "/collections/ruby", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop" },
        { name: "PINK SAPPHIRE", route: "/collections/pink-sapphire", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop" },
        { name: "RED CORAL", route: "/collections/red-coral", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop" },
        { name: "CARNELIAN", route: "/collections/carnelian", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop" },
        { name: "BLOODSTONE", route: "/collections/bloodstone", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop" }
      ]
    },
    {
      title: "GREEN GEMSTONES",
      items: [
        { name: "EMERALD", route: "/collections/emerald", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop" },
        { name: "GREEN SAPPHIRE", route: "/collections/green-sapphire", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop" },
        { name: "AVENTURINE", route: "/collections/aventurine", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop" }
      ]
    },
    {
      title: "YELLOW & WHITE GEMSTONES",
      items: [
        { name: "YELLOW SAPPHIRE", route: "/collections/yellow-sapphire", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop" },
        { name: "CITRINE", route: "/collections/citrine", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop" },
        { name: "WHITE SAPPHIRE", route: "/collections/white-sapphire", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop" },
        { name: "PEARL", route: "/collections/pearl", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop" },
        { name: "WHITE CORAL", route: "/collections/white-coral", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop" }
      ]
    }
  ];

  const newInCategories = [
    {
      title: "LATEST ARRIVALS",
      items: [
        { name: "BURMESE RUBY", route: "/collections/burmese-ruby", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop" },
        { name: "PADPARADSCHA SAPPHIRE", route: "/collections/padparadscha", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop" },
        { name: "ALEXANDRITE CATS EYE", route: "/collections/alexandrite-cats-eye", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&h=400&fit=crop" },
        { name: "STAR SAPPHIRE", route: "/collections/star-sapphire", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&fit=crop" },
        { name: "PITAMBARI NEELAM", route: "/collections/pitambari-neelam", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop" },
        { name: "KESHI PEARL", route: "/collections/keshi-pearl", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop" }
      ]
    },
    {
      title: "TRENDING GEMSTONES", 
      items: [
        { name: "TANZANITE", route: "/collections/tanzanite", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&fit=crop" },
        { name: "AMETHYST", route: "/collections/amethyst", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&h=400&fit=crop" },
        { name: "AMBER", route: "/collections/amber", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop" },
        { name: "BLACK TOURMALINE", route: "/collections/black-tourmaline", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=400&fit=crop" },
        { name: "AZURITE", route: "/collections/azurite", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&fit=crop" },
        { name: "CHALCEDONY", route: "/collections/chalcedony", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop" },
        { name: "AGATE", route: "/collections/agate", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&h=400&fit=crop" }
      ]
    }
  ];

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
                  <NavigationMenuContent className="min-w-[600px] p-6 bg-white shadow-xl border border-luxury-beige/20">
                    <div className="grid grid-cols-2 gap-8">
                      {newInCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className="font-semibold text-luxury-black text-sm tracking-wide">
                            {category.title}
                          </h3>
                          <ul className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link 
                                  to={item.route}
                                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-luxury-gold transition-colors block py-1"
                                >
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-8 h-8 rounded-md object-cover"
                                  />
                                  {item.name}
                                </Link>
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
                  <NavigationMenuContent className="min-w-[600px] p-6 bg-white shadow-xl border border-luxury-beige/20">
                    <div className="grid grid-cols-2 gap-8">
                      {collectionCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className="font-semibold text-luxury-black text-sm tracking-wide">
                            {category.title}
                          </h3>
                          <ul className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link 
                                  to={item.route}
                                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-luxury-gold transition-colors block py-1"
                                >
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-8 h-8 rounded-md object-cover"
                                  />
                                  {item.name}
                                </Link>
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
                  <NavigationMenuContent className="min-w-[700px] p-6 bg-white shadow-xl border border-luxury-beige/20">
                    <div className="grid grid-cols-2 gap-8">
                      {colorCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className="font-semibold text-luxury-black text-sm tracking-wide">
                            {category.title}
                          </h3>
                          <ul className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link 
                                  to={item.route}
                                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-luxury-gold transition-colors block py-1"
                                >
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-8 h-8 rounded-md object-cover"
                                  />
                                  {item.name}
                                </Link>
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
            
            {/* Admin Panel Button - Only visible for admin */}
            {isAdmin && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:text-luxury-gold text-luxury-gold"
                onClick={() => navigate('/admin')}
              >
                <Settings size={20} />
                <span className="ml-1 hidden sm:inline">Admin Panel</span>
              </Button>
            )}
            
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
              <Link to="/collections/blue-sapphire" className="text-sm font-medium hover:text-luxury-gold transition-colors text-left">BLUE SAPPHIRE</Link>
              <Link to="/collections/emerald" className="text-sm font-medium hover:text-luxury-gold transition-colors text-left">EMERALD</Link>
              <Link to="/collections/ruby" className="text-sm font-medium hover:text-luxury-gold transition-colors text-left">RUBY</Link>
              <Link to="/collections/yellow-sapphire" className="text-sm font-medium hover:text-luxury-gold transition-colors text-left">YELLOW SAPPHIRE</Link>
              {isAdmin && (
                <button onClick={() => navigate('/admin')} className="text-sm font-medium hover:text-luxury-gold transition-colors text-left text-luxury-gold">ADMIN PANEL</button>
              )}
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
