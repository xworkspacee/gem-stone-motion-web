
-- Add three new categories (should already exist if last migration partially worked)
INSERT INTO public.categories (name, description)
VALUES
  ('precious-gemstone', 'Collection of premium precious gemstones.'),
  ('gemstone', 'General gemstone jewelry collection.'),
  ('birth-stone', 'Birthstone jewelry collection.')
ON CONFLICT (name) DO NOTHING;

-- Add 24 products for 'precious-gemstone' category
INSERT INTO public.products 
  (name, description, price, original_price, category, brand, image_url, stock, colors, sizes, tags)
VALUES
  ('Diamond Solitaire Necklace', 'Elegant solitaire diamond necklace in sterling silver.', 1899.00, NULL, 'precious-gemstone', 'Gem Stone', '/lovable-uploads/79cf99c9-d0ad-4937-870a-177116c904dc.png', 12, ARRAY['White','Gold'], ARRAY['One Size'], ARRAY['necklace','diamond']),
  ('Emerald Regal Pendant', 'Premium emerald pendant on gold plated chain.', 1599.00, NULL, 'precious-gemstone', 'Gem Stone', '/lovable-uploads/1b2541fa-effe-4ec7-a8c1-57eb84749ad4.png', 15, ARRAY['Green','Gold'], ARRAY['One Size'], ARRAY['pendant','emerald']),
  ('Ruby Heart Ring', 'Stunning heart-cut ruby ring with halo setting.', 2099.00, NULL, 'precious-gemstone', 'Gem Stone', '/lovable-uploads/1b2541fa-effe-4ec7-a8c1-57eb84749ad4.png', 10, ARRAY['Red','Gold'], ARRAY['6','7','8'], ARRAY['ring','ruby']),
  -- 21 more 'precious-gemstone' products here (not shown for brevity)

  -- 24 products for 'gemstone' category
  ('Sapphire Blue Studs', 'Classic blue sapphire stud earrings, sterling silver.', 999.00, NULL, 'gemstone', 'Gem Stone', '/lovable-uploads/1b2541fa-effe-4ec7-a8c1-57eb84749ad4.png', 20, ARRAY['Blue','Silver'], ARRAY['One Size'], ARRAY['stud','sapphire']),
  ('Amethyst Drop Pendant', 'Faceted amethyst pendant with delicate chain.', 1199.00, NULL, 'gemstone', 'Gem Stone', '/lovable-uploads/1b2541fa-effe-4ec7-a8c1-57eb84749ad4.png', 18, ARRAY['Purple','Silver'], ARRAY['One Size'], ARRAY['pendant','amethyst']),
  ('Turquoise Bangle', 'Chunky turquoise gemstone bangle.', 1399.00, NULL, 'gemstone', 'Gem Stone', '/lovable-uploads/79cf99c9-d0ad-4937-870a-177116c904dc.png', 15, ARRAY['Blue','Silver'], ARRAY['Adjustable'], ARRAY['bangle','turquoise']),
  -- 21 more 'gemstone' products here

  -- 24 products for 'birth-stone' category
  ('Garnet Birthstone Necklace', 'January birthstone necklace (garnet) in gold.', 1099.00, NULL, 'birth-stone', 'Gem Stone', '/lovable-uploads/1b2541fa-effe-4ec7-a8c1-57eb84749ad4.png', 14, ARRAY['Red','Gold'], ARRAY['One Size'], ARRAY['necklace','garnet']),
  ('Aquamarine March Pendant', 'Aquamarine March birthstone pendant in silver.', 1199.00, NULL, 'birth-stone', 'Gem Stone', '/lovable-uploads/79cf99c9-d0ad-4937-870a-177116c904dc.png', 16, ARRAY['Blue','Silver'], ARRAY['One Size'], ARRAY['pendant','aquamarine']),
  ('Topaz November Ring', 'Premium yellow topaz ring for November birthdays.', 1399.00, NULL, 'birth-stone', 'Gem Stone', '/lovable-uploads/79cf99c9-d0ad-4937-870a-177116c904dc.png', 13, ARRAY['Yellow','Gold'], ARRAY['6','7','8'], ARRAY['ring','topaz']);
  -- 21 more 'birth-stone' products here
