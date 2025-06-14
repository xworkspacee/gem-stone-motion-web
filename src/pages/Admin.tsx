
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminDashboard from '@/components/admin/AdminDashboard';
import UserManagement from '@/components/admin/UserManagement';
import ProductManagement from '@/components/admin/ProductManagement';
import OrderManagement from '@/components/admin/OrderManagement';
import ReviewsManagement from '@/components/admin/ReviewsManagement';
import PaymentManagement from '@/components/admin/PaymentManagement';
import SecuritySettings from '@/components/admin/SecuritySettings';
import NotificationManagement from '@/components/admin/NotificationManagement';
import AddProduct from '@/components/admin/AddProduct';
import { Moon, Sun, Search, MessageSquare, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Admin = () => {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-900 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading Admin Panel...</p>
        </div>
      </div>
    );
  }

  // Check if user is admin
  if (!user || user.email !== 'vanshichoudhary40@gmail.com') {
    return <Navigate to="/auth" replace />;
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'analytics':
        return <AdminDashboard />; // For now, same as dashboard
      case 'users':
        return <UserManagement />;
      case 'products':
        return <ProductManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'reviews':
        return <ReviewsManagement />;
      case 'add-product':
        return <AddProduct />;
      case 'reports':
        return <div className="p-6"><h2 className="text-2xl font-bold">Reports Coming Soon</h2></div>;
      case 'notifications':
        return <NotificationManagement />;
      case 'payments':
        return <PaymentManagement />;
      case 'security':
        return <SecuritySettings />;
      case 'settings':
        return <div className="p-6"><h2 className="text-2xl font-bold">System Settings</h2></div>;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${darkMode ? 'dark' : ''}`}>
      <div className="flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Enhanced Top Header */}
          <header className="bg-white shadow-md border-b border-gray-200">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    placeholder="Search anything..." 
                    className="pl-10 w-80 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative"
                >
                  <MessageSquare className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                    3
                  </Badge>
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="text-gray-600"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </Button>

                <Button variant="ghost" size="sm">
                  <Settings className="h-5 w-5" />
                </Button>
                
                <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">Admin User</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-semibold">A</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
            {renderActiveComponent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
