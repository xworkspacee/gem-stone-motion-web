
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, Package, ShoppingCart, DollarSign, ArrowUpIcon, ArrowDownIcon, Activity, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const AdminDashboard = () => {
  // Fetch dashboard data
  const { data: stats, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [products, orders, reviews] = await Promise.all([
        supabase.from('products').select('*'),
        supabase.from('orders').select('*'),
        supabase.from('reviews').select('*')
      ]);

      const totalRevenue = orders.data?.reduce((sum, order) => sum + parseFloat(String(order.total_amount || '0')), 0) || 0;
      
      return {
        totalProducts: products.data?.length || 0,
        totalOrders: orders.data?.length || 0,
        totalUsers: 0,
        totalReviews: reviews.data?.length || 0,
        totalRevenue,
        orders: orders.data || [],
        products: products.data || []
      };
    }
  });

  // Enhanced sample data for charts
  const salesData = [
    { month: 'Jan', sales: 4000, revenue: 2400, growth: 12 },
    { month: 'Feb', sales: 3000, revenue: 1398, growth: -8 },
    { month: 'Mar', sales: 2000, revenue: 9800, growth: 25 },
    { month: 'Apr', sales: 2780, revenue: 3908, growth: 15 },
    { month: 'May', sales: 1890, revenue: 4800, growth: 20 },
    { month: 'Jun', sales: 2390, revenue: 3800, growth: 18 },
  ];

  const categoryData = [
    { name: 'Rings', value: 400, color: '#374151' },
    { name: 'Necklaces', value: 300, color: '#6B7280' },
    { name: 'Earrings', value: 200, color: '#9CA3AF' },
    { name: 'Bracelets', value: 100, color: '#D1D5DB' },
  ];

  const orderStatusData = [
    { status: 'Pending', count: 12, color: '#f59e0b' },
    { status: 'Processing', count: 8, color: '#3b82f6' },
    { status: 'Shipped', count: 15, color: '#8b5cf6' },
    { status: 'Delivered', count: 25, color: '#10b981' },
  ];

  const performanceData = [
    { metric: 'Sales Target', current: 75, target: 100 },
    { metric: 'Customer Satisfaction', current: 92, target: 100 },
    { metric: 'Product Quality', current: 88, target: 100 },
    { metric: 'Delivery Time', current: 95, target: 100 },
  ];

  const recentActivities = [
    { id: 1, type: 'order', message: 'New order #1234 received', time: '2 minutes ago', status: 'success' },
    { id: 2, type: 'product', message: 'Diamond Ring stock low', time: '5 minutes ago', status: 'warning' },
    { id: 3, type: 'user', message: 'New customer registered', time: '10 minutes ago', status: 'info' },
    { id: 4, type: 'review', message: '5-star review received', time: '15 minutes ago', status: 'success' },
    { id: 5, type: 'alert', message: 'Server maintenance scheduled', time: '1 hour ago', status: 'warning' },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 bg-white min-h-screen">
      {/* Header with Welcome Message */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Stats Cards with Enhanced Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Users</CardTitle>
            <div className="p-2 bg-gray-100 rounded-lg">
              <Users className="h-5 w-5 text-gray-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-1 text-gray-900">{stats?.totalUsers}</div>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              <span>+5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Products</CardTitle>
            <div className="p-2 bg-gray-100 rounded-lg">
              <Package className="h-5 w-5 text-gray-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-1 text-gray-900">{stats?.totalProducts}</div>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              <span>+12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
            <div className="p-2 bg-gray-100 rounded-lg">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-1 text-gray-900">{stats?.totalOrders}</div>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              <span>+18% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <div className="p-2 bg-gray-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-gray-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-1 text-gray-900">${stats?.totalRevenue?.toFixed(2)}</div>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              <span>+23% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2 shadow-lg border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Activity className="h-5 w-5 text-gray-700" />
              Sales Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#374151" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#374151" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }} 
                />
                <Area type="monotone" dataKey="revenue" stroke="#374151" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={3} />
                <Line type="monotone" dataKey="sales" stroke="#6B7280" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {performanceData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900">{item.metric}</span>
                  <span className="text-gray-600">{item.current}%</span>
                </div>
                <Progress value={item.current} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="shadow-lg border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Product Categories Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Order Status Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={orderStatusData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }} 
                />
                <Bar dataKey="count" fill="#374151" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Feed */}
      <Card className="shadow-lg border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Clock className="h-5 w-5 text-gray-700" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 border border-gray-200">
                <div className={`p-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-100 text-green-600' :
                  activity.status === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {activity.status === 'success' ? <CheckCircle className="h-4 w-4" /> :
                   activity.status === 'warning' ? <AlertCircle className="h-4 w-4" /> :
                   <Activity className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
