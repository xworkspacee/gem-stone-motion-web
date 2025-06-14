import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, Minus, Plus, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
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
    name: "Blue Sapphire (Neelam)",
    price: "₹ 1,899.00",
    description: "Our Blue Sapphire (Neelam) is prized for its rich, vivid blue color and exceptional clarity, making it a powerful and beautiful addition to any jewelry collection. Sourced from premium origins and expertly crafted, this gemstone is believed to bestow wisdom, prosperity, and protection to its wearer. Its captivating brilliance and elegant cut make it a truly extraordinary choice for those seeking both style and positive energy.",
    material: "Sterling Silver with Blue Sapphire",
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "/lovable-uploads/39608713-a855-486b-ace3-c4a89a94b089.png", alt: "Blue Sapphire Jewelry Set" },
      { id: 2, url: "/lovable-uploads/95c6f448-fa13-4695-bd02-0be172eb04f3.png", alt: "Blue Sapphire Ring" },
      { id: 3, url: "/lovable-uploads/15e49dbc-9223-48bd-9549-120cb132ed02.png", alt: "Pair of Blue Sapphires" },
      { id: 4, url: "/lovable-uploads/4cd1cd6d-67c8-414c-a1d2-50e1d68d24a3.png", alt: "Loose Blue Sapphire" },
      { id: 5, url: "/lovable-uploads/3e70fae6-b940-4952-b2b6-3fed519e4583.png", alt: "Blue Sapphire Necklace in Box" }
    ],
    inStock: true,
    stockCount: 5
  },
  "2": {
    id: 2,
    name: "ALEXANDRITE CAT'S EYE",
    price: "₹ 1,599.00",
    description: "Alexandrite Cat's Eye is a rare and mystical gemstone, prized for its unique color-changing property and the striking cat's eye effect. Revered in many cultures for its protective powers and ability to bring luck and insight, this gem makes an exquisite addition to any collection or piece of jewelry. Each Alexandrite Cat's Eye is expertly selected for its quality and captivating appearance.",
    material: "Natural Alexandrite Cat's Eye, premium cabochon cut",
    sizes: ["7", "8", "9", "10"],
    colors: [
      { name: "Mystic Green", value: "green" },
      { name: "Royal Purple", value: "purple" },
    ],
    images: [
      {
        id: 1,
        url: "/lovable-uploads/978e25f2-58c2-4106-93d5-2a3c5b1c36fa.png",
        alt: "Alexandrite Cat's Eye Ring",
      },
      {
        id: 2,
        url: "/lovable-uploads/fa8d197b-fba0-4d4c-934b-1659bcf9c0dc.png",
        alt: "Loose Alexandrite Cat's Eye Gemstone"
      }
    ],
    inStock: true,
    stockCount: 8,
  },
  "3": {
    id: 3,
    name: "Ruby (Manik)",
    price: "₹ 45,000.00",
    description: "The Ruby (Manik) is renowned for its striking deep red color and unmatched brilliance, symbolizing passion, power, and vitality. Sourced from finest origins, this exquisite gemstone is meticulously cut to highlight its natural allure. Ideal for both collectors and jewelry lovers, Ruby (Manik) is believed to bring good fortune, confidence, and leadership to its wearer.",
    material: "18K Gold or Sterling Silver Setting with Certified Natural Ruby",
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Red", value: "red" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "/lovable-uploads/b3bcb6c1-bfb5-447c-a2b1-a7577c4885a7.png", alt: "Ruby (Manik) Necklace" },
      { id: 2, url: "/lovable-uploads/749d55b5-2642-4191-8ecb-36524f188206.png", alt: "Ruby (Manik) Ring with Diamonds" },
      { id: 3, url: "/lovable-uploads/2a371f1b-a92a-4077-891e-bb7b7bcfc11b.png", alt: "Brilliant Ruby (Manik) on Black" },
      { id: 4, url: "/lovable-uploads/f292acb4-402b-436a-a585-3d9281b0b923.png", alt: "Loose Ruby (Manik)" }
    ],
    inStock: true,
    stockCount: 5
  },
  "4": {
    id: 4,
    name: "Yellow Sapphire (Pushparag)",
    price: "₹ 28,000.00",
    description: "Yellow Sapphire (Pushparag) is a vibrant gemstone cherished for its radiant golden color and astrological significance. Esteemed for attracting prosperity, wisdom, and positive energy, each stone is artfully cut and polished to showcase its dazzling brilliance. Perfect for rings, pendants, or as a collector’s gem, Yellow Sapphire makes an exceptional and meaningful addition to any jewelry collection.",
    material: "18K Gold or Sterling Silver Setting with Certified Yellow Sapphire",
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Yellow", value: "gold" },
      { name: "Silver", value: "silver" }
    ],
    images: [
      { id: 1, url: "/lovable-uploads/8e6e83ca-9b23-4901-83ff-aefe89fb2280.png", alt: "Yellow Sapphire (Pushparag) gemstone on gray background" },
      { id: 2, url: "/lovable-uploads/70af7a32-3231-4636-b06f-32840128b7bb.png", alt: "Yellow Sapphire (Pushparag) ring worn on hand" },
      { id: 3, url: "/lovable-uploads/0dc0ed63-aef6-477d-8107-27e1ffbe60c0.png", alt: "Yellow Sapphire (Pushparag) oval loose stone" },
      { id: 4, url: "/lovable-uploads/81ab1d6b-c3ee-4f4a-8f08-ee834c895fe4.png", alt: "Yellow Sapphire (Pushparag) gemstone closeup" },
      { id: 5, url: "/lovable-uploads/a2649078-4d23-4d01-85d4-3970e23dd9cd.png", alt: "Yellow Sapphire (Pushparag) gemstone on coin" }
    ],
    inStock: true,
    stockCount: 6
  },
  "5": {
    id: 5,
    name: "Tanzanite",
    price: "₹ 32,000.00",
    description: "This stunning Tanzanite gemstone radiates with a vivid blue-violet color. Its extraordinary clarity and cut bring out a vibrant fire, making it a truly rare and precious addition to any collection. Symbolizing transformation and intuition, Tanzanite is highly prized among gemstone enthusiasts for both its natural beauty and metaphysical energy.",
    material: "Natural Tanzanite, set in premium 18K white gold or sterling silver jewelry.",
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "/lovable-uploads/53d76d52-0d9f-4761-96e5-fbbdd3eb89ed.png", alt: "Model wearing Tanzanite necklace and earrings" },
      { id: 2, url: "/lovable-uploads/f870230d-bd5f-429b-bc00-88f24b22d5b6.png", alt: "Tanzanite and diamond drop earrings" },
      { id: 3, url: "/lovable-uploads/372385ee-b1d9-4f40-b2a2-ef7a369dcf22.png", alt: "Trillion-cut vivid blue Tanzanite gemstone" },
      { id: 4, url: "/lovable-uploads/e8bf9eca-6671-44b4-9d80-4ac1f2b0f564.png", alt: "Trillion-cut Tanzanite gemstone with purple blue hue" },
    ],
    inStock: true,
    stockCount: 10,
  },
  "6": {
    id: 6,
    name: "Pearl (Muthu)",
    price: "₹ 12,000.00",
    description: "Our premium Pearl (Muthu) collection features hand-selected, lustrous pearls with exceptional sheen, perfect for sophisticated and timeless jewelry. Revered for their elegance and classic charm, these pearls are ideal for both everyday wear and special occasions, bringing natural beauty and positive energy to the wearer.",
    material: "Natural Cultured Pearl set in 18K Gold & Sterling Silver.",
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Sterling Silver", value: "silver" }
    ],
    images: [
      { id: 1, url: "/lovable-uploads/88d9a07c-52c4-4735-b220-243092cedc55.png", alt: "Pearl drop earrings with gold and diamonds" },
      { id: 2, url: "/lovable-uploads/a964317a-4924-452a-8a24-991a70c78dc7.png", alt: "Lustrous Pearl on a shell" },
      { id: 3, url: "/lovable-uploads/2e1765e1-8e00-4272-a71f-3b921a6e3e13.png", alt: "Elegant gold and pearl necklace" },
      { id: 4, url: "/lovable-uploads/140a9626-ae8e-4306-9c0a-f1fe4076bd42.png", alt: "Pearl in oyster surrounded by pearls" },
      { id: 5, url: "/lovable-uploads/c2c36287-ab6e-4df4-9863-dbe7c8a2788c.png", alt: "Single shining Pearl (Muthu)" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop", alt: "Pair view" },
      { id: 3, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Wearing example" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "White Gold", value: "whitegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Diamond detail" },
      { id: 3, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Light reflection" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop", alt: "Layered view" },
      { id: 3, url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop", alt: "Wearing style" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop", alt: "Pearl detail" },
      { id: 3, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Neck view" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Pendant close-up" },
      { id: 3, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Chain detail" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop", alt: "Chain links" },
      { id: 3, url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop", alt: "Statement view" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Platinum", value: "platinum" },
      { name: "White Gold", value: "whitegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Diamond cut view" },
      { id: 3, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Ring profile" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Rose Gold", value: "rosegold" },
      { name: "Gold", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop", alt: "Rose gold tone" },
      { id: 3, url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop", alt: "Vintage details" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Platinum", value: "platinum" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Smooth finish" },
      { id: 3, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Band thickness" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "White Gold", value: "whitegold" },
      { name: "Yellow Gold", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Sapphire center" },
      { id: 3, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Halo diamonds" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Set together" },
      { id: 3, url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop", alt: "Individual rings" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "White Gold", value: "whitegold" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop", alt: "Geometric pattern" },
      { id: 3, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Art deco details" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop", alt: "Crystal details" },
      { id: 3, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Movement view" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Geometric shape" },
      { id: 3, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Modern design" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Silver", value: "silver" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop", alt: "Tassel detail" },
      { id: 3, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Movement flow" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Silver", value: "silver" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop", alt: "Pearl detail" },
      { id: 3, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Clip mechanism" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop", alt: "Textured finish" },
      { id: 3, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Size perspective" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Minimalist design" },
      { id: 3, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Bar shape" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "White Gold", value: "whitegold" },
      { name: "Yellow Gold", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Diamond line" },
      { id: 3, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Tennis setting" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Silver", value: "silver" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop", alt: "Locket detail" },
      { id: 3, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Vintage engraving" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Silver", value: "silver" },
      { name: "Antique Brass", value: "brass" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop", alt: "Natural stones" },
      { id: 3, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop", alt: "Bohemian style" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Sterling Silver", value: "silver" },
      { name: "Gold Plated", value: "gold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Crystal arrangement" },
      { id: 3, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Collar style" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Rose Gold", value: "rosegold" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop", alt: "Infinity symbol" },
      { id: 3, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Chain detail" }
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
    sizes: ["4", "5", "6", "7"],
    colors: [
      { name: "White Pearls", value: "white" },
      { name: "Cream Pearls", value: "cream" }
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop", alt: "Pearl strands" },
      { id: 3, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Multi-layer view" }
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
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist, wishlistItems } = useWishlist();
  const { user } = useAuth();
  const { toast } = useToast();

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

  const isWishlisted = isInWishlist(product.id);

  // Calculate total price based on quantity
  const basePrice = parseFloat(product.price.replace('₹ ', '').replace(',', ''));
  const totalPrice = basePrice * quantity;

  const handleAddToCart = async () => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to add items to cart",
        variant: "destructive"
      });
      navigate('/auth');
      return;
    }

    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "Please select both size and color before adding to cart",
        variant: "destructive"
      });
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

  const handleWishlistToggle = async () => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to add items to wishlist",
        variant: "destructive"
      });
      navigate('/auth');
      return;
    }

    setIsWishlistLoading(true);
    
    try {
      if (isWishlisted) {
        const wishlistItem = wishlistItems.find(item => item.product_id === product.id);
        if (wishlistItem) {
          await removeFromWishlist(wishlistItem.id);
        }
      } else {
        await addToWishlist({
          product_id: product.id,
          product_name: product.name,
          product_price: product.price,
          product_image: product.images[0]?.url || '',
        });
      }
    } catch (error) {
      console.error('Error toggling wishlist:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsWishlistLoading(false);
    }
  };

  const handleBuyNow = async () => {
    console.log('Buy Now clicked');
    
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to make a purchase",
        variant: "destructive"
      });
      navigate('/auth');
      return;
    }

    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "Please select both size and color before proceeding",
        variant: "destructive"
      });
      return;
    }

    try {
      console.log('Adding to cart before checkout');
      await addToCart({
        product_id: product.id,
        product_name: product.name,
        product_price: product.price,
        product_image: product.images[0]?.url || '',
        quantity,
        selected_size: selectedSize,
        selected_color: selectedColor,
      });
      
      console.log('Navigating to checkout');
      navigate('/checkout');
    } catch (error) {
      console.error('Error in Buy Now:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Top Banner */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-4 md:space-x-8 text-xs md:text-sm text-gray-600">
            <span>FREE SHIPPING</span>
            <span>•</span>
            <span>30-DAY RETURNS</span>
            <span>•</span>
            <span>LIFETIME WARRANTY</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4 md:mb-6 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg shadow-sm overflow-hidden min-h-[600px]">
          {/* Left Side - Images */}
          <div className="bg-gray-900 p-4 md:p-8 flex flex-col">
            {/* Main Image with Navigation */}
            <div className="flex-1 mb-4 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center relative min-h-[300px] md:min-h-[400px]">
              <img
                src={product.images[selectedImageIndex]?.url}
                alt={product.images[selectedImageIndex]?.alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Image Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => 
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => 
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              {product.images.length > 1 && (
                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                  {selectedImageIndex + 1} / {product.images.length}
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-yellow-400' 
                        : 'border-gray-600 hover:border-gray-400'
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

          {/* Right Side - Product Details */}
          <div className="p-4 md:p-8 space-y-4 md:space-y-6 bg-white">
            {/* Product Title and Price */}
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                {product.name}
              </h1>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                ₹ {totalPrice.toLocaleString()}
                {quantity > 1 && (
                  <span className="text-sm md:text-base text-gray-500 ml-2">
                    ({product.price} each)
                  </span>
                )}
              </div>
              {product.inStock && (
                <div className="flex items-center text-red-500 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  A few left in stock!
                </div>
              )}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">SIZE:</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 md:py-3 px-2 md:px-4 border-2 rounded transition-colors font-medium text-sm md:text-base ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-500 text-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">COLOR:</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-3 transition-transform hover:scale-110 ${
                      selectedColor === color.value ? 'border-gray-900 ring-2 ring-gray-900 ring-offset-2' : 'border-gray-300'
                    } ${color.value === 'gold' ? 'bg-yellow-400' : color.value === 'rosegold' ? 'bg-pink-300' : color.value === 'silver' ? 'bg-gray-300' : color.value === 'platinum' ? 'bg-gray-400' : color.value === 'whitegold' ? 'bg-gray-200' : 'bg-gray-300'}`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                MATERIAL: <span className="font-normal text-sm md:text-base">{product.material}</span>
              </h3>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="w-10 h-10 md:w-12 md:h-12 bg-yellow-300 hover:bg-yellow-400 border-yellow-300"
                >
                  <Minus size={16} className="md:w-5 md:h-5" />
                </Button>
                <span className="text-xl md:text-2xl font-semibold px-4 md:px-6 min-w-[60px] text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= product.stockCount}
                  className="w-10 h-10 md:w-12 md:h-12 bg-yellow-300 hover:bg-yellow-400 border-yellow-300"
                >
                  <Plus size={16} className="md:w-5 md:h-5" />
                </Button>
              </div>
            </div>

            {/* Validation Message */}
            {(!selectedSize || !selectedColor) && (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-700">
                  Please select both size and color to proceed
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 md:space-y-4 pt-4 md:pt-6">
              <Button
                className="w-full h-12 md:h-14 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base md:text-lg tracking-wide"
                onClick={handleBuyNow}
                disabled={!selectedSize || !selectedColor || !product.inStock}
              >
                BUY NOW
              </Button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <Button
                  className="h-12 md:h-14 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold border-0 text-sm md:text-base"
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor || !product.inStock}
                >
                  <ShoppingBag size={18} className="mr-2 md:w-5 md:h-5" />
                  ADD TO CART
                </Button>
                
                <Button
                  className={`h-12 md:h-14 font-semibold border-0 text-sm md:text-base transition-all duration-200 ${
                    isWishlisted 
                      ? 'bg-red-100 hover:bg-red-200 text-red-700 border-red-300' 
                      : 'bg-yellow-300 hover:bg-yellow-400 text-gray-900'
                  }`}
                  onClick={handleWishlistToggle}
                  disabled={isWishlistLoading}
                >
                  <Heart 
                    size={18} 
                    className={`mr-2 md:w-5 md:h-5 transition-all duration-200 ${
                      isWishlisted ? 'text-red-500' : ''
                    }`} 
                    fill={isWishlisted ? 'currentColor' : 'none'} 
                  />
                  {isWishlistLoading 
                    ? 'UPDATING...' 
                    : isWishlisted 
                      ? 'REMOVE FROM WISHLIST' 
                      : 'ADD TO WISHLIST'
                  }
                </Button>
              </div>
            </div>

            {/* Product Description */}
            <div className="pt-4 md:pt-6 border-t">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
