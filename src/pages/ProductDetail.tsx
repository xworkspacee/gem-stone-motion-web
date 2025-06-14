
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, Minus, Plus, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
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
      { id: 3, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Detail view" },
      { id: 4, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Close-up view" }
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
      { id: 2, url: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=800&h=1000&fit=crop", alt: "Side view" },
      { id: 3, url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop", alt: "Hand wearing view" }
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
      { id: 1, url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Side angle" },
      { id: 3, url: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop", alt: "Detail view" }
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
      { id: 1, url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop", alt: "Set arrangement" },
      { id: 3, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Individual rings" }
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
      { id: 1, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop", alt: "Wearing view" },
      { id: 3, url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop", alt: "Close-up detail" }
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
      { id: 1, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop", alt: "Main view" },
      { id: 2, url: "https://images.unsplash.com/photo-1603561596112-a03c65c8ee37?w=800&h=1000&fit=crop", alt: "Side view" },
      { id: 3, url: "https://images.unsplash.com/photo-1629048446687-06a0b325d7c9?w=800&h=1000&fit=crop", alt: "Size comparison" }
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
    sizes: ["One Size"],
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
    sizes: ["16 inch", "18 inch", "20 inch"],
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
    sizes: ["14 inch", "16 inch"],
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
    sizes: ["16 inch", "18 inch", "20 inch"],
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
    sizes: ["18 inch", "20 inch", "22 inch"],
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
    sizes: ["5", "6", "7", "8", "9", "10"],
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
    sizes: ["5", "6", "7", "8", "9"],
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
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
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
    sizes: ["5", "6", "7", "8", "9"],
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
    sizes: ["5", "6", "7", "8", "9", "10"],
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
    sizes: ["5", "6", "7", "8", "9"],
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
    sizes: ["One Size"],
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
    sizes: ["Small", "Medium"],
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
    sizes: ["One Size"],
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
    sizes: ["One Size"],
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
    sizes: ["Medium", "Large"],
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
    sizes: ["One Size"],
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
    sizes: ["16 inch", "18 inch"],
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
    sizes: ["18 inch", "20 inch"],
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
    sizes: ["20 inch", "22 inch"],
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
    sizes: ["16 inch"],
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
    sizes: ["18 inch", "20 inch"],
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
    sizes: ["16-18 inch"],
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
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
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

  const isWishlisted = isInWishlist(product.id);

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

  const handleWishlistToggle = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    if (isWishlisted) {
      const wishlistItem = await import('@/contexts/WishlistContext').then(module => 
        module.useWishlist().wishlistItems.find(item => item.product_id === product.id)
      );
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
  };

  const handleBuyNow = async () => {
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
    
    navigate('/checkout');
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Top Banner */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <span>FREE SHIPPING</span>
            <span>•</span>
            <span>30-DAY RETURNS</span>
            <span>•</span>
            <span>LIFETIME WARRANTY</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg shadow-sm overflow-hidden min-h-[600px]">
          {/* Left Side - Images */}
          <div className="bg-gray-900 p-8 flex flex-col">
            {/* Main Image with Navigation */}
            <div className="flex-1 mb-4 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center relative">
              <img
                src={product.images[selectedImageIndex]?.url}
                alt={product.images[selectedImageIndex]?.alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Image Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
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
          <div className="p-8 space-y-6 bg-white">
            {/* Product Title and Price */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="text-3xl font-bold text-gray-900 mb-2">{product.price}</div>
              {product.inStock && (
                <div className="flex items-center text-red-500 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  A few left in stock!
                </div>
              )}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">SIZE:</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border-2 rounded transition-colors font-medium ${
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">COLOR:</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-10 h-10 rounded-full border-3 transition-transform hover:scale-110 ${
                      selectedColor === color.value ? 'border-gray-900 ring-2 ring-gray-900 ring-offset-2' : 'border-gray-300'
                    } ${color.value === 'gold' ? 'bg-yellow-400' : 'bg-gray-300'}`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                MATERIAL: <span className="font-normal">{product.material}</span>
              </h3>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="w-12 h-12 bg-yellow-300 hover:bg-yellow-400 border-yellow-300"
                >
                  <Minus size={20} />
                </Button>
                <span className="text-2xl font-semibold px-6">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= product.stockCount}
                  className="w-12 h-12 bg-yellow-300 hover:bg-yellow-400 border-yellow-300"
                >
                  <Plus size={20} />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6">
              <Button
                className="w-full h-14 bg-gray-500 hover:bg-gray-600 text-white font-semibold text-lg tracking-wide"
                onClick={handleBuyNow}
                disabled={!selectedSize || !selectedColor}
              >
                BUY NOW
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button
                  className="h-14 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold border-0"
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor}
                >
                  <ShoppingBag size={20} className="mr-2" />
                  ADD TO CART
                </Button>
                
                <Button
                  className="h-14 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold border-0"
                  onClick={handleWishlistToggle}
                >
                  <Heart size={20} className="mr-2" fill={isWishlisted ? 'currentColor' : 'none'} />
                  ADD TO WISHLIST
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
