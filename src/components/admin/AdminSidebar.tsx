
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  ShoppingCart, 
  Star, 
  Plus, 
  Settings,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'add-product', label: 'Add Product', icon: Plus },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'reviews', label: 'Reviews', icon: Star },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 min-h-screen">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-luxury-gold">GEM STONE</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">Admin Panel</p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full justify-start px-6 py-3 text-left rounded-none ${
                activeTab === item.id
                  ? 'bg-luxury-gold/10 text-luxury-gold border-r-2 border-luxury-gold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon size={20} className="mr-3" />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminSidebar;
