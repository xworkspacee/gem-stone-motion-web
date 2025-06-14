
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, Package, ShoppingCart, DollarSign, ArrowUpIcon, ArrowDownIcon, Activity, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const AdminDashboard = () => {
  // Fetch real dashboard data from Supabase
  const { data: stats, isLoading } = useQuery({
    queryKey: ['admin-dashboard-stats'],
    queryFn: async () => {
      const [products, orders, reviews, profiles, payments, analytics] = await Promise.all([
        supabase.from('products').select('*'),
        supabase.from('orders').select('*'),
        supabase.from('reviews').select('*'),
        supabase.from('profiles').select('*'),
        supabase.from('payments').select('*'),
        supabase.from('analytics_data').select('*').order('metric_date', { ascending: false })
      ]);

      const totalRevenue = orders.data?.reduce((sum, order) => sum + parseFloat(String(order.total_amount || '0')), 0) || 0;
      const totalPayments = payments.data?.reduce((sum, payment) => sum + parseFloat(String(payment.amount || '0')), 0) || 0;
      
      // Process analytics data for charts
      const revenueData = analytics.data?.filter(a => a.metric_name === 'daily_revenue').slice(0, 7).reverse() || [];
      const ordersData = analytics.data?.filter(a => a.metric_name === 'daily_orders').slice(0, 7).reverse() || [];
      
      const chartData = revenueData.map((revenue, index) => ({
        date: new Date(revenue.metric_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        revenue: parseFloat(String(revenue.metric_value)),
        orders: ordersData[index] ? parseFloat(String(ordersData[index].metric_value)) : 0
      }));
      
      return {
        totalProducts: products.data?.length || 0,
        totalOrders: orders.data?.length || 0,
        totalUsers: profiles.data?.length || 0,
        totalReviews: reviews.data?.length || 0,
        totalRevenue,
        totalPayments,
        orders: orders.data || [],
        products: products.data || [],
        chartData
      };
    }
  });

  const { data: notifications } = useQuery({
    queryKey: ['admin-notifications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data;
    }
  });

  // Sample data for other charts
  const categoryData = [
    { name: 'Rings', value: stats?.products.filter(p => p.category === 'rings').length || 0, color: '#374151' },
    { name: 'Necklaces', value: stats?.products.filter(p => p.category === 'necklaces').length || 0, color: '#6B7280' },
    { name: 'Earrings', value: stats?.products.filter(p => p.category === 'earrings').length || 0, color: '#9CA3AF' },
    { name: 'Bracelets', value: stats?.products.filter(p => p.category === 'bracelets').length || 0, color: '#D1D5DB' },
  ];

  const orderStatusData = [
    { status: 'Pending', count: stats?.orders.filter(o => o.status === 'pending').length || 0, color: '#f59e0b' },
    { status: 'Processing', count: stats?.orders.filter(o => o.status === 'processing').length || 0, color: '#3b82f6' },
    { status: 'Shipped', count: stats?.orders.filter(o => o.status === 'shipped').length || 0, color: '#8b5cf6' },
    { status: 'Delivered', count: stats?.orders.filter(o => o.status === 'delivered').length || 0, color: '#10b981' },
  ];

  const performanceData = [
    { metric: 'Sales Target', current: 75, target: 100 },
    { metric: 'Customer Satisfaction', current: 92, target: 100 },
    { metric: 'Product Quality', current: 88, target: 100 },
    { metric: 'Delivery Time', current: 95, target: 100 },
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

      {/* Stats Cards with Real Data */}
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
              Sales Analytics (Real Data)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={stats?.chartData || []}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#374151" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#374151" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" />
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
                <Line type="monotone" dataKey="orders" stroke="#6B7280" strokeWidth={2} />
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

      {/* Recent Activity Feed with Real Notifications */}
      <Card className="shadow-lg border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Clock className="h-5 w-5 text-gray-700" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications?.map((notification) => (
              <div key={notification.id} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 border border-gray-200">
                <div className={`p-2 rounded-full ${
                  notification.type === 'success' ? 'bg-green-100 text-green-600' :
                  notification.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {notification.type === 'success' ? <CheckCircle className="h-4 w-4" /> :
                   notification.type === 'warning' ? <AlertCircle className="h-4 w-4" /> :
                   <Activity className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                  <p className="text-xs text-gray-500">{notification.message}</p>
                  <p className="text-xs text-gray-400">{new Date(notification.created_at).toLocaleDateString()}</p>
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
