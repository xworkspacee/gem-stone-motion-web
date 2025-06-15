
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Emerald (Panna)",
    price: "₹ 18,000.00",
    image: "/lovable-uploads/65bf9dca-98e5-4c5f-9443-ca563ef405ba.png",
    shopUrl: "/product/101",
  },
  {
    id: 2,
    name: "Ruby (Manik)",
    price: "₹ 22,500.00",
    image: "/lovable-uploads/c4afd5c3-8b2c-420c-9382-7b1a9a77cdd2.png",
    shopUrl: "/product/102",
  },
  {
    id: 3,
    name: "Blue Sapphire (Neelam)",
    price: "₹ 30,000.00",
    image: "/lovable-uploads/c0134365-141e-44ba-93b3-e7d8caa2d406.png",
    shopUrl: "/product/103",
  },
  {
    id: 4,
    name: "Yellow Sapphire (Pukhraj)",
    price: "₹ 28,000.00",
    image: "/lovable-uploads/d0b86aec-db2f-4e0b-9c2c-3f9a7db3d7e2.png",
    shopUrl: "/product/104",
  },
  {
    id: 5,
    name: "Pearl (Moti)",
    price: "₹ 10,000.00",
    image: "/lovable-uploads/bc6e6219-e538-402f-a024-3bba7157f996.png",
    shopUrl: "/product/105",
  },
  {
    id: 6,
    name: "Hessonite (Gomed)",
    price: "₹ 17,500.00",
    image: "/lovable-uploads/eaafb7d1-fd58-41dc-bb01-3b88c614af4e.png",
    shopUrl: "/product/106",
  },
  {
    id: 7,
    name: "Cat's Eye (Lehsunia)",
    price: "₹ 19,000.00",
    image: "/lovable-uploads/978e25f2-58c2-4106-93d5-2a3c5b1c36fa.png",
    shopUrl: "/product/107",
  },
  {
    id: 8,
    name: "Coral (Moonga)",
    price: "₹ 13,000.00",
    image: "/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png",
    shopUrl: "/product/108",
  },
];

const OurProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-b from-luxury-cream/80 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-black mb-8 text-center">
          Our Products
        </h2>
        <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 flex flex-col items-center p-4 animate-fade-in"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
                style={{ maxWidth: 180 }}
              />
              <h3 className="font-semibold text-lg text-luxury-black mb-2 text-center">{product.name}</h3>
              <span className="text-luxury-gold text-base font-medium mb-4">{product.price}</span>
              <Button
                className="w-full bg-luxury-gold text-white hover:bg-luxury-brown mt-auto"
                onClick={() => navigate(product.shopUrl)}
              >
                Shop Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
