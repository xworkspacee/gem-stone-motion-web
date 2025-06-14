
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
  BarChart3,
  FileText,
  Bell,
  CreditCard,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: 'New' },
    { id: 'users', label: 'User Management', icon: Users, badge: null },
    { id: 'products', label: 'Products', icon: Package, badge: '24' },
    { id: 'add-product', label: 'Add Product', icon: Plus, badge: null },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, badge: '12' },
    { id: 'reviews', label: 'Reviews', icon: Star, badge: '5' },
    { id: 'reports', label: 'Reports', icon: FileText, badge: null },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: '3' },
    { id: 'payments', label: 'Payments', icon: CreditCard, badge: null },
    { id: 'security', label: 'Security', icon: Shield, badge: null },
    { id: 'settings', label: 'Settings', icon: Settings, badge: null },
  ];

  return (
    <div className="w-64 bg-white shadow-xl border-r border-gray-200 min-h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center shadow-lg">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">GEM STONE</h2>
            <p className="text-sm text-gray-600">Admin Panel</p>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="p-4 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-600 font-medium">Revenue</div>
            <div className="text-lg font-bold text-gray-900">$12,500</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-600 font-medium">Orders</div>
            <div className="text-lg font-bold text-gray-900">145</div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="mt-4 px-3">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={`w-full justify-start px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-gray-900 text-white font-semibold shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <Icon size={20} className="mr-3" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  {item.badge && (
                    <Badge 
                      variant={item.badge === 'New' ? 'default' : 'secondary'} 
                      className={`text-xs px-2 py-0.5 ${
                        item.badge === 'New' 
                          ? 'bg-gray-900 text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
              </Button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
