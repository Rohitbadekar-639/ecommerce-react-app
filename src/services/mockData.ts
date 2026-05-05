import type { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-quality wireless headphones with active noise cancellation and 30-hour battery life. Premium sound quality with deep bass and crystal-clear highs.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.5, count: 234 }
  },
  {
    id: 2,
    title: "Smart Watch Pro",
    price: 449.99,
    description: "Advanced fitness tracking, heart rate monitoring, GPS, and smartphone integration. Water-resistant design with 7-day battery life.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.3, count: 189 }
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Sustainable and comfortable organic cotton t-shirt. Available in multiple colors and sizes. Ethically made with premium materials.",
    category: "Fashion",
    image: "https://images.pexels.com/photos/7679718/pexels-photo-7679718.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.2, count: 567 }
  },
  {
    id: 4,
    title: "Professional Yoga Mat",
    price: 79.99,
    description: "Extra thick, non-slip yoga mat with alignment markers. Eco-friendly materials and carrying strap included.",
    category: "Sports",
    image: "https://images.pexels.com/photos/6454265/pexels-photo-6454265.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.7, count: 423 }
  },
  {
    id: 5,
    title: "Stainless Steel Water Bottle",
    price: 34.99,
    description: "Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof design.",
    category: "Sports",
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.4, count: 892 }
  },
  {
    id: 6,
    title: "Wireless Charging Pad",
    price: 49.99,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and overcharge protection.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.1, count: 156 }
  },
  {
    id: 7,
    title: "Denim Jacket Classic",
    price: 89.99,
    description: "Timeless denim jacket with modern fit. Premium denim fabric with antique brass hardware and multiple pockets.",
    category: "Fashion",
    image: "https://images.pexels.com/photos/7679718/pexels-photo-7679718.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.6, count: 234 }
  },
  {
    id: 8,
    title: "Running Shoes Pro",
    price: 129.99,
    description: "Professional running shoes with advanced cushioning technology. Breathable mesh upper and durable rubber outsole.",
    category: "Sports",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.5, count: 678 }
  },
  {
    id: 9,
    title: "Bluetooth Speaker",
    price: 79.99,
    description: "Portable bluetooth speaker with 360-degree sound. Waterproof design with 12-hour battery life and built-in microphone.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.3, count: 445 }
  },
  {
    id: 10,
    title: "Leather Wallet",
    price: 59.99,
    description: "Genuine leather bifold wallet with RFID blocking technology. Multiple card slots and bill compartments.",
    category: "Fashion",
    image: "https://images.pexels.com/photos/291862/pexels-photo-291862.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.4, count: 312 }
  },
  {
    id: 11,
    title: "Fitness Resistance Bands Set",
    price: 39.99,
    description: "Complete set of resistance bands with different resistance levels. Includes door anchor, ankle straps, and workout guide.",
    category: "Sports",
    image: "https://images.pexels.com/photos/6454265/pexels-photo-6454265.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.2, count: 223 }
  },
  {
    id: 12,
    title: "Laptop Stand Adjustable",
    price: 69.99,
    description: "Ergonomic laptop stand with adjustable height and angle. Aluminum construction with non-slip silicone pads.",
    category: "Electronics",
    image: "https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: { rate: 4.6, count: 189 }
  }
];

export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Sports"
];
