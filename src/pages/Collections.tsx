
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ShoppingCart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

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
      }
    ]
  }
};

const Collections = () => {
  const { category } = useParams<{ category: string }>();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState<number[]>([]);

  const currentCollection = category && collectionsData[category as keyof typeof collectionsData];

  if (!currentCollection) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Collection not found</h1>
          <Link to="/" className="text-luxury-gold hover:underline mt-4 inline-block">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = async (product: any) => {
    if (!user) {
      toast.error("Please sign in to add items to cart");
      return;
    }

    try {
      await addToCart({
        product_id: product.id,
        product_name: product.name,
        product_price: product.price,
        product_image: product.image,
        quantity: 1,
        selected_size: 'One Size',
        selected_color: 'Default'
      });
      toast.success(`${product.name} added to cart!`);
    } catch (error) {
      toast.error("Failed to add item to cart");
    }
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
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
            {currentCollection.products.map((product) => (
              <div key={product.id} className="group relative bg-white">
                <div className="relative overflow-hidden aspect-[3/4] bg-gray-100 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    <Heart 
                      className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                    />
                  </button>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="absolute bottom-4 left-4 right-4 bg-luxury-black/80 text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-luxury-black flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>

                {/* Product Info */}
                <div className="mt-4 space-y-2">
                  <Link 
                    to={`/product/${product.id}`}
                    className="block hover:text-luxury-gold transition-colors"
                  >
                    <h3 className="font-medium text-luxury-black uppercase tracking-wide text-sm">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-luxury-black font-semibold">
                    {product.price}
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
