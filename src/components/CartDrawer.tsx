
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from '@/components/ui/drawer';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Minus, Plus, Trash2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  children: React.ReactNode;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ children }) => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.product_price.replace('₹ ', '').replace(',', ''));
    return total + (price * item.quantity);
  }, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="h-[90vh] max-h-[90vh]">
        <DrawerHeader className="border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <DrawerTitle className="flex items-center gap-2 text-lg">
              <ShoppingBag size={20} />
              Shopping Cart ({cartItems.length})
            </DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X size={18} />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={64} className="text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500">Add some items to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 p-3 md:p-4 border rounded-lg bg-white">
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-2">
                    <div>
                      <h4 className="font-medium text-sm md:text-base truncate">{item.product_name}</h4>
                      <p className="text-sm md:text-base text-gray-900 font-semibold">{item.product_price}</p>
                      {item.selected_size && (
                        <p className="text-xs text-gray-400">Size: {item.selected_size}</p>
                      )}
                      {item.selected_color && (
                        <p className="text-xs text-gray-400">Color: {item.selected_color}</p>
                      )}
                    </div>
                    
                    {/* Quantity and Remove Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 md:h-8 md:w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={12} />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-12 md:w-16 h-7 md:h-8 text-center text-sm"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 md:h-8 md:w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={12} />
                        </Button>
                      </div>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 md:h-8 md:w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={12} />
                      </Button>
                    </div>
                    
                    {/* Total Price for this item */}
                    {item.quantity > 1 && (
                      <p className="text-sm text-gray-600">
                        Total: ₹ {(parseFloat(item.product_price.replace('₹ ', '').replace(',', '')) * item.quantity).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t p-4 space-y-4 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-lg md:text-xl font-medium">Total:</span>
              <span className="text-lg md:text-xl font-bold">₹ {totalAmount.toLocaleString()}</span>
            </div>
            <Button
              className="w-full h-12 md:h-14 bg-luxury-black hover:bg-luxury-brown text-white font-semibold text-base md:text-lg"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
