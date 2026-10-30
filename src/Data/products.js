
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Audio",
    price: 3500,
    oldPrice: 4500,
    rating: 4.8,
    stock: 20,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
    description: "Comfortable wireless headphones with rich sound and long battery life."
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    price: 4500,
    oldPrice: 5500,
    rating: 4.6,
    stock: 15,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
    description: "A stylish smartwatch for everyday activity and notifications."
  },
  {
    id: 3,
    name: "Gaming Mouse",
    category: "Accessories",
    price: 1800,
    oldPrice: 2200,
    rating: 4.5,
    stock: 30,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=700",
    description: "Responsive gaming mouse designed for precision and comfort."
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 2800,
    oldPrice: 3500,
    rating: 4.7,
    stock: 18,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700",
    description: "Portable Bluetooth speaker for music at home or outdoors."
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 4200,
    oldPrice: 5000,
    rating: 4.6,
    stock: 12,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700",
    description: "A comfortable mechanical keyboard for work and gaming."
  },
  {
    id: 6,
    name: "DSLR Camera",
    category: "Cameras",
    price: 65000,
    oldPrice: 72000,
    rating: 4.9,
    stock: 5,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700",
    description: "A digital camera for photography and creative projects."
  },
  {
    id: 7,
    name: "Laptop",
    category: "Computers",
    price: 85000,
    oldPrice: 95000,
    rating: 4.8,
    stock: 8,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700",
    description: "A versatile laptop for study, work and entertainment."
  },
  {
    id: 8,
    name: "Smartphone",
    category: "Mobiles",
    price: 35000,
    oldPrice: 40000,
    rating: 4.7,
    stock: 10,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700",
    description: "A modern smartphone for photography, communication and apps."
  },
  {
    id: 9,
    name: "USB-C Charger",
    category: "Accessories",
    price: 1200,
    oldPrice: 1500,
    rating: 4.4,
    stock: 40,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=700",
    description: "A compact USB-C charging accessory for compatible devices."
  },
  {
    id: 10,
    name: "Computer Monitor",
    category: "Computers",
    price: 22000,
    oldPrice: 26000,
    rating: 4.7,
    stock: 7,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700",
    description: "A large display suitable for productivity and entertainment."
  },
  {
    id: 11,
    name: "Power Bank",
    category: "Accessories",
    price: 2200,
    oldPrice: 2800,
    rating: 4.5,
    stock: 25,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=700",
    description: "Portable power for compatible devices while travelling."
  },
  {
    id: 12,
    name: "Earbuds",
    category: "Audio",
    price: 2500,
    oldPrice: 3200,
    rating: 4.6,
    stock: 22,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=700",
    description: "Compact wireless earbuds for music and everyday calls."
  },
  {
    id: 13,
    name: "Electric Oven",
    category: "Kitchen Appliances",
    price: 18000,
    oldPrice: 22000,
    rating: 4.6,
    stock: 10,
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=700",
    description: "Convenient electric oven for baking and cooking."
  },
    {
    id: 14,
    name: "Automatic Washing Machine",
    category: "Home Appliances",
    price: 55000,
    oldPrice: 62000,
    rating: 4.7,
    stock: 7,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=700",
    description: "Automatic washing machine for convenient laundry."
  },
  {
    id: 15,
    name: "Mixer Grinder",
    category: "Kitchen Appliances",
    price: 6500,
    oldPrice: 8000,
    rating: 4.5,
    stock: 15,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=700",
    description: "Powerful mixer grinder for everyday kitchen preparation."
  },
  {
  id: 16,
  name: "Air Fryer",
  category: "Kitchen Appliances",
  price: 12000,
  oldPrice: 15000,
  rating: 4.7,
  stock: 10,
  image: "/Images/airfryer.jpg",
  description: "Modern air fryer for convenient cooking with less oil."
},
  {
  id: 17,
  name: "Electric Rice Cooker",
  category: "Kitchen Appliances",
  price: 3500,
  oldPrice: 4500,
  rating: 4.5,
  stock: 20,
  image: "/Images/rice-cooker.jpg",
  description: "Easy-to-use rice cooker for everyday meals."
},
 {
  id: 18,
  name: "Electric Kettle",
  category: "Small Appliances",
  price: 1800,
  oldPrice: 2500,
  rating: 4.4,
  stock: 25,
  image: "/Images/kettle.jpg",
  description: "Compact electric kettle for quickly boiling water."
},
  {
    id: 19,
    name: "Pop-up Toaster",
    category: "Small Appliances",
    price: 2500,
    oldPrice: 3200,
    rating: 4.5,
    stock: 12,
    image: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?w=700",
    description: "Convenient toaster for preparing breakfast."
  }
];

export default products;
