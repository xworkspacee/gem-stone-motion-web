
-- Create products table for product management
CREATE TABLE public.products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  category TEXT NOT NULL,
  brand TEXT,
  image_url TEXT,
  stock INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  tags TEXT[],
  colors TEXT[],
  sizes TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create orders table for order management
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  shipping_address JSONB,
  order_items JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create reviews table for customer reviews
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  product_id INTEGER REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create categories table for product categories
CREATE TABLE public.categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create brands table for product brands
CREATE TABLE public.brands (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Add some initial data
INSERT INTO public.categories (name, description) VALUES
('rings', 'Beautiful rings collection'),
('earrings', 'Elegant earrings collection'),
('necklaces', 'Stunning necklaces collection'),
('bracelets', 'Charming bracelets collection');

INSERT INTO public.brands (name, description) VALUES
('GemStone Premium', 'Premium jewelry brand'),
('Classic Collection', 'Classic and timeless designs'),
('Modern Elegance', 'Contemporary jewelry designs');

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.brands ENABLE ROW LEVEL SECURITY;

-- Create policies for products (public read, admin write)
CREATE POLICY "Anyone can view products" 
  ON public.products 
  FOR SELECT 
  TO public
  USING (true);

CREATE POLICY "Admin can manage products" 
  ON public.products 
  FOR ALL 
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'vanshichoudhary@gmail.com');

-- Create policies for orders
CREATE POLICY "Users can view their own orders" 
  ON public.orders 
  FOR SELECT 
  USING (auth.uid() = user_id OR auth.jwt() ->> 'email' = 'vanshichoudhary@gmail.com');

CREATE POLICY "Users can create their own orders" 
  ON public.orders 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admin can manage all orders" 
  ON public.orders 
  FOR ALL 
  USING (auth.jwt() ->> 'email' = 'vanshichoudhary@gmail.com');

-- Create policies for reviews
CREATE POLICY "Anyone can view reviews" 
  ON public.reviews 
  FOR SELECT 
  TO public
  USING (true);

CREATE POLICY "Users can create reviews" 
  ON public.reviews 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" 
  ON public.reviews 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Admin can manage all reviews" 
  ON public.reviews 
  FOR ALL 
  USING (auth.jwt() ->> 'email' = 'vanshichoudhary@gmail.com');

-- Create policies for categories and brands (public read, admin write)
CREATE POLICY "Anyone can view categories" 
  ON public.categories 
  FOR SELECT 
  TO public
  USING (true);

CREATE POLICY "Admin can manage categories" 
  ON public.categories 
  FOR ALL 
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'vanshichoudhary@gmail.com');

CREATE POLICY "Anyone can view brands" 
  ON public.brands 
  FOR SELECT 
  TO public
  USING (true);

CREATE POLICY "Admin can manage brands" 
  ON public.brands 
  FOR ALL 
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'vanshichoudhary@gmail.com');
