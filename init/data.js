const sampleListings = [
  {
    "title": "Cozy Mountain Cabin",
    "description": "Cozy Mountain Cabin located in Vancouver, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "mountain_cabin_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1520637836862-4d197d17c27a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "cabin_interior_living.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "mountain_view_window.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "rustic_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "cabin_kitchen.jpg"
      }
    ],
    "price": 247,
    "location": "Vancouver",
    "country": "Canada",
    "property_types": ["Cottage"],
    "guests": 8,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 3,
    "amenities": ["Pool", "Heating", "Wifi"]
  },
  {
    "title": "Urban Studio Apartment",
    "description": "Urban Studio Apartment located in Queenstown, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "modern_studio_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "studio_living_space.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "compact_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "modern_bathroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "city_view_balcony.jpg"
      }
    ],
    "price": 306,
    "location": "Queenstown",
    "country": "New Zealand",
    "property_types": ["Cabin", "Treehouse", "Cottage"],
    "guests": 6,
    "bedrooms": 4,
    "beds": 2,
    "bathrooms": 4,
    "amenities": ["Pet Friendly", "Washing Machine", "Balcony"]
  },
  {
    "title": "Charming Lakeside Cottage",
    "description": "Charming Lakeside Cottage located in Manali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "lakeside_cottage_view.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "cottage_living_room.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "lake_view_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "lodge_dining.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "mountain_lake_panorama.jpg"
      }
    ],
    "price": 297,
    "location": "Manali",
    "country": "India",
    "property_types": ["Cottage", "Bungalow"],
    "guests": 4,
    "bedrooms": 1,
    "beds": 5,
    "bathrooms": 3,
    "amenities": ["Pet Friendly", "Air conditioning", "Washing Machine", "Heating", "TV", "Parking"]
  },
  {
    "title": "Tropical Island Hut",
    "description": "Tropical Island Hut located in Paris, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "tropical_hut.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "island_hut_interior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "tropical_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "beach_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "island_beach_view.jpg"
      }
    ],
    "price": 346,
    "location": "Paris",
    "country": "France",
    "property_types": ["Apartment", "Studio", "Bungalow"],
    "guests": 2,
    "bedrooms": 5,
    "beds": 5,
    "bathrooms": 1,
    "amenities": ["Air conditioning", "Kitchen", "Balcony"]
  },
  {
    "title": "Bright Modern Flat",
    "description": "Bright Modern Flat located in Bali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "modern_flat_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "bright_living_space.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "modern_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "contemporary_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "rooftop_pool.jpg"
      }
    ],
    "price": 328,
    "location": "Bali",
    "country": "Indonesia",
    "property_types": ["Bungalow", "Studio"],
    "guests": 9,
    "bedrooms": 5,
    "beds": 4,
    "bathrooms": 1,
    "amenities": ["Air conditioning", "Pool", "Heating", "Pet Friendly"]
  },
  {
    "title": "Serene Garden Home",
    "description": "Serene Garden Home located in Queenstown, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "garden_home_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "garden_home_living.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "garden_view_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "sunroom_dining.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "botanical_garden.jpg"
      }
    ],
    "price": 435,
    "location": "Queenstown",
    "country": "New Zealand",
    "property_types": ["Bungalow", "Loft"],
    "guests": 4,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 2,
    "amenities": ["Wifi", "Washing Machine", "Air conditioning", "Pet Friendly", "Heating"]
  },
  {
    "title": "Luxurious Hillside Villa",
    "description": "Luxurious Hillside Villa located in Manali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "hillside_villa_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "luxury_villa_interior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "hillside_master_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "chef_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "infinity_pool_view.jpg"
      }
    ],
    "price": 331,
    "location": "Manali",
    "country": "India",
    "property_types": ["Studio"],
    "guests": 8,
    "bedrooms": 4,
    "beds": 6,
    "bathrooms": 3,
    "amenities": ["Balcony", "Pet Friendly", "Heating", "Pool", "Parking", "Kitchen", "Washing Machine"]
  },
  {
    "title": "Coastal Fisherman's Shack",
    "description": "Coastal Fisherman's Shack located in Manali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "fisherman_shack.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "coastal_interior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "nautical_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "seaside_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "fishing_dock.jpg"
      }
    ],
    "price": 96,
    "location": "Manali",
    "country": "India",
    "property_types": ["Loft", "Bungalow", "Cabin"],
    "guests": 9,
    "bedrooms": 3,
    "beds": 2,
    "bathrooms": 1,
    "amenities": ["TV", "Wifi", "Pet Friendly", "Pool", "Washing Machine", "Air conditioning", "Kitchen"]
  },
  {
    "title": "Remote Arctic Dome",
    "description": "Remote Arctic Dome located in Manali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "arctic_dome_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "dome_interior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "panoramic_dome_view.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "arctic_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "northern_lights_view.jpg"
      }
    ],
    "price": 484,
    "location": "Manali",
    "country": "India",
    "property_types": ["Treehouse"],
    "guests": 10,
    "bedrooms": 3,
    "beds": 2,
    "bathrooms": 4,
    "amenities": ["Pool", "Air conditioning", "Pet Friendly", "Parking"]
  },
  {
    "title": "Mediterranean Stone House",
    "description": "Mediterranean Stone House located in Queenstown, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "stone_house_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "mediterranean_living.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "stone_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "rustic_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "mediterranean_terrace.jpg"
      }
    ],
    "price": 359,
    "location": "Queenstown",
    "country": "New Zealand",
    "property_types": ["Apartment", "Villa"],
    "guests": 3,
    "bedrooms": 4,
    "beds": 4,
    "bathrooms": 1,
    "amenities": ["Pet Friendly", "Air conditioning", "Kitchen"]
  },
  {
    "title": "Sunny Patio Apartment",
    "description": "Sunny Patio Apartment located in Vancouver, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "patio_apartment.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "sunny_living_room.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "bright_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "open_plan_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "private_patio.jpg"
      }
    ],
    "price": 456,
    "location": "Vancouver",
    "country": "Canada",
    "property_types": ["Villa", "Apartment"],
    "guests": 2,
    "bedrooms": 4,
    "beds": 6,
    "bathrooms": 3,
    "amenities": ["Balcony", "Pool", "Washing Machine", "Kitchen"]
  },
  {
    "title": "Modern Industrial Loft",
    "description": "Modern Industrial Loft located in Tokyo, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "industrial_loft_building.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "industrial_open_space.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "loft_bedroom_exposed_brick.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "industrial_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "urban_rooftop.jpg"
      }
    ],
    "price": 388,
    "location": "Tokyo",
    "country": "Japan",
    "property_types": ["Cottage", "Bungalow", "Loft"],
    "guests": 2,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 1,
    "amenities": ["Wifi", "Balcony", "Washing Machine", "TV", "Kitchen", "Pool", "Parking"]
  },
  {
    "title": "Countryside Windmill Stay",
    "description": "Countryside Windmill Stay located in Barcelona, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "windmill_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "windmill_interior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "circular_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "windmill_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "countryside_panorama.jpg"
      }
    ],
    "price": 468,
    "location": "Barcelona",
    "country": "Spain",
    "property_types": ["Cabin"],
    "guests": 4,
    "bedrooms": 5,
    "beds": 5,
    "bathrooms": 2,
    "amenities": ["Wifi", "Balcony", "Parking", "TV", "Pool"]
  },
  {
    "title": "Peaceful Rice Field Villa",
    "description": "Peaceful Rice Field Villa located in Manali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "rice_field_villa.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "villa_living_terrace.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "rice_field_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "traditional_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "rice_terrace_pool.jpg"
      }
    ],
    "price": 161,
    "location": "Manali",
    "country": "India",
    "property_types": ["Loft", "Bungalow"],
    "guests": 3,
    "bedrooms": 2,
    "beds": 1,
    "bathrooms": 2,
    "amenities": ["Balcony", "Pool", "Wifi", "Washing Machine", "Heating"]
  },
  {
    "title": "Downtown Artist Loft",
    "description": "Downtown Artist Loft located in Paris, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "artist_loft_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "artist_studio_space.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "creative_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "art_loft_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "paris_skyline_view.jpg"
      }
    ],
    "price": 156,
    "location": "Paris",
    "country": "France",
    "property_types": ["Loft", "Villa", "Studio"],
    "guests": 4,
    "bedrooms": 2,
    "beds": 5,
    "bathrooms": 3,
    "amenities": ["Air conditioning", "Balcony", "Kitchen", "Wifi", "Parking", "Heating", "Pet Friendly"]
  },
  {
    "title": "Eco-Friendly Tiny House",
    "description": "Eco-Friendly Tiny House located in Manali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "tiny_house_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "tiny_house_interior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "loft_tiny_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "compact_eco_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "eco_garden_deck.jpg"
      }
    ],
    "price": 293,
    "location": "Manali",
    "country": "India",
    "property_types": ["Treehouse", "Loft", "Villa"],
    "guests": 2,
    "bedrooms": 1,
    "beds": 4,
    "bathrooms": 1,
    "amenities": ["Air conditioning", "Washing Machine", "Balcony"]
  },
  {
    "title": "Skyline View Apartment",
    "description": "Skyline View Apartment located in Goa, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "skyline_apartment.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "skyline_living_room.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "city_view_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "apartment_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7eded433=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "lake_view_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "cottage_kitchen_dining.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "lake_dock_view.jpg"
      }
    ],
    "price": 255,
    "location": "Manali",
    "country": "India",
    "property_types": ["Apartment", "Cabin"],
    "guests": 5,
    "bedrooms": 5,
    "beds": 5,
    "bathrooms": 4,
    "amenities": ["Washing Machine", "Balcony", "Parking", "TV"]
  },
  {
    "title": "Spacious City Loft",
    "description": "Spacious City Loft located in Goa, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "industrial_loft_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "loft_open_living.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "loft_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "modern_loft_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "loft_workspace.jpg"
      }
    ],
    "price": 224,
    "location": "Goa",
    "country": "India",
    "property_types": ["Cottage"],
    "guests": 6,
    "bedrooms": 4,
    "beds": 4,
    "bathrooms": 3,
    "amenities": ["Washing Machine", "Kitchen", "Pet Friendly", "Air conditioning", "Wifi", "Pool", "Parking"]
  },
  {
    "title": "Modern Beach House",
    "description": "Modern Beach House located in Bali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "beach_house_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "beach_house_living.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "ocean_view_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "beach_house_pool.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "beach_access.jpg"
      }
    ],
    "price": 80,
    "location": "Bali",
    "country": "Indonesia",
    "property_types": ["Villa", "Bungalow"],
    "guests": 7,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3,
    "amenities": ["Balcony", "Parking", "Pool", "TV"]
  },
  {
    "title": "Rustic Countryside Bungalow",
    "description": "Rustic Countryside Bungalow located in New York, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "countryside_bungalow.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "rustic_interior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "country_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "farmhouse_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "countryside_garden.jpg"
      }
    ],
    "price": 383,
    "location": "New York",
    "country": "USA",
    "property_types": ["Cabin", "Treehouse", "Studio"],
    "guests": 7,
    "bedrooms": 1,
    "beds": 5,
    "bathrooms": 1,
    "amenities": ["TV", "Pool", "Pet Friendly", "Washing Machine"]
  },
  {
    "title": "Luxury Penthouse",
    "description": "Luxury Penthouse located in Manali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "penthouse_skyline.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "luxury_living_room.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "penthouse_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "gourmet_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "penthouse_terrace.jpg"
      }
    ],
    "price": 108,
    "location": "Manali",
    "country": "India",
    "property_types": ["Apartment", "Bungalow"],
    "guests": 3,
    "bedrooms": 4,
    "beds": 1,
    "bathrooms": 2,
    "amenities": ["Balcony", "Pool", "Wifi", "Air conditioning"]
  },
  {
    "title": "Classic Colonial Home",
    "description": "Classic Colonial Home located in Vancouver, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "colonial_house_front.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "colonial_foyer.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "formal_dining_room.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "master_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "colonial_garden.jpg"
      }
    ],
    "price": 293,
    "location": "Vancouver",
    "country": "Canada",
    "property_types": ["Villa", "Cabin", "Studio"],
    "guests": 1,
    "bedrooms": 1,
    "beds": 6,
    "bathrooms": 4,
    "amenities": ["Kitchen", "Parking", "Wifi", "TV"]
  },
  {
    "title": "Elegant Beachfront Villa",
    "description": "Elegant Beachfront Villa located in Bali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "beachfront_villa.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "villa_living_area.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "beachfront_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "infinity_pool.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "private_beach.jpg"
      }
    ],
    "price": 243,
    "location": "Bali",
    "country": "Indonesia",
    "property_types": ["Studio", "Cabin"],
    "guests": 3,
    "bedrooms": 1,
    "beds": 3,
    "bathrooms": 3,
    "amenities": ["Air conditioning", "Pet Friendly", "Balcony", "Kitchen"]
  },
  {
    "title": "Hidden Jungle Retreat",
    "description": "Hidden Jungle Retreat located in Bali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "jungle_retreat_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "jungle_living_space.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "tropical_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "outdoor_dining.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "jungle_pool.jpg"
      }
    ],
    "price": 487,
    "location": "Bali",
    "country": "Indonesia",
    "property_types": ["Apartment"],
    "guests": 6,
    "bedrooms": 1,
    "beds": 3,
    "bathrooms": 4,
    "amenities": ["Wifi", "Air conditioning", "Pet Friendly", "TV", "Kitchen", "Pool"]
  },
  {
    "title": "Historic Castle Room",
    "description": "Historic Castle Room located in New York, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1520637736862-4d2bde058b50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "castle_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "grand_hall.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "castle_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "castle_library.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "castle_gardens.jpg"
      }
    ],
    "price": 436,
    "location": "New York",
    "country": "USA",
    "property_types": ["Loft", "Apartment"],
    "guests": 8,
    "bedrooms": 5,
    "beds": 4,
    "bathrooms": 4,
    "amenities": ["Air conditioning", "Heating", "Parking", "Pool", "Balcony", "Pet Friendly"]
  },
  {
    "title": "Minimalist Desert Shelter",
    "description": "Minimalist Desert Shelter located in Barcelona, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "desert_shelter.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "minimalist_interior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "desert_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "panoramic_desert_view.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "desert_terrace.jpg"
      }
    ],
    "price": 349,
    "location": "Barcelona",
    "country": "Spain",
    "property_types": ["Apartment", "Treehouse", "Villa"],
    "guests": 2,
    "bedrooms": 5,
    "beds": 6,
    "bathrooms": 2,
    "amenities": ["TV", "Wifi", "Pet Friendly", "Balcony", "Air conditioning"]
  },
  {
    "title": "Art Deco Downtown Condo",
    "description": "Art Deco Downtown Condo located in Manali, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "art_deco_building.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "art_deco_living.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "vintage_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "art_deco_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "downtown_view.jpg"
      }
    ],
    "price": 305,
    "location": "Manali",
    "country": "India",
    "property_types": ["Treehouse", "Studio"],
    "guests": 10,
    "bedrooms": 1,
    "beds": 3,
    "bathrooms": 2,
    "amenities": ["Pool", "Parking", "Air conditioning", "Heating", "TV", "Pet Friendly"]
  },
  {
    "title": "Romantic Treehouse",
    "description": "Romantic Treehouse located in Vancouver, perfect for a relaxing stay.",
    "image": [
      {
        "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "treehouse_exterior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "cozy_treehouse_interior.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "treehouse_bedroom.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "tree_canopy_kitchen.jpg"
      },
      {
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
        "filename": "treehouse_deck.jpg"
      }
    ],
    "price": 492,
    "location": "Vancouver",
    "country": "Canada",
    "property_types": ["Treehouse", "Studio"],
    "guests": 5,
    "bedrooms": 5,
    "beds": 5,
    "bathrooms": 3,
    "amenities": ["Washing Machine", "Kitchen", "Balcony", "Air conditioning"]
  }
  
]

module.exports = { data: sampleListings };