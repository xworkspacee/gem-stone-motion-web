
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold text-luxury-black mb-4">
            Order Placed Successfully!
          </h1>
          
          <p className="text-luxury-gray mb-8">
            Thank you for your purchase. We'll send you a confirmation email shortly with your order details and tracking information.
          </p>
          
          <div className="space-y-4">
            <Button
              className="w-full h-12 bg-luxury-black hover:bg-luxury-brown text-white"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>
            
            <Button
              variant="outline"
              className="w-full h-12 border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-white"
              onClick={() => navigate('/orders')}
            >
              View Orders
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
