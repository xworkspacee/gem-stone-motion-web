
import React from 'react';
import { CartItem } from '@/contexts/CartContext';
import { Truck, Shield, RotateCcw } from 'lucide-react';

interface OrderSummaryProps {
  cartItems: CartItem[];
  totalAmount: number;
  deliveryCharges: number;
  finalAmount: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  totalAmount,
  deliveryCharges,
  finalAmount
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border h-fit">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Order Summary</h2>
      
      {/* Items */}
      <div className="space-y-4 mb-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <img
              src={item.product_image}
              alt={item.product_name}
              className="w-12 h-12 object-cover rounded border"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate text-gray-900">{item.product_name}</p>
              <p className="text-xs text-gray-500">
                Qty: {item.quantity}
                {item.selected_size && ` • Size: ${item.selected_size}`}
                {item.selected_color && ` • Color: ${item.selected_color}`}
              </p>
            </div>
            <span className="font-medium text-sm text-gray-900">{item.product_price}</span>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="border-t pt-4 space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Price ({cartItems.length} items)</span>
          <span>₹ {totalAmount.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Delivery Charges</span>
          <span className={deliveryCharges === 0 ? 'text-green-600 font-medium' : ''}>
            {deliveryCharges === 0 ? 'FREE' : `₹ ${deliveryCharges}`}
          </span>
        </div>
        
        {deliveryCharges === 0 && (
          <div className="text-xs text-green-600">
            ✓ You saved ₹40 on delivery charges
          </div>
        )}
        
        <div className="border-t pt-3">
          <div className="flex justify-between font-bold text-lg text-gray-900">
            <span>Total Amount</span>
            <span>₹ {finalAmount.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <Truck size={16} className="text-green-600" />
          <span>Free delivery on orders above ₹500</span>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <RotateCcw size={16} className="text-blue-600" />
          <span>7 days easy return policy</span>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <Shield size={16} className="text-purple-600" />
          <span>100% secure payments</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
