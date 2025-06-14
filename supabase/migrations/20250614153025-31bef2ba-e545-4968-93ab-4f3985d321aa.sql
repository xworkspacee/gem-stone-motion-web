
-- Create wishlist_items table
CREATE TABLE public.wishlist_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  product_id INTEGER NOT NULL,
  product_name TEXT NOT NULL,
  product_price TEXT NOT NULL,
  product_image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.wishlist_items ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for wishlist_items
CREATE POLICY "Users can view their own wishlist items" 
  ON public.wishlist_items 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own wishlist items" 
  ON public.wishlist_items 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own wishlist items" 
  ON public.wishlist_items 
  FOR DELETE 
  USING (auth.uid() = user_id);
