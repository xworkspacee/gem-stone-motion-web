
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from '@/components/ui/drawer';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { Heart, X, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistDrawerProps {
  children: React.ReactNode;
}

const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ children }) => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = async (item: any) => {
    await addToCart({
      product_id: item.product_id,
      product_name: item.product_name,
      product_price: item.product_price,
      product_image: item.product_image,
      quantity: 1,
    });
    removeFromWishlist(item.id);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="h-[90vh]">
        <DrawerHeader className="border-b">
          <div className="flex items-center justify-between">
            <DrawerTitle className="flex items-center gap-2">
              <Heart size={20} />
              Wishlist ({wishlistItems.length})
            </DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <X size={20} />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto p-4">
          {wishlistItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Heart size={64} className="text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
              <p className="text-gray-500">Save items you love for later</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 space-y-3">
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium text-sm">{item.product_name}</h4>
                    <p className="text-sm text-gray-500">{item.product_price}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-luxury-black hover:bg-luxury-brown text-white"
                      onClick={() => handleMoveToCart(item)}
                    >
                      <ShoppingBag size={14} className="mr-1" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default WishlistDrawer;
