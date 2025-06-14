
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AddressForm from '@/components/checkout/AddressForm';
import PaymentOptions from '@/components/checkout/PaymentOptions';
import OrderSummary from '@/components/checkout/OrderSummary';
import DeliveryOptions from '@/components/checkout/DeliveryOptions';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    mobile: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    landmark: '',
    alternatePhone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [deliveryOption, setDeliveryOption] = useState('standard');

  if (!user) {
    navigate('/auth');
    return null;
  }

  if (cartItems.length === 0) {
    navigate('/');
    return null;
  }

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.product_price.replace('₹ ', '').replace(',', ''));
    return total + (price * item.quantity);
  }, 0);

  const getDeliveryCharges = () => {
    if (deliveryOption === 'express') return 99;
    if (deliveryOption === 'same-day') return 199;
    return totalAmount > 500 ? 0 : 40;
  };

  const deliveryCharges = getDeliveryCharges();
  const finalAmount = totalAmount + deliveryCharges;

  const handleAddressChange = (field: string, value: string) => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = async () => {
    console.log('Order details:', {
      user: user.id,
      items: cartItems,
      shippingAddress,
      paymentMethod,
      deliveryOption,
      totalAmount: finalAmount,
    });

    await clearCart();
    navigate('/order-success');
  };

  const isAddressValid = shippingAddress.fullName && 
                        shippingAddress.mobile && 
                        shippingAddress.address && 
                        shippingAddress.city && 
                        shippingAddress.state && 
                        shippingAddress.pincode;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 text-sm text-white">
            <span className="flex items-center"><Check size={16} className="mr-1" /> FREE SHIPPING</span>
            <span>•</span>
            <span className="flex items-center"><Check size={16} className="mr-1" /> 30-DAY RETURNS</span>
            <span>•</span>
            <span className="flex items-center"><Check size={16} className="mr-1" /> SECURE PAYMENTS</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="p-0 h-auto text-blue-600 hover:text-blue-800"
          >
            Home
          </Button>
          <span>/</span>
          <span className="text-gray-400">Secure Checkout</span>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                <ShoppingBag size={16} />
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">Cart</span>
            </div>
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">Checkout</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            <AddressForm 
              address={shippingAddress}
              onAddressChange={handleAddressChange}
            />
            
            <DeliveryOptions
              selectedOption={deliveryOption}
              onOptionChange={setDeliveryOption}
            />

            <PaymentOptions
              selectedMethod={paymentMethod}
              onMethodChange={setPaymentMethod}
            />
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <OrderSummary
              cartItems={cartItems}
              totalAmount={totalAmount}
              deliveryCharges={deliveryCharges}
              finalAmount={finalAmount}
            />

            <Button
              className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg tracking-wide"
              onClick={handlePlaceOrder}
              disabled={!isAddressValid}
            >
              PLACE ORDER
            </Button>

            {!isAddressValid && (
              <p className="text-sm text-red-500 text-center">
                Please fill in all required address fields
              </p>
            )}

            <div className="text-center text-xs text-gray-500">
              By placing your order, you agree to our{' '}
              <button className="text-blue-600 hover:underline">Terms & Conditions</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
