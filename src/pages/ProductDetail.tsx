import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

interface ProductData {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  material: string;
  sizes: string[];
  colors: { name: string; value: string }[];
  images: ProductImage[];
  inStock: boolean;
  stockCount: number;
}

const productData: { [key: string]: ProductData } = {
  "1": {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: "₹ 1,899.00",
    description: "Crafted with precision and elegance, this stunning diamond solitaire ring features intricate detailing that captures light beautifully. Made from premium sterling silver for lasting durability.",
    material: "Sterling Silver with Diamond",
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop", alt: "Side view" },
      { id: 3, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Detail view" }
    ],
    inStock: true,
    stockCount: 5
  },
  "2": {
    id: 2,
    name: "Gold Band Ring",
    price: "₹ 1,599.00",
    description: "A timeless gold band ring with elegant design. Perfect for everyday wear or special occasions.",
    material: "18K Gold",
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=800&h=1000&fit=crop", alt: "Side view" }
    ],
    inStock: true,
    stockCount: 8
  },
  "3": {
    id: 3,
    name: "Pearl Statement Ring",
    price: "₹ 2,199.00",
    description: "Elegant pearl statement ring that adds sophistication to any outfit.",
    material: "Sterling Silver with Pearl",
    sizes: ["5", "6", "7", "8", "9"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 3
  },
  "4": {
    id: 4,
    name: "Vintage Ring Set",
    price: "₹ 1,749.00",
    description: "Beautiful vintage-inspired ring set with intricate detailing.",
    material: "Sterling Silver",
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Antique Gold", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 6
  },
  "5": {
    id: 5,
    name: "Crystal Drop Earrings",
    price: "₹ 1,299.00",
    description: "Stunning crystal drop earrings that catch the light beautifully.",
    material: "Sterling Silver with Crystal",
    sizes: ["One Size"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 10
  },
  "6": {
    id: 6,
    name: "Gold Hoop Earrings",
    price: "₹ 999.00",
    description: "Classic gold hoop earrings, perfect for any occasion.",
    material: "18K Gold",
    sizes: ["Small", "Medium", "Large"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 15
  },
  "7": {
    id: 7,
    name: "Pearl Stud Earrings",
    price: "₹ 1,449.00",
    description: "Elegant pearl stud earrings for a classic look.",
    material: "Sterling Silver with Pearl",
    sizes: ["Small", "Medium"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 12
  },
  "8": {
    id: 8,
    name: "Diamond Cluster Earrings",
    price: "₹ 2,299.00",
    description: "Luxurious diamond cluster earrings for special occasions.",
    material: "Sterling Silver with Diamonds",
    sizes: ["One Size"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "White Gold", value: "whitegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 4
  },
  "9": {
    id: 9,
    name: "Layered Chain Necklace",
    price: "₹ 1,649.00",
    description: "Trendy layered chain necklace perfect for modern styling.",
    material: "Sterling Silver",
    sizes: ["16 inch", "18 inch", "20 inch"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 8
  },
  "10": {
    id: 10,
    name: "Pearl Choker Necklace",
    price: "₹ 1,199.00",
    description: "Classic pearl choker necklace for elegant occasions.",
    material: "Sterling Silver with Pearls",
    sizes: ["14 inch", "16 inch"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 6
  },
  "11": {
    id: 11,
    name: "Gold Pendant Necklace",
    price: "₹ 1,849.00",
    description: "Beautiful gold pendant necklace with intricate design.",
    material: "18K Gold",
    sizes: ["16 inch", "18 inch", "20 inch"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 7
  },
  "12": {
    id: 12,
    name: "Statement Chain Necklace",
    price: "₹ 2,499.00",
    description: "Bold statement chain necklace for fashion-forward individuals.",
    material: "Sterling Silver",
    sizes: ["18 inch", "20 inch", "22 inch"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 5
  },
  "13": {
    id: 13,
    name: "Emerald Cut Diamond Ring",
    price: "₹ 3,299.00",
    description: "Stunning emerald cut diamond ring with exceptional clarity and brilliance.",
    material: "Platinum with Diamond",
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: [
      { name: "Platinum", value: "platinum" },
      { name: "White Gold", value: "whitegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 3
  },
  "14": {
    id: 14,
    name: "Rose Gold Engagement Ring",
    price: "₹ 2,899.00",
    description: "Romantic rose gold engagement ring with vintage-inspired details.",
    material: "18K Rose Gold with Diamond",
    sizes: ["5", "6", "7", "8", "9"],
    colors: [
      { name: "Rose Gold", value: "rosegold" },
      { name: "Gold", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 4
  },
  "15": {
    id: 15,
    name: "Platinum Wedding Band",
    price: "₹ 2,199.00",
    description: "Classic platinum wedding band with smooth finish and comfortable fit.",
    material: "Platinum",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    colors: [
      { name: "Platinum", value: "platinum" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 8
  },
  "16": {
    id: 16,
    name: "Sapphire Halo Ring",
    price: "₹ 2,699.00",
    description: "Elegant sapphire halo ring surrounded by sparkling diamonds.",
    material: "White Gold with Sapphire",
    sizes: ["5", "6", "7", "8", "9"],
    colors: [
      { name: "White Gold", value: "whitegold" },
      { name: "Yellow Gold", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 5
  },
  "17": {
    id: 17,
    name: "Classic Solitaire Set",
    price: "₹ 1,999.00",
    description: "Timeless solitaire ring and band set perfect for engagement and wedding.",
    material: "Sterling Silver with CZ",
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 10
  },
  "18": {
    id: 18,
    name: "Art Deco Ring",
    price: "₹ 2,399.00",
    description: "Vintage-inspired art deco ring with geometric patterns and diamonds.",
    material: "White Gold with Diamonds",
    sizes: ["5", "6", "7", "8", "9"],
    colors: [
      { name: "White Gold", value: "whitegold" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 6
  },
  "19": {
    id: 19,
    name: "Chandelier Earrings",
    price: "₹ 1,899.00",
    description: "Dramatic chandelier earrings perfect for formal occasions.",
    material: "Sterling Silver with Crystals",
    sizes: ["One Size"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 7
  },
  "20": {
    id: 20,
    name: "Geometric Studs",
    price: "₹ 899.00",
    description: "Modern geometric stud earrings with clean lines and contemporary design.",
    material: "Sterling Silver",
    sizes: ["Small", "Medium"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 15
  },
  "21": {
    id: 21,
    name: "Tassel Drop Earrings",
    price: "₹ 1,199.00",
    description: "Bohemian-style tassel drop earrings with movement and texture.",
    material: "Gold Plated with Silk Tassels",
    sizes: ["One Size"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Silver", value: "silver" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 12
  },
  "22": {
    id: 22,
    name: "Vintage Clip-On Earrings",
    price: "₹ 1,599.00",
    description: "Elegant vintage-style clip-on earrings for non-pierced ears.",
    material: "Gold Plated with Pearls",
    sizes: ["One Size"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Silver", value: "silver" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 8
  },
  "23": {
    id: 23,
    name: "Statement Hoops",
    price: "₹ 1,799.00",
    description: "Bold statement hoop earrings with textured finish.",
    material: "Sterling Silver",
    sizes: ["Medium", "Large"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 9
  },
  "24": {
    id: 24,
    name: "Minimalist Bars",
    price: "₹ 699.00",
    description: "Simple and elegant minimalist bar earrings for everyday wear.",
    material: "Sterling Silver",
    sizes: ["One Size"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 20
  },
  "25": {
    id: 25,
    name: "Diamond Tennis Necklace",
    price: "₹ 3,999.00",
    description: "Luxurious diamond tennis necklace with perfectly matched stones.",
    material: "White Gold with Diamonds",
    sizes: ["16 inch", "18 inch"],
    colors: [
      { name: "White Gold", value: "whitegold" },
      { name: "Yellow Gold", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 2
  },
  "26": {
    id: 26,
    name: "Vintage Locket Necklace",
    price: "₹ 1,399.00",
    description: "Romantic vintage locket necklace perfect for treasured memories.",
    material: "Gold Plated Sterling Silver",
    sizes: ["18 inch", "20 inch"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Silver", value: "silver" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 11
  },
  "27": {
    id: 27,
    name: "Bohemian Pendant Set",
    price: "₹ 1,099.00",
    description: "Free-spirited bohemian pendant necklace with natural stones.",
    material: "Silver with Semi-Precious Stones",
    sizes: ["20 inch", "22 inch"],
    colors: [
      { name: "Silver", value: "silver" },
      { name: "Antique Brass", value: "brass" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 14
  },
  "28": {
    id: 28,
    name: "Crystal Collar Necklace",
    price: "₹ 2,299.00",
    description: "Stunning crystal collar necklace that makes a bold statement.",
    material: "Sterling Silver with Crystals",
    sizes: ["16 inch"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 5
  },
  "29": {
    id: 29,
    name: "Infinity Chain Necklace",
    price: "₹ 1,799.00",
    description: "Symbolic infinity chain necklace representing eternal love.",
    material: "18K Gold",
    sizes: ["18 inch", "20 inch"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 7
  },
  "30": {
    id: 30,
    name: "Multi-Strand Pearl Necklace",
    price: "₹ 2,899.00",
    description: "Elegant multi-strand pearl necklace for sophisticated occasions.",
    material: "Sterling Silver with Cultured Pearls",
    sizes: ["16-18 inch"],
    colors: [
      { name: "White Pearls", value: "white" },
      { name: "Cream Pearls", value: "cream" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop", alt: "Main view" }
    ],
    inStock: true,
    stockCount: 6
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const { addToCart } = useCart();
  const { user } = useAuth();

  const product = id ? productData[id] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-luxury text-luxury-black mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    await addToCart({
      product_id: product.id,
      product_name: product.name,
      product_price: product.price,
      product_image: product.images[0]?.url || '',
      quantity,
      selected_size: selectedSize,
      selected_color: selectedColor,
    });
  };

  const handleBuyNow = () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    console.log('Buy now:', {
      product: product.name,
      size: selectedSize,
      color: selectedColor,
      quantity
    });
    // Here you would typically redirect to checkout
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 text-luxury-gray hover:text-luxury-black"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-luxury-cream">
              <img
                src={product.images[selectedImageIndex]?.url}
                alt={product.images[selectedImageIndex]?.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-luxury-gold' 
                        : 'border-luxury-beige hover:border-luxury-brown'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-luxury font-bold text-luxury-black mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-2xl font-bold text-luxury-black">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-luxury-gray line-through">{product.originalPrice}</span>
                )}
              </div>
              {product.inStock && (
                <div className="flex items-center text-red-500 text-sm mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  A few left in stock!
                </div>
              )}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium text-luxury-black mb-3">SIZE: {selectedSize}</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 border rounded transition-colors ${
                      selectedSize === size
                        ? 'border-luxury-black bg-luxury-black text-white'
                        : 'border-luxury-beige hover:border-luxury-brown'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-medium text-luxury-black mb-3">
                COLOR: {selectedColor ? product.colors.find(c => c.value === selectedColor)?.name : ''}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                      selectedColor === color.value ? 'border-luxury-black' : 'border-gray-300'
                    } ${color.value === 'gold' ? 'bg-luxury-gold' : color.value === 'rosegold' ? 'bg-rose-400' : color.value === 'whitegold' ? 'bg-gray-200' : color.value === 'platinum' ? 'bg-gray-400' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="text-lg font-medium text-luxury-black mb-2">MATERIAL: {product.material}</h3>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-medium text-luxury-black mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </Button>
                <span className="text-xl font-medium px-4">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= product.stockCount}
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6">
              <Button
                className="w-full h-12 bg-luxury-black hover:bg-luxury-brown text-white font-medium tracking-wide"
                onClick={handleBuyNow}
                disabled={!selectedSize || !selectedColor}
              >
                BUY NOW
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-12 border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-white"
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor}
                >
                  <ShoppingBag size={18} className="mr-2" />
                  ADD TO CART
                </Button>
                
                <Button
                  variant="outline"
                  className={`h-12 ${
                    isWishlisted 
                      ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white' 
                      : 'border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-white'
                  }`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart size={18} className="mr-2" fill={isWishlisted ? 'currentColor' : 'none'} />
                  {isWishlisted ? 'WISHLISTED' : 'ADD TO WISHLIST'}
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 pt-6 border-t border-luxury-beige">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-luxury-black">
                  Description
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-luxury-gray leading-relaxed">{product.description}</p>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-luxury-black">
                  Care Instructions
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-luxury-gray">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Clean with soft jewelry cloth</li>
                    <li>Store in provided jewelry box</li>
                    <li>Avoid contact with chemicals and perfumes</li>
                    <li>Remove before swimming or showering</li>
                  </ul>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-luxury-black">
                  Return & Exchange Information
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-luxury-gray">
                  <p>30-day return policy. Items must be in original condition with tags attached.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
