
-- Create admin_settings table for security settings and admin access control
CREATE TABLE public.admin_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key TEXT NOT NULL UNIQUE,
  setting_value JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create admin_users table to track who has admin access
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  granted_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  granted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  permissions JSONB DEFAULT '[]',
  UNIQUE(user_id)
);

-- Create payments table for payment tracking
CREATE TABLE public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  payment_method TEXT NOT NULL,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  transaction_id TEXT,
  payment_gateway TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create notifications table for admin notifications
CREATE TABLE public.notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'info',
  is_read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create analytics_data table for storing analytics metrics
CREATE TABLE public.analytics_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_name TEXT NOT NULL,
  metric_value DECIMAL(15,2) NOT NULL,
  metric_date DATE NOT NULL DEFAULT CURRENT_DATE,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.admin_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_data ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_settings (only admins can access)
CREATE POLICY "Only admins can view admin settings" 
  ON public.admin_settings 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      JOIN public.profiles p ON au.user_id = p.id 
      WHERE p.email = auth.jwt() ->> 'email' AND au.is_active = true
    )
  );

CREATE POLICY "Only admins can manage admin settings" 
  ON public.admin_settings 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      JOIN public.profiles p ON au.user_id = p.id 
      WHERE p.email = auth.jwt() ->> 'email' AND au.is_active = true
    )
  );

-- Create policies for admin_users (only admins can access)
CREATE POLICY "Only admins can view admin users" 
  ON public.admin_users 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      JOIN public.profiles p ON au.user_id = p.id 
      WHERE p.email = auth.jwt() ->> 'email' AND au.is_active = true
    )
  );

CREATE POLICY "Only admins can manage admin users" 
  ON public.admin_users 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      JOIN public.profiles p ON au.user_id = p.id 
      WHERE p.email = auth.jwt() ->> 'email' AND au.is_active = true
    )
  );

-- Create policies for payments (admins can see all, users can see their own)
CREATE POLICY "Users can view their own payments" 
  ON public.payments 
  FOR SELECT 
  USING (
    auth.uid() = user_id OR 
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      JOIN public.profiles p ON au.user_id = p.id 
      WHERE p.email = auth.jwt() ->> 'email' AND au.is_active = true
    )
  );

CREATE POLICY "Only admins can manage payments" 
  ON public.payments 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      JOIN public.profiles p ON au.user_id = p.id 
      WHERE p.email = auth.jwt() ->> 'email' AND au.is_active = true
    )
  );

-- Create policies for notifications
CREATE POLICY "Users can view their own notifications" 
  ON public.notifications 
  FOR SELECT 
  USING (
    auth.uid() = user_id OR user_id IS NULL OR
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      JOIN public.profiles p ON au.user_id = p.id 
      WHERE p.email = auth.jwt() ->> 'email' AND au.is_active = true
    )
  );

CREATE POLICY "Only admins can manage notifications" 
  ON public.notifications 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      JOIN public.profiles p ON au.user_id = p.id 
      WHERE p.email = auth.jwt() ->> 'email' AND au.is_active = true
    )
  );

-- Create policies for analytics_data (only admins can access)
CREATE POLICY "Only admins can view analytics" 
  ON public.analytics_data 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      JOIN public.profiles p ON au.user_id = p.id 
      WHERE p.email = auth.jwt() ->> 'email' AND au.is_active = true
    )
  );

CREATE POLICY "Only admins can manage analytics" 
  ON public.analytics_data 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au 
      JOIN public.profiles p ON au.user_id = p.id 
      WHERE p.email = auth.jwt() ->> 'email' AND au.is_active = true
    )
  );

-- Insert initial admin user (the current admin email)
INSERT INTO public.admin_users (user_id, granted_by, permissions)
SELECT 
  p.id,
  p.id,
  '["full_access"]'::jsonb
FROM public.profiles p 
WHERE p.email = 'vanshichoudhary40@gmail.com'
ON CONFLICT (user_id) DO NOTHING;

-- Insert some sample analytics data
INSERT INTO public.analytics_data (metric_name, metric_value, metric_date) VALUES
('daily_revenue', 1250.00, CURRENT_DATE),
('daily_orders', 15, CURRENT_DATE),
('daily_users', 8, CURRENT_DATE),
('daily_revenue', 980.00, CURRENT_DATE - INTERVAL '1 day'),
('daily_orders', 12, CURRENT_DATE - INTERVAL '1 day'),
('daily_users', 6, CURRENT_DATE - INTERVAL '1 day'),
('daily_revenue', 1450.00, CURRENT_DATE - INTERVAL '2 days'),
('daily_orders', 18, CURRENT_DATE - INTERVAL '2 days'),
('daily_users', 10, CURRENT_DATE - INTERVAL '2 days');

-- Insert some sample notifications
INSERT INTO public.notifications (title, message, type) VALUES
('New Order Received', 'Order #12345 has been placed', 'success'),
('Low Stock Alert', 'Diamond Ring is running low on stock', 'warning'),
('System Update', 'Scheduled maintenance tonight at 2 AM', 'info');
