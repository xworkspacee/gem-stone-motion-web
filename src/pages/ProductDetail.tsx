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
    name: "Miro Signet Ring in Sterling Silver",
    price: "$168.00",
    description: "Crafted with precision and elegance, this stunning signet ring features intricate detailing that captures light beautifully. Made from premium sterling silver for lasting durability.",
    material: "Sterling Silver",
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop", alt: "Side view" },
      { id: 3, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Detail view" },
      { id: 4, url: "https://images.unsplash.com/photo-1622866389730-f5c3e2c8af75?w=800&h=1000&fit=crop", alt: "Lifestyle view" }
    ],
    inStock: true,
    stockCount: 5
  },
  "2": {
    id: 2,
    name: "Emerald Grande Ring in Sterling Silver",
    price: "$115.00",
    description: "A magnificent emerald centerpiece surrounded by brilliant sterling silver craftsmanship. This ring embodies luxury and sophistication.",
    material: "Sterling Silver with Emerald",
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=800&h=1000&fit=crop", alt: "Side view" },
      { id: 3, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Detail view" }
    ],
    inStock: true,
    stockCount: 8
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
                    } ${color.value === 'gold' ? 'bg-luxury-gold' : 'bg-gray-300'}`}
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
