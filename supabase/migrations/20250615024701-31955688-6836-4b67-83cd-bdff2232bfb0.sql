
-- STEP 1: Add black-tourmaline category (if not present)
INSERT INTO public.categories (name, description)
VALUES
  ('black-tourmaline', 'Premium Black Tourmaline Collection')
ON CONFLICT (name) DO NOTHING;

-- STEP 2: Add 24 sample black-tourmaline products
INSERT INTO public.products (
  name, description, price, original_price, category, brand, image_url, stock, colors, sizes, tags
) VALUES
  ('Black Tourmaline Gemstone Necklace', 'Premium natural black tourmaline necklace. Protects and enhances style.', 2199.00, NULL, 'black-tourmaline', 'GemStone Premium', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 10, ARRAY['Black'], ARRAY['One Size'], ARRAY['premium','gemstone']),
  ('Faceted Black Tourmaline Bracelet', 'Handmade faceted tourmaline stones bracelet.', 1499.00, NULL, 'black-tourmaline', 'Classic Collection', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 20, ARRAY['Black'], ARRAY['One Size'], ARRAY['stone','bracelet']),
  ('Tourmaline Silver Pendant', 'Polished black tourmaline on sterling silver chain.', 1799.00, NULL, 'black-tourmaline', 'GemStone Premium', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 15, ARRAY['Black'], ARRAY['One Size'], ARRAY['pendant','necklace']),
  ('Tourmaline Nugget Choker', 'Trendy nugget-style choker with raw tourmaline.', 2499.00, NULL, 'black-tourmaline', 'Modern Elegance', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 12, ARRAY['Black'], ARRAY['Adjustable'], ARRAY['choker','gemstone']),
  ('Black Tourmaline Statement Ring', 'Make a bold statement with this large tourmaline ring.', 1899.00, NULL, 'black-tourmaline', 'Classic Collection', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 18, ARRAY['Black'], ARRAY['6','7','8'], ARRAY['ring','statement']),
  ('Delicate Black Tourmaline Earrings', 'Minimalist sterling silver earrings with black tourmaline.', 1099.00, NULL, 'black-tourmaline', 'Modern Elegance', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 16, ARRAY['Black'], ARRAY['One Size'], ARRAY['earrings','minimalist']),
  ('Raw Tourmaline Crystal Bracelet', 'Natural raw tourmaline crystals on elastic bracelet.', 1399.00, NULL, 'black-tourmaline', 'GemStone Premium', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 10, ARRAY['Black'], ARRAY['Adjustable'], ARRAY['bracelet','raw']),
  ('Chunky Tourmaline Chain', 'Bold chunky chain with black tourmaline centerpiece.', 2999.00, NULL, 'black-tourmaline', 'Classic Collection', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 9, ARRAY['Black'], ARRAY['One Size'], ARRAY['necklace','chunky']),
  ('Tourmaline Dainty Anklet', 'Dainty and graceful anklet with tiny tourmaline beads.', 899.00, NULL, 'black-tourmaline', 'GemStone Premium', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 12, ARRAY['Black'], ARRAY['One Size'], ARRAY['anklet']),
  ('Square Tourmaline Studs', 'Simple and modern square tourmaline stud earrings.', 1199.00, NULL, 'black-tourmaline', 'Modern Elegance', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 23, ARRAY['Black'], ARRAY['One Size'], ARRAY['studs','earrings']),
  ('Tourmaline & Silver Bangle', 'Solid silver bangle set with black tourmalines.', 2599.00, NULL, 'black-tourmaline', 'Classic Collection', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 14, ARRAY['Black'], ARRAY['Adjustable'], ARRAY['bangle','silver']),
  ('Double Stone Tourmaline Ring', 'Dual black tourmaline stones, adjustable ring.', 1699.00, NULL, 'black-tourmaline', 'GemStone Premium', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 11, ARRAY['Black'], ARRAY['6','7','8'], ARRAY['ring']),
  ('Multi-chain Tourmaline Necklace', 'Stylish layered necklace with multiple stones.', 2899.00, NULL, 'black-tourmaline', 'Modern Elegance', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 14, ARRAY['Black'], ARRAY['One Size'], ARRAY['multi-chain','necklace']),
  ('Geometric Tourmaline Earrings', 'Edgy geometric cut tourmaline earrings.', 1299.00, NULL, 'black-tourmaline', 'Classic Collection', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 16, ARRAY['Black'], ARRAY['One Size'], ARRAY['geometric','earrings']),
  ('Raw Nugget Tourmaline Ring', 'Natural, unpolished tourmaline nugget ring.', 1499.00, NULL, 'black-tourmaline', 'GemStone Premium', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 7, ARRAY['Black'], ARRAY['6','7'], ARRAY['ring','nugget']),
  ('Deluxe Tourmaline Brooch', 'Sophisticated brooch for formal outfits.', 1799.00, NULL, 'black-tourmaline', 'Modern Elegance', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 10, ARRAY['Black'], ARRAY['One Size'], ARRAY['brooch']),
  ('Tourmaline Gemstone Cuff', 'Contemporary open cuff with premium black tourmaline.', 2399.00, NULL, 'black-tourmaline', 'Classic Collection', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 10, ARRAY['Black'], ARRAY['Adjustable'], ARRAY['cuff']),
  ('Charm Anklet with Tourmaline', 'Playful anklet features beautiful black charms.', 999.00, NULL, 'black-tourmaline', 'GemStone Premium', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 13, ARRAY['Black'], ARRAY['One Size'], ARRAY['charm','anklet']),
  ('Silver Tourmaline Hoop Earrings', 'Bold hoops for evening occasions.', 1699.00, NULL, 'black-tourmaline', 'Modern Elegance', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 18, ARRAY['Black'], ARRAY['One Size'], ARRAY['hoops','earrings']),
  ('Tourmaline Bead Necklace', 'Rows of small, polished beads.', 1899.00, NULL, 'black-tourmaline', 'Classic Collection', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 18, ARRAY['Black'], ARRAY['One Size'], ARRAY['beads','necklace']),
  ('Tourmaline Cluster Pendant', 'Clustered arrangement provides unique style.', 1599.00, NULL, 'black-tourmaline', 'GemStone Premium', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 19, ARRAY['Black'], ARRAY['One Size'], ARRAY['cluster','pendant']),
  ('Elegant Tourmaline Tie Pin', 'Sharp looks for special events.', 899.00, NULL, 'black-tourmaline', 'Modern Elegance', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 20, ARRAY['Black'], ARRAY['One Size'], ARRAY['tiepin']),
  ('Mens Black Tourmaline Ring', 'Masculine and striking, unique gem design.', 1999.00, NULL, 'black-tourmaline', 'Classic Collection', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 15, ARRAY['Black'], ARRAY['8','9'], ARRAY['mens','ring']),
  ('Tourmaline Infinity necklace', 'Symbolic infinity design using gems.', 2499.00, NULL, 'black-tourmaline', 'Modern Elegance', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 11, ARRAY['Black'], ARRAY['One Size'], ARRAY['infinity','necklace']),
  ('Tourmaline Bead Stack Bracelet', 'Stackable bead bracelets for everyday wear.', 1299.00, NULL, 'black-tourmaline', 'GemStone Premium', '/lovable-uploads/21a58c59-a1ef-4b66-8d3a-4b39995277a8.png', 22, ARRAY['Black'], ARRAY['One Size'], ARRAY['stack','bracelet']);
