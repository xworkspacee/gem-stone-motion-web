
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ShoppingCart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const collectionsData = {
  rings: {
    title: "Signature Rings",
    subtitle: "Handcrafted Excellence",
    products: [
      {
        id: 1,
        name: "Diamond Solitaire Ring",
        price: "₹ 1,899.00",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop",
        category: "rings"
      },
      {
        id: 2,
        name: "Gold Band Ring",
        price: "₹ 1,599.00",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop",
        category: "rings"
      },
      {
        id: 3,
        name: "Pearl Statement Ring",
        price: "₹ 2,199.00",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop",
        category: "rings"
      },
      {
        id: 4,
        name: "Vintage Ring Set",
        price: "₹ 1,749.00",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop",
        category: "rings"
      },
      {
        id: 13,
        name: "Emerald Cut Diamond Ring",
        price: "₹ 3,299.00",
        image: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=600&h=800&fit=crop",
        category: "rings"
      },
      {
        id: 14,
        name: "Rose Gold Engagement Ring",
        price: "₹ 2,899.00",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=800&fit=crop",
        category: "rings"
      },
      {
        id: 15,
        name: "Platinum Wedding Band",
        price: "₹ 2,199.00",
        image: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=600&h=800&fit=crop",
        category: "rings"
      },
      {
        id: 16,
        name: "Sapphire Halo Ring",
        price: "₹ 2,699.00",
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop",
        category: "rings"
      },
      {
        id: 17,
        name: "Classic Solitaire Set",
        price: "₹ 1,999.00",
        image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=800&fit=crop",
        category: "rings"
      },
      {
        id: 18,
        name: "Art Deco Ring",
        price: "₹ 2,399.00",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",
        category: "rings"
      }
    ]
  },
  earrings: {
    title: "Elegant Earrings",
    subtitle: "Modern Sophistication",
    products: [
      {
        id: 5,
        name: "Crystal Drop Earrings",
        price: "₹ 1,299.00",
        image: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=600&h=800&fit=crop",
        category: "earrings"
      },
      {
        id: 6,
        name: "Gold Hoop Earrings",
        price: "₹ 999.00",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",
        category: "earrings"
      },
      {
        id: 7,
        name: "Pearl Stud Earrings",
        price: "₹ 1,449.00",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=800&fit=crop",
        category: "earrings"
      },
      {
        id: 8,
        name: "Diamond Cluster Earrings",
        price: "₹ 2,299.00",
        image: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=600&h=800&fit=crop",
        category: "earrings"
      },
      {
        id: 19,
        name: "Chandelier Earrings",
        price: "₹ 1,899.00",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop",
        category: "earrings"
      },
      {
        id: 20,
        name: "Geometric Studs",
        price: "₹ 899.00",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop",
        category: "earrings"
      },
      {
        id: 21,
        name: "Tassel Drop Earrings",
        price: "₹ 1,199.00",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop",
        category: "earrings"
      },
      {
        id: 22,
        name: "Vintage Clip-On Earrings",
        price: "₹ 1,599.00",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop",
        category: "earrings"
      },
      {
        id: 23,
        name: "Statement Hoops",
        price: "₹ 1,799.00",
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop",
        category: "earrings"
      },
      {
        id: 24,
        name: "Minimalist Bars",
        price: "₹ 699.00",
        image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=800&fit=crop",
        category: "earrings"
      }
    ]
  },
  necklaces: {
    title: "Statement Necklaces",
    subtitle: "Timeless Beauty",
    products: [
      {
        id: 9,
        name: "Layered Chain Necklace",
        price: "₹ 1,649.00",
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop",
        category: "necklaces"
      },
      {
        id: 10,
        name: "Pearl Choker Necklace",
        price: "₹ 1,199.00",
        image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=800&fit=crop",
        category: "necklaces"
      },
      {
        id: 11,
        name: "Gold Pendant Necklace",
        price: "₹ 1,849.00",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",
        category: "necklaces"
      },
      {
        id: 12,
        name: "Statement Chain Necklace",
        price: "₹ 2,499.00",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop",
        category: "necklaces"
      },
      {
        id: 25,
        name: "Diamond Tennis Necklace",
        price: "₹ 3,999.00",
        image: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=600&h=800&fit=crop",
        category: "necklaces"
      },
      {
        id: 26,
        name: "Vintage Locket Necklace",
        price: "₹ 1,399.00",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",
        category: "necklaces"
      },
      {
        id: 27,
        name: "Bohemian Pendant Set",
        price: "₹ 1,099.00",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=800&fit=crop",
        category: "necklaces"
      },
      {
        id: 28,
        name: "Crystal Collar Necklace",
        price: "₹ 2,299.00",
        image: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=600&h=800&fit=crop",
        category: "necklaces"
      },
      {
        id: 29,
        name: "Infinity Chain Necklace",
        price: "₹ 1,799.00",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop",
        category: "necklaces"
      },
      {
        id: 30,
        name: "Multi-Strand Pearl Necklace",
        price: "₹ 2,899.00",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop",
        category: "necklaces"
      }
    ]
  },
  luxury: {
    title: "Luxury Jewels",
    subtitle: "Handpicked High-End Pieces",
    products: [
      {
        id: 101,
        name: "Classic Pearl Necklace",
        price: "₹ 1,899.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 102,
        name: "Crystal Diamond Ring",
        price: "₹ 2,299.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 103,
        name: "Golden Chain Bracelet",
        price: "₹ 2,199.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 104,
        name: "Deluxe Sapphire Pendant",
        price: "₹ 5,499.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 105,
        name: "Emerald Halo Set",
        price: "₹ 5,999.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 106,
        name: "Ruby Heart Necklace",
        price: "₹ 4,499.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 107,
        name: "Timeless Diamond Bangle",
        price: "₹ 10,499.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 108,
        name: "Multi-Strand Pearl Bracelet",
        price: "₹ 2,799.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 109,
        name: "Morganite Rose Gold Ring",
        price: "₹ 4,299.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 110,
        name: "Onyx Drop Earrings",
        price: "₹ 3,599.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 111,
        name: "Sapphire Pearl Combo Necklace",
        price: "₹ 2,999.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 112,
        name: "Delicate Gold Anklet",
        price: "₹ 1,499.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 113,
        name: "White Diamond Choker",
        price: "₹ 7,299.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 114,
        name: "Artisan Rose Brooch",
        price: "₹ 1,199.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 115,
        name: "Antique Topaz Studs",
        price: "₹ 1,799.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 116,
        name: "Royal Emerald Bracelet",
        price: "₹ 8,899.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 117,
        name: "Luxury Diamond Studs",
        price: "₹ 12,899.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 118,
        name: "Twin Opal Bangles",
        price: "₹ 3,999.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 119,
        name: "Platinum Classic Cuff",
        price: "₹ 11,499.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 120,
        name: "Heritage Gold Filigree",
        price: "₹ 2,399.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 121,
        name: "Lapis Diamond Twirl",
        price: "₹ 2,699.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 122,
        name: "Vibrant Tanzanite Drops",
        price: "₹ 4,899.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 123,
        name: "Classic Amethyst Bar",
        price: "₹ 1,599.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      },
      {
        id: 124,
        name: "Festive Sapphire Tiara",
        price: "₹ 17,499.00",
        image: "/lovable-uploads/d76f4695-c883-427c-9919-bdd6ce77a085.png",
        category: "luxury"
      }
    ]
  }
};

const Collections = () => {
  const { category } = useParams<{ category: string }>();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState<number[]>([]);
  const navigate = useNavigate();

  // For dynamic Supabase-backed category
  const [dynamicProducts, setDynamicProducts] = useState<any[] | null>(null);
  const [dynamicLoading, setDynamicLoading] = useState(false);
  const [dynamicError, setDynamicError] = useState<string | null>(null);

  // Fetch products from Supabase if black-tourmaline
  useEffect(() => {
    if (category === "black-tourmaline") {
      setDynamicLoading(true);
      setDynamicError(null);

      (async () => {
        try {
          const { data, error } = await supabase
            .from("products")
            .select("*")
            .eq("category", "black-tourmaline")
            .order("created_at", { ascending: false });
          if (error) {
            setDynamicError("Failed to load products.");
            setDynamicProducts([]);
          } else {
            setDynamicProducts(data || []);
          }
        } finally {
          setDynamicLoading(false);
        }
      })();
    }
  }, [category]);

  // Use local collection logic only if not black-tourmaline
  const currentCollection =
    category === "black-tourmaline"
      ? { title: "Premium Black Tourmaline", subtitle: "Premium Gemstone Selection", products: dynamicProducts }
      : category && collectionsData[category as keyof typeof collectionsData];

  // Show loading indicator for dynamic collections
  if (category === "black-tourmaline" && dynamicLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center py-16">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-900 border-t-transparent mb-8"></div>
          <h1 className="text-lg font-semibold">Loading Black Tourmaline Collection...</h1>
        </div>
        <Footer />
      </div>
    );
  }

  // Show error for dynamic collection panel, or show collection not found
  if (
    (!currentCollection || !currentCollection.products || currentCollection.products.length === 0) ||
    (category === "black-tourmaline" && dynamicError)
  ) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Collection not found</h1>
          <p className="text-gray-500 mt-2">{dynamicError ? dynamicError : "No products found in this collection."}</p>
          <Link to="/" className="text-luxury-gold hover:underline mt-4 inline-block">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = async (product: any, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking add to cart

    if (!user) {
      toast.error("Please sign in to add items to cart");
      return;
    }

    try {
      await addToCart({
        product_id: product.id,
        product_name: product.name,
        product_price: product.price?.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }) ?? product.product_price,
        product_image: product.image_url ?? product.image,
        quantity: 1,
        selected_size: Array.isArray(product.sizes) && product.sizes.length > 0 ? product.sizes[0] : 'One Size',
        selected_color: Array.isArray(product.colors) && product.colors.length > 0 ? product.colors[0] : 'Default'
      });
      toast.success(`${product.name} added to cart!`);
    } catch (error) {
      toast.error("Failed to add item to cart");
    }
  };

  const toggleFavorite = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking favorite
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-luxury font-bold text-luxury-black mb-4">
              {currentCollection.title}
            </h1>
            <p className="text-lg text-luxury-gray mb-8">
              {currentCollection.subtitle}
            </p>
            <div className="flex justify-center gap-8 text-sm text-luxury-gray">
              <span>FREE SHIPPING</span>
              <span>•</span>
              <span>30-DAY RETURNS</span>
              <span>•</span>
              <span>LIFETIME WARRANTY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentCollection.products?.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-gray-100 rounded-lg">
                  <img
                    src={product.image_url ?? product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => toggleFavorite(product.id, e)}
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    <Heart
                      className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                    />
                  </button>

                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="absolute bottom-4 left-4 right-4 bg-luxury-black/80 text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-luxury-black flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>

                {/* Product Info */}
                <div className="mt-4 space-y-2">
                  <h3 className="font-medium text-luxury-black uppercase tracking-wide text-sm group-hover:text-luxury-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-luxury-black font-semibold">
                    {typeof product.price === "number"
                      ? `₹ ${product.price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`
                      : product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
