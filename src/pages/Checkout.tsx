
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, CreditCard, MapPin, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

  const [paymentMethod, setPaymentMethod] = useState('card');

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

  const deliveryCharges = totalAmount > 500 ? 0 : 40;
  const finalAmount = totalAmount + deliveryCharges;

  const handleAddressChange = (field: string, value: string) => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = async () => {
    // Here you would typically process the payment and create the order
    console.log('Order details:', {
      user: user.id,
      items: cartItems,
      shippingAddress,
      paymentMethod,
      totalAmount: finalAmount,
    });

    // For demo purposes, we'll just clear the cart and show success
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
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 text-luxury-gray hover:text-luxury-black"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Shopping
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Address Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin size={20} className="mr-2" />
                Delivery Address
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  value={shippingAddress.fullName}
                  onChange={(e) => handleAddressChange('fullName', e.target.value)}
                />
                <Input
                  placeholder="Mobile Number"
                  value={shippingAddress.mobile}
                  onChange={(e) => handleAddressChange('mobile', e.target.value)}
                />
                <Input
                  placeholder="Pincode"
                  value={shippingAddress.pincode}
                  onChange={(e) => handleAddressChange('pincode', e.target.value)}
                />
                <Input
                  placeholder="Locality"
                  value={shippingAddress.locality}
                  onChange={(e) => handleAddressChange('locality', e.target.value)}
                />
                <div className="md:col-span-2">
                  <Input
                    placeholder="Address (Area and Street)"
                    value={shippingAddress.address}
                    onChange={(e) => handleAddressChange('address', e.target.value)}
                  />
                </div>
                <Input
                  placeholder="City/District/Town"
                  value={shippingAddress.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                />
                <Input
                  placeholder="State"
                  value={shippingAddress.state}
                  onChange={(e) => handleAddressChange('state', e.target.value)}
                />
                <Input
                  placeholder="Landmark (Optional)"
                  value={shippingAddress.landmark}
                  onChange={(e) => handleAddressChange('landmark', e.target.value)}
                />
                <Input
                  placeholder="Alternate Phone (Optional)"
                  value={shippingAddress.alternatePhone}
                  onChange={(e) => handleAddressChange('alternatePhone', e.target.value)}
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <CreditCard size={20} className="mr-2" />
                Payment Method
              </h2>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-luxury-black"
                  />
                  <span>Credit/Debit Card</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-luxury-black"
                  />
                  <span>UPI</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="netbanking"
                    checked={paymentMethod === 'netbanking'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-luxury-black"
                  />
                  <span>Net Banking</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-luxury-black"
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.product_name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-medium text-sm">{item.product_price}</span>
                </div>
              ))}
            </div>

            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>₹ {totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className={deliveryCharges === 0 ? 'text-green-600' : ''}>
                  {deliveryCharges === 0 ? 'FREE' : `₹ ${deliveryCharges}`}
                </span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span>₹ {finalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Button
              className="w-full mt-6 h-12 bg-luxury-black hover:bg-luxury-brown text-white"
              onClick={handlePlaceOrder}
              disabled={!isAddressValid}
            >
              Place Order
            </Button>

            {!isAddressValid && (
              <p className="text-sm text-red-500 mt-2 text-center">
                Please fill in all required address fields
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
